"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const C = {
  bg: "#070F1B",
  ink: "#F5F1E8",
  ink2: "rgba(245,241,232,0.65)",
  ink3: "rgba(245,241,232,0.30)",
  brass: "#B5894E",
  hairline: "rgba(245,241,232,0.1)",
  surface: "rgba(245,241,232,0.04)",
  surfaceBorder: "rgba(245,241,232,0.08)",
  brassCardBg: "rgba(181,137,78,0.06)",
  brassCardBorder: "rgba(181,137,78,0.20)",
};

const agents = [
  {
    name: "Lead Qualifier Agent",
    description:
      "Responds to inbound web leads 24/7, asks qualifying questions, scores readiness, and routes hot leads to your calendar or CRM. Cold leads are nurtured automatically.",
    bestFor: "Contractors, dental, legal",
  },
  {
    name: "AI Receptionist",
    description:
      "Answers calls or web chats, collects contact info, answers FAQs, books appointments, and escalates urgent requests. Sounds like a real person. Works nights and weekends.",
    bestFor: "Dental, med spa, service businesses",
  },
  {
    name: "Review Responder",
    description:
      "Monitors Google and Yelp. Drafts and posts on-brand responses to every review within hours. Flags negative reviews for your personal attention. Builds social proof passively.",
    bestFor: "Any local business with review exposure",
  },
];

const process = [
  {
    step: "01",
    title: "Intake call",
    desc: "30 minutes. We understand your business, your current tools, and which agent type fits.",
  },
  {
    step: "02",
    title: "Agent configuration",
    desc: "We build and configure your agent against your brand voice, business rules, and data sources. No templates.",
  },
  {
    step: "03",
    title: "Integration and testing",
    desc: "We connect to your existing systems — CRM, website, phone, Google — and run a full test cycle before go-live.",
  },
  {
    step: "04",
    title: "Go-live",
    desc: "Your agent is live within 10 business days of intake. You get a dashboard link and a walkthrough call.",
  },
  {
    step: "05",
    title: "Monthly review",
    desc: "One strategy call per month. We review the dashboard together, tune the agent, and identify the next move.",
  },
];

const faqs = [
  {
    q: "Can I switch which agent I'm using?",
    a: "Yes. After the first 90 days you can swap agent type at no additional cost. One swap per 90-day period.",
  },
  {
    q: "What systems does the agent integrate with?",
    a: "GoHighLevel, HubSpot, Salesforce, Google Business Profile, Calendly, Acuity, and most major CRMs. Custom integrations available.",
  },
  {
    q: "Is this month-to-month?",
    a: "After the initial 90-day term, yes. No annual lock-in.",
  },
  {
    q: "What does the dashboard show?",
    a: "Leads qualified, conversations handled, response times, review counts, and any anomalies. White-label PDF report delivered monthly.",
  },
];

