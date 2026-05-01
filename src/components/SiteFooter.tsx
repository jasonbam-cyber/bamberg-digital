import Logo from "./Logo";

const C = {
  bg: "#ebe2d0",
  ink: "#1a1410",
  ink2: "#4a3f33",
  mute: "#7a6f63",
  hot: "#d8472f",
  hairline: "rgba(26,20,16,0.12)",
};

const linkStyle: React.CSSProperties = {
  color: C.ink2,
  textDecoration: "none",
  fontSize: "0.875rem",
  transition: "color 0.2s ease",
};

const headStyle: React.CSSProperties = {
  color: C.ink,
  fontFamily: "var(--font-fraunces), Georgia, serif",
  fontWeight: 700,
  fontStyle: "italic",
  fontSize: "0.95rem",
  marginBottom: "0.85rem",
};

export default function SiteFooter() {
  return (
    <footer
      style={{
        background: C.bg,
        color: C.ink2,
        padding: "3.5rem 1rem 2rem",
        fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: "span 1", minWidth: 220 }}>
            <div style={{ marginBottom: "0.85rem" }}>
              <Logo variant="wordmark" theme="cream" size={32} />
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.6,
                marginBottom: "1rem",
                color: C.ink2,
              }}
            >
              Sacramento&apos;s founder-led digital studio. Web design, SEO,
              social, and lead generation for small businesses.{" "}
              <span style={{ color: C.ink, fontWeight: 600 }}>
                Jason picks up the phone.
              </span>
            </p>
            <div style={{ fontSize: "0.875rem", lineHeight: 1.8 }}>
              <a
                href="tel:9169077782"
                style={{ ...linkStyle, color: C.ink, fontWeight: 600 }}
              >
                (916) 907-7782
              </a>
              <br />
              <a href="mailto:hello@bambergdigital.com" style={linkStyle}>
                hello@bambergdigital.com
              </a>
              <br />
              <span style={{ color: C.mute }}>Sacramento, CA</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={headStyle}>Services</p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {[
                { href: "/web-design", label: "Website Design" },
                { href: "/social-media", label: "Social Media" },
                { href: "/seo", label: "SEO Services" },
                { href: "/content-creation", label: "Content Creation" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} style={linkStyle}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More services */}
          <div>
            <p style={headStyle}>More</p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {[
                { href: "/digital-marketing", label: "Digital Marketing" },
                { href: "/branding", label: "Branding" },
                { href: "/leads", label: "Lead Generation" },
                { href: "/consulting", label: "AI Consulting" },
                { href: "/ai-integration", label: "AI Integration" },
                { href: "/custom-tools", label: "Custom Tools" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} style={linkStyle}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p style={headStyle}>Company</p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {[
                { href: "/pricing", label: "Pricing" },
                { href: "/bundles", label: "Bundles" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/agentic-ai", label: "Agentic AI" },
                { href: "/atelier", label: "Atelier" },
                { href: "/about", label: "About" },
                { href: "/#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} style={linkStyle}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: `1px solid ${C.hairline}`,
            paddingTop: "1.5rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
            fontSize: "0.75rem",
            color: C.mute,
          }}
        >
          <p>
            © 2024–{new Date().getFullYear()} Bamberg Digital. All rights
            reserved.
          </p>
          <p>Sacramento · Elk Grove · Folsom · Roseville · Rancho Cordova</p>
        </div>
      </div>
    </footer>
  );
}
