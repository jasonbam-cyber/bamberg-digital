import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Square webhook handler — receives payment events
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const eventType = body.type;

    switch (eventType) {
      case "payment.completed": {
        const payment = body.data?.object?.payment;
        console.log(
          `✅ Payment received: $${payment?.amount_money?.amount ? (Number(payment.amount_money.amount) / 100).toFixed(2) : "?"} — Order: ${payment?.order_id}`
        );
        // Auto-synced to QBO via Square integration
        break;
      }

      case "invoice.payment_made": {
        const invoice = body.data?.object?.invoice;
        console.log(
          `💰 Invoice paid: ${invoice?.id} — ${invoice?.primary_recipient?.email_address}`
        );
        break;
      }

      case "subscription.created": {
        const subscription = body.data?.object?.subscription;
        console.log(
          `🎉 New subscription: ${subscription?.id} — ${subscription?.customer_id}`
        );
        // TODO: Send welcome email, provision services
        break;
      }

      case "subscription.updated": {
        const subscription = body.data?.object?.subscription;
        console.log(
          `🔄 Subscription updated: ${subscription?.id} — Status: ${subscription?.status}`
        );
        break;
      }

      case "invoice.payment_failed": {
        const invoice = body.data?.object?.invoice;
        console.error(
          `🚨 Payment FAILED: Invoice ${invoice?.id}`
        );
        // TODO: Notify Jason
        break;
      }

      default:
        console.log(`Square webhook: ${eventType}`);
    }

    return NextResponse.json({ received: true });
  } catch (err: unknown) {
    console.error("Webhook error:", err);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
