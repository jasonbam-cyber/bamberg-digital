import { NextRequest, NextResponse } from "next/server";
import { square, PLANS, PlanKey } from "@/lib/square";
import crypto from "crypto";

export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Per-IP rate limit (in-memory; resets on cold start). Acts as bot/abuse guard
// in front of Square API calls — limits accidental spam to 5 attempts/min.
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
  return bucket.count > RATE_MAX;
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (rateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute." },
        { status: 429 },
      );
    }

    const body = await req.json();
    const plan = String(body?.plan ?? "");
    const email = String(body?.email ?? "")
      .trim()
      .toLowerCase();
    const businessName = body?.businessName
      ? String(body.businessName).trim().slice(0, 200)
      : undefined;

    if (!plan || !PLANS[plan as PlanKey]) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    if (!email || !EMAIL_RE.test(email) || /[\r\n]/.test(email)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 },
      );
    }

    const selectedPlan = PLANS[plan as PlanKey];
    const origin = req.headers.get("origin") || "https://bambergdigital.com";
    const locationId = process.env.SQUARE_LOCATION_ID;

    if (!locationId) {
      return NextResponse.json(
        { error: "Square not configured" },
        { status: 500 },
      );
    }

    // Create or find customer
    const searchResult = await square.customers.search({
      query: {
        filter: {
          emailAddress: { exact: email },
        },
      },
    });

    let customerId: string;

    if (searchResult.customers && searchResult.customers.length > 0) {
      customerId = searchResult.customers[0].id!;
    } else {
      const createResult = await square.customers.create({
        emailAddress: email,
        companyName: businessName || undefined,
        referenceId: `bd_${plan}`,
        note: `Bamberg Digital — ${selectedPlan.name} Plan`,
      });
      customerId = createResult.customer!.id!;
    }

    // Create a Square Payment Link
    const checkoutResult = await square.checkout.paymentLinks.create({
      idempotencyKey: crypto.randomUUID(),
      order: {
        locationId,
        customerId,
        lineItems: [
          {
            name: `Bamberg Digital — ${selectedPlan.name} Plan (Monthly)`,
            quantity: "1",
            basePriceMoney: {
              amount: BigInt(selectedPlan.priceCents),
              currency: "USD",
            },
            note: `${selectedPlan.description} | Auto-pay subscription | Customer: ${email}`,
          },
        ],
        metadata: {
          plan,
          business_name: businessName || "",
          email,
          subscription: "true",
        },
      },
      checkoutOptions: {
        redirectUrl: `${origin}/portal?success=true&plan=${plan}`,
        askForShippingAddress: false,
        acceptedPaymentMethods: {
          applePay: true,
          googlePay: true,
        },
      },
      prePopulatedData: {
        buyerEmail: email,
      },
    });

    const paymentLink = checkoutResult.paymentLink;

    if (!paymentLink?.url) {
      return NextResponse.json(
        { error: "Failed to create checkout" },
        { status: 500 },
      );
    }

    return NextResponse.json({ url: paymentLink.url });
  } catch (err: unknown) {
    console.error("Checkout error:", err);
    const message = err instanceof Error ? err.message : "Checkout failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
