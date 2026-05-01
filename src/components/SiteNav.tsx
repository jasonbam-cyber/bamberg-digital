"use client";

import { useState, useEffect } from "react";

const services = [
  { href: "/web-design", label: "Website Design" },
  { href: "/social-media", label: "Social Media" },
  { href: "/seo", label: "SEO Services" },
  { href: "/content-creation", label: "Content Creation" },
  { href: "/digital-marketing", label: "Digital Marketing" },
  { href: "/branding", label: "Branding" },
  { href: "/leads", label: "Lead Generation" },
  { href: "/consulting", label: "AI Consulting" },
  { href: "/ai-integration", label: "AI Integration" },
  { href: "/custom-tools", label: "Custom Business Tools" },
];

export default function SiteNav({
  active = "",
  dark = false,
}: {
  active?: string;
  dark?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Dark mode: transparent nav with white text, blur on scroll
  const isDark = dark;
  const navBg = isDark
    ? scrolled
      ? "rgba(5,5,7,0.85)"
      : "transparent"
    : scrolled
      ? "rgba(255,255,255,0.95)"
      : "rgba(255,255,255,0.95)";
  const navBorder = isDark
    ? scrolled
      ? "rgba(255,255,255,0.06)"
      : "transparent"
    : "#f3f4f6";
  const textColor = isDark ? "rgba(255,255,255,0.65)" : "#4b5563";
  const textHover = isDark ? "#fff" : "#2563eb";
  const logoText = isDark ? "#fff" : "#111827";
  const logoAccent = isDark ? "#6366f1" : "#2563eb";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        background: navBg,
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: `1px solid ${navBorder}`,
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 16px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 64,
          }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                background: isDark
                  ? "linear-gradient(135deg, #6366f1, #4f46e5)"
                  : "linear-gradient(135deg, #2563eb, #06b6d4)",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 13,
                }}
              >
                BD
              </span>
            </div>
            <span
              style={{
                fontFamily:
                  "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: logoText,
              }}
            >
              Bamberg <span style={{ color: logoAccent }}>Digital</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
            }}
          >
            {/* Services dropdown */}
            <div style={{ position: "relative" }}>
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: textColor,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.2s",
                  fontFamily: "inherit",
                }}
              >
                Services
                <svg
                  style={{ width: 16, height: 16 }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    marginTop: 4,
                    width: 220,
                    background: isDark ? "rgba(15,15,20,0.95)" : "#fff",
                    borderRadius: 12,
                    boxShadow: isDark
                      ? "0 20px 60px rgba(0,0,0,0.6)"
                      : "0 10px 40px rgba(0,0,0,0.1)",
                    border: isDark
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid #f3f4f6",
                    padding: "8px 0",
                    zIndex: 50,
                    backdropFilter: "blur(20px)",
                  }}
                >
                  {services.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      style={{
                        display: "block",
                        padding: "8px 16px",
                        fontSize: "0.875rem",
                        color:
                          active === s.href
                            ? logoAccent
                            : isDark
                              ? "rgba(255,255,255,0.65)"
                              : "#374151",
                        fontWeight: active === s.href ? 600 : 400,
                        textDecoration: "none",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {[
              { label: "Pricing", href: "/pricing" },
              { label: "Bundles", href: "/bundles" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Agentic AI", href: "/agentic-ai" },
              { label: "Atelier", href: "/atelier" },
              { label: "About", href: "/about" },
              { label: "Our Story", href: "/story" },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: active === href ? textHover : textColor,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                {label}
              </a>
            ))}

            <a
              href="/#contact"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, #6366f1, #4f46e5)"
                  : "#2563eb",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: 8,
                fontSize: "0.875rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.2s",
                boxShadow: isDark
                  ? "0 0 20px rgba(99,102,241,0.3)"
                  : "0 4px 12px rgba(37,99,235,0.25)",
              }}
            >
              Free Consultation
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            style={{
              display: "none",
              padding: 8,
              background: "none",
              border: "none",
              cursor: "pointer",
              color: isDark ? "#fff" : "#111",
            }}
            className="mobile-menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg
              style={{ width: 24, height: 24 }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            style={{
              borderTop: isDark
                ? "1px solid rgba(255,255,255,0.06)"
                : "1px solid #f3f4f6",
              padding: "16px 0",
              background: isDark ? "rgba(5,5,7,0.95)" : "#fff",
            }}
            className="mobile-menu"
          >
            <p
              style={{
                padding: "4px 8px",
                fontSize: "0.7rem",
                fontWeight: 700,
                color: isDark ? "rgba(255,255,255,0.25)" : "#9ca3af",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Services
            </p>
            {services.map((s) => (
              <a
                key={s.href}
                href={s.href}
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: isDark ? "rgba(255,255,255,0.65)" : "#374151",
                  textDecoration: "none",
                  padding: "6px 8px",
                }}
              >
                {s.label}
              </a>
            ))}
            <div
              style={{
                borderTop: isDark
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "1px solid #f3f4f6",
                margin: "8px 0",
              }}
            />
            {[
              { label: "Pricing", href: "/pricing" },
              { label: "Bundles", href: "/bundles" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Agentic AI", href: "/agentic-ai" },
              { label: "Atelier", href: "/atelier" },
              { label: "About", href: "/about" },
              { label: "Our Story", href: "/story" },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: isDark ? "rgba(255,255,255,0.65)" : "#374151",
                  textDecoration: "none",
                  padding: "6px 8px",
                }}
              >
                {label}
              </a>
            ))}
            <a
              href="/#contact"
              style={{
                display: "block",
                background: isDark
                  ? "linear-gradient(135deg, #6366f1, #4f46e5)"
                  : "#2563eb",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: 8,
                fontSize: "0.875rem",
                fontWeight: 600,
                textDecoration: "none",
                textAlign: "center",
                marginTop: 8,
              }}
            >
              Free Consultation
            </a>
          </div>
        )}
      </div>

      {/* Responsive CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `,
        }}
      />
    </nav>
  );
}
