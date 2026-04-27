import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import sgMail from "@sendgrid/mail";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Per-IP rate limit (rudimentary, in-memory; resets on cold start).
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 5;
const ipBuckets = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const bucket = ipBuckets.get(ip);
  if (!bucket || bucket.resetAt < now) {
    ipBuckets.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  bucket.count += 1;
  if (bucket.count > RATE_MAX) return true;
  return false;
}

function getIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: NextRequest) {
  const ip = getIp(req);
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const email = String(body?.email ?? "")
    .trim()
    .toLowerCase();
  const source = String(body?.source ?? "website");
  const first_name = body?.first_name ? String(body.first_name) : null;
  const company = body?.company ? String(body.company) : null;

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const supa = getSupabaseAdmin();
  const { data, error } = await supa
    .from("bd_subscribers")
    .upsert(
      {
        email,
        source,
        first_name,
        company,
        status: "subscribed",
        consent: true,
        unsubscribed_at: null,
      },
      { onConflict: "email" },
    )
    .select("id, unsubscribe_token, status")
    .single();

  if (error || !data) {
    return NextResponse.json(
      { error: error?.message || "Database error" },
      { status: 500 },
    );
  }

  // Best-effort welcome email; do not block on failure.
  try {
    if (process.env.SENDGRID_API_KEY) {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const siteUrl =
        process.env.NEXT_PUBLIC_SITE_URL || "https://www.bambergdigital.com";
      const unsubUrl = `${siteUrl}/unsubscribe?token=${data.unsubscribe_token}`;
      const fromEmail = process.env.NEWSLETTER_FROM_EMAIL;
      if (fromEmail) {
        await sgMail.send({
          to: email,
          from: {
            email: fromEmail,
            name: process.env.NEWSLETTER_FROM_NAME || "Bamberg Digital",
          },
          subject: "You're on the list",
          html: `<p>Welcome aboard. You'll get a weekly digest of what we're shipping at Bamberg Digital &mdash; projects, lessons, opportunities.</p>
          <p>If you ever change your mind, unsubscribe with one click: <a href="${unsubUrl}">${unsubUrl}</a></p>
          <p>&mdash; Jason<br/>Bamberg Digital &middot; Sacramento, CA</p>`,
          text: `Welcome aboard. Unsubscribe: ${unsubUrl}`,
          mailSettings: { sandboxMode: { enable: false } },
        });
      }
    }
  } catch (e) {
    console.error("SendGrid welcome failed:", e);
  }

  return NextResponse.json({ ok: true });
}
