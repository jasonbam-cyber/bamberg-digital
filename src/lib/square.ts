import { SquareClient, SquareEnvironment } from "square";

function getClient() {
  if (!process.env.SQUARE_ACCESS_TOKEN) {
    throw new Error("SQUARE_ACCESS_TOKEN is not set");
  }
  return new SquareClient({
    token: process.env.SQUARE_ACCESS_TOKEN,
    environment:
      process.env.SQUARE_ENVIRONMENT === "production"
        ? SquareEnvironment.Production
        : SquareEnvironment.Sandbox,
  });
}

// Lazy init via proxy — avoids build-time errors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const square = new Proxy({} as any, {
  get(_, prop) {
    const client = getClient();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const value = (client as any)[prop];
    if (typeof value === "function") {
      return value.bind(client);
    }
    return value;
  },
});

// Bamberg Digital pricing plans
export const PLANS = {
  starter: {
    name: "Starter",
    priceCents: 497_00,
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
    priceCents: 797_00,
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
    priceCents: 1297_00,
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
