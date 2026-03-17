import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export const dynamic = "force-dynamic";

// GET all active subscriptions (for Jason's admin dashboard)
export async function GET(req: NextRequest) {
  try {
    const adminKey = req.headers.get("x-admin-key");
    if (adminKey !== process.env.ADMIN_API_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const subscriptions = await stripe.subscriptions.list({
      status: "all",
      limit: 100,
      expand: ["data.customer", "data.items.data.price"],
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formatted = subscriptions.data.map((sub: any) => {
      const customer = sub.customer;
      const price = sub.items?.data?.[0]?.price;
      return {
        id: sub.id,
        status: sub.status,
        email: customer?.email || "unknown",
        businessName: sub.metadata?.business_name || customer?.metadata?.business_name || "",
        plan: sub.metadata?.plan || "unknown",
        amount: price?.unit_amount ? `$${(price.unit_amount / 100).toFixed(2)}/mo` : "unknown",
        created: new Date(sub.created * 1000).toISOString(),
        currentPeriodEnd: sub.current_period_end ? new Date(sub.current_period_end * 1000).toISOString() : null,
        cancelAtPeriodEnd: sub.cancel_at_period_end || false,
      };
    });

    const stats = {
      total: formatted.length,
      active: formatted.filter((s) => s.status === "active").length,
      pastDue: formatted.filter((s) => s.status === "past_due").length,
      canceled: formatted.filter((s) => s.status === "canceled").length,
      mrr: formatted
        .filter((s) => s.status === "active")
        .reduce((sum, s) => {
          const amt = parseFloat(s.amount.replace("$", "").replace("/mo", "")) || 0;
          return sum + amt;
        }, 0)
        .toFixed(2),
    };

    return NextResponse.json({ stats, subscriptions: formatted });
  } catch (err: unknown) {
    console.error("Subscriptions list error:", err);
    const message = err instanceof Error ? err.message : "Failed to fetch subscriptions";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
