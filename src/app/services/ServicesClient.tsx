"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";

const C = {
  bg: "#070F1B",
  ink: "#F5F1E8",
  ink2: "rgba(245,241,232,0.65)",
  ink3: "rgba(245,241,232,0.30)",
  brass: "#B5894E",
  brassLight: "#CCA96A",
  hairline: "rgba(245,241,232,0.1)",
  surface: "rgba(245,241,232,0.04)",
  surfaceBorder: "rgba(245,241,232,0.08)",
  brassCardBg: "rgba(181,137,78,0.06)",
  brassCardBorder: "rgba(181,137,78,0.20)",
};

const tiers = [
  {
    slug: "managed-ai-starter",
    label: "TIER 1",
    name: "Managed AI Starter",
    price: "$997",
    cycle: "/mo",
    tag: null,
    headline: "One agent. Real results. No overhead.",
    description:
      "Deploy a single AI agent — lead qualifier, AI receptionist, or review responder — with a monthly performance dashboard and a strategy call to back it up.",
    targets: "Dental practices, contractors, service businesses under $2M",
    includes: [
      "1 AI agent deployed (you choose: lead qualifier, receptionist, or review responder)",
      "Monthly white-label performance dashboard",
      "1 strategy call per month",
      "Onboarding and integration support",
      "Email support, 48-hour response",
    ],
    cta: "Start with Starter →",
  },
  {
    slug: "bamberg-ai-growth",
    label: "TIER 2",
    name: "Bamberg AI Growth",
    price: "$2,500",
    cycle: "/mo",
    tag: "MOST POPULAR",
    headline: "Full automation stack. SEO. Reporting. Growth.",
    description:
      "The full AI automation stack — lead capture, nurture sequences, CRM integration — plus four SEO articles a month, a live reporting dashboard, and weekly async check-ins.",
    targets: "Medical, real estate, e-commerce — $500K to $5M revenue",
    includes: [
      "Full AI automation stack (lead capture, nurture, CRM sync)",
      "4 SEO articles per month",
      "Live reporting dashboard",
      "Weekly async check-ins",
      "Priority email and Slack support",
      "Quarterly strategy review",
    ],
    cta: "Apply for Growth →",
  },
  {
    slug: "atelier",
    label: "TIER 3",
    name: "Atelier",
    price: "$5,000",
    cycle: "/mo",
    tag: null,
    headline: "Custom builds. Full-stack management. Revenue-share available.",
    description:
      "Custom multi-agent builds, full-stack digital management, and dedicated strategy sessions. For growth-stage companies that want a partner with skin in the game.",
    targets: "Growth-stage, funded companies, e-commerce above $5M",
    includes: [
      "Custom multi-agent architecture and build",
      "Full-stack digital management",
      "Dedicated monthly strategy sessions",
      "Revenue-share structure available",
      "Direct founder access",
      "Custom reporting and dashboards",
    ],
    cta: "Apply for Atelier →",
  },
];

const faqs = [
  {
    q: "Do I need to be technical to work with you?",
    a: "No. We handle the technical build, integration, and ongoing management. You review the dashboard and the results.",
  },
  {
    q: "How long before I see results?",
    a: "Starter clients typically see the AI agent live within 10 business days. Growth stack deployments run 3–4 weeks for full configuration. Atelier timelines depend on scope.",
  },
  {
    q: "What if I want to cancel?",
    a: "Starter and Growth are month-to-month after a 90-day initial term. Atelier is a 6-month minimum. No surprise fees.",
  },
  {
    q: "Is the AI Readiness Audit required before a retainer?",
    a: "Not required, but strongly recommended if you have an existing tech stack. The audit removes guesswork and typically accelerates retainer deployment by 2–3 weeks.",
  },
  {
    q: "What industries do you serve?",
    a: "Dental, medical, med spa, construction, law, real estate, and e-commerce. If you're a local service business in Sacramento or Roseville, we're built for you.",
  },
  {
    q: "Can I upgrade between tiers?",
    a: "Yes. Clients frequently start at Starter, validate results, and move to Growth within 90 days. Upgrades are prorated.",
  },
];

