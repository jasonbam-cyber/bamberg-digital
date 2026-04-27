import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Bamberg Digital",
  description:
    "How Bamberg Digital collects, uses, and protects your personal information.",
  alternates: { canonical: "https://bambergdigital.com/privacy" },
  robots: { index: true, follow: true },
};

const SERIF = "var(--font-fraunces, 'Fraunces', serif)";
const MONO = "var(--font-mono, 'JetBrains Mono'), monospace";

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>

        <h2 style={h2Style}>1. Acceptance of Terms</h2>
        <p>
          By using bambergdigital.com you accept the practices described in this
          Privacy Policy. Please read it carefully. If you do not agree, please
          do not use the Site.
        </p>

        <h2 style={h2Style}>2. Information We Collect</h2>
        <p>
          We collect information you provide directly: name, email address,
          phone number, and any messages you submit through forms. We also
          collect basic analytics data such as page views and referrer
          information to improve the Site.
        </p>

        <h2 style={h2Style}>3. Use of Service</h2>
        <p>
          We use your information to respond to inquiries, deliver services,
          send the newsletter you subscribed to, and operate the Site. We do not
          sell your personal information.
        </p>

        <h2 style={h2Style}>4. Email &amp; Newsletter</h2>
        <p>
          If you subscribe to our newsletter, you may unsubscribe at any time
          via the link in any email or by visiting{" "}
          <Link href="/unsubscribe" style={linkStyle}>
            /unsubscribe
          </Link>
          .
        </p>

        <h2 style={h2Style}>5. Cookies</h2>
        <p>
          We use minimal cookies for essential site functionality and basic
          analytics. You can disable cookies in your browser settings.
        </p>

        <h2 style={h2Style}>6. Third-Party Services</h2>
        <p>
          We rely on a small set of third-party providers (hosting, analytics,
          email delivery). Each provider has its own privacy policy governing
          how it handles data.
        </p>

        <h2 style={h2Style}>7. Data Retention &amp; Security</h2>
        <p>
          We retain personal information only as long as necessary for the
          purposes described above. We use industry-standard practices to
          protect your data, but no method of transmission over the Internet is
          100% secure.
        </p>

        <h2 style={h2Style}>8. Your Rights</h2>
        <p>
          You may request access, correction, or deletion of your personal
          information at any time by contacting us.
        </p>

        <h2 style={h2Style}>9. Contact Information</h2>
        <p>
          Questions about this Privacy Policy? Contact us at{" "}
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
