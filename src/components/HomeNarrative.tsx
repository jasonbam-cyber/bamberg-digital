"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Logo from "./Logo";

/* ─────────────────────────────────────────────
   BAMBERG DIGITAL — HOMEPAGE
   Warm. Personal. Founder-led. Routes to specific service pages.
   ───────────────────────────────────────────── */

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/* ── Cursor Glow (desktop only) ── */
function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -600, y: -600 });
  const target = useRef({ x: -600, y: -600 });

  useEffect(() => {
    if (typeof window !== "undefined" && "ontouchstart" in window) return;
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);
    let raf: number;
    const animate = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.08);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.08);
      if (ref.current) {
        ref.current.style.transform = `translate(${pos.current.x - 300}px, ${pos.current.y - 300}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 600,
        height: 600,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 1,
        willChange: "transform",
      }}
    />
  );
}

/* ── Scroll progress bar ── */
function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      ref.current.style.transform = `scaleX(${p})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        zIndex: 100,
        background: "rgba(255,255,255,0.04)",
      }}
    >
      <div
        ref={ref}
        style={{
          height: "100%",
          background: "linear-gradient(90deg, #f59e0b, #ef4444)",
          transformOrigin: "left",
          transform: "scaleX(0)",
          willChange: "transform",
        }}
      />
    </div>
  );
}

