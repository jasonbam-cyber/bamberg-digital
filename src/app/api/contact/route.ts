import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildHtml(fields: Record<string, string>): string {
  const rows = Object.entries(fields)
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#1a1410;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:6px 12px;color:#4a3f33">${v}</td></tr>`,
    )
    .join("");
  return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;background:#f9f6f1;margin:0;padding:32px">
<div style="max-width:560px;margin:0 auto;background:#fff;border-radius:8px;padding:32px;border:1px solid #e5ded5">
<p style="font-size:1.1rem;font-weight:700;color:#1a1410;margin:0 0 20px">New BD lead via contact form</p>
<table style="border-collapse:collapse;width:100%">${rows}</table>
</div></body></html>`;
}

function buildText(fields: Record<string, string>): string {
  return Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
}

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

  // Honeypot — bots fill this field, humans don't see it
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const company = String(body.company ?? body.businessName ?? "").trim();
  const projectType = String(body.projectType ?? "").trim();
  const budget = String(body.budget ?? "").trim();
  const message = String(body.message ?? "").trim();
  const source = String(body.source ?? "contact").trim();

  if (name.length < 3) {
    return NextResponse.json(
      { error: "Name must be at least 3 characters" },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 },
    );
  }
  if (message.length < 10) {
    return NextResponse.json(
      { error: "Message must be at least 10 characters" },
      { status: 400 },
    );
  }

  const fields: Record<string, string> = {
    Name: name,
    Email: email,
    ...(company && { Company: company }),
    ...(projectType && { "Project type": projectType }),
    ...(budget && { Budget: budget }),
    Message: message,
    Source: source,
  };

  const subject = `New BD lead — ${name}${company ? ` (${company})` : ""}`;

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_APP_PASSWORD;

  if (smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: { user: smtpUser, pass: smtpPass },
      });
      await transporter.sendMail({
        from: `"Bamberg Digital Contact" <${smtpUser}>`,
        to: process.env.CONTACT_TO_EMAIL || "info@bambergdigital.com",
        replyTo: email,
        subject,
        text: buildText(fields),
        html: buildHtml(fields),
      });
      return NextResponse.json({ ok: true });
    } catch (err) {
      console.error("[contact] SMTP send failed:", err);
      return NextResponse.json(
        {
          ok: false,
          error: "Failed to send message. Please email us directly.",
        },
        { status: 500 },
      );
    }
  }

  // Fallback: webhook delivery (R1 path)
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
    } catch {
      console.error("[contact] webhook delivery failed");
    }
  }

  return NextResponse.json({ ok: true });
}
