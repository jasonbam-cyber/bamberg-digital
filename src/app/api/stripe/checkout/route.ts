import { NextRequest, NextResponse } from "next/server";
import { stripe, PLANS, PlanKey } from "@/lib/stripe";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { plan, email, businessName } = await req.json();

    if (!plan || !PLANS[plan as PlanKey]) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const selectedPlan = PLANS[plan as PlanKey];
    const origin = req.headers.get("origin") || "https://bambergdigital.com";

    // Create or retrieve customer
    const customers = await stripe.customers.list({ email, limit: 1 });
    let customer: { id: string };

    if (customers.data.length > 0) {
      customer = customers.data[0];
    } else {
      customer = await stripe.customers.create({
        email,
        metadata: {
          business_name: businessName || "",
          plan,
          source: "bamberg-digital-website",
        },
      });
    }

    // Create checkout session — forces autopay setup
    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Bamberg Digital — ${selectedPlan.name} Plan`,
              description: selectedPlan.description,
            },
            unit_amount: selectedPlan.price,
            recurring: { interval: "month" },
          },
          quantity: 1,
        },
      ],
      subscription_data: {
        metadata: {
          plan,
          business_name: businessName || "",
        },
      },
      // Force autopay — card is saved and charged automatically
      payment_method_collection: "always",
      success_url: `${origin}/portal?session_id={CHECKOUT_SESSION_ID}&success=true`,
      cancel_url: `${origin}/#pricing`,
      metadata: {
        plan,
        business_name: businessName || "",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    console.error("Checkout error:", err);
    const message = err instanceof Error ? err.message : "Checkout failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
