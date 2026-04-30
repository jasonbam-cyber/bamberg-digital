import type { Metadata } from "next";
import Script from "next/script";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const SITE_URL = "https://www.bambergdigital.com";

export const metadata: Metadata = {
  title: "Layer UI Case Study | Bamberg Digital Atelier",
  description:
    "How Bamberg Digital shipped a production-grade multi-tenant SaaS work OS — Layer UI — reaching $40 MRR with real Stripe billing using an AI-augmented development methodology.",
  alternates: { canonical: `${SITE_URL}/work/layer-ui` },
  openGraph: {
    title: "Layer UI — Proof Bamberg Digital Ships Systems",
    description:
      "$40 MRR live on Stripe. Multi-tenant SaaS, 18 features, one engineer and an AI team.",
    url: `${SITE_URL}/work/layer-ui`,
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Layer UI — Proof Bamberg Digital Ships Systems",
      datePublished: "2026-04-29",
      dateModified: "2026-04-29",
      author: { "@id": `${SITE_URL}#jason-bamberg` },
      publisher: { "@id": `${SITE_URL}#bd-organization` },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/work/layer-ui`,
      },
      description:
        "How Bamberg Digital shipped a production-grade multi-tenant SaaS work OS — Layer UI — reaching $40 MRR with real Stripe billing using an AI-augmented development methodology.",
      keywords: [
        "Layer UI",
        "multi-tenant SaaS",
        "AI-velocity development",
        "Bamberg Digital",
        "work OS",
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}#jason-bamberg`,
      name: "Jason Bamberg",
      jobTitle: "Founder",
      url: `${SITE_URL}/about`,
      worksFor: { "@id": `${SITE_URL}#bd-organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#bd-organization`,
      name: "Bamberg Digital",
      url: SITE_URL,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Atelier",
          item: `${SITE_URL}/atelier`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Layer UI",
          item: `${SITE_URL}/work/layer-ui`,
        },
      ],
    },
  ],
};

const C = {
  bg: "#0d0d0f",
  ink: "#f0ede8",
  ink2: "rgba(240,237,232,0.65)",
  ink3: "rgba(240,237,232,0.45)",
  brass: "#c8a96e",
  hairline: "rgba(240,237,232,0.1)",
  surface: "rgba(240,237,232,0.04)",
  surfaceBorder: "rgba(240,237,232,0.08)",
};

const proseStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
  fontSize: "1.05rem",
  lineHeight: 1.75,
  color: C.ink2,
  maxWidth: 660,
  margin: "0 0 20px",
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-fraunces), Georgia, serif",
  fontSize: "1.6rem",
  fontWeight: 700,
  fontStyle: "italic",
  color: C.ink,
  margin: "52px 0 16px",
  lineHeight: 1.2,
};

const h3Style: React.CSSProperties = {
  fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
  fontSize: "0.95rem",
  fontWeight: 700,
  color: C.ink,
  margin: "32px 0 10px",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
};

