import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const dynamic = "force-dynamic";

function verifySquareSignature(
  rawBody: string,
  signature: string,
  sigKey: string,
  webhookUrl: string,
): boolean {
  const hmac = crypto.createHmac("sha256", sigKey);
  hmac.update(webhookUrl + rawBody);
  const expected = hmac.digest("base64");
  try {
    return crypto.timingSafeEqual(
      Buffer.from(expected),
      Buffer.from(signature),
    );
  } catch {
    return false;
  }
}

// Square webhook handler — receives payment events
export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-square-hmacsha256-signature") ?? "";
    const sigKey = process.env.SQUARE_WEBHOOK_SIGNATURE_KEY ?? "";
    const webhookUrl = process.env.SQUARE_WEBHOOK_URL ?? "";

    if (
      !sigKey ||
      !verifySquareSignature(rawBody, signature, sigKey, webhookUrl)
    ) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const body = JSON.parse(rawBody);
    const eventType = body.type;

    switch (eventType) {
      case "payment.completed": {
        const payment = body.data?.object?.payment;
        console.log(
          `✅ Payment received: $${payment?.amount_money?.amount ? (Number(payment.amount_money.amount) / 100).toFixed(2) : "?"} — Order: ${payment?.order_id}`,
        );
        // Auto-synced to QBO via Square integration
        break;
      }

      case "invoice.payment_made": {
        const invoice = body.data?.object?.invoice;
        console.log(
          `💰 Invoice paid: ${invoice?.id} — ${invoice?.primary_recipient?.email_address}`,
        );
        break;
      }

      case "subscription.created": {
        const subscription = body.data?.object?.subscription;
        console.log(
          JSON.stringify({
            event: "subscription.created",
            customerId: subscription?.customer_id,
            subscriptionId: subscription?.id,
            status: subscription?.status,
          }),
        );
        // Stub: alert on new subscriber; full welcome email/provisioning TBD
        try {
          const slackUrl = process.env.SLACK_WEBHOOK_URL;
          if (slackUrl) {
            await fetch(slackUrl, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                text: `🎉 *New subscriber!* Customer ID: \`${subscription?.customer_id}\` | Subscription ID: \`${subscription?.id}\``,
              }),
            });
          }
        } catch (slackErr) {
          console.error("Slack alert failed (subscription.created):", slackErr);
        }
        break;
      }

      case "subscription.updated": {
        const subscription = body.data?.object?.subscription;
        console.log(
          `🔄 Subscription updated: ${subscription?.id} — Status: ${subscription?.status}`,
        );
        break;
      }

      case "invoice.payment_failed": {
        const invoice = body.data?.object?.invoice;
        const customerEmail =
          invoice?.primary_recipient?.email_address ?? "unknown";
        const amountDue =
          invoice?.payment_requests?.[0]?.computed_amount_money?.amount;
        const amountFormatted = amountDue
          ? `$${(Number(amountDue) / 100).toFixed(2)}`
          : "unknown amount";
        console.error(
          `🚨 Payment FAILED: Invoice ${invoice?.id} — ${customerEmail} — ${amountFormatted}`,
        );
        try {
          const slackUrl = process.env.SLACK_WEBHOOK_URL;
          if (slackUrl) {
            await fetch(slackUrl, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                text: `🚨 *Payment failed!* Customer: \`${customerEmail}\` | Amount: ${amountFormatted} | Invoice ID: \`${invoice?.id}\``,
              }),
            });
          }
        } catch (slackErr) {
          console.error(
            "Slack alert failed (invoice.payment_failed):",
            slackErr,
          );
        }
        break;
      }

      default:
        console.log(`Square webhook: ${eventType}`);
    }

    return NextResponse.json({ received: true });
  } catch (err: unknown) {
    console.error("Webhook error:", err);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 },
    );
  }
}
