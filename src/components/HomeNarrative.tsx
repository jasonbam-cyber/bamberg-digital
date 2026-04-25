"use client";
import { useEffect, useRef, useState, useCallback } from "react";

/* ─────────────────────────────────────────────
   AWWWARDS-LEVEL HOMEPAGE
   Scroll-driven, kinetic typography, dramatic spacing,
   interactive cursor elements, NO generic cards/grids
   ───────────────────────────────────────────── */

/* ── Utility: lerp ── */
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/* ── Cursor Glow ── */
function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -600, y: -600 });
  const target = useRef({ x: -600, y: -600 });

  useEffect(() => {
    // Don't run on mobile / touch devices
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
          "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 1,
        willChange: "transform",
      }}
    />
  );
}

/* ── Scroll Progress Bar ── */
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
        background: "rgba(255,255,255,0.05)",
      }}
    >
      <div
        ref={ref}
        style={{
          height: "100%",
          background: "linear-gradient(90deg, #6366f1, #06b6d4)",
          transformOrigin: "left",
          transform: "scaleX(0)",
          willChange: "transform",
        }}
      />
    </div>
  );
}

/* ── useInView hook ── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
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

/* ── useParallax hook ── */
function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translateY(${center * speed * -1}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return ref;
}

/* ── Magnetic Button ── */
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
    ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
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

/* ── Text Reveal (word-by-word on scroll) ── */
function TextReveal({ text }: { text: string }) {
  const { ref, visible } = useInView(0.2);
  const words = text.split(" ");

  return (
    <div ref={ref}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            marginRight: "0.35em",
            fontSize: "clamp(1.3rem, 3.5vw, 2.2rem)",
            fontWeight: 400,
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.55)",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.04}s`,
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}

/* ── Counter Animation ── */
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const { ref, visible } = useInView(0.3);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const duration = 2000;
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

/* ── Horizontal Scroll Services ── */
const SERVICES = [
  {
    num: "01",
    title: "Web\nDesign",
    desc: "Websites that convert visitors into customers. Mobile-first, SEO-optimized, delivered in 14 days.",
    price: "From $497",
    href: "/web-design",
    accent: "#6366f1",
  },
  {
    num: "02",
    title: "SEO\nDominance",
    desc: "Get found. Stay found. Local SEO, keyword strategy, and monthly ranking reports that show real growth.",
    price: "From $297/mo",
    href: "/seo",
    accent: "#06b6d4",
  },
  {
    num: "03",
    title: "Social\nMedia",
    desc: "Content that builds community. 3 posts per week, custom graphics, strategy that actually engages.",
    price: "From $199/mo",
    href: "/social-media",
    accent: "#10b981",
  },
  {
    num: "04",
    title: "AI\nAutomation",
    desc: "Systems that work while you sleep. Lead capture, follow-ups, scheduling — all automated with AI.",
    price: "Custom",
    href: "/ai-integration",
    accent: "#f59e0b",
  },
  {
    num: "05",
    title: "Lead\nGeneration",
    desc: "Verified leads delivered to your inbox. No cold calling, no guessing — just qualified prospects.",
    price: "From $397/mo",
    href: "/leads",
    accent: "#ef4444",
  },
];

function HorizontalServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / containerHeight));
      setScrollProgress(progress);

      if (trackRef.current) {
        const totalWidth = trackRef.current.scrollWidth - window.innerWidth;
        trackRef.current.style.transform = `translateX(${-progress * totalWidth}px)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ height: `${SERVICES.length * 100}vh`, position: "relative" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Section label */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: "clamp(24px, 4vw, 48px)",
            zIndex: 10,
          }}
        >
          <span
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            What we do
          </span>
          <div
            style={{
              marginTop: 12,
              width: 60,
              height: 2,
              background: "rgba(255,255,255,0.08)",
              borderRadius: 1,
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${scrollProgress * 100}%`,
                background: "linear-gradient(90deg, #6366f1, #06b6d4)",
                borderRadius: 1,
                transition: "width 0.1s linear",
              }}
            />
          </div>
        </div>

        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: 0,
            willChange: "transform",
          }}
        >
          {SERVICES.map((svc, i) => (
            <a
              key={i}
              href={svc.href}
              style={{
                width: "100vw",
                height: "100vh",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0 clamp(24px, 8vw, 96px)",
                textDecoration: "none",
                color: "inherit",
                position: "relative",
                cursor: "pointer",
              }}
            >
              {/* Giant number watermark */}
              <span
                style={{
                  position: "absolute",
                  right: "8vw",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "clamp(10rem, 28vw, 22rem)",
                  fontWeight: 900,
                  color: svc.accent,
                  opacity: 0.04,
                  lineHeight: 0.85,
                  letterSpacing: "-0.05em",
                  fontFamily: "ui-sans-serif, system-ui, sans-serif",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {svc.num}
              </span>

              {/* Number label */}
              <span
                style={{
                  fontFamily: "ui-monospace, monospace",
                  fontSize: "0.8rem",
                  color: svc.accent,
                  letterSpacing: "0.15em",
                  marginBottom: 24,
                  opacity: 0.7,
                }}
              >
                {svc.num}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontSize: "clamp(3rem, 10vw, 8rem)",
                  fontWeight: 900,
                  lineHeight: 0.9,
                  letterSpacing: "-0.04em",
                  color: "#fff",
                  whiteSpace: "pre-line",
                  marginBottom: 32,
                  fontFamily: "ui-sans-serif, system-ui, sans-serif",
                  margin: 0,
                  marginTop: 0,
                  paddingBottom: 32,
                }}
              >
                {svc.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)",
                  color: "rgba(255,255,255,0.4)",
                  maxWidth: 420,
                  lineHeight: 1.7,
                  marginBottom: 24,
                  fontFamily: "ui-sans-serif, system-ui, sans-serif",
                }}
              >
                {svc.desc}
              </p>

              {/* Price */}
              <span
                style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  fontWeight: 700,
                  color: svc.accent,
                  letterSpacing: "-0.02em",
                  fontFamily: "ui-sans-serif, system-ui, sans-serif",
                }}
              >
                {svc.price}
              </span>

              {/* Divider */}
              {i < SERVICES.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "15%",
                    bottom: "15%",
                    width: 1,
                    background: "rgba(255,255,255,0.06)",
                  }}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Marquee ── */