export default function LayerUICaseStudy() {
  return (
    <>
      <Script
        id="layer-ui-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ background: C.bg, color: C.ink, minHeight: "100vh" }}>
        <SiteNav active="/atelier" />

        <article
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "120px 24px 100px",
          }}
        >
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: 48 }}>
            <p
              style={{
                fontFamily:
                  "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                fontSize: "0.75rem",
                color: C.ink3,
                letterSpacing: "0.05em",
              }}
            >
              <a href="/" style={{ color: C.ink3, textDecoration: "none" }}>
                Home
              </a>
              {" · "}
              <a
                href="/atelier"
                style={{ color: C.ink3, textDecoration: "none" }}
              >
                Atelier
              </a>
              {" · "}
              <span style={{ color: C.brass }}>Layer UI</span>
            </p>
          </nav>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              marginBottom: 24,
            }}
          >
            {["Web Design", "Full-Stack", "AI", "Stripe"].map((t) => (
              <span
                key={t}
                style={{
                  fontFamily:
                    "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: C.brass,
                  border: `1px solid rgba(200,169,110,0.3)`,
                  padding: "4px 10px",
                  borderRadius: 3,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              fontStyle: "italic",
              color: C.ink,
              lineHeight: 1.1,
              marginBottom: 20,
              textWrap: "balance",
            }}
          >
            Layer UI — Proof Bamberg Digital Ships Systems
          </h1>

          <p
            style={{
              fontFamily:
                "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
              fontSize: "0.8rem",
              color: C.ink3,
              marginBottom: 48,
            }}
          >
            By Jason Bamberg, Bamberg Digital · April 2026
          </p>

          {/* Stat row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 1,
              background: C.hairline,
              border: `1px solid ${C.surfaceBorder}`,
              borderRadius: 6,
              overflow: "hidden",
              marginBottom: 60,
            }}
          >
            {[
              { label: "MRR at launch", value: "$40" },
              { label: "Features shipped", value: "18" },
              { label: "Client workspaces", value: "3+" },
              { label: "Outreach contacts", value: "1,073" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: C.bg,
                  padding: "24px 20px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: C.brass,
                    margin: "0 0 4px",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontFamily:
                      "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                    fontSize: "0.7rem",
                    color: C.ink3,
                    margin: 0,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Body */}
          <h2 style={h2Style}>The result, up front</h2>
          <p style={proseStyle}>
            Layer UI is live. Stripe is billing. The product reached $40 MRR
            within weeks of launch. It runs on a multi-tenant architecture that
            lets a single codebase serve unlimited client workspaces — each
            isolated, each branded, each deployed automatically on every{" "}
            <code style={{ color: C.brass, fontFamily: "var(--font-mono)" }}>
              git push
            </code>
            . I built it with one engineer and a coordinated team of AI agents.
            This is what Bamberg Digital actually ships.
          </p>

          <h2 style={h2Style}>The problem</h2>
          <p style={proseStyle}>
            Small businesses are fragmented across six to ten tools. Notion for
            docs. Slack for chat. Monday for tasks. Google Workspace for email.
            A separate CRM. A separate inventory system. A separate shipping
            tracker. Each tool has its own login, its own pricing, its own
            learning curve, and its own way of not talking to the others.
          </p>
          <p style={proseStyle}>
            The companies that suffer most aren&apos;t enterprise — they have IT
            teams for that. The companies that suffer most are the ones with ten
            to fifty employees: light industrial shops, logistics coordinators,
            growing retail operations, remote-first service businesses.
            They&apos;re paying for five subscriptions and getting 60% of the
            capability they need out of each one.
          </p>
          <p style={proseStyle}>
            The category solution — a true unified work OS — exists at the
            enterprise tier. Salesforce, SAP, ServiceNow. The price point starts
            at six figures and the implementation starts at six months. Nothing
            fills the gap between &ldquo;five disconnected tools&rdquo; and
            &ldquo;enterprise platform.&rdquo; That gap is where Layer UI lives.
          </p>

          <h2 style={h2Style}>The approach</h2>

          <h3 style={h3Style}>
            Architecture: one codebase, unlimited workspaces
          </h3>
          <p style={proseStyle}>
            Layer UI runs on a proxy-routing pattern.{" "}
            <code style={{ color: C.brass }}>layerui.io</code> is the marketing
            site and the routing layer. Every client gets a subdirectory:{" "}
            <code style={{ color: C.brass }}>layerui.io/[client]</code>. The
            main site&apos;s{" "}
            <code style={{ color: C.brass }}>next.config.ts</code> contains a{" "}
            <code style={{ color: C.brass }}>CLIENT_APPS</code> array — one
            entry per client. Each entry maps a path prefix to a separate Vercel
            deployment.
          </p>
          <p style={proseStyle}>
            Adding a new client workspace is a four-step process: fork the app
            template, deploy a new Vercel project, seed the client workspace in
            Supabase, add one entry to{" "}
            <code style={{ color: C.brass }}>CLIENT_APPS</code> and push. The
            next deploy picks up the new route. No DNS changes. No
            infrastructure work. The client is live.
          </p>

          <h3 style={h3Style}>Auth and data</h3>
          <p style={proseStyle}>
            Authentication runs on two role keys:{" "}
            <code style={{ color: C.brass }}>app_role</code> (primary) and{" "}
            <code style={{ color: C.brass }}>bamcor_role</code> (legacy
            fallback). Supabase handles the backend with Row Level Security
            enforcing workspace isolation. No client can see another
            client&apos;s data at the query layer.
          </p>

          <h3 style={h3Style}>Billing</h3>
          <p style={proseStyle}>
            Stripe handles subscriptions in live production mode. Three tiers:
            Free ($0, up to 3 users), Starter ($19/user/month, up to 10 users),
            and Pro ($39/user/month, unlimited seats). The per-seat model aligns
            the product&apos;s revenue with the value it delivers as teams grow.
            Webhook handling covers the three events that break subscriptions:
            checkout completed, subscription deleted, payment failed.
          </p>

          <h2 style={h2Style}>Build velocity</h2>
          <p style={proseStyle}>
            The initial architecture decisions were made in a single session.
            The basePath problem — a 100-file audit to ensure every internal
            fetch carried the correct prefix — was resolved in one afternoon.
            The Stripe billing integration went from spec to live webhooks in
            one day. The multi-tenant routing pattern took two days to prove
            out, including the proxy layer, the Supabase workspace seed process,
            and Vercel deployment automation.
          </p>
          <p style={proseStyle}>
            AI accelerated the parts of this build that would have taken weeks
            in a traditional agency model: boilerplate generation, repetitive
            configuration across 18 modules, test-case generation, and
            first-pass debugging on silent failures. What stayed human was the
            architecture — deciding what the routing pattern should be, why
            per-seat pricing fits this market better than flat-rate, how to
            structure the auth fallback. The judgment calls stayed with me. The
            execution moved at machine speed.
          </p>

          <h2 style={h2Style}>Outcome</h2>
          <p style={proseStyle}>
            Layer UI is in production as of April 2026. $40 MRR on live Stripe
            billing. Three named client workspaces routing correctly through the
            proxy layer. 18 features shipped — full workspace surface, not a
            demo shell. 1,073 cold emails sent at launch across 20 verticals,
            processed through an automated response classification and follow-up
            system.
          </p>
          <p style={proseStyle}>
            The MRR number is small. I am not pretending otherwise. What it
            proves is larger than the number: a solo founder with an
            AI-augmented team can ship a production-grade multi-tenant SaaS,
            wire real billing, build a 20-vertical outreach system, and monitor
            it all from a single Mac Mini. The architecture scales. The pattern
            replicates. Every new client workspace adds one line to a config
            file and one Supabase row.
          </p>
          <p
            style={{
              ...proseStyle,
              fontStyle: "italic",
              color: C.brass,
              fontSize: "1.15rem",
            }}
          >
            This is what I mean when Bamberg Digital sells &ldquo;AI-velocity
            development.&rdquo; It is not a metaphor. It is a methodology with a
            track record.
          </p>

          {/* CTA */}
          <div
            style={{
              marginTop: 64,
              paddingTop: 48,
              borderTop: `1px solid ${C.hairline}`,
            }}
          >
            <p
              style={{
                fontFamily:
                  "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                fontSize: "0.85rem",
                color: C.ink3,
                marginBottom: 16,
              }}
            >
              Want a system like this?
            </p>
            <a
              href="/atelier#contact"
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
              }}
            >
              Start a project →
            </a>
          </div>
        </article>

        <SiteFooter />
      </div>
    </>
  );
}
