"use client";

import { track } from "@vercel/analytics";
import ContactForm from "@/components/ContactForm";

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
  brassCardBorder: "rgba(181,137,78,0.15)",
};

const pricingRows = [
  {
    tier: "Audit",
    price: "$5K–$8K",
    cycle: "2 weeks, one-time",
    scope:
      "Map your existing AI usage. Score eval coverage. Recommend stack architecture. Written audit + 90-day plan.",
  },
  {
    tier: "Stack Build",
    price: "$25K–$60K",
    cycle: "6–10 weeks, one-time",
    scope:
      "Custom 3–8 agent stack. Eval harness. Monitoring. Critic gate. Integrated with your tooling. Runbook + handoff.",
  },
  {
    tier: "Managed",
    price: "$4K–$12K/mo",
    cycle: "6-month minimum",
    scope:
      "We operate the stack. Weekly eval reviews. Prompt drift remediation. Incident response. Monthly report. Cap: 4 retained accounts.",
  },
  {
    tier: "Custom",
    price: "$60K+",
    cycle: "Quote on intake",
    scope: "Multi-system builds. Vertical agent products. Compliance work.",
  },
];

const statRow = [
  { value: "11", label: "agents in production" },
  { value: "3", label: "skill canons locked" },
  { value: "2026-04-30", label: "smoke-test passed" },
  { value: "100%", label: "of BD deliverables through critic gate" },
];