export default function ManagedAIStarterClient() {
  return (
    <main style={{ background: C.bg, color: C.ink, minHeight: "100vh" }}>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "75vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "140px 24px 80px",
          maxWidth: 1100,
          margin: "0 auto",
          position: "relative",
        }}
      >
        <Link
          href="/services"
          style={{
            fontFamily:
              "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
            fontSize: "0.75rem",
            color: C.ink3,
            textDecoration: "none",
            letterSpacing: "0.05em",
            marginBottom: 32,
            display: "inline-block",
          }}
        >
          ← All packages
        </Link>

        <p
          style={{
            fontFamily:
              "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: C.brass,
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          TIER 1 · RETAINER
        </p>

        <h1
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 800,
            fontStyle: "italic",
            lineHeight: 1.05,
            color: C.ink,
            marginBottom: 24,
            maxWidth: 700,
          }}
        >
          Managed AI <span style={{ color: C.brass }}>Starter</span>
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 8,
            marginBottom: 28,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "3.5rem",
              fontWeight: 800,
              fontStyle: "italic",
              color: C.brass,
              lineHeight: 1,
            }}
          >
            $997
          </span>
          <span
            style={{
              fontFamily:
                "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
              fontSize: "1rem",
              color: C.ink3,
            }}
          >
            /mo
          </span>
        </div>

        <p
          style={{
            fontFamily:
              "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: C.ink2,
            marginBottom: 16,
            maxWidth: 540,
            lineHeight: 1.6,
          }}
        >
          One AI agent, fully managed. You choose the type. We build, deploy,
          and maintain it. Monthly dashboard. Monthly call.
        </p>

        <p
          style={{
            fontFamily:
              "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
            fontSize: "0.8rem",
            color: C.ink3,
            marginBottom: 48,
          }}
        >
          Best for: dental practices, contractors, service businesses under $2M
        </p>

        <a
          href="#contact"
          onClick={() => track("starter_hero_cta")}
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
            alignSelf: "flex-start",
          }}
        >
          Start with Starter →
        </a>

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

      {/* ── What's included ──────────────────────────────────── */}
      <section
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
          WHAT'S INCLUDED
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            maxWidth: 800,
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "1.4rem",
                fontWeight: 700,
                fontStyle: "italic",
                color: C.ink,
                marginBottom: 24,
                lineHeight: 1.2,
              }}
            >
              Every Starter retainer includes:
            </h2>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {[
                "1 AI agent — your choice of type",
                "Full build, configuration, and integration",
                "Monthly white-label performance dashboard",
                "1 strategy call per month (30 min)",
                "Email support, 48-hour response SLA",
                "Agent tuning based on monthly review",
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
                  <span style={{ color: C.brass, flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "1.4rem",
                fontWeight: 700,
                fontStyle: "italic",
                color: C.ink,
                marginBottom: 24,
                lineHeight: 1.2,
              }}
            >
              Not included:
            </h2>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {[
                "SEO or content (see Growth tier)",
                "Multiple agents (see Growth or Atelier)",
                "Custom multi-system integrations beyond standard stack",
                "Paid ad management",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily:
                      "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                    fontSize: "0.875rem",
                    color: C.ink3,
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ color: C.ink3, flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Choose your agent ────────────────────────────────── */}
      <section
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
          CHOOSE YOUR AGENT
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {agents.map((agent) => (
            <div
              key={agent.name}
              style={{
                background: C.surface,
                border: `1px solid ${C.surfaceBorder}`,
                borderRadius: 8,
                padding: "32px 28px",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  fontStyle: "italic",
                  color: C.ink,
                  marginBottom: 12,
                  lineHeight: 1.2,
                }}
              >
                {agent.name}
              </h3>
              <p
                style={{
                  fontFamily:
                    "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                  fontSize: "0.875rem",
                  color: C.ink2,
                  lineHeight: 1.6,
                  marginBottom: 16,
                }}
              >
                {agent.description}
              </p>
              <p
                style={{
                  fontFamily:
                    "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                  fontSize: "0.7rem",
                  color: C.brass,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Best for: {agent.bestFor}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section
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
          HOW IT WORKS
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            maxWidth: 680,
          }}
        >
          {process.map((step, i) => (
            <div
              key={step.step}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: 24,
                paddingBottom: i < process.length - 1 ? 36 : 0,
                borderBottom:
                  i < process.length - 1 ? `1px solid ${C.hairline}` : "none",
                marginBottom: i < process.length - 1 ? 36 : 0,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "2rem",
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: C.brass,
                  opacity: 0.4,
                  lineHeight: 1,
                  paddingTop: 4,
                }}
              >
                {step.step}
              </p>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    fontStyle: "italic",
                    color: C.ink,
                    marginBottom: 8,
                  }}
                >
                  {step.title}
                </p>
                <p
                  style={{
                    fontFamily:
                      "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                    fontSize: "0.875rem",
                    color: C.ink2,
                    lineHeight: 1.6,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section
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
          QUESTIONS
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: 40,
            maxWidth: 900,
          }}
        >
          {faqs.map((faq) => (
            <div key={faq.q}>
              <p
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: C.ink,
                  marginBottom: 10,
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
      </section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <section
        id="contact"
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
            marginBottom: 24,
          }}
        >
          GET STARTED
        </p>
        <h2
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
            fontWeight: 700,
            fontStyle: "italic",
            color: C.ink,
            marginBottom: 40,
            maxWidth: 480,
            lineHeight: 1.2,
          }}
        >
          Tell us which agent you need.
        </h2>
        <div style={{ maxWidth: 560 }}>
          <style>{`
            #starter-form input,
            #starter-form select,
            #starter-form textarea {
              background: rgba(245,241,232,0.05) !important;
              border: 1px solid rgba(245,241,232,0.12) !important;
              color: #F5F1E8 !important;
            }
            #starter-form input::placeholder,
            #starter-form textarea::placeholder {
              color: rgba(245,241,232,0.3) !important;
            }
            #starter-form label { color: rgba(245,241,232,0.5) !important; }
            #starter-form select option { background: #0E1B2C; color: #F5F1E8; }
            #starter-form button[type="submit"] {
              background: #B5894E !important;
              color: #070F1B !important;
            }
            #starter-form button[type="submit"]:disabled {
              background: rgba(181,137,78,0.4) !important;
            }
            #starter-form p:last-child { color: rgba(245,241,232,0.3) !important; }
          `}</style>
          <div id="starter-form">
            <ContactForm
              ctaLabel="Apply for Starter →"
              source="managed-ai-starter"
              successMessage="Got it. You'll hear from Jason within one business day."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
