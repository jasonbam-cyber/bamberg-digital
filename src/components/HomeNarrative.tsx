"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Logo from "./Logo";
import PhonePickupSequence from "./PhonePickupSequence";

/* ═════════════════════════════════════════════════════════════════
   BAMBERG DIGITAL — HOMEPAGE (cream / editorial / Sacramento)

   Design system:
   - Surface:   #f4ede0 (warm parchment)
   - Card:      #fefcf6 (warmer white)
   - Ink:       #1a1410 (deep warm ink)
   - Sub-ink:   #4a3f33
   - Mute:      #7a6f63
   - Hot:       #d8472f (single tomato accent — the ONLY hot color)
   - Soft:      #c89e5d (muted golden, used for hairlines/dividers)

   Typography:
   - Display:   Fraunces (italic, optical-size aware) — headlines
   - Body:      Inter — copy
   - Script:    Caveat — handwritten flourishes (signature, "I'll pick up.")
   ═════════════════════════════════════════════════════════════════ */

const C = {
  surface: "#f4ede0",
  surfaceWarm: "#ebe2d0",
  card: "#fefcf6",
  ink: "#1a1410",
  ink2: "#4a3f33",
  mute: "#7a6f63",
  hot: "#d8472f",
  soft: "#c89e5d",
  hairline: "rgba(26,20,16,0.12)",
  hairlineSoft: "rgba(26,20,16,0.06)",
};

const FONT_DISPLAY = "var(--font-fraunces), Georgia, 'Times New Roman', serif";
const FONT_BODY = "var(--font-inter), ui-sans-serif, system-ui, sans-serif";
const FONT_SCRIPT = "var(--font-caveat), 'Brush Script MT', cursive";
const FONT_MONO = "ui-monospace, 'SF Mono', Menlo, monospace";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/* ───────────────────────────────────────────────
   Cursor glow — warm, subtle on cream
   ─────────────────────────────────────────────── */
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
      pos.current.x = lerp(pos.current.x, target.current.x, 0.1);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.1);
      if (ref.current) {
        ref.current.style.transform = `translate(${pos.current.x - 250}px, ${pos.current.y - 250}px)`;
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
        width: 500,
        height: 500,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(216,71,47,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 1,
        willChange: "transform",
        mixBlendMode: "multiply",
      }}
    />
  );
}

/* ───────────────────────────────────────────────
   Scroll progress
   ─────────────────────────────────────────────── */
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
        background: C.hairlineSoft,
      }}
    >
      <div
        ref={ref}
        style={{
          height: "100%",
          background: C.hot,
          transformOrigin: "left",
          transform: "scaleX(0)",
          willChange: "transform",
        }}
      />
    </div>
  );
}

/* ───────────────────────────────────────────────
   useInView (typed)
   ─────────────────────────────────────────────── */
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

/* ───────────────────────────────────────────────
   Magnetic anchor with optional tap-and-hold
   to vibrate (mobile signature moment).
   ─────────────────────────────────────────────── */
function MagneticButton({
  children,
  href,
  style = {},
  vibrateOnHold = false,
}: {
  children: React.ReactNode;
  href: string;
  style?: React.CSSProperties;
  vibrateOnHold?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const holdTimer = useRef<number | null>(null);

  const onMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
  }, []);

  const onLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  }, []);

  const onTouchStart = useCallback(() => {
    if (!vibrateOnHold) return;
    holdTimer.current = window.setTimeout(() => {
      if (typeof navigator !== "undefined" && "vibrate" in navigator) {
        // Soft pulse-then-ring pattern
        navigator.vibrate([60, 80, 200]);
      }
    }, 400);
  }, [vibrateOnHold]);

  const onTouchEnd = useCallback(() => {
    if (holdTimer.current) {
      clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }
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
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
    >
      {children}
    </a>
  );
}

/* ───────────────────────────────────────────────
   Animated counter
   ─────────────────────────────────────────────── */
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const { ref, visible } = useInView(0.3);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const duration = 1600;
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

/* ───────────────────────────────────────────────
   Ringing landline phone illustration
   Pure SVG, with shake + bell-waveform animation.
   ─────────────────────────────────────────────── */