function Marquee({ texts, speed = 30 }: { texts: string[]; speed?: number }) {
  const content = texts.join(" \u00b7 ") + " \u00b7 ";
  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap", padding: "2rem 0" }}>
      <div
        style={{
          display: "inline-block",
          animation: `marquee ${speed}s linear infinite`,
          fontSize: "clamp(0.75rem, 1.3vw, 0.95rem)",
          color: "rgba(255,255,255,0.1)",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          fontFamily: "ui-monospace, monospace",
        }}
      >
        {content}
        {content}
      </div>
    </div>
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
        transform: visible ? "translateY(0)" : "translateY(60px)",
        transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        textAlign: "center",
        flex: "1 1 150px",
      }}
    >
      <div
        style={{
          fontSize: "clamp(3rem, 9vw, 5.5rem)",
          fontWeight: 900,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          background: "linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.5))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <AnimatedCounter value={value} suffix={suffix} />
      </div>
      <p
        style={{
          fontSize: "clamp(0.75rem, 1.3vw, 0.9rem)",
          color: "rgba(255,255,255,0.3)",
          marginTop: 8,
          letterSpacing: "0.04em",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        {label}
      </p>
    </div>
  );
}

/* ── Differentiator Section ── */
function Differentiator() {
  const { ref, visible } = useInView(0.2);
  return (
    <div ref={ref} style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
      <span
        style={{
          fontFamily: "ui-monospace, monospace",
          fontSize: "0.7rem",
          color: "rgba(255,255,255,0.2)",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          display: "block",
          marginBottom: "2rem",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.1s",
        }}
      >
        Why Bamberg Digital
      </span>

      <h2
        style={{
          fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: "-0.04em",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          marginBottom: "2rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s",
        }}
      >
        Powered by AI.
        <br />
        <span style={{ color: "rgba(255,255,255,0.4)" }}>
          Run by a human
        </span>
        <br />
        <span style={{ color: "rgba(255,255,255,0.4)" }}>
          who picks up the phone.
        </span>
      </h2>

      <p
        style={{
          fontSize: "clamp(1rem, 2vw, 1.2rem)",
          color: "rgba(255,255,255,0.35)",
          lineHeight: 1.75,
          maxWidth: 560,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        We use AI to deliver agency-quality work at freelancer prices.
        Every project is reviewed by Jason personally. You get enterprise
        tools with a one-call relationship.
      </p>

      <div
        style={{
          display: "flex",
          gap: "clamp(1.5rem, 4vw, 3rem)",
          marginTop: "3.5rem",
          flexWrap: "wrap",
        }}
      >
        {[
          { icon: "\u26A1", label: "AI Speed", sub: "10x faster delivery" },
          { icon: "\uD83E\uDD1D", label: "Human Touch", sub: "Jason on every project" },
          { icon: "\uD83D\uDCCD", label: "Sacramento", sub: "Local roots, national reach" },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${0.4 + idx * 0.12}s`,
            }}
          >
            <div style={{ fontSize: "1.5rem", marginBottom: 8 }}>
              {item.icon}
            </div>
            <div
              style={{
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "rgba(255,255,255,0.8)",
                marginBottom: 4,
                fontFamily: "ui-sans-serif, system-ui, sans-serif",
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.3)",
                fontFamily: "ui-sans-serif, system-ui, sans-serif",
              }}
            >
              {item.sub}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Testimonial ── */
function Testimonial({ quote, author, role, index }: { quote: string; author: string; role: string; index: number }) {
  const { ref, visible } = useInView(0.2);
  return (
    <div
      ref={ref}
      style={{
        padding: "clamp(2rem, 5vh, 4rem) 0",
        borderBottom: index === 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${index * 0.15}s`,
      }}
    >
      <p
        style={{
          fontSize: "clamp(1.5rem, 3.5vw, 2.6rem)",
          fontWeight: 300,
          lineHeight: 1.35,
          letterSpacing: "-0.02em",
          color: "rgba(255,255,255,0.7)",
          fontStyle: "italic",
          maxWidth: 700,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 24, height: 1, background: "rgba(99,102,241,0.5)" }} />
        <span
          style={{
            fontSize: "0.85rem",
            color: "#6366f1",
            fontWeight: 600,
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          {author}
        </span>
        <span
          style={{
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.25)",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          {role}
        </span>
      </div>
    </div>
  );
}

/* ── Problem Statement ── */
function ProblemHit() {
  const { ref, visible } = useInView(0.3);
  return (
    <p
      ref={ref}
      style={{
        fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
        fontWeight: 900,
        lineHeight: 1.15,
        letterSpacing: "-0.03em",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
        background: "linear-gradient(135deg, #6366f1, #06b6d4)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.97)",
        transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s",
      }}
    >
      We fix that.
    </p>
  );
}

/* ── CTA Section ── */
function CTASection() {
  const { ref, visible } = useInView(0.2);
  return (
    <div ref={ref} style={{ position: "relative", zIndex: 1 }}>
      <h2
        style={{
          fontSize: "clamp(2.5rem, 8vw, 6rem)",
          fontWeight: 900,
          lineHeight: 0.95,
          letterSpacing: "-0.04em",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          marginBottom: "1.5rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        Let&apos;s build
        <br />
        <span
          style={{
            background: "linear-gradient(135deg, #6366f1, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          something.
        </span>
      </h2>

      <p
        style={{
          fontSize: "clamp(1rem, 2vw, 1.2rem)",
          color: "rgba(255,255,255,0.3)",
          marginBottom: "2.5rem",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s",
        }}
      >
        Free consultation. No pressure. Just results.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
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
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
            display: "inline-block",
          }}
        >
          (916) 907-7782
        </MagneticButton>

        <a
          href="mailto:hello@bambergdigital.com"
          style={{
            fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
            color: "rgba(255,255,255,0.3)",
            textDecoration: "none",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            paddingBottom: 2,
          }}
        >
          hello@bambergdigital.com
        </a>

        <MagneticButton
          href="/pricing"
          style={{
            marginTop: "1rem",
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "20px 48px",
            background: "linear-gradient(135deg, #6366f1, #4f46e5)",
            color: "#fff",
            borderRadius: 60,
            fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
            fontWeight: 700,
            textDecoration: "none",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
            letterSpacing: "-0.01em",
            boxShadow: "0 0 60px rgba(99,102,241,0.35), 0 10px 40px rgba(0,0,0,0.5)",
          }}
        >
          Get Started Today
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </MagneticButton>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════ */

const INLINE_CSS = `
  @keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
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
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 2;
    animation: grain 8s steps(10) infinite;
    opacity: 0.4;
  }

  .bd-section {
    position: relative;
    z-index: 3;
  }

  html {
    scroll-snap-type: none !important;
  }

  .bd-footer-wrap {
    scroll-snap-align: none;
  }
`;

export default function HomeNarrative() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const taglineRef = useParallax(0.15);
  const orbRef = useParallax(-0.2);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: INLINE_CSS }} />

      <div className="bd-homepage">
        <div className="bd-grain" />
        <CursorGlow />
        <ScrollProgress />

        {/* ═══ HERO ═══ */}
        <section
          className="bd-section"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 6vw",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Floating orbs */}
          <div
            ref={orbRef}
            style={{
              position: "absolute",
              top: "10%",
              right: "15%",
              width: "clamp(300px, 40vw, 600px)",
              height: "clamp(300px, 40vw, 600px)",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
              filter: "blur(60px)",
              animation: "float-slow 20s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "5%",
              left: "10%",
              width: "clamp(200px, 30vw, 450px)",
              height: "clamp(200px, 30vw, 450px)",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
              filter: "blur(50px)",
              animation: "float-slow 25s ease-in-out infinite reverse",
              pointerEvents: "none",
            }}
          />

          {/* Label */}
          <span
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: "clamp(0.6rem, 1vw, 0.75rem)",
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "2.5rem",
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s",
            }}
          >
            Sacramento&apos;s AI-Powered Agency
          </span>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(3rem, 12vw, 10rem)",
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: "-0.05em",
              textAlign: "center",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
              margin: 0,
            }}
          >
            {["We", "don\u2019t", "do"].map((word, wi) => (
              <span key={wi} style={{ display: "inline-block", overflow: "hidden", marginRight: "0.25em" }}>
                <span
                  style={{
                    display: "inline-block",
                    opacity: heroLoaded ? 1 : 0,
                    transform: heroLoaded ? "translateY(0)" : "translateY(100%)",
                    transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${0.3 + wi * 0.08}s`,
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  {word}
                </span>
              </span>
            ))}
            <br />
            <span style={{ display: "inline-block", overflow: "hidden" }}>
              <span
                style={{
                  display: "inline-block",
                  opacity: heroLoaded ? 1 : 0,
                  transform: heroLoaded ? "translateY(0)" : "translateY(100%)",
                  transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.6s",
                  background: "linear-gradient(135deg, #6366f1, #06b6d4, #10b981)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ordinary.
              </span>
            </span>
          </h1>

          {/* Tagline */}
          <div ref={taglineRef}>
            <p
              style={{
                fontSize: "clamp(1rem, 2.2vw, 1.4rem)",
                color: "rgba(255,255,255,0.35)",
                maxWidth: 520,
                textAlign: "center",
                lineHeight: 1.6,
                marginTop: "2.5rem",
                fontFamily: "ui-sans-serif, system-ui, sans-serif",
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.85s",
              }}
            >
              Design. Code. Growth. AI.
              <br />
              One studio, everything your business needs.
            </p>
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: "3rem",
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
              transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 1.1s",
            }}
          >
            <MagneticButton
              href="/pricing"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "18px 40px",
                background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                color: "#fff",
                borderRadius: 60,
                fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: "ui-sans-serif, system-ui, sans-serif",
                letterSpacing: "-0.01em",
                boxShadow: "0 0 40px rgba(99,102,241,0.3), 0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              Start a project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MagneticButton>
          </div>

          {/* Scroll indicator */}
          <div
            style={{
              position: "absolute",
              bottom: 40,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              opacity: heroLoaded ? 0.3 : 0,
              transition: "opacity 1.5s ease 1.8s",
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
            <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
          </div>
        </section>

        {/* ═══ MARQUEE ═══ */}
        <div className="bd-section" style={{ borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
          <Marquee texts={["Web Design", "SEO", "Social Media", "AI Automation", "Lead Generation", "Branding", "Content Creation", "Custom Tools", "Digital Marketing", "Consulting"]} />
        </div>

        {/* ═══ PROBLEM ═══ */}
        <section className="bd-section" style={{ padding: "clamp(6rem, 18vh, 12rem) clamp(24px, 8vw, 96px)", maxWidth: 900, margin: "0 auto" }}>
          <TextReveal text="Your competitors are ranking on Google. Getting the calls. Closing the deals. And you're wondering why your phone isn't ringing." />
          <div style={{ marginTop: "3rem" }}>
            <ProblemHit />
          </div>
        </section>

        {/* ═══ STATS ═══ */}
        <section className="bd-section" style={{ padding: "clamp(4rem, 12vh, 8rem) clamp(24px, 8vw, 96px)", display: "flex", justifyContent: "center", gap: "clamp(2rem, 6vw, 6rem)", flexWrap: "wrap" }}>
          <Stat value={93} suffix="%" label="of searches stay on page 1" delay={0} />
          <Stat value={14} suffix="" label="day website delivery" delay={0.15} />
          <Stat value={47} suffix="+" label="businesses transformed" delay={0.3} />
        </section>

        {/* ═══ SERVICES — HORIZONTAL SCROLL ═══ */}
        <HorizontalServices />

        {/* ═══ DIFFERENTIATOR ═══ */}
        <section className="bd-section" style={{ padding: "clamp(8rem, 20vh, 14rem) clamp(24px, 8vw, 96px)", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60vw",
              height: "60vh",
              background: "radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <Differentiator />
        </section>

        {/* ═══ TESTIMONIALS ═══ */}
        <section className="bd-section" style={{ padding: "clamp(6rem, 16vh, 10rem) clamp(24px, 8vw, 96px)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <Testimonial quote="They built our site in 5 days and we got 3 leads in the first week." author="Maria T." role="Elk Grove Restaurant Owner" index={0} />
            <Testimonial quote="Finally, someone who explains digital marketing in plain English." author="David R." role="Folsom Contractor" index={1} />
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className="bd-section" style={{ padding: "clamp(8rem, 22vh, 16rem) clamp(24px, 8vw, 96px)", textAlign: "center", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "clamp(300px, 50vw, 700px)",
              height: "clamp(300px, 50vw, 700px)",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, rgba(6,182,212,0.05) 40%, transparent 70%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />
          <CTASection />
        </section>

        {/* ═══ BOTTOM MARQUEE ═══ */}
        <div className="bd-section" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <Marquee texts={["Sacramento", "Elk Grove", "Folsom", "Roseville", "Rancho Cordova", "Davis", "Woodland", "Citrus Heights"]} speed={35} />
        </div>

        {/* SEO hidden content */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap" }}
        >
          <h1>Bamberg Digital — Sacramento&apos;s AI-Powered Digital Agency</h1>
          <p>We don&apos;t do ordinary. Sacramento&apos;s AI-powered digital agency. Web design from $497. SEO from $297/mo. Social media from $199/mo. AI automation, lead generation, branding, content creation.</p>
          <p>Your competitors are ranking on Google, getting calls, closing deals. 93% of searches stay on page 1. 14-day website delivery.</p>
          <p>Powered by AI, run by humans. Jason Bamberg, Founder. (916) 907-7782. hello@bambergdigital.com.</p>
          <p>Serving Sacramento, Elk Grove, Folsom, Roseville, Rancho Cordova, Davis, Woodland, Citrus Heights.</p>
        </div>
      </div>
    </>
  );
}