/* ── useInView ── */
function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ── Magnetic button ── */
function MagneticButton({
  children,
  href,
  style = {},
}: {
  children: React.ReactNode;
  href: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  }, []);
  const onLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  }, []);
  return (
    <a
      ref={ref}
      href={href}
      style={{
        ...style,
        transition: "transform 0.3s cubic-bezier(0.23,1,0.32,1)",
        willChange: "transform",
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </a>
  );
}

/* ── Animated counter ── */
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const { ref, visible } = useInView(0.3);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const duration = 1800;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [visible, value]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────
   "WHAT DO YOU NEED?" — service routing rows
   ───────────────────────────────────────────── */

const NEEDS = [
  {
    intent: "I need a new website",
    desc: "A site that actually brings in customers — not just sits there looking pretty.",
    href: "/web-design",
    accent: "#f59e0b",
  },
  {
    intent: "I want to show up on Google",
    desc: "Local SEO that gets you to the top of the map pack — and keeps you there.",
    href: "/seo",
    accent: "#ef4444",
  },
  {
    intent: "I need more leads",
    desc: "Verified, qualified leads delivered to your inbox every single week.",
    href: "/leads",
    accent: "#06b6d4",
  },
  {
    intent: "Help with social media",
    desc: "Content that builds your brand and connects with real people in your area.",
    href: "/social-media",
    accent: "#10b981",
  },
  {
    intent: "I need a fresh brand",
    desc: "Logo, colors, voice — an identity that finally feels like the business in your head.",
    href: "/branding",
    accent: "#a855f7",
  },
  {
    intent: "I want everything done for me",
    desc: "Full-service growth bundles. One bill, one team, real measurable results.",
    href: "/bundles",
    accent: "#6366f1",
  },
];

function NeedRow({
  intent,
  desc,
  href,
  accent,
  index,
}: (typeof NEEDS)[number] & { index: number }) {
  const { ref, visible } = useInView<HTMLAnchorElement>(0.15);
  const [hovered, setHovered] = useState(false);
  return (
    <a
      ref={ref}
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        padding: "clamp(1.5rem, 4vw, 2.4rem) 0",
        borderTop: index === 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        textDecoration: "none",
        color: "inherit",
        position: "relative",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.06}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.06}s`,
        cursor: "pointer",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
          transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1)",
          transform: hovered ? "translateX(12px)" : "translateX(0)",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 6,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: accent,
                flexShrink: 0,
                boxShadow: hovered ? `0 0 16px ${accent}` : "none",
                transition: "box-shadow 0.3s ease",
              }}
            />
            <h3
              style={{
                fontSize: "clamp(1.5rem, 4.2vw, 2.6rem)",
                fontWeight: 700,
                color: hovered ? "#fff" : "rgba(255,255,255,0.85)",
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                margin: 0,
                fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
                transition: "color 0.3s ease",
              }}
            >
              {intent}
            </h3>
          </div>
          <p
            style={{
              fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.5,
              margin: 0,
              marginLeft: 20,
              maxWidth: 600,
              fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
            }}
          >
            {desc}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: hovered ? accent : "rgba(255,255,255,0.3)",
            fontSize: "0.9rem",
            fontWeight: 600,
            letterSpacing: "0.01em",
            fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
            transition: "color 0.3s ease",
            flexShrink: 0,
          }}
        >
          Show me
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            style={{
              transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1)",
              transform: hovered ? "translateX(8px)" : "translateX(0)",
            }}
          >
            <path
              d="M4 10h12m0 0L11 5m5 5l-5 5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}

/* ── Stat ── */
function Stat({
  value,
  suffix,
  label,
  delay = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}) {
  const { ref, visible } = useInView(0.2);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        textAlign: "center",
        flex: "1 1 180px",
      }}
    >
      <div
        style={{
          fontSize: "clamp(2.6rem, 7vw, 4.6rem)",
          fontWeight: 900,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          background: "linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.5))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <AnimatedCounter value={value} suffix={suffix} />
      </div>
      <p
        style={{
          fontSize: "clamp(0.78rem, 1.3vw, 0.92rem)",
          color: "rgba(255,255,255,0.42)",
          marginTop: 10,
          letterSpacing: "0.02em",
          lineHeight: 1.4,
          fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
        }}
      >
        {label}
      </p>
    </div>
  );
}

/* ── Jason intro ── */
function JasonIntro() {
  const { ref, visible } = useInView(0.2);
  return (
    <div
      ref={ref}
      style={{
        maxWidth: 900,
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }}
    >
      <span
        style={{
          fontFamily: "ui-monospace, monospace",
          fontSize: "0.72rem",
          color: "rgba(245,158,11,0.8)",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          marginBottom: "1.5rem",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.1s",
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#10b981",
            boxShadow: "0 0 12px #10b981",
          }}
        />
        Available · most calls answered within an hour
      </span>

      <h2
        style={{
          fontSize: "clamp(2rem, 5.5vw, 4rem)",
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: "-0.035em",
          fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
          marginBottom: "1.5rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s",
        }}
      >
        Hey, I&apos;m{" "}
        <span
          style={{
            fontWeight: 900,
            background: "linear-gradient(135deg, #f59e0b, #ef4444)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "inline-block",
            paddingBottom: "0.06em",
            lineHeight: 1,
          }}
        >
          Jason.
        </span>
        <br />
        <span style={{ color: "rgba(255,255,255,0.45)" }}>
          I built this place because
        </span>
        <br />
        <span style={{ color: "rgba(255,255,255,0.45)" }}>
          small businesses deserve better.
        </span>
      </h2>

      <p
        style={{
          fontSize: "clamp(1rem, 1.85vw, 1.18rem)",
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.7,
          maxWidth: 620,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s",
          fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
          marginBottom: "1.2rem",
        }}
      >
        You&apos;ve probably been burned before. A vendor who ghosted. An
        agency that sold you a dashboard and disappeared. Tools that
        don&apos;t talk to each other.
      </p>
      <p
        style={{
          fontSize: "clamp(1rem, 1.85vw, 1.18rem)",
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.7,
          maxWidth: 620,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s",
          fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
        }}
      >
        That&apos;s not how I work. Every project comes through me.
        You&apos;ll always know who&apos;s building your stuff. And if you
        call,{" "}
        <span style={{ color: "#fff", fontWeight: 600 }}>
          I&apos;ll pick up.
        </span>
      </p>

      <div
        style={{
          marginTop: "2.5rem",
          display: "flex",
          alignItems: "center",
          gap: 16,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.55s",
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #f59e0b, #ef4444)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
            fontWeight: 800,
            color: "#fff",
            fontSize: "1.05rem",
            boxShadow: "0 0 30px rgba(245,158,11,0.3)",
          }}
          aria-hidden="true"
        >
          JB
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "#fff",
              fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            Jason Bamberg
          </span>
          <span
            style={{
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.4)",
              fontFamily: "ui-monospace, monospace",
              letterSpacing: "0.05em",
            }}
          >
            Founder · Sacramento, CA
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Testimonial ── */
function Testimonial({
  quote,
  author,
  role,
  index,
}: {
  quote: string;
  author: string;
  role: string;
  index: number;
}) {
  const { ref, visible } = useInView(0.2);
  return (
    <div
      ref={ref}
      style={{
        padding: "clamp(2rem, 5vh, 3.5rem) 0",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s`,
      }}
    >
      <p
        style={{
          fontSize: "clamp(1.3rem, 3vw, 2.1rem)",
          fontWeight: 400,
          lineHeight: 1.4,
          letterSpacing: "-0.015em",
          color: "rgba(255,255,255,0.85)",
          maxWidth: 800,
          fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <div
        style={{
          marginTop: 18,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 24,
            height: 1,
            background: "rgba(245,158,11,0.6)",
          }}
        />
        <span
          style={{
            fontSize: "0.9rem",
            color: "#f59e0b",
            fontWeight: 600,
            fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
          }}
        >
          {author}
        </span>
        <span
          style={{
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.3)",
            fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
          }}
        >
          {role}
        </span>
      </div>
    </div>
  );
}