function RingingPhone({ size = 240 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
        display: "inline-block",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes phone-shake {
          0%, 8%, 16%, 100% { transform: rotate(0deg); }
          2% { transform: rotate(-7deg); }
          4% { transform: rotate(7deg); }
          6% { transform: rotate(-4deg); }
          10% { transform: rotate(4deg); }
          12% { transform: rotate(-3deg); }
          14% { transform: rotate(2deg); }
        }
        @keyframes ring-pulse {
          0%, 100% { opacity: 0; transform: scale(0.6); }
          25% { opacity: 0.7; }
          50% { opacity: 0.3; transform: scale(1); }
          75% { opacity: 0; transform: scale(1.4); }
        }
        .phone-svg {
          animation: phone-shake 3.5s ease-in-out infinite;
          transform-origin: 50% 60%;
        }
        .ring-arc {
          transform-origin: center;
          animation: ring-pulse 3.5s ease-out infinite;
        }
        .ring-arc.delay-1 { animation-delay: 0.3s; }
        .ring-arc.delay-2 { animation-delay: 0.6s; }
      `,
        }}
      />
      <svg
        viewBox="0 0 240 240"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="An old-school landline phone, ringing."
        role="img"
      >
        {/* Ring waveform — three concentric arcs */}
        <g style={{ transformOrigin: "180px 60px" }}>
          <circle
            className="ring-arc"
            cx="180"
            cy="60"
            r="24"
            fill="none"
            stroke={C.hot}
            strokeWidth="2"
          />
          <circle
            className="ring-arc delay-1"
            cx="180"
            cy="60"
            r="32"
            fill="none"
            stroke={C.hot}
            strokeWidth="2"
            opacity="0.7"
          />
          <circle
            className="ring-arc delay-2"
            cx="180"
            cy="60"
            r="40"
            fill="none"
            stroke={C.hot}
            strokeWidth="1.5"
            opacity="0.4"
          />
        </g>

        {/* Phone group — receiver + base */}
        <g className="phone-svg">
          {/* Base body */}
          <rect
            x="48"
            y="130"
            width="144"
            height="64"
            rx="8"
            fill={C.ink}
          />
          {/* Base shadow */}
          <ellipse
            cx="120"
            cy="200"
            rx="80"
            ry="6"
            fill={C.ink}
            opacity="0.15"
          />
          {/* Cradle ridge — top of base where receiver sits */}
          <rect
            x="60"
            y="124"
            width="120"
            height="10"
            rx="4"
            fill={C.ink2}
          />
          {/* Dial pad — 12 dots in 4 rows of 3 */}
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2].map((col) => (
              <circle
                key={`${row}-${col}`}
                cx={84 + col * 24}
                cy={148 + row * 12}
                r="3"
                fill={C.surface}
                opacity="0.85"
              />
            ))
          )}

          {/* Receiver — angled across the top of the base */}
          <g transform="translate(40, 70) rotate(-8)">
            {/* Handle bar */}
            <rect
              x="0"
              y="20"
              width="160"
              height="22"
              rx="11"
              fill={C.ink}
            />
            {/* Earpiece (left) */}
            <ellipse cx="14" cy="31" rx="22" ry="20" fill={C.ink} />
            <circle cx="14" cy="31" r="11" fill={C.ink2} />
            {[
              [9, 26],
              [19, 26],
              [9, 36],
              [19, 36],
              [14, 31],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="1.5" fill={C.surface} />
            ))}
            {/* Mouthpiece (right) */}
            <ellipse cx="146" cy="31" rx="22" ry="20" fill={C.ink} />
            <circle cx="146" cy="31" r="11" fill={C.ink2} />
            {[
              [141, 26],
              [151, 26],
              [141, 36],
              [151, 36],
              [146, 31],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="1.5" fill={C.surface} />
            ))}
          </g>

          {/* Coiled cord from receiver to base */}
          <path
            d="M 175 100 Q 195 110 195 125 Q 175 130 195 140"
            stroke={C.ink2}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}

/* ───────────────────────────────────────────────
   Handwritten signature — animated SVG path.
   Falls back to Caveat font for Jason's name.
   ─────────────────────────────────────────────── */
function JasonSignature({ size = 1, color = C.hot }: { size?: number; color?: string }) {
  const { ref, visible } = useInView(0.3);
  return (
    <div
      ref={ref}
      style={{
        display: "inline-block",
        position: "relative",
        lineHeight: 1,
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes sig-draw {
          to { stroke-dashoffset: 0; }
        }
      `,
        }}
      />
      {/*
        SVG signature path drawn to look hand-scribbled.
        Total path length is set as stroke-dasharray so the dash
        animation reveals the strokes left-to-right.
      */}
      <svg
        width={260 * size}
        height={86 * size}
        viewBox="0 0 260 86"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Jason — handwritten signature"
        role="img"
        style={{ overflow: "visible" }}
      >
        {/*
          Stylized "Jason" written as a single continuous path:
          - J   loop down, hook left, vertical stem
          - a   tiny curl
          - s   compact s-curve
          - o   loop
          - n   two humps
          Followed by an underscore flourish.
        */}
        <path
          d="
            M 24 18
            C 30 8, 44 12, 42 24
            L 38 56
            C 36 70, 22 74, 14 64
            M 56 38
            C 58 30, 70 28, 72 38
            C 74 48, 60 52, 56 44
            C 58 50, 70 52, 76 46
            M 90 36
            C 96 30, 110 32, 104 40
            C 96 48, 88 50, 100 56
            C 110 60, 116 52, 112 46
            M 130 40
            C 122 38, 120 52, 130 54
            C 142 56, 142 40, 132 38
            M 156 56
            L 158 36
            C 162 30, 174 30, 174 40
            L 174 58
            M 192 60
            Q 222 70, 246 56
            "
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{
            strokeDasharray: 600,
            strokeDashoffset: visible ? 0 : 600,
            transition: "stroke-dashoffset 1.6s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </svg>
    </div>
  );
}