export default function AgenticAIClient() {
  return (
    <main style={{ background: C.bg, color: C.ink, minHeight: "100vh" }}>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "120px 24px 80px",
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
          BAMBERG DIGITAL · AGENTIC AI MANAGEMENT
        </p>

        <h1
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "clamp(2.8rem, 7vw, 6rem)",
            fontWeight: 800,
            fontStyle: "italic",
            lineHeight: 1.05,
            color: C.ink,
            marginBottom: 28,
            maxWidth: 700,
            textWrap: "balance",
          }}
        >
          Agents that <span style={{ color: C.brass }}>actually ship.</span>
        </h1>

        <p
          style={{
            fontFamily:
              "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
            fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
            color: C.ink2,
            marginBottom: 16,
            maxWidth: 560,
            lineHeight: 1.55,
          }}
        >
          From agent strategy to running stack. Operational AI for teams that
          have already burned money on consulting decks.
        </p>

        <p
          style={{
            fontFamily:
              "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
            fontSize: "0.85rem",
            color: C.brass,
            marginBottom: 48,
            letterSpacing: "0.02em",
          }}
        >
          Audit. Build. Operate. Capacity-capped. Cash-protected.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a
            href="#contact"
            onClick={() => track("agentic_ai_cta_primary")}
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
              transition: "background 0.2s",
            }}
          >
            Start with an audit →
          </a>
          <a
            href="#proof"
            onClick={() => track("agentic_ai_cta_secondary")}
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
              transition: "border-color 0.2s",
            }}
          >
            See the proof →
          </a>
        </div>

        {/* Decorative rule */}
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

      {/* ── Proof rail ───────────────────────────────────────── */}
      <section
        id="proof"
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
          THE STACK
        </p>

        {/* Single card */}
        <div
          style={{
            background: C.surface,
            border: `1px solid ${C.surfaceBorder}`,
            borderRadius: 8,
            padding: "40px 48px",
            maxWidth: 880,
          }}
        >
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
            Internal · Production · Agent Stack
          </p>

          <h2
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "1.75rem",
              fontWeight: 700,
              fontStyle: "italic",
              color: C.ink,
              marginBottom: 8,
              lineHeight: 1.2,
            }}
          >
            The Bamberg Digital Agent Stack
          </h2>

          <p
            style={{
              fontFamily:
                "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
              fontSize: "0.875rem",
              color: C.ink2,
              marginBottom: 32,
              lineHeight: 1.5,
            }}
          >
            11 production agents. Locked canon. Ships real client work.
          </p>

          {/* Stat row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 24,
              marginBottom: 32,
              padding: "24px 0",
              borderTop: `1px solid ${C.hairline}`,
              borderBottom: `1px solid ${C.hairline}`,
            }}
          >
            {statRow.map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    fontStyle: "italic",
                    color: C.brass,
                    marginBottom: 4,
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontFamily:
                      "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                    fontSize: "0.75rem",
                    color: C.ink2,
                    lineHeight: 1.4,
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily:
                "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
              fontSize: "0.875rem",
              color: C.ink2,
              lineHeight: 1.6,
              marginBottom: 16,
              maxWidth: 640,
            }}
          >
            BD does not sell AI consulting. BD sells operational agent stacks.
            The same stack we use to ship every BD client deliverable is the
            stack we will build for you.
          </p>

          <p
            style={{
              fontFamily:
                "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
              fontSize: "0.875rem",
              color: C.ink2,
              lineHeight: 1.6,
              marginBottom: 28,
              maxWidth: 640,
            }}
          >
            Discovery. Architecture. Build. Critic gate. Deploy. Operate. Each
            phase has a named agent and a locked rubric. No prompts in
            spreadsheets. No hand-waving.
          </p>

          <a
            href="/work/layer-ui"
            style={{
              fontFamily:
                "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
              fontSize: "0.8rem",
              color: C.brass,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Read the launch case study →
          </a>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────── */}
      <section
        id="pricing"
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
          INVESTMENT
        </p>

        <p
          style={{
            fontFamily:
              "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
            fontSize: "0.875rem",
            color: C.ink2,
            marginBottom: 32,
            lineHeight: 1.5,
          }}
        >
          Capacity-capped. Honest pricing. Six-month Managed minimum.
        </p>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              maxWidth: 760,
              borderCollapse: "collapse",
              fontFamily:
                "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
            }}
          >
            <thead>
              <tr>
                {["Tier", "Price", "Cycle", "Scope"].map((h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: "left",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: C.brass,
                      padding: "0 16px 16px 0",
                      borderBottom: `1px solid ${C.hairline}`,
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pricingRows.map((row, i) => (
                <tr key={i}>
                  <td
                    style={{
                      padding: "20px 16px 20px 0",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: C.ink,
                      borderBottom: `1px solid ${C.hairline}`,
                      whiteSpace: "nowrap",
                      verticalAlign: "top",
                    }}
                  >
                    {row.tier}
                  </td>
                  <td
                    style={{
                      padding: "20px 16px 20px 0",
                      fontSize: "0.875rem",
                      color: C.brass,
                      borderBottom: `1px solid ${C.hairline}`,
                      whiteSpace: "nowrap",
                      fontWeight: 500,
                      verticalAlign: "top",
                    }}
                  >
                    {row.price}
                  </td>
                  <td
                    style={{
                      padding: "20px 16px 20px 0",
                      fontSize: "0.875rem",
                      color: C.ink2,
                      borderBottom: `1px solid ${C.hairline}`,
                      whiteSpace: "nowrap",
                      verticalAlign: "top",
                    }}
                  >
                    {row.cycle}
                  </td>
                  <td
                    style={{
                      padding: "20px 0",
                      fontSize: "0.875rem",
                      color: C.ink2,
                      borderBottom: `1px solid ${C.hairline}`,
                      lineHeight: 1.5,
                      verticalAlign: "top",
                    }}
                  >
                    {row.scope}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Contact form ─────────────────────────────────────── */}
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
          START WITH AN AUDIT
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
          Tell me what you&apos;ve already tried.
        </h2>

        <div style={{ maxWidth: 560 }}>
          <style>{`
            #agentic-ai-form input,
            #agentic-ai-form select,
            #agentic-ai-form textarea {
              background: rgba(245,241,232,0.05) !important;
              border: 1px solid rgba(245,241,232,0.12) !important;
              color: #F5F1E8 !important;
            }
            #agentic-ai-form input::placeholder,
            #agentic-ai-form textarea::placeholder {
              color: rgba(245,241,232,0.3) !important;
            }
            #agentic-ai-form label {
              color: rgba(245,241,232,0.5) !important;
            }
            #agentic-ai-form select option {
              background: #0E1B2C;
              color: #F5F1E8;
            }
            #agentic-ai-form button[type="submit"] {
              background: #B5894E !important;
              color: #070F1B !important;
            }
            #agentic-ai-form button[type="submit"]:disabled {
              background: rgba(181,137,78,0.4) !important;
            }
            #agentic-ai-form p:last-child {
              color: rgba(245,241,232,0.3) !important;
            }
          `}</style>
          <div id="agentic-ai-form">
            <ContactForm
              ctaLabel="Send enquiry →"
              source="agentic-ai"
              successMessage="Got it. Reply within one business day, signed by Jason."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
