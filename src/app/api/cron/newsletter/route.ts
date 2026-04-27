import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import sgMail from "@sendgrid/mail";
import { CURRENT_NEWSLETTER } from "@/data/newsletter";

export const runtime = "nodejs";
export const maxDuration = 60;

type Subscriber = {
  email: string;
  first_name: string | null;
  unsubscribe_token: string;
};

export async function GET(req: NextRequest) {
  const auth = req.headers.get("authorization");
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supa = getSupabaseAdmin();

  const { data: subs, error } = await supa
    .from("bd_subscribers")
    .select("email, first_name, unsubscribe_token")
    .eq("status", "subscribed");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const subscribers = (subs || []) as Subscriber[];

  if (!subscribers.length) {
    return NextResponse.json({
      ok: true,
      sent: 0,
      message: "No subscribers",
    });
  }

  const { data: send } = await supa
    .from("bd_newsletter_sends")
    .insert({
      subject: CURRENT_NEWSLETTER.subject,
      preview_text: CURRENT_NEWSLETTER.preview,
      recipient_count: subscribers.length,
      status: "sending",
      triggered_by: "vercel-cron",
    })
    .select("id")
    .single();

  if (!process.env.SENDGRID_API_KEY) {
    return NextResponse.json(
      { error: "SENDGRID_API_KEY missing" },
      { status: 500 },
    );
  }
  if (!process.env.NEWSLETTER_FROM_EMAIL) {
    return NextResponse.json(
      { error: "NEWSLETTER_FROM_EMAIL missing" },
      { status: 500 },
    );
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.bambergdigital.com";
  const fromEmail = process.env.NEWSLETTER_FROM_EMAIL;
  const fromName = process.env.NEWSLETTER_FROM_NAME || "Bamberg Digital";

  let sent = 0;
  let failed = 0;

  for (let i = 0; i < subscribers.length; i += 50) {
    const batch = subscribers.slice(i, i + 50);
    const messages = batch.map((s) => {
      const unsubUrl = `${siteUrl}/unsubscribe?token=${s.unsubscribe_token}`;
      const html = renderNewsletterHTML(
        CURRENT_NEWSLETTER,
        s.first_name,
        unsubUrl,
      );
      return {
        to: s.email,
        from: { email: fromEmail, name: fromName },
        subject: CURRENT_NEWSLETTER.subject,
        html,
        text: `Read the latest at ${siteUrl}. Unsubscribe: ${unsubUrl}`,
        trackingSettings: { clickTracking: { enable: true } },
      };
    });
    try {
      await sgMail.send(messages);
      sent += batch.length;
    } catch (e) {
      console.error("batch failed", e);
      failed += batch.length;
    }
  }

  if (send?.id) {
    await supa
      .from("bd_newsletter_sends")
      .update({
        status: failed === subscribers.length ? "failed" : "sent",
        sent_count: sent,
        failed_count: failed,
        sent_at: new Date().toISOString(),
      })
      .eq("id", send.id);
  }

  await supa
    .from("bd_subscribers")
    .update({ last_emailed_at: new Date().toISOString() })
    .eq("status", "subscribed");

  return NextResponse.json({
    ok: true,
    sent,
    failed,
    recipients: subscribers.length,
  });
}

function renderNewsletterHTML(
  n: typeof CURRENT_NEWSLETTER,
  firstName: string | null | undefined,
  unsubUrl: string,
): string {
  const greeting = firstName ? `Hey ${firstName},` : "Hey,";
  const dateStr = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return `<!doctype html><html><body style="margin:0;padding:0;background:#0a0e16;color:#e8e6e1;font-family:-apple-system,Segoe UI,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0e16;padding:40px 20px;">
<tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0" style="background:#141822;border:1px solid rgba(255,255,255,0.08);">
<tr><td style="padding:30px 30px 10px;">
<h1 style="font-family:Georgia,serif;font-style:italic;font-size:28px;color:#fff;margin:0 0 4px;">Bamberg Digital</h1>
<p style="color:#a8a59e;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;margin:0 0 28px;">The Build Log &middot; ${dateStr}</p>
<p style="color:#e8e6e1;font-size:15px;line-height:1.6;margin:0 0 24px;">${greeting}</p>
<h2 style="color:#e8872b;font-size:14px;letter-spacing:0.16em;text-transform:uppercase;margin:24px 0 12px;">Shipped this week</h2>
<ul style="color:#e8e6e1;font-size:14px;line-height:1.6;padding-left:18px;margin:0 0 20px;">
${n.shipped.map((s) => `<li><a href="${s.url}" style="color:#4a9ece;text-decoration:none;">${s.title}</a></li>`).join("")}
</ul>
<h2 style="color:#e8872b;font-size:14px;letter-spacing:0.16em;text-transform:uppercase;margin:24px 0 12px;">In progress</h2>
<ul style="color:#e8e6e1;font-size:14px;line-height:1.6;padding-left:18px;margin:0 0 20px;">
${n.building.map((b) => `<li>${b}</li>`).join("")}
</ul>
<h2 style="color:#e8872b;font-size:14px;letter-spacing:0.16em;text-transform:uppercase;margin:24px 0 12px;">Open slots</h2>
<ul style="color:#e8e6e1;font-size:14px;line-height:1.6;padding-left:18px;margin:0 0 28px;">
${n.available.map((a) => `<li>${a}</li>`).join("")}
</ul>
<p style="color:#a8a59e;font-size:13px;line-height:1.6;margin:0 0 8px;">Reply if you want to chat. I read every email.</p>
<p style="color:#e8e6e1;font-size:13px;font-style:italic;margin:0 0 28px;">&mdash; Jason</p>
<hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:24px 0;">
<p style="color:#6a6760;font-size:11px;line-height:1.6;margin:0;">Bamberg Digital &middot; Sacramento, CA &middot; <a href="mailto:hello@bambergdigital.com" style="color:#6a6760;">hello@bambergdigital.com</a></p>
<p style="color:#6a6760;font-size:11px;line-height:1.6;margin:8px 0 0;">Don't want these? <a href="${unsubUrl}" style="color:#6a6760;text-decoration:underline;">Unsubscribe</a></p>
</td></tr></table>
</td></tr></table></body></html>`;
}