/* ───────────────────────────────────────────────
   Conversational service picker
   Pick chip → outcome reveal
   ─────────────────────────────────────────────── */

const NEEDS = [
  {
    chip: "A new website",
    intent: "I need a new website",
    outcome:
      "I build sites that bring in customers — not ones that just sit there. Most go live in 2 weeks. Pricing starts at $497.",
    href: "/web-design",
    proof: "Recently shipped: a 5-day rebuild for an Elk Grove restaurant — 3 leads in week one.",
  },
  {
    chip: "Show up on Google",
    intent: "I want to show up on Google",
    outcome:
      "Local SEO that gets you to the top of the map pack and keeps you there. Plans from $297/mo.",
    href: "/seo",
    proof: "Folsom contractor — page 4 to top 3 in 6 months.",
  },
  {
    chip: "More leads",
    intent: "I need more leads",
    outcome:
      "Verified, qualified leads delivered weekly. No cold-calling, no scraping. From $397/mo.",
    href: "/leads",
    proof: "Roseville home-services client averaging 12 booked appointments per week.",
  },
  {
    chip: "Social media",
    intent: "Help with social media",
    outcome:
      "Content that builds your brand and connects with real people. 3 posts/week from $199/mo.",
    href: "/social-media",
    proof: "Citrus Heights boutique grew Instagram followers 4x in 90 days.",
  },
  {
    chip: "A fresh brand",
    intent: "I need a fresh brand",
    outcome:
      "Logo, colors, voice — an identity that finally feels like the business in your head.",
    href: "/branding",
    proof: "Davis cafe rebrand — featured in Sacramento Magazine.",
  },
  {
    chip: "Everything",
    intent: "I want it all done for me",
    outcome:
      "Full-service growth bundles — one bill, one team, real measurable results. Starting at $19/seat/mo.",
    href: "/bundles",
    proof: "Most picked by founders who'd rather just run their business.",
  },
];

function ServicePicker() {
  const [active, setActive] = useState<number | null>(null);
  const { ref, visible } = useInView(0.15);

  const current = active !== null ? NEEDS[active] : null;

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <p
        style={{
          fontFamily: FONT_BODY,
          fontSize: "clamp(1rem, 1.7vw, 1.15rem)",
          color: C.ink2,
          lineHeight: 1.5,
          marginBottom: "1.4rem",
        }}
      >
        I&apos;m looking for{" "}
        <span style={{ color: C.mute, fontStyle: "italic" }}>
          (pick one — you can always say &ldquo;all of it&rdquo;)
        </span>
      </p>

      {/* Chip row */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          marginBottom: "2.5rem",
        }}
      >
        {NEEDS.map((n, i) => {
          const isActive = active === i;
          return (
            <button
              key={n.chip}
              type="button"
              onClick={() => setActive(i)}
              style={{
                fontFamily: FONT_BODY,
                fontSize: "clamp(0.9rem, 1.4vw, 1rem)",
                fontWeight: 600,
                padding: "12px 20px",
                borderRadius: 999,
                border: `1.5px solid ${isActive ? C.ink : C.hairline}`,
                background: isActive ? C.ink : "transparent",
                color: isActive ? C.surface : C.ink2,
                cursor: "pointer",
                letterSpacing: "-0.005em",
                transition: "all 0.25s cubic-bezier(0.23,1,0.32,1)",
                boxShadow: isActive
                  ? "0 6px 16px rgba(26,20,16,0.18)"
                  : "none",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = C.ink2;
                  e.currentTarget.style.color = C.ink;
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = C.hairline;
                  e.currentTarget.style.color = C.ink2;
                }
              }}
            >
              {n.chip}
            </button>
          );
        })}
      </div>

      {/* Outcome card */}
      <div
        style={{
          background: current ? C.card : "transparent",
          border: current ? `1px solid ${C.hairline}` : "1px dashed transparent",
          borderRadius: 20,
          padding: current ? "2rem clamp(1.2rem, 3vw, 2.4rem)" : "0",
          minHeight: current ? "auto" : 0,
          transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
          opacity: current ? 1 : 0,
          transform: current ? "translateY(0)" : "translateY(-10px)",
          maxHeight: current ? 800 : 0,
          overflow: "hidden",
        }}
      >
        {current && (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 12,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: C.hot,
                }}
              />
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: C.mute,
                }}
              >
                Here&apos;s how that goes
              </span>
            </div>
            <h3
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 700,
                fontStyle: "italic",
                color: C.ink,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              {current.outcome}
            </h3>
            <p
              style={{
                fontFamily: FONT_BODY,
                fontSize: "clamp(0.92rem, 1.5vw, 1.05rem)",
                color: C.ink2,
                lineHeight: 1.6,
                marginBottom: "1.5rem",
                fontStyle: "italic",
              }}
            >
              ↳ {current.proof}
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <a
                href={current.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 22px",
                  background: C.ink,
                  color: C.surface,
                  borderRadius: 999,
                  fontFamily: FONT_BODY,
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  letterSpacing: "-0.005em",
                }}
              >
                See the full breakdown
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10m0 0L9 4m4 4L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="tel:9169077782"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 20px",
                  background: "transparent",
                  color: C.ink,
                  borderRadius: 999,
                  fontFamily: FONT_BODY,
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  border: `1.5px solid ${C.hairline}`,
                }}
              >
                Or just call me
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────
   Stat
   ─────────────────────────────────────────────── */
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
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        textAlign: "left",
        flex: "1 1 200px",
      }}
    >
      <div
        style={{
          fontFamily: FONT_DISPLAY,
          fontSize: "clamp(2.6rem, 7vw, 4.2rem)",
          fontWeight: 800,
          fontStyle: "italic",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          color: C.ink,
        }}
      >
        <AnimatedCounter value={value} suffix={suffix} />
      </div>
      <p
        style={{
          fontFamily: FONT_BODY,
          fontSize: "clamp(0.78rem, 1.3vw, 0.92rem)",
          color: C.mute,
          marginTop: 10,
          letterSpacing: "0.02em",
          lineHeight: 1.4,
        }}
      >
        {label}
      </p>
    </div>
  );
}

