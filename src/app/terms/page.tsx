import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Bamberg Digital",
  description:
    "Terms and conditions governing the use of Bamberg Digital services and website.",
  alternates: { canonical: "https://www.bambergdigital.com/terms" },
  robots: { index: true, follow: true },
};

const SERIF = "var(--font-fraunces, 'Fraunces', serif)";
const MONO = "var(--font-mono, 'JetBrains Mono'), monospace";

export default function TermsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0e16",
        color: "#fff",
        padding: "6rem 1.5rem 4rem",
      }}
    >
      <article
        style={{
          maxWidth: 760,
          margin: "0 auto",
          fontSize: "0.95rem",
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.78)",
        }}
      >
        <p
          style={{
            fontFamily: MONO,
            fontSize: "0.6rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
            marginBottom: "1rem",
          }}
        >
          Last updated: April 2026
        </p>
        <h1
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
            color: "#fff",
            marginBottom: "2rem",
            letterSpacing: "-0.02em",
          }}
        >
          Terms &amp; Conditions
        </h1>

        <h2 style={h2Style}>1. Acceptance of Terms</h2>
        <p>
          By accessing or using bambergdigital.com (the &ldquo;Site&rdquo;) or
          engaging Bamberg Digital (&ldquo;we&rdquo;, &ldquo;us&rdquo;) for
          services, you agree to be bound by these Terms &amp; Conditions. If
          you do not agree, please discontinue use of the Site.
        </p>

        <h2 style={h2Style}>2. Use of Service</h2>
        <p>
          The Site and any services delivered are intended for lawful business
          use. You agree not to misuse the Site, attempt to gain unauthorized
          access, or interfere with its operation. Service deliverables are
          governed by the individual project agreement signed at engagement.
        </p>

        <h2 style={h2Style}>3. Intellectual Property</h2>
        <p>
          All content, code, design, and copy on the Site are the property of
          Bamberg Digital unless otherwise stated. Client deliverables are
          assigned per the terms of the signed statement of work.
        </p>

        <h2 style={h2Style}>4. Privacy Policy</h2>
        <p>
          Your privacy matters. Please review our{" "}
          <Link href="/privacy" style={linkStyle}>
            Privacy Policy
          </Link>{" "}
          to understand what data we collect, how we use it, and your rights.
        </p>

        <h2 style={h2Style}>5. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Bamberg Digital is not liable
          for any indirect, incidental, or consequential damages arising from
          your use of the Site or services.
        </p>

        <h2 style={h2Style}>6. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of the Site
          after updates constitutes acceptance of the revised Terms.
        </p>

        <h2 style={h2Style}>7. Contact Information</h2>
        <p>
          Questions about these Terms? Contact us at{" "}
          <a href="mailto:hello@bambergdigital.com" style={linkStyle}>
            hello@bambergdigital.com
          </a>{" "}
          or (916) 907-7782. Bamberg Digital · Sacramento, CA.
        </p>

        <p style={{ marginTop: "3rem" }}>
          <Link href="/" style={linkStyle}>
            ← Back to home
          </Link>
        </p>
      </article>
    </main>
  );
}

const h2Style: React.CSSProperties = {
  fontFamily: SERIF,
  fontWeight: 600,
  fontSize: "1.4rem",
  color: "#fff",
  marginTop: "2.5rem",
  marginBottom: "0.75rem",
  letterSpacing: "-0.01em",
};

const linkStyle: React.CSSProperties = {
  color: "#e8872b",
  textDecoration: "underline",
};
