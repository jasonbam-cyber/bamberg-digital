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

const capabilities = [
  {
    label: "Custom Multi-Agent Architecture",
    desc: "We design and build a bespoke agent stack — discovery, architecture, build, critic gate, deploy. Not templates. Not off-the-shelf. Purpose-built for your business logic.",
  },
  {
    label: "Full-Stack Digital Management",
    desc: "We own your entire digital surface: web, SEO, content, paid, automation, CRM. One team. One bill. Full accountability.",
  },
  {
    label: "Dedicated Strategy Sessions",
    desc: "Monthly 90-minute sessions with Jason directly. Quarterly board-level strategy reviews. We come with a prepared agenda and data, not a slide deck.",
  },
  {
    label: "Revenue-Share Option",
    desc: "For qualified engagements, we will reduce the monthly retainer in exchange for a defined percentage of attributable revenue growth. Aligns incentives completely.",
  },
  {
    label: "Direct Founder Access",
    desc: "You have Jason's direct line. Not an account manager. Not a project coordinator. The person who built the system.",
  },
  {
    label: "Custom Reporting",
    desc: "We build reporting dashboards specific to your KPIs — not generic analytics. Boards, executive teams, and investors have used BD Atelier reports in funding rounds.",
  },
];

const engagementTypes = [
  {
    type: "Growth-Stage Company",
    desc: "You have product-market fit and need to scale acquisition, retention, and ops — all at once. We build the infrastructure that lets you grow without adding headcount.",
  },
  {
    type: "Funded Company",
    desc: "You have capital and a short runway to demonstrate growth. We deploy fast, measure hard, and optimize in real time. Revenue-share available to align on outcomes.",
  },
  {
    type: "E-Commerce Above $5M",
    desc: "You need automation across email, SMS, ads, SEO, and ops. We build the full stack and manage it month over month.",
  },
  {
    type: "Vertical SaaS or Platform",
    desc: "You need custom agent tooling — intake bots, client-facing AI, internal automation. We build it and hand it off with a runbook.",
  },
];

const process = [
  {
    step: "01",
    title: "Intake and scoping",
    desc: "90-minute call with Jason. We map your current state, define success metrics, and determine whether Atelier or a different tier is the right fit.",
  },
  {
    step: "02",
    title: "Proposal and alignment",
    desc: "We deliver a written proposal within 5 business days — scope, deliverables, timeline, and investment. No surprises.",
  },
  {
    step: "03",
    title: "Architecture and build",
    desc: "6–10 week build phase for custom agent stacks. Shorter for full-stack management engagements. You review at each gate.",
  },
  {
    step: "04",
    title: "Deploy and operate",
    desc: "Everything live. Monitoring in place. We operate the stack and report weekly.",
  },
  {
    step: "05",
    title: "Quarterly reviews",
    desc: "Every 90 days we sit down — data in hand — and set the next quarter. We escalate, expand, or adjust based on what the numbers say.",
  },
];

const faqs = [
  {
    q: "How does revenue-share work?",
    a: "We agree on a baseline revenue figure and an attribution model upfront. BD takes a defined percentage of revenue growth above that baseline. The retainer drops proportionally. Specific terms are negotiated per engagement.",
  },
  {
    q: "What is the minimum commitment?",
    a: "Six months. Atelier engagements are not transactional — the value compounds over time.",
  },
  {
    q: "Is there a capacity limit?",
    a: "Yes. BD limits Atelier to a small number of concurrent accounts to protect the quality of every engagement. If capacity is full, we will tell you and offer a waitlist position.",
  },
  {
    q: "Do you work with companies outside Sacramento?",
    a: "Yes. Atelier clients are wherever the best work is. We operate fully remotely for non-local engagements.",
  },
];

export default function AtelierServiceClient() {
  return (
    <main style={{ background: C.bg, color: C.ink, minHeight: "100vh" }}>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "80vh",
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
          TIER 3 · RETAINER
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
          <span style={{ color: C.brass }}>Atelier</span>
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
            $5,000
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
          <span
            style={{
              fontFamily:
                "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
              fontSize: "0.8rem",
              color: C.brass,
              marginLeft: 8,
            }}
          >
            · revenue-share available
          </span>
        </div>

        <p
          style={{
            fontFamily:
              "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: C.ink2,
            marginBottom: 16,
            maxWidth: 580,
            lineHeight: 1.6,
          }}
        >
          Custom multi-agent builds. Full-stack digital management. Dedicated
          strategy. For companies that want a partner with skin in the game —
          not a vendor on a scope.
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
          Best for: growth-stage, funded companies, e-commerce above $5M
        </p>

        <a
          href="#contact"
          onClick={() => track("atelier_hero_cta")}
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
          Apply for Atelier →
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

      {/* ── Who this is for ──────────────────────────────────── */}
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
          WHO THIS IS FOR
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {engagementTypes.map((et) => (
            <div
              key={et.type}
              style={{
                background: C.brassCardBg,
                border: `1px solid ${C.brassCardBorder}`,
                borderRadius: 8,
                padding: "28px 24px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: C.ink,
                  marginBottom: 10,
                  lineHeight: 1.2,
                }}
              >
                {et.type}
              </p>
              <p
                style={{
                  fontFamily:
                    "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                  fontSize: "0.85rem",
                  color: C.ink2,
                  lineHeight: 1.6,
                }}
              >
                {et.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────────────── */}
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
          CAPABILITIES
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 40,
          }}
        >
          {capabilities.map((cap) => (
            <div key={cap.label}>
              <p
                style={{
                  fontFamily:
                    "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: C.brass,
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                {cap.label}
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
                {cap.desc}
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
          ENGAGEMENT PROCESS
        </p>

        <div
          style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}
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
          APPLY FOR ATELIER
        </p>
        <h2
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
            fontWeight: 700,
            fontStyle: "italic",
            color: C.ink,
            marginBottom: 16,
            maxWidth: 520,
            lineHeight: 1.2,
          }}
        >
          Tell me what you&apos;re building.
        </h2>
        <p
          style={{
            fontFamily:
              "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
            fontSize: "0.875rem",
            color: C.ink2,
            marginBottom: 40,
            maxWidth: 440,
            lineHeight: 1.6,
          }}
        >
          Atelier is limited to a small number of concurrent accounts. Intake is
          by application. Jason reviews every submission personally.
        </p>
        <div style={{ maxWidth: 560 }}>
          <style>{`
            #atelier-form input,
            #atelier-form select,
            #atelier-form textarea {
              background: rgba(245,241,232,0.05) !important;
              border: 1px solid rgba(245,241,232,0.12) !important;
              color: #F5F1E8 !important;
            }
            #atelier-form input::placeholder,
            #atelier-form textarea::placeholder {
              color: rgba(245,241,232,0.3) !important;
            }
            #atelier-form label { color: rgba(245,241,232,0.5) !important; }
            #atelier-form select option { background: #0E1B2C; color: #F5F1E8; }
            #atelier-form button[type="submit"] {
              background: #B5894E !important;
              color: #070F1B !important;
            }
            #atelier-form button[type="submit"]:disabled {
              background: rgba(181,137,78,0.4) !important;
            }
            #atelier-form p:last-child { color: rgba(245,241,232,0.3) !important; }
          `}</style>
          <div id="atelier-form">
            <ContactForm
              ctaLabel="Apply for Atelier →"
              source="atelier"
              successMessage="Application received. Jason reviews every submission personally. You'll hear back within 48 hours."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
