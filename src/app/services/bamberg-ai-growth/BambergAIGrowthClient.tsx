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

const stackItems = [
  {
    label: "AI Automation Stack",
    desc: "Lead capture forms, multi-step nurture sequences, CRM sync, and automated follow-up. Covers the full top-of-funnel to booked appointment.",
  },
  {
    label: "SEO + Content",
    desc: "4 optimized articles per month targeting local and industry search intent. Written by BD, reviewed by you, published on your site.",
  },
  {
    label: "Live Reporting Dashboard",
    desc: "Real-time view of leads, traffic, rankings, and automation performance. Shared access — you see exactly what we see.",
  },
  {
    label: "Weekly Async Check-Ins",
    desc: "A written update every week. What moved, what didn't, what we're tuning. No pointless calls unless you want one.",
  },
  {
    label: "CRM Integration",
    desc: "We connect your automation stack to your CRM — GoHighLevel, HubSpot, or Salesforce. Leads flow in without manual data entry.",
  },
  {
    label: "Quarterly Strategy Review",
    desc: "Every 90 days we review the full stack together, set goals for the next quarter, and identify expansion opportunities.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery and audit",
    desc: "We map your existing funnel, identify the highest-ROI automation points, and establish baseline metrics. Takes 5 business days.",
  },
  {
    step: "02",
    title: "Stack architecture",
    desc: "We design your full automation architecture before writing a single line of code. You approve the blueprint.",
  },
  {
    step: "03",
    title: "Build and integrate",
    desc: "3–4 weeks to full build. Lead capture, nurture sequences, CRM sync, SEO infrastructure, and dashboard.",
  },
  {
    step: "04",
    title: "Go-live and calibrate",
    desc: "We run a two-week calibration period after launch — monitoring every touchpoint and tuning based on real data.",
  },
  {
    step: "05",
    title: "Ongoing management",
    desc: "Weekly async updates. Monthly content published. Dashboard always live. Quarterly strategy review every 90 days.",
  },
];

const faqs = [
  {
    q: "What CRMs do you support?",
    a: "GoHighLevel (preferred), HubSpot, Salesforce, and Pipedrive. If you're using something else, ask us — chances are we can integrate it.",
  },
  {
    q: "Who writes the SEO articles?",
    a: "BD writes them — AI-assisted, human-reviewed, brand-voice-matched. You approve before publish. Turnaround is 5 business days per article.",
  },
  {
    q: "How quickly will I see SEO results?",
    a: "Search rankings typically move in 60–90 days. Lead automation results are typically visible within the first 30 days.",
  },
  {
    q: "What's the minimum commitment?",
    a: "90-day initial term. Month-to-month after that.",
  },
  {
    q: "Can I upgrade to Atelier later?",
    a: "Yes. Growth clients who want custom multi-agent builds or revenue-share arrangements move to Atelier. We prorate the upgrade.",
  },
];

export default function BambergAIGrowthClient() {
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

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 20,
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
              margin: 0,
            }}
          >
            TIER 2 · RETAINER
          </p>
          <span
            style={{
              background: C.brass,
              color: "#070F1B",
              fontFamily:
                "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
              fontSize: "0.6rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              padding: "3px 10px",
              borderRadius: 4,
            }}
          >
            MOST POPULAR
          </span>
        </div>

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
          Bamberg AI <span style={{ color: C.brass }}>Growth</span>
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
            $2,500
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
            maxWidth: 560,
            lineHeight: 1.6,
          }}
        >
          Full automation stack, SEO content, live reporting, and weekly
          check-ins. For businesses ready to systematize their entire digital
          growth engine.
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
          Best for: medical, real estate, e-commerce — $500K to $5M revenue
        </p>

        <a
          href="#contact"
          onClick={() => track("growth_hero_cta")}
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
          Apply for Growth →
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

      {/* ── Stack breakdown ──────────────────────────────────── */}
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
          WHAT'S IN THE STACK
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 1,
            border: `1px solid ${C.hairline}`,
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          {stackItems.map((item, i) => (
            <div
              key={item.label}
              style={{
                padding: "36px 32px",
                background: i % 2 === 0 ? C.surface : "transparent",
                borderRight: `1px solid ${C.hairline}`,
                borderBottom: `1px solid ${C.hairline}`,
              }}
            >
              <p
                style={{
                  fontFamily:
                    "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: C.brass,
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                {item.label}
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
                {item.desc}
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
          APPLY
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
          Tell us where your funnel breaks.
        </h2>
        <div style={{ maxWidth: 560 }}>
          <style>{`
            #growth-form input,
            #growth-form select,
            #growth-form textarea {
              background: rgba(245,241,232,0.05) !important;
              border: 1px solid rgba(245,241,232,0.12) !important;
              color: #F5F1E8 !important;
            }
            #growth-form input::placeholder,
            #growth-form textarea::placeholder {
              color: rgba(245,241,232,0.3) !important;
            }
            #growth-form label { color: rgba(245,241,232,0.5) !important; }
            #growth-form select option { background: #0E1B2C; color: #F5F1E8; }
            #growth-form button[type="submit"] {
              background: #B5894E !important;
              color: #070F1B !important;
            }
            #growth-form button[type="submit"]:disabled {
              background: rgba(181,137,78,0.4) !important;
            }
            #growth-form p:last-child { color: rgba(245,241,232,0.3) !important; }
          `}</style>
          <div id="growth-form">
            <ContactForm
              ctaLabel="Apply for Growth →"
              source="bamberg-ai-growth"
              successMessage="Got it. You'll hear from Jason within one business day."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
