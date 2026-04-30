"use client";

import { track } from "@vercel/analytics";
import ContactForm from "@/components/ContactForm";

const C = {
  bg: "#0d0d0f",
  ink: "#f0ede8",
  ink2: "rgba(240,237,232,0.65)",
  brass: "#c8a96e",
  brassLight: "#e0c78a",
  hairline: "rgba(240,237,232,0.1)",
  surface: "rgba(240,237,232,0.04)",
  surfaceBorder: "rgba(240,237,232,0.08)",
};

export default function AtelierClient() {
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
          BAMBERG DIGITAL · ATELIER
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
          AI velocity. <span style={{ color: C.brass }}>Human signature.</span>
        </h1>

        <p
          style={{
            fontFamily:
              "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
            fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
            color: C.ink2,
            marginBottom: 16,
            maxWidth: 520,
            lineHeight: 1.55,
          }}
        >
          Custom solutions for founders who refuse the template.
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
          One client per quarter. $10K–$25K. Custom only.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a
            href="#contact"
            onClick={() => track("atelier_cta_primary")}
            style={{
              display: "inline-block",
              background: C.brass,
              color: "#0d0d0f",
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
            Start a project →
          </a>
          <a
            href="#work"
            onClick={() => track("atelier_cta_secondary")}
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
            See the work →
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

      {/* ── Work rail ────────────────────────────────────────── */}
      <section
        id="work"
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
          SELECTED WORK
        </p>

        {/* Layer UI card */}
        <a
          href="/work/layer-ui"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
            background: C.surface,
            border: `1px solid ${C.surfaceBorder}`,
            borderRadius: 8,
            padding: "40px 48px",
            textDecoration: "none",
            color: "inherit",
            transition: "border-color 0.2s",
            maxWidth: 880,
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
              Web Design · Full-Stack · AI · Stripe
            </p>
            <h2
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "1.75rem",
                fontWeight: 700,
                fontStyle: "italic",
                color: C.ink,
                marginBottom: 12,
                lineHeight: 1.2,
              }}
            >
              Layer UI
            </h2>
            <p
              style={{
                fontFamily:
                  "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                fontSize: "0.875rem",
                color: C.ink2,
                lineHeight: 1.6,
                marginBottom: 24,
              }}
            >
              Multi-tenant work OS. One codebase, unlimited client workspaces.
              $40 MRR live on Stripe within weeks of launch.
            </p>
            <span
              style={{
                fontFamily:
                  "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                fontSize: "0.8rem",
                color: C.brass,
                fontWeight: 600,
              }}
            >
              Read the case study →
            </span>
          </div>
          <div
            style={{
              background: "rgba(200,169,110,0.06)",
              borderRadius: 4,
              border: `1px solid rgba(200,169,110,0.15)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 140,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "3rem",
                fontWeight: 700,
                color: C.brass,
                opacity: 0.4,
                fontStyle: "italic",
              }}
            >
              LUI
            </span>
          </div>
        </a>

        <p
          style={{
            fontFamily:
              "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
            fontSize: "0.8rem",
            color: "rgba(240,237,232,0.3)",
            marginTop: 24,
          }}
        >
          More case studies in production.
        </p>
      </section>

      {/* ── Pricing ──────────────────────────────────────────── */}
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
          INVESTMENT
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
                {["Tier", "Range", "Scope"].map((h) => (
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
              {[
                {
                  tier: "Scoped build",
                  range: "~$10K–$15K",
                  scope: "Custom multi-page site, CMS-backed, ~3–4 weeks",
                },
                {
                  tier: "Signature build",
                  range: "~$15K–$25K",
                  scope:
                    "Custom site + one signature interaction, 30-day post-launch iteration window",
                },
                {
                  tier: "Custom-quote",
                  range: "$25K+",
                  scope: "Multi-system / app + marketing combo",
                },
              ].map((row, i) => (
                <tr key={i}>
                  <td
                    style={{
                      padding: "20px 16px 20px 0",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: C.ink,
                      borderBottom: `1px solid ${C.hairline}`,
                      whiteSpace: "nowrap",
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
                    }}
                  >
                    {row.range}
                  </td>
                  <td
                    style={{
                      padding: "20px 0",
                      fontSize: "0.875rem",
                      color: C.ink2,
                      borderBottom: `1px solid ${C.hairline}`,
                      lineHeight: 1.5,
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
          START A PROJECT
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
          Tell me what you&apos;re building.
        </h2>

        <div style={{ maxWidth: 560 }}>
          <style>{`
            #atelier-form input,
            #atelier-form select,
            #atelier-form textarea {
              background: rgba(240,237,232,0.05) !important;
              border: 1px solid rgba(240,237,232,0.12) !important;
              color: #f0ede8 !important;
            }
            #atelier-form input::placeholder,
            #atelier-form textarea::placeholder {
              color: rgba(240,237,232,0.3) !important;
            }
            #atelier-form label {
              color: rgba(240,237,232,0.5) !important;
            }
            #atelier-form select option {
              background: #1a1a1f;
              color: #f0ede8;
            }
            #atelier-form button[type="submit"] {
              background: #c8a96e !important;
              color: #0d0d0f !important;
            }
            #atelier-form button[type="submit"]:disabled {
              background: rgba(200,169,110,0.4) !important;
            }
            #atelier-form p:last-child {
              color: rgba(240,237,232,0.3) !important;
            }
          `}</style>
          <div id="atelier-form">
            <ContactForm
              ctaLabel="Send enquiry →"
              source="atelier"
              successMessage="Got it. Reply within one business day, signed by Jason."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