/* ───────────────────────────────────────────────
   Voicemail testimonial (single rotating player)
   ─────────────────────────────────────────────── */
const VOICEMAILS = [
  {
    transcript:
      "Hey Jason, it's Maria. We got 3 leads this week from the new site. Three! In the first week. Just wanted to say thank you — and you actually answer your phone, which is wild. OK, talk soon.",
    author: "Maria T.",
    role: "Elk Grove Restaurant Owner",
    duration: "0:38",
  },
  {
    transcript:
      "Jason, hey, it's David. So I was talking to my buddy and I said, 'finally someone who explains this stuff in plain English.' He wants your number. Hope that's OK. Catch you later, man.",
    author: "David R.",
    role: "Folsom Contractor",
    duration: "0:24",
  },
  {
    transcript:
      "Hi Jason, this is Lina. I just want to say — I'd been burned by two other agencies before you. Night and day. You treat my business like it's yours. So thank you. OK, bye.",
    author: "Lina K.",
    role: "Roseville Boutique Owner",
    duration: "0:31",
  },
];

function VoicemailPlayer() {
  const { ref, visible } = useInView(0.2);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const v = VOICEMAILS[active];

  // Generated waveform — 60 bars with seeded "voice-like" amplitude
  const bars = Array.from({ length: 60 }, (_, i) => {
    const phase = i * 0.25 + active * 1.7;
    const env = Math.sin((i / 60) * Math.PI); // envelope
    const detail = (Math.sin(phase * 1.3) + Math.sin(phase * 2.7)) / 2;
    return Math.max(0.15, env * (0.55 + detail * 0.45));
  });

  return (
    <div
      ref={ref}
      style={{
        background: C.card,
        border: `1px solid ${C.hairline}`,
        borderRadius: 24,
        padding: "clamp(1.6rem, 3vw, 2.5rem)",
        maxWidth: 760,
        margin: "0 auto",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
        boxShadow: "0 24px 48px rgba(26,20,16,0.06)",
      }}
    >
      {/* Header — voicemail metadata */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          marginBottom: "1.4rem",
          paddingBottom: "1.2rem",
          borderBottom: `1px solid ${C.hairlineSoft}`,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: C.hot,
            }}
          />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: C.mute,
            }}
          >
            Voicemail · {v.duration}
          </span>
        </div>
        <div
          style={{
            fontFamily: FONT_BODY,
            fontSize: "0.85rem",
            color: C.ink,
            fontWeight: 600,
          }}
        >
          {v.author}{" "}
          <span style={{ color: C.mute, fontWeight: 400 }}>· {v.role}</span>
        </div>
      </div>

      {/* Player row — play button + waveform */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.2rem",
          marginBottom: "1.4rem",
        }}
      >
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause voicemail" : "Play voicemail"}
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            border: "none",
            background: C.ink,
            color: C.surface,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {playing ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
              <rect x="3" y="2" width="4" height="14" rx="1" />
              <rect x="11" y="2" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
              <path d="M4 2v14l12-7L4 2z" />
            </svg>
          )}
        </button>

        {/* Waveform */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: 2,
            height: 48,
          }}
        >
          {bars.map((amp, i) => (
            <span
              key={i}
              style={{
                flex: 1,
                height: `${amp * 100}%`,
                background: playing && i < (Date.now() / 80) % 60 ? C.hot : C.ink2,
                opacity: playing && i < (Date.now() / 80) % 60 ? 0.9 : 0.35,
                borderRadius: 2,
                transition: "opacity 0.1s ease, background 0.1s ease",
              }}
            />
          ))}
        </div>
      </div>

      {/* Transcript */}
      <p
        style={{
          fontFamily: FONT_DISPLAY,
          fontSize: "clamp(1.05rem, 2vw, 1.35rem)",
          fontStyle: "italic",
          color: C.ink,
          lineHeight: 1.5,
          letterSpacing: "-0.01em",
          marginBottom: "1.4rem",
        }}
      >
        &ldquo;{v.transcript}&rdquo;
      </p>

      {/* Voicemail switcher dots */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", gap: 8 }}>
          {VOICEMAILS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setActive(i);
                setPlaying(false);
              }}
              aria-label={`Voicemail ${i + 1} of ${VOICEMAILS.length}`}
              style={{
                width: i === active ? 28 : 8,
                height: 8,
                borderRadius: 4,
                border: "none",
                background: i === active ? C.ink : C.hairline,
                cursor: "pointer",
                transition: "all 0.25s cubic-bezier(0.23,1,0.32,1)",
                padding: 0,
              }}
            />
          ))}
        </div>
        <span
          style={{
            fontFamily: FONT_MONO,
            fontSize: "0.7rem",
            color: C.mute,
            letterSpacing: "0.1em",
          }}
        >
          {active + 1} / {VOICEMAILS.length}
        </span>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────
   Live Sacramento weather + time line
   ─────────────────────────────────────────────── */
