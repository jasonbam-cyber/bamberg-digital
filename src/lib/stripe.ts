import Stripe from "stripe";

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2026-02-25.clover",
  });
}

// Lazy init — only created when actually called at runtime, not build time
export const stripe = new Proxy({} as Stripe, {
  get(_, prop) {
    const client = getStripe();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const value = (client as any)[prop];
    if (typeof value === "function") {
      return value.bind(client);
    }
    return value;
  },
});

// Bamberg Digital pricing plans (matches homepage)
export const PLANS = {
  starter: {
    name: "Starter",
    price: 497_00, // cents
    description: "Professional 5-page website + basic SEO",
    features: [
      "Professional 5-page website",
      "Mobile responsive design",
      "Google Business Profile setup",
      "Basic SEO optimization",
      "Monthly maintenance & updates",
      "SSL security certificate",
    ],
  },
  growth: {
    name: "Growth",
    price: 797_00,
    description: "Website + AI chatbot + automations",
    features: [
      "Everything in Starter, plus:",
      "AI chatbot (answers 24/7)",
      "Missed-call text-back system",
      "Automated review requests",
      "12 social media posts/month",
      "Google Maps optimization",
      "Monthly performance report",
      "Online booking / contact forms",
    ],
  },
  premium: {
    name: "Premium",
    price: 1297_00,
    description: "Full-service digital domination",
    features: [
      "Everything in Growth, plus:",
      "Email marketing campaigns",
      "Advanced automation workflows",
      "Reputation management",
      "Competitor monitoring",
      "Priority support (same-day)",
      "Quarterly strategy sessions",
      "Custom integrations",
    ],
  },
} as const;

export type PlanKey = keyof typeof PLANS;