export default function ServicesClient() {
  return (
    <main style={{ background: C.bg, color: C.ink, minHeight: "100vh" }}>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "140px 24px 80px",
          maxWidth: 1100,
          margin: "0 auto",
          position: "relative",
        }}
      >
        <p
          style={{
            fontFamily:
              "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: C.brass,
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          BAMBERG DIGITAL · PRODUCTIZED SERVICES
        </p>

        <h1
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 800,
            fontStyle: "italic",
            lineHeight: 1.05,
            color: C.ink,
            marginBottom: 28,
            maxWidth: 760,
          }}
        >
          AI that runs your business,{" "}
          <span style={{ color: C.brass }}>not your afternoons.</span>
        </h1>

        <p
          style={{
            fontFamily:
              "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: C.ink2,
            marginBottom: 48,
            maxWidth: 560,
            lineHeight: 1.6,
          }}
        >
          Three retainer tiers for local service businesses ready to stop paying
          for marketing and start paying for outcomes. Sacramento-rooted.
          AI-native. Founder-operated.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a
            href="#tiers"
            onClick={() => track("services_cta_view_packages")}
            style={{
              display: "inline-block",
              background: C.brass,
              color: "#070F1B",
              fontFamily:
                "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "0.875rem",
              padding: "14px 28px",
              borderRadius: 4,
              textDecoration: "none",
              letterSpacing: "0.03em",
            }}
          >
            View packages →
          </a>
          <a
            href="#audit"
            onClick={() => track("services_cta_audit")}
            style={{
              display: "inline-block",
              background: "transparent",
              color: C.ink,
              fontFamily:
                "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
              fontWeight: 500,
              fontSize: "0.875rem",
              padding: "14px 28px",
              borderRadius: 4,
              textDecoration: "none",
              border: `1px solid ${C.surfaceBorder}`,
            }}
          >
            Start with the AI Audit →
          </a>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 0,
            width: 60,
            height: 1,
            background: C.brass,
            opacity: 0.4,
          }}
        />
      </section>

      {/* ── AI Readiness Audit — Featured Entry Product ─────── */}
      <section
        id="audit"
        style={{
          borderTop: `1px solid ${C.hairline}`,
          padding: "80px 24px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontFamily:
              "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: C.brass,
            textTransform: "uppercase",
            marginBottom: 48,
          }}
        >
          RECOMMENDED STARTING POINT
        </p>

        <div
          style={{
            background: C.brassCardBg,
            border: `1px solid ${C.brassCardBorder}`,
            borderRadius: 8,
            padding: "48px",
            maxWidth: 860,
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 48,
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                fontFamily:
                  "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: C.brass,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              One-Time Project
            </p>
            <h2
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 700,
                fontStyle: "italic",
                color: C.ink,
                marginBottom: 16,
                lineHeight: 1.2,
              }}
            >
              AI Readiness Audit
            </h2>
            <p
              style={{
                fontFamily:
                  "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                fontSize: "0.9rem",
                color: C.ink2,
                marginBottom: 32,
                lineHeight: 1.6,
                maxWidth: 520,
              }}
            >
              We assess your current tech stack, identify your top three
              automation opportunities, and deliver a 90-day AI roadmap. No
              jargon. No vendor lock-in. A clear plan you can act on — with us
              or without us.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 32px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {[
                "Assessment of your current tech stack and workflow",
                "Top 3 automation opportunities ranked by ROI",
                "90-day AI implementation roadmap",
                "Written deliverable + 60-minute review call",
                "Positions you for a retainer with no wasted setup time",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily:
                      "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                    fontSize: "0.875rem",
                    color: C.ink2,
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ color: C.brass, flexShrink: 0, marginTop: 2 }}>
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              onClick={() => track("services_audit_cta")}
              style={{
                display: "inline-block",
                background: C.brass,
                color: "#070F1B",
                fontFamily:
                  "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "0.875rem",
                padding: "14px 28px",
                borderRadius: 4,
                textDecoration: "none",
                letterSpacing: "0.03em",
              }}
            >
              Book the Audit →
            </a>
          </div>

          <div
            style={{
              textAlign: "right",
              flexShrink: 0,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "3rem",
                fontWeight: 800,
                fontStyle: "italic",
                color: C.brass,
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              $5,000
            </p>
            <p
              style={{
                fontFamily:
                  "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                fontSize: "0.75rem",
                color: C.ink3,
                letterSpacing: "0.05em",
              }}
            >
              One-time
            </p>
          </div>
        </div>
      </section>

      {/* ── Tier Cards ───────────────────────────────────────── */}
      <section
        id="tiers"
        style={{
          borderTop: `1px solid ${C.hairline}`,
          padding: "80px 24px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontFamily:
              "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: C.brass,
            textTransform: "uppercase",
            marginBottom: 48,
          }}
        >
          RETAINER PACKAGES
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {tiers.map((tier) => (
            <div
              key={tier.slug}
              style={{
                background: tier.tag ? C.brassCardBg : C.surface,
                border: `1px solid ${tier.tag ? C.brassCardBorder : C.surfaceBorder}`,
                borderRadius: 8,
                padding: "40px 36px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {tier.tag && (
                <div
                  style={{
                    position: "absolute",
                    top: -1,
                    left: 36,
                    background: C.brass,
                    color: "#070F1B",
                    fontFamily:
                      "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    padding: "4px 10px",
                    borderRadius: "0 0 4px 4px",
                  }}
                >
                  {tier.tag}
                </div>
              )}

              <p
                style={{
                  fontFamily:
                    "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  color: C.brass,
                  textTransform: "uppercase",
                  marginBottom: 16,
                  marginTop: tier.tag ? 16 : 0,
                }}
              >
                {tier.label}
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  fontStyle: "italic",
                  color: C.ink,
                  marginBottom: 8,
                  lineHeight: 1.2,
                }}
              >
                {tier.name}
              </h3>

              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 4,
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontSize: "2.2rem",
                    fontWeight: 800,
                    fontStyle: "italic",
                    color: C.brass,
                    lineHeight: 1,
                  }}
                >
                  {tier.price}
                </span>
                <span
                  style={{
                    fontFamily:
                      "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                    fontSize: "0.875rem",
                    color: C.ink3,
                  }}
                >
                  {tier.cycle}
                </span>
              </div>

              <p
                style={{
                  fontFamily:
                    "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                  fontSize: "0.875rem",
                  color: C.ink2,
                  marginBottom: 24,
                  lineHeight: 1.6,
                }}
              >
                {tier.description}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {tier.includes.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily:
                        "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                      fontSize: "0.8rem",
                      color: C.ink2,
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: C.brass, flexShrink: 0 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p
                style={{
                  fontFamily:
                    "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                  fontSize: "0.7rem",
                  color: C.ink3,
                  marginTop: 24,
                  marginBottom: 24,
                  letterSpacing: "0.02em",
                }}
              >
                Best for: {tier.targets}
              </p>

              <Link
                href={`/services/${tier.slug}`}
                onClick={() => track(`services_tier_cta_${tier.slug}`)}
                style={{
                  display: "inline-block",
                  background: tier.tag ? C.brass : "transparent",
                  color: tier.tag ? "#070F1B" : C.ink,
                  fontFamily:
                    "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                  fontWeight: tier.tag ? 700 : 500,
                  fontSize: "0.875rem",
                  padding: "12px 24px",
                  borderRadius: 4,
                  textDecoration: "none",
                  border: tier.tag ? "none" : `1px solid ${C.surfaceBorder}`,
                  textAlign: "center",
                  letterSpacing: "0.03em",
                }}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section
        id="faq"
        style={{
          borderTop: `1px solid ${C.hairline}`,
          padding: "80px 24px 120px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontFamily:
              "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: C.brass,
            textTransform: "uppercase",
            marginBottom: 48,
          }}
        >
          COMMON QUESTIONS
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))",
            gap: 40,
            maxWidth: 960,
          }}
        >
          {faqs.map((faq) => (
            <div key={faq.q}>
              <p
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: C.ink,
                  marginBottom: 12,
                  lineHeight: 1.3,
                }}
              >
                {faq.q}
              </p>
              <p
                style={{
                  fontFamily:
                    "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                  fontSize: "0.875rem",
                  color: C.ink2,
                  lineHeight: 1.65,
                }}
              >
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 72, maxWidth: 560 }}>
          <p
            style={{
              fontFamily:
                "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              color: C.brass,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            STILL HAVE QUESTIONS?
          </p>
          <p
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 700,
              fontStyle: "italic",
              color: C.ink,
              marginBottom: 24,
              lineHeight: 1.2,
            }}
          >
            Talk to Jason directly.
          </p>
          <a
            href="/contact"
            onClick={() => track("services_faq_cta_contact")}
            style={{
              display: "inline-block",
              background: C.brass,
              color: "#070F1B",
              fontFamily:
                "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "0.875rem",
              padding: "14px 28px",
              borderRadius: 4,
              textDecoration: "none",
              letterSpacing: "0.03em",
            }}
          >
            Get in touch →
          </a>
        </div>
      </section>
    </main>
  );
}