function SacramentoLive() {
  const [data, setData] = useState<{ tempF: number | null; time: string }>({
    tempF: null,
    time: "",
  });

  useEffect(() => {
    const updateTime = () => {
      const t = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/Los_Angeles",
        hour: "numeric",
        minute: "2-digit",
      });
      setData((d) => ({ ...d, time: t }));
    };
    updateTime();
    const tick = setInterval(updateTime, 30_000);

    // Open-Meteo — no key, free, accurate
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=38.5816&longitude=-121.4944&current=temperature_2m&temperature_unit=fahrenheit"
    )
      .then((r) => r.json())
      .then((j) => {
        const t = j?.current?.temperature_2m;
        if (typeof t === "number") {
          setData((d) => ({ ...d, tempF: Math.round(t) }));
        }
      })
      .catch(() => {});
    return () => clearInterval(tick);
  }, []);

  return (
    <span
      style={{
        fontFamily: FONT_MONO,
        fontSize: "0.72rem",
        color: C.mute,
        letterSpacing: "0.08em",
      }}
    >
      Sacramento, CA
      {data.tempF !== null ? ` · ${data.tempF}°F` : ""}
      {data.time ? ` · ${data.time}` : ""}
    </span>
  );
}

/* ═══════════════════════════════════════════════
   STYLES
   ═══════════════════════════════════════════════ */
const INLINE_CSS = `
  @keyframes float-slow {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(24px, -32px) rotate(2deg); }
    66% { transform: translate(-18px, 18px) rotate(-1deg); }
  }
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.55; transform: scale(1.18); }
  }
  @keyframes paper-grain {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(-1%, -2%); }
    50% { transform: translate(2%, 1%); }
    75% { transform: translate(-1%, 2%); }
  }

  html { scroll-snap-type: none !important; scroll-padding-top: 0 !important; }

  .bd-homepage {
    background: ${C.surface};
    color: ${C.ink};
    overflow-x: hidden;
    position: relative;
    min-height: 100vh;
  }

  .bd-homepage * { box-sizing: border-box; }

  /* Subtle paper grain */
  .bd-grain {
    position: fixed; top: -50%; left: -50%;
    width: 200%; height: 200%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 2;
    animation: paper-grain 12s steps(8) infinite;
    opacity: 0.6;
    mix-blend-mode: multiply;
  }

  .bd-section { position: relative; z-index: 3; }

  /* Internal nav — light theme */
  .bd-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 90;
    padding: 18px clamp(20px, 5vw, 40px);
    display: flex; justify-content: space-between; align-items: center;
    transition: background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease;
    border-bottom: 1px solid transparent;
  }
  .bd-nav.scrolled {
    background: rgba(244,237,224,0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom-color: ${C.hairlineSoft};
  }
  .bd-nav-links { display: flex; align-items: center; gap: 26px; }
  .bd-nav-link {
    font-family: ${FONT_BODY};
    font-size: 0.88rem; font-weight: 500;
    color: ${C.ink2}; text-decoration: none;
    transition: color 0.2s ease;
  }
  .bd-nav-link:hover { color: ${C.ink}; }
  .bd-nav-cta {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 11px 22px; border-radius: 60px;
    background: ${C.ink}; color: ${C.surface};
    text-decoration: none;
    font-family: ${FONT_BODY};
    font-size: 0.88rem; font-weight: 600;
    letter-spacing: -0.005em;
    transition: transform 0.25s ease, background 0.25s ease;
  }
  .bd-nav-cta:hover {
    transform: translateY(-1px);
    background: ${C.hot};
  }
  .bd-hamburger {
    display: none; background: none; border: none; cursor: pointer; padding: 8px;
  }
  .bd-hamburger span {
    display: block; width: 22px; height: 2px;
    background: ${C.ink}; margin: 4px 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  .bd-mobile-menu {
    position: fixed; inset: 0; z-index: 89;
    background: ${C.surface};
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
    gap: 20px; padding: 40px;
    opacity: 0; pointer-events: none;
    transition: opacity 0.4s ease;
  }
  .bd-mobile-menu.open { opacity: 1; pointer-events: all; }
  .bd-mobile-menu a {
    font-family: ${FONT_DISPLAY};
    font-style: italic;
    font-size: clamp(1.4rem, 4vw, 2rem);
    font-weight: 700; color: ${C.ink};
    text-decoration: none; letter-spacing: -0.02em;
    transition: color 0.2s ease;
  }
  .bd-mobile-menu a:hover { color: ${C.hot}; }

  .bd-footer-wrap {
    scroll-snap-align: none;
    background: ${C.surfaceWarm};
    color: ${C.ink2};
  }

  @media (max-width: 768px) {
    .bd-nav-links { display: none; }
    .bd-hamburger { display: block; }
  }
`;

