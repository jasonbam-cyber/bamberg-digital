import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }

  // Honeypot check — bots fill this field, humans don't see it
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const businessName = String(body.businessName ?? "").trim();
  const message = String(body.message ?? "").trim();
  const service = String(body.service ?? "general").trim();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 422 },
    );
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 422 },
    );
  }

  // Forward to hello@bambergdigital.com via environment-configured provider.
  // Set CONTACT_WEBHOOK_URL in Vercel env to receive a JSON POST with the
  // submission, or wire a transactional email provider here (Resend, SendGrid).
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, businessName, message, service }),
      });
    } catch {
      // Log but don't surface webhook errors to the user
      console.error("[contact] webhook delivery failed");
    }
  }

  return NextResponse.json({ ok: true });
}
