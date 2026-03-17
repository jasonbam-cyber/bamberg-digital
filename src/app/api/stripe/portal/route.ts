import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export const dynamic = "force-dynamic";

// Create a Stripe Customer Portal session (manage billing, update card, cancel)
export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const origin = req.headers.get("origin") || "https://bambergdigital.com";

    // Find customer by email
    const customers = await stripe.customers.list({ email, limit: 1 });
    if (customers.data.length === 0) {
      return NextResponse.json(
        { error: "No account found with this email. Please sign up first." },
        { status: 404 }
      );
    }

    const customer = customers.data[0];

    // Create portal session
    const session = await stripe.billingPortal.sessions.create({
      customer: customer.id,
      return_url: `${origin}/portal`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    console.error("Portal error:", err);
    const message = err instanceof Error ? err.message : "Portal error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