/* ── CTA ── */
function CTASection() {
  const { ref, visible } = useInView(0.2);
  return (
    <div ref={ref} style={{ position: "relative", zIndex: 1 }}>
      <h2
        style={{
          fontSize: "clamp(2.2rem, 6.5vw, 5rem)",
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: "-0.04em",
          fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
          marginBottom: "1.5rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        Tell me about
        <br />
        <span
          style={{
            background: "linear-gradient(135deg, #f59e0b, #ef4444)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "inline-block",
            paddingBottom: "0.18em",
            lineHeight: 1,
            fontWeight: 900,
          }}
        >
          your business.
        </span>
      </h2>

      <p
        style={{
          fontSize: "clamp(1rem, 2vw, 1.2rem)",
          color: "rgba(255,255,255,0.5)",
          marginBottom: "2.5rem",
          fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s",
          maxWidth: 540,
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: 1.6,
        }}
      >
        15-minute call. No sales pitch. I&apos;ll tell you straight if I can
        help — or who you should call instead.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.25rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s",
        }}
      >
        <MagneticButton
          href="tel:9169077782"
          style={{
            fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
            fontWeight: 900,
            color: "#fff",
            textDecoration: "none",
            letterSpacing: "-0.03em",
            fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
            display: "inline-block",
          }}
        >
          (916) 907-7782
        </MagneticButton>

        <a
          href="mailto:hello@bambergdigital.com"
          style={{
            fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
            color: "rgba(255,255,255,0.5)",
            textDecoration: "none",
            fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
            borderBottom: "1px solid rgba(255,255,255,0.15)",
            paddingBottom: 2,
          }}
        >
          hello@bambergdigital.com
        </a>

        <MagneticButton
          href="/#contact"
          style={{
            marginTop: "1rem",
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "20px 44px",
            background: "linear-gradient(135deg, #f59e0b, #ef4444)",
            color: "#fff",
            borderRadius: 60,
            fontSize: "clamp(1rem, 1.7vw, 1.1rem)",
            fontWeight: 700,
            textDecoration: "none",
            fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
            letterSpacing: "-0.01em",
            boxShadow:
              "0 0 60px rgba(245,158,11,0.35), 0 10px 40px rgba(0,0,0,0.5)",
          }}
        >
          Send me a message
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10m0 0L9 4m4 4L9 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </MagneticButton>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   STYLES
   ══════════════════════════════════════════════ */

const INLINE_CSS = `
  @keyframes grain {
    0%, 100% { transform: translate(0, 0); }
    10% { transform: translate(-5%, -10%); }
    30% { transform: translate(3%, -15%); }
    50% { transform: translate(-2%, 10%); }
    70% { transform: translate(7%, 5%); }
    90% { transform: translate(-1%, 8%); }
  }
  @keyframes float-slow {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(30px, -40px) rotate(2deg); }
    66% { transform: translate(-20px, 20px) rotate(-1deg); }
  }
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.15); }
  }

  @keyframes hero-fade-up {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes hero-word-reveal {
    from { opacity: 0; transform: translateY(60%); }
    to { opacity: 1; transform: translateY(0); }
  }

  .bd-hero-eyebrow {
    animation: hero-fade-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both;
  }
  .bd-hero-word { animation: hero-word-reveal 0.7s cubic-bezier(0.16,1,0.3,1) both; }
  .bd-hero-word-0 { animation-delay: 0.15s; }
  .bd-hero-word-1 { animation-delay: 0.22s; }
  .bd-hero-word-2 { animation-delay: 0.29s; }
  .bd-hero-word-3 { animation-delay: 0.4s; }
  .bd-hero-subhead { animation: hero-fade-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both; }
  .bd-hero-ctas { animation: hero-fade-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.65s both; }
  .bd-hero-scroll { animation: hero-fade-up 1s ease 1.2s both; }

  html {
    scroll-snap-type: none !important;
    scroll-padding-top: 0 !important;
  }

  .bd-homepage {
    background: #050507;
    color: #fff;
    overflow-x: hidden;
    position: relative;
  }

  .bd-homepage * {
    box-sizing: border-box;
  }

  .bd-grain {
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 2;
    opacity: 0.35;
  }

  /* Internal nav */
  .bd-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    padding: 18px clamp(20px, 5vw, 40px);
    display: flex; justify-content: space-between; align-items: center;
    transition: background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease;
    border-bottom: 1px solid transparent;
  }
  .bd-nav.scrolled {
    background: rgba(5,5,7,0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom-color: rgba(255,255,255,0.06);
  }
  .bd-nav-links {
    display: flex; align-items: center; gap: 28px;
  }
  .bd-nav-link {
    font-size: 0.85rem; font-weight: 500;
    color: rgba(255,255,255,0.6); text-decoration: none;
    transition: color 0.2s ease;
    font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
  }
  .bd-nav-link:hover { color: #fff; }
  .bd-nav-cta {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 10px 22px; border-radius: 60px;
    background: linear-gradient(135deg, #f59e0b, #ef4444);
    color: #fff; text-decoration: none;
    font-size: 0.85rem; font-weight: 600;
    font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
    letter-spacing: -0.005em;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    box-shadow: 0 0 20px rgba(245,158,11,0.25);
  }
  .bd-nav-cta:hover {
    transform: translateY(-1px);
    box-shadow: 0 0 30px rgba(245,158,11,0.45);
  }
  .bd-hamburger {
    display: none;
    background: none; border: none; cursor: pointer; padding: 8px;
  }
  .bd-hamburger span {
    display: block; width: 22px; height: 2px;
    background: #fff; margin: 4px 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  .bd-mobile-menu {
    position: fixed; inset: 0; z-index: 99;
    background: rgba(5,5,7,0.97);
    backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px);
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
    gap: 24px; padding: 40px;
    opacity: 0; pointer-events: none;
    transition: opacity 0.4s ease;
  }
  .bd-mobile-menu.open {
    opacity: 1; pointer-events: all;
  }
  .bd-mobile-menu a {
    font-size: clamp(1.4rem, 4vw, 2rem);
    font-weight: 700; color: rgba(255,255,255,0.7);
    text-decoration: none; letter-spacing: -0.02em;
    font-family: var(--font-montserrat), ui-sans-serif, system-ui, sans-serif;
    transition: color 0.2s ease;
  }
  .bd-mobile-menu a:hover { color: #f59e0b; }

  .bd-section {
    position: relative;
    z-index: 3;
  }

  .bd-footer-wrap {
    scroll-snap-align: none;
  }

  @media (max-width: 768px) {
    .bd-nav-links { display: none; }
    .bd-hamburger { display: block; }
  }
`;

/* ══════════════════════════════════════════════
   MAIN
   ══════════════════════════════════════════════ */

export default function HomeNarrative() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Body color override
  useEffect(() => {
    const prevBg = document.body.style.background;
    const prevColor = document.body.style.color;
    document.body.style.background = "#050507";
    document.body.style.color = "#fff";
    return () => {
      document.body.style.background = prevBg;
      document.body.style.color = prevColor;
    };
  }, []);

  // Nav scroll state
  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: INLINE_CSS }} />

      <div className="bd-homepage">
        <div className="bd-grain" />
        <CursorGlow />
        <ScrollProgress />

        {/* ═══ NAV ═══ */}
        <nav className={`bd-nav${navScrolled ? " scrolled" : ""}`}>
          <Logo variant="wordmark" theme="dark" size={36} />
          <div className="bd-nav-links">
            <a href="#what-do-you-need" className="bd-nav-link">
              Services
            </a>
            <a href="/pricing" className="bd-nav-link">
              Pricing
            </a>
            <a href="/portfolio" className="bd-nav-link">
              Work
            </a>
            <a href="/about" className="bd-nav-link">
              About
            </a>
            <a href="/#contact" className="bd-nav-cta">
              Talk to Jason
            </a>
          </div>
          <button
            className="bd-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              style={
                menuOpen
                  ? { transform: "rotate(45deg) translate(4px, 4px)" }
                  : {}
              }
            />
            <span style={menuOpen ? { opacity: 0 } : {}} />
            <span
              style={
                menuOpen
                  ? { transform: "rotate(-45deg) translate(5px, -5px)" }
                  : {}
              }
            />
          </button>
        </nav>

        {/* Mobile menu */}
        <div className={`bd-mobile-menu${menuOpen ? " open" : ""}`}>
          {NEEDS.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>
              {n.intent}
            </a>
          ))}
          <a
            href="tel:9169077782"
            onClick={() => setMenuOpen(false)}
            style={{ color: "#f59e0b" }}
          >
            (916) 907-7782
          </a>
        </div>

        {/* ═══ HERO ═══ */}
        <section
          className="bd-section"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "100px 6vw 60px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Warm orbs */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              right: "12%",
              width: "clamp(280px, 38vw, 560px)",
              height: "clamp(280px, 38vw, 560px)",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)",
              filter: "blur(60px)",
              animation: "float-slow 20s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "8%",
              left: "8%",
              width: "clamp(220px, 32vw, 480px)",
              height: "clamp(220px, 32vw, 480px)",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)",
              filter: "blur(55px)",
              animation: "float-slow 26s ease-in-out infinite reverse",
              pointerEvents: "none",
            }}
          />

          {/* Eyebrow pill */}
          <div
            className="bd-hero-eyebrow"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: "2.5rem",
              padding: "8px 16px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#10b981",
                boxShadow: "0 0 10px #10b981",
                animation: "pulse-dot 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "ui-monospace, monospace",
                fontSize: "0.72rem",
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Hand-built in Sacramento, CA
            </span>
          </div>

          {/* Headline — descender-safe */}
          <h1
            style={{
              fontSize: "clamp(2.6rem, 10vw, 9rem)",
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: "-0.05em",
              textAlign: "center",
              fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
              margin: 0,
              maxWidth: 1100,
            }}
          >
            {["Your", "phone", "should"].map((word, wi) => (
              <span
                key={wi}
                className={`bd-hero-word bd-hero-word-${wi}`}
                style={{
                  display: "inline-block",
                  marginRight: "0.22em",
                  paddingBottom: "0.18em",
                  paddingTop: "0.04em",
                  verticalAlign: "top",
                  lineHeight: 1,
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                {word}
              </span>
            ))}
            <br />
            <span
              className="bd-hero-word bd-hero-word-3"
              style={{
                display: "inline-block",
                paddingBottom: "0.22em",
                paddingTop: "0.04em",
                verticalAlign: "top",
                lineHeight: 1,
                background:
                  "linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #a855f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              be ringing.
            </span>
          </h1>

          {/* Subhead */}
          <p
            className="bd-hero-subhead"
            style={{
              fontSize: "clamp(1.05rem, 2.2vw, 1.45rem)",
              color: "rgba(255,255,255,0.55)",
              maxWidth: 600,
              textAlign: "center",
              lineHeight: 1.55,
              marginTop: "2.5rem",
              fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
            }}
          >
            I&apos;m Jason. I help Sacramento small businesses get found,
            get calls, and finally feel proud of how they show up online.
          </p>

          {/* CTAs */}
          <div
            className="bd-hero-ctas"
            style={{
              marginTop: "2.5rem",
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <MagneticButton
              href="#what-do-you-need"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 30px",
                background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                color: "#fff",
                borderRadius: 60,
                fontSize: "clamp(0.92rem, 1.5vw, 1rem)",
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                letterSpacing: "-0.01em",
                boxShadow:
                  "0 0 40px rgba(245,158,11,0.3), 0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              What do you need?
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10m0 0L9 4m4 4L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </MagneticButton>

            <a
              href="tel:9169077782"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 26px",
                background: "transparent",
                color: "rgba(255,255,255,0.85)",
                borderRadius: 60,
                fontSize: "clamp(0.92rem, 1.5vw, 1rem)",
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                border: "1px solid rgba(255,255,255,0.15)",
                letterSpacing: "-0.01em",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3.5 2.5h2l1 3-1.5 1c.5 1.5 2 3 3.5 3.5l1-1.5 3 1v2A1.5 1.5 0 0 1 11 13C6 13 3 10 3 5a1.5 1.5 0 0 1 .5-2.5z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Or call (916) 907-7782
            </a>
          </div>

          {/* Scroll indicator */}
          <div
            className="bd-hero-scroll"
            style={{
              position: "absolute",
              bottom: 36,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              opacity: 0.35,
            }}
          >
            <span
              style={{
                fontFamily: "ui-monospace, monospace",
                fontSize: "0.6rem",
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Scroll
            </span>
            <div
              style={{
                width: 1,
                height: 36,
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)",
              }}
            />
          </div>
        </section>

        {/* ═══ STATS ═══ */}
        <section
          className="bd-section"
          style={{
            padding: "clamp(4rem, 10vh, 7rem) clamp(24px, 8vw, 96px)",
            display: "flex",
            justifyContent: "center",
            gap: "clamp(2rem, 6vw, 5rem)",
            flexWrap: "wrap",
            borderTop: "1px solid rgba(255,255,255,0.04)",
            borderBottom: "1px solid rgba(255,255,255,0.04)",
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          <Stat
            value={47}
            suffix="+"
            label="Sacramento businesses helped"
            delay={0}
          />
          <Stat
            value={1}
            suffix=""
            label="founder · every project"
            delay={0.15}
          />
          <Stat
            value={48}
            suffix="hr"
            label="average response time"
            delay={0.3}
          />
        </section>

        {/* ═══ WHAT DO YOU NEED — service routing ═══ */}
        <section
          id="what-do-you-need"
          className="bd-section"
          style={{
            padding: "clamp(6rem, 16vh, 10rem) clamp(24px, 8vw, 96px)",
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          <div style={{ marginBottom: "clamp(3rem, 8vh, 5rem)" }}>
            <span
              style={{
                fontFamily: "ui-monospace, monospace",
                fontSize: "0.72rem",
                color: "rgba(245,158,11,0.8)",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1.5rem",
              }}
            >
              Pick your starting point
            </span>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 6vw, 4.2rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
                margin: 0,
                color: "#fff",
              }}
            >
              What do you need?
            </h2>
            <p
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                color: "rgba(255,255,255,0.5)",
                marginTop: "1rem",
                maxWidth: 580,
                lineHeight: 1.6,
                fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
              }}
            >
              Most folks come here for one thing. Pick what you&apos;re after
              — I&apos;ll show you exactly how it works and what it costs.
            </p>
          </div>
          <div>
            {NEEDS.map((n, i) => (
              <NeedRow key={n.href} {...n} index={i} />
            ))}
          </div>
        </section>

        {/* ═══ JASON INTRO ═══ */}
        <section
          className="bd-section"
          style={{
            padding: "clamp(7rem, 18vh, 12rem) clamp(24px, 8vw, 96px)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60vw",
              height: "60vh",
              background:
                "radial-gradient(ellipse, rgba(245,158,11,0.05) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <JasonIntro />
        </section>

        {/* ═══ TESTIMONIALS ═══ */}
        <section
          className="bd-section"
          style={{
            padding: "clamp(5rem, 14vh, 9rem) clamp(24px, 8vw, 96px)",
            borderTop: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <span
              style={{
                fontFamily: "ui-monospace, monospace",
                fontSize: "0.72rem",
                color: "rgba(245,158,11,0.8)",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Folks I&apos;ve worked with
            </span>
            <Testimonial
              quote="Jason built our site in 5 days and we got 3 leads in the first week. He actually answers the phone."
              author="Maria T."
              role="Elk Grove Restaurant Owner"
              index={0}
            />
            <Testimonial
              quote="Finally, someone who explains digital marketing in plain English. No jargon, no upsells, just results."
              author="David R."
              role="Folsom Contractor"
              index={1}
            />
            <Testimonial
              quote="I'd been burned by two other agencies before Jason. Night and day. He treats my business like it's his."
              author="Lina K."
              role="Roseville Boutique Owner"
              index={2}
            />
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section
          id="contact"
          className="bd-section"
          style={{
            padding: "clamp(7rem, 20vh, 14rem) clamp(24px, 8vw, 96px)",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "clamp(300px, 50vw, 700px)",
              height: "clamp(300px, 50vw, 700px)",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(245,158,11,0.1) 0%, rgba(239,68,68,0.05) 40%, transparent 70%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />
          <CTASection />
        </section>

        {/* SEO content (hidden) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            overflow: "hidden",
            clip: "rect(0,0,0,0)",
            whiteSpace: "nowrap",
          }}
        >
          <h1>Bamberg Digital — Sacramento Web Design, SEO &amp; Marketing</h1>
          <p>
            Founder-led digital agency in Sacramento. Personal service for
            small businesses. Web design, SEO, social media, lead generation,
            branding, and full-service growth bundles. Jason picks up the
            phone.
          </p>
          <p>
            Jason Bamberg, founder. (916) 907-7782. hello@bambergdigital.com.
          </p>
          <p>
            Serving Sacramento, Elk Grove, Folsom, Roseville, Rancho Cordova,
            Davis, Woodland, Citrus Heights.
          </p>
        </div>
      </div>
    </>
  );
}