/* ═══════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════ */
export default function HomeNarrative() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Body color override — switch from white to cream
  useEffect(() => {
    const prevBg = document.body.style.background;
    const prevColor = document.body.style.color;
    document.body.style.background = C.surface;
    document.body.style.color = C.ink;
    return () => {
      document.body.style.background = prevBg;
      document.body.style.color = prevColor;
    };
  }, []);

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
          <Logo variant="wordmark" theme="cream" size={36} />
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
            style={{ color: C.hot }}
          >
            (916) 907-7782
          </a>
        </div>

        {/* ═══════════════════════════════════════════
            HERO — editorial split, illustrated phone
           ═══════════════════════════════════════════ */}
        <section
          className="bd-section"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "120px clamp(24px, 6vw, 80px) 80px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Soft warm orbs */}
          <div
            style={{
              position: "absolute",
              top: "8%",
              right: "10%",
              width: "clamp(280px, 38vw, 560px)",
              height: "clamp(280px, 38vw, 560px)",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(216,71,47,0.1) 0%, transparent 70%)",
              filter: "blur(60px)",
              animation: "float-slow 22s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "5%",
              left: "5%",
              width: "clamp(220px, 32vw, 480px)",
              height: "clamp(220px, 32vw, 480px)",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(200,158,93,0.18) 0%, transparent 70%)",
              filter: "blur(55px)",
              animation: "float-slow 28s ease-in-out infinite reverse",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              maxWidth: 1280,
              width: "100%",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
              gap: "clamp(2rem, 5vw, 5rem)",
              alignItems: "center",
            }}
          >
            {/* Left — copy */}
            <div>
              {/* Eyebrow */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: "2.2rem",
                  padding: "8px 16px",
                  borderRadius: 999,
                  background: C.card,
                  border: `1px solid ${C.hairline}`,
                  opacity: heroLoaded ? 1 : 0,
                  transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s",
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
                    fontFamily: FONT_MONO,
                    fontSize: "0.7rem",
                    color: C.ink2,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  Hand-built in Sacramento, CA
                </span>
              </div>

              {/* Headline — serif, italic, editorial */}
              <h1
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: "clamp(2.8rem, 7.5vw, 6.4rem)",
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: "-0.035em",
                  color: C.ink,
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                {["Your", "phone"].map((word, wi) => (
                  <span
                    key={wi}
                    style={{
                      display: "inline-block",
                      overflow: "hidden",
                      marginRight: "0.22em",
                      paddingBottom: "0.15em",
                      paddingTop: "0.04em",
                      verticalAlign: "top",
                      lineHeight: 1,
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        opacity: heroLoaded ? 1 : 0,
                        transform: heroLoaded
                          ? "translateY(0)"
                          : "translateY(110%)",
                        transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${0.3 + wi * 0.07}s`,
                        lineHeight: 1,
                      }}
                    >
                      {word}
                    </span>
                  </span>
                ))}
                <br />
                <span
                  style={{
                    display: "inline-block",
                    overflow: "hidden",
                    paddingBottom: "0.18em",
                    paddingTop: "0.04em",
                    verticalAlign: "top",
                    lineHeight: 1,
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      color: C.ink2,
                      opacity: heroLoaded ? 1 : 0,
                      transform: heroLoaded
                        ? "translateY(0)"
                        : "translateY(110%)",
                      transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s",
                      lineHeight: 1,
                    }}
                  >
                    should be
                  </span>
                </span>
                <br />
                {/* Single hot color on operative word */}
                <span
                  style={{
                    display: "inline-block",
                    overflow: "hidden",
                    paddingBottom: "0.18em",
                    paddingTop: "0.04em",
                    verticalAlign: "top",
                    lineHeight: 1,
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      color: C.hot,
                      opacity: heroLoaded ? 1 : 0,
                      transform: heroLoaded
                        ? "translateY(0)"
                        : "translateY(110%)",
                      transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.7s",
                      lineHeight: 1,
                    }}
                  >
                    ringing.
                  </span>
                </span>
              </h1>

              {/* Subhead */}
              <p
                style={{
                  fontFamily: FONT_BODY,
                  fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)",
                  color: C.ink2,
                  maxWidth: 540,
                  lineHeight: 1.6,
                  marginTop: "2.2rem",
                  opacity: heroLoaded ? 1 : 0,
                  transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.85s",
                }}
              >
                I&apos;m{" "}
                <span
                  style={{
                    fontFamily: FONT_SCRIPT,
                    fontSize: "1.2em",
                    color: C.hot,
                    fontWeight: 600,
                  }}
                >
                  Jason
                </span>
                . I help Sacramento small businesses get found, get calls,
                and finally feel proud of how they show up online.
              </p>

              {/* CTAs */}
              <div
                style={{
                  marginTop: "2.5rem",
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                  opacity: heroLoaded ? 1 : 0,
                  transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 1.05s",
                }}
              >
                <MagneticButton
                  href="#what-do-you-need"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "16px 30px",
                    background: C.ink,
                    color: C.surface,
                    borderRadius: 999,
                    fontFamily: FONT_BODY,
                    fontSize: "clamp(0.92rem, 1.5vw, 1rem)",
                    fontWeight: 600,
                    textDecoration: "none",
                    letterSpacing: "-0.005em",
                    boxShadow: "0 12px 32px rgba(26,20,16,0.18)",
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

                <MagneticButton
                  href="tel:9169077782"
                  vibrateOnHold
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "16px 26px",
                    background: "transparent",
                    color: C.ink,
                    borderRadius: 999,
                    fontFamily: FONT_BODY,
                    fontSize: "clamp(0.92rem, 1.5vw, 1rem)",
                    fontWeight: 600,
                    textDecoration: "none",
                    border: `1.5px solid ${C.hairline}`,
                    letterSpacing: "-0.005em",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3.5 2.5h2l1 3-1.5 1c.5 1.5 2 3 3.5 3.5l1-1.5 3 1v2A1.5 1.5 0 0 1 11 13C6 13 3 10 3 5a1.5 1.5 0 0 1 .5-2.5z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Or call (916) 907-7782
                </MagneticButton>
              </div>
            </div>

            {/* Right — illustrated ringing phone */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "scale(1)" : "scale(0.92)",
                transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.6s",
              }}
            >
              <RingingPhone size={320} />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            STATS — editorial row
           ═══════════════════════════════════════════ */}
        <section
          className="bd-section"
          style={{
            padding: "clamp(3rem, 8vh, 5rem) clamp(24px, 8vw, 96px)",
            display: "flex",
            justifyContent: "center",
            gap: "clamp(2rem, 6vw, 5rem)",
            flexWrap: "wrap",
            borderTop: `1px solid ${C.hairlineSoft}`,
            borderBottom: `1px solid ${C.hairlineSoft}`,
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          <Stat value={47} suffix="+" label="Sacramento businesses helped" delay={0} />
          <Stat value={1} suffix="" label="founder · every project" delay={0.15} />
          <Stat value={48} suffix="hr" label="average response time" delay={0.3} />
        </section>

        {/* ═══════════════════════════════════════════
            "WHAT DO YOU NEED?" — interactive picker
           ═══════════════════════════════════════════ */}
        <section
          id="what-do-you-need"
          className="bd-section"
          style={{
            padding: "clamp(6rem, 16vh, 10rem) clamp(24px, 8vw, 96px)",
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          <div style={{ marginBottom: "clamp(3rem, 8vh, 4rem)" }}>
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: "0.72rem",
                color: C.hot,
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
                fontFamily: FONT_DISPLAY,
                fontSize: "clamp(2.5rem, 6.5vw, 4.8rem)",
                fontWeight: 800,
                fontStyle: "italic",
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                margin: 0,
                color: C.ink,
              }}
            >
              What do you need?
            </h2>
            <p
              style={{
                fontFamily: FONT_BODY,
                fontSize: "clamp(1rem, 1.7vw, 1.18rem)",
                color: C.ink2,
                marginTop: "1.2rem",
                maxWidth: 580,
                lineHeight: 1.6,
              }}
            >
              Most folks come here for one thing. Tell me what you&apos;re
              after — I&apos;ll show you exactly how it works and what it
              costs, before we ever talk.
            </p>
          </div>

          <ServicePicker />
        </section>

        {/* ═══════════════════════════════════════════
            JASON INTRO — handwritten signature
           ═══════════════════════════════════════════ */}
        <section
          className="bd-section"
          style={{
            padding: "clamp(6rem, 18vh, 12rem) clamp(24px, 8vw, 96px)",
            position: "relative",
            background: C.surfaceWarm,
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: "0.72rem",
                color: C.hot,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#10b981",
                  boxShadow: "0 0 10px #10b981",
                }}
              />
              Available · most calls answered within an hour
            </span>

            <h2
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: "clamp(2rem, 5vw, 3.6rem)",
                fontWeight: 700,
                fontStyle: "italic",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: C.ink,
                marginBottom: "2rem",
              }}
            >
              Hey, I&apos;m{" "}
              <span style={{ color: C.hot }}>Jason</span>.
              <br />
              <span style={{ color: C.ink2, fontStyle: "normal" }}>
                I built this place because
              </span>
              <br />
              <span style={{ color: C.ink2, fontStyle: "normal" }}>
                small businesses deserve better.
              </span>
            </h2>

            <p
              style={{
                fontFamily: FONT_BODY,
                fontSize: "clamp(1rem, 1.85vw, 1.15rem)",
                color: C.ink2,
                lineHeight: 1.75,
                maxWidth: 620,
                marginBottom: "1.2rem",
              }}
            >
              You&apos;ve probably been burned before. A vendor who ghosted.
              An agency that sold you a dashboard and disappeared. Tools that
              don&apos;t talk to each other.
            </p>
            <p
              style={{
                fontFamily: FONT_BODY,
                fontSize: "clamp(1rem, 1.85vw, 1.15rem)",
                color: C.ink2,
                lineHeight: 1.75,
                maxWidth: 620,
                marginBottom: "2rem",
              }}
            >
              That&apos;s not how I work. Every project comes through me.
              You&apos;ll always know who&apos;s building your stuff. And if
              you call,{" "}
              <span
                style={{
                  fontFamily: FONT_SCRIPT,
                  fontSize: "1.4em",
                  color: C.hot,
                  fontWeight: 600,
                }}
              >
                I&apos;ll pick up.
              </span>
            </p>

            {/* Signature block */}
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <JasonSignature size={1} color={C.ink} />
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: "0.72rem",
                  color: C.mute,
                  letterSpacing: "0.05em",
                }}
              >
                Jason Bamberg · Founder · Sacramento, CA
              </span>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SCROLL-DRIVEN PHONE-PICKUP NARRATIVE
            Pinned section, 4 beats: quiet morning →
            ring → Jason picks up → handwritten thank-you note
           ═══════════════════════════════════════════ */}
        <PhonePickupSequence />

        {/* ═══════════════════════════════════════════
            VOICEMAILS — real social proof
           ═══════════════════════════════════════════ */}
        <section
          className="bd-section"
          style={{
            padding: "clamp(5rem, 14vh, 9rem) clamp(24px, 8vw, 96px)",
          }}
        >
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto clamp(2.5rem, 6vh, 4rem)",
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: "0.72rem",
                color: C.hot,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Voicemails I&apos;ve kept
            </span>
            <h2
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: "clamp(2rem, 5vw, 3.4rem)",
                fontWeight: 700,
                fontStyle: "italic",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: C.ink,
                margin: 0,
              }}
            >
              Don&apos;t take my word for it.
            </h2>
          </div>
          <VoicemailPlayer />
        </section>

        {/* ═══════════════════════════════════════════
            FINAL CTA
           ═══════════════════════════════════════════ */}
        <section
          id="contact"
          className="bd-section"
          style={{
            padding: "clamp(7rem, 20vh, 13rem) clamp(24px, 8vw, 96px)",
            textAlign: "center",
            position: "relative",
            background: C.surfaceWarm,
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
                "radial-gradient(circle, rgba(216,71,47,0.1) 0%, transparent 70%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: "clamp(2.4rem, 7vw, 5.4rem)",
                fontWeight: 800,
                fontStyle: "italic",
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                marginBottom: "1.5rem",
                color: C.ink,
              }}
            >
              Tell me about
              <br />
              <span style={{ color: C.hot }}>your business.</span>
            </h2>
            <p
              style={{
                fontFamily: FONT_BODY,
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: C.ink2,
                marginBottom: "2.5rem",
                maxWidth: 540,
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: 1.6,
              }}
            >
              15-minute call. No sales pitch. I&apos;ll tell you straight if I
              can help — or who you should call instead.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.25rem",
              }}
            >
              <MagneticButton
                href="tel:9169077782"
                vibrateOnHold
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontStyle: "italic",
                  fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
                  fontWeight: 800,
                  color: C.ink,
                  textDecoration: "none",
                  letterSpacing: "-0.025em",
                  display: "inline-block",
                }}
              >
                (916) 907-7782
              </MagneticButton>
              <a
                href="mailto:hello@bambergdigital.com"
                style={{
                  fontFamily: FONT_BODY,
                  fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
                  color: C.ink2,
                  textDecoration: "none",
                  borderBottom: `1px solid ${C.hairline}`,
                  paddingBottom: 2,
                }}
              >
                hello@bambergdigital.com
              </a>
              <MagneticButton
                href="mailto:hello@bambergdigital.com"
                style={{
                  marginTop: "1rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "20px 44px",
                  background: C.ink,
                  color: C.surface,
                  borderRadius: 999,
                  fontFamily: FONT_BODY,
                  fontSize: "clamp(1rem, 1.7vw, 1.1rem)",
                  fontWeight: 600,
                  textDecoration: "none",
                  letterSpacing: "-0.005em",
                  boxShadow: "0 12px 32px rgba(26,20,16,0.2)",
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

            {/* Live Sacramento line */}
            <div style={{ marginTop: "3rem" }}>
              <SacramentoLive />
            </div>
          </div>
        </section>

        {/* SEO content */}
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
