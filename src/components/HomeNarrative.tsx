"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Cursor from "./Cursor";
import IglooLoader from "./IglooLoader";
import AudioToggle from "./AudioToggle";
import SplitReveal from "./motion/SplitReveal";
import MagneticButton from "./motion/MagneticButton";
import { CATALOG, CATEGORIES, type CatItem } from "@/data/catalog";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* The 3D world is now persistent in the root canvas (WorldScene).
   Sections sit above it with semi-transparent backgrounds. */

/* ═══════════════════════════════════════════════════════════════════
   IGLOO.INC-INSPIRED HOMEPAGE — Bamberg Digital
   Icy slate palette · Fraunces serif · Frosted glass · Pure CSS anim
   ═══════════════════════════════════════════════════════════════════ */

const C = {
  bg: "#0a0e16",
  bgMid: "#141822",
  bgLight: "#1f2532",
  ink: "#1a1f2e",
  inkSoft: "#3a4050",
  cream: "#F5F2EB",
  creamSoft: "#E8E2D5",
  accent: "#e8872b",
  ice: "rgba(255,255,255,0.6)",
  iceLine: "rgba(255,255,255,0.18)",
  iceDeep: "rgba(255,255,255,0.08)",
  white: "#ffffff",
  whiteSoft: "rgba(255,255,255,0.75)",
  whiteMute: "rgba(255,255,255,0.45)",
};

const SERIF = "var(--font-fraunces, 'Fraunces', 'Cormorant Garamond', serif)";
const HEAD = "var(--font-montserrat, 'Montserrat'), sans-serif";
const MONO = "var(--font-mono, 'JetBrains Mono'), monospace";

/* ─── Types & Catalog imported from "@/data/catalog" ─────────────── */

/* ─── Services ────────────────────────────────────────────────────── */
const SERVICES = [
  {
    num: "01",
    title: "Web Design & Development",
    price: "From $497",
    desc: "No templates. Built to convert.",
    full: "Custom-built sites engineered for conversion. Clean, fast, accessible code that ranks and converts.",
  },
  {
    num: "02",
    title: "SEO & Search Systems",
    price: "From $297/mo",
    desc: "Rankings that compound.",
    full: "Technical SEO, content strategy, and local search optimization. We build ranking systems that compound over time.",
  },
  {
    num: "03",
    title: "Lead Generation",
    price: "From $197/mo",
    desc: "Verified contacts, your territory.",
    full: "Verified leads with real contact data. Every lead is someone who needs what you sell, in your service area.",
  },
  {
    num: "04",
    title: "AI & Automation",
    price: "From $997",
    desc: "Your business runs while you sleep.",
    full: "Chatbots, AI voice agents, workflow automation, and custom tools. Your business keeps working around the clock.",
  },
  {
    num: "05",
    title: "Branding & Identity",
    price: "From $697",
    desc: "Logo, colors, typography system.",
    full: "Logo, color systems, typography, and brand guidelines that make your business look as good as your work actually is.",
  },
  {
    num: "06",
    title: "Content & Social",
    price: "From $199/mo",
    desc: "Content that builds authority.",
    full: "Photography, video, copywriting, and social media management. Consistent content that drives traffic.",
  },
];

/* ─── Stats ───────────────────────────────────────────────────────── */
const STATS = [
  { value: 47, suffix: "+", label: "Projects shipped" },
  { value: 1, suffix: "", label: "Founder you talk to" },
  { value: 48, suffix: "hr", label: "Response time" },
  { value: 50, suffix: "+", label: "Industry blueprints" },
];

/* ─── Live Work ───────────────────────────────────────────────────── */
const LIVE_WORK = [
  {
    name: "Layer UI",
    category: "SaaS Platform",
    desc: "Remote work OS — chat, tasks, files, CRM, AI. Zero to live in 90 days.",
    url: "https://layerui.io",
    label: "layerui.io ↗",
    metric: "$40 MRR",
    external: true,
    image: "/screenshots/layerui.jpg",
  },
  {
    name: "Recovery Gear",
    category: "E-Commerce",
    desc: "Shopify store for recovery products. Zendrop fulfillment from day one.",
    url: "https://recoverygear.us",
    label: "recoverygear.us ↗",
    metric: "Live Store",
    external: true,
    image: "/screenshots/recovery-gear.jpg",
  },
  {
    name: "Bamberg Digital",
    category: "Agency Site",
    desc: "This site. Next.js, JSON-LD schema, Page 1 Sacramento keywords.",
    url: "https://bambergdigital.com",
    label: "This site ↑",
    metric: "Page 1",
    external: false,
    image: "/screenshots/bambergdigital.jpg",
  },
  {
    name: "NodPod",
    category: "Wellness — Sample",
    desc: "Hero lifestyle photography, conversion-optimized e-commerce.",
    url: "/demo/nodpod",
    label: "View sample →",
    metric: "Sample",
    external: false,
    image: "/screenshots/nodpod.jpg",
  },
  {
    name: "NodPod Luxury",
    category: "Luxury — Sample",
    desc: "Dark editorial hospitality redesign. Cormorant Garamond, gold.",
    url: "/demo/nodpod-luxury",
    label: "View sample →",
    metric: "Sample",
    external: false,
    image: "/screenshots/nodpod-luxury.jpg",
  },
  {
    name: "Bright Smiles",
    category: "Healthcare — Sample",
    desc: "Trust-focused dental practice site, family positioning.",
    url: "/demo/dental",
    label: "View sample →",
    metric: "Sample",
    external: false,
    image: "/screenshots/dental.jpg",
  },
  {
    name: "Tavola Restaurant",
    category: "Restaurant — Blueprint",
    desc: "Reservation-first hospitality site. Hero menu, story-led, mobile checkout.",
    url: "/blueprints/restaurant",
    label: "View blueprint →",
    metric: "Blueprint",
    external: false,
    image: "/screenshots/blueprint-restaurant.jpg",
  },
  {
    name: "Riverside Family Dental",
    category: "Dental — Blueprint",
    desc: "Sidebar-nav clinical layout. Treatment library, online booking, insurance.",
    url: "/blueprints/dental",
    label: "View blueprint →",
    metric: "Blueprint",
    external: false,
    image: "/screenshots/blueprint-dental.jpg",
  },
  {
    name: "Mira Solano Photography",
    category: "Photographer — Blueprint",
    desc: "Editorial masonry portfolio. Process timeline, package pricing, inquire flow.",
    url: "/blueprints/photographer",
    label: "View blueprint →",
    metric: "Blueprint",
    external: false,
    image: "/screenshots/blueprint-photographer.jpg",
  },
  {
    name: "Loft Salon Co.",
    category: "Salon — Blueprint",
    desc: "Booking-first layout, stylist profiles, before/after gallery, gift cards.",
    url: "/blueprints/salon",
    label: "View blueprint →",
    metric: "Blueprint",
    external: false,
    image: "/screenshots/blueprint-salon.jpg",
  },
  {
    name: "Marin Castillo Realtor",
    category: "Real Estate — Blueprint",
    desc: "MLS-style listings grid, neighborhood guides, lead capture on every page.",
    url: "/blueprints/realtor",
    label: "View blueprint →",
    metric: "Blueprint",
    external: false,
    image: "/screenshots/blueprint-realtor.jpg",
  },
  {
    name: "Northwall Brewing Co.",
    category: "Brewery — Blueprint",
    desc: "Taproom menu, event calendar, online merch shop, age verification gate.",
    url: "/blueprints/brewery",
    label: "View blueprint →",
    metric: "Blueprint",
    external: false,
    image: "/screenshots/blueprint-brewery.jpg",
  },
];

/* ═══════════════════════════════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════════════════════════════ */

/* Frosted glass Wireframe previews — adapted to icy palette */
function Wireframe({
  layout,
  accent,
}: {
  layout: CatItem["layout"];
  accent: string;
}) {
  const box: React.CSSProperties = {
    width: "100%",
    aspectRatio: "16/10",
    background: "rgba(255,255,255,0.06)",
    borderRadius: 4,
    padding: 5,
    display: "flex",
    flexDirection: "column",
    gap: 3,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.12)",
  };
  const nav: React.CSSProperties = {
    height: 3,
    background: "rgba(255,255,255,0.2)",
    borderRadius: 1,
  };
  const blk = (op: number): React.CSSProperties => ({
    background: "rgba(255,255,255,0.15)",
    borderRadius: 1,
    opacity: op,
  });

  if (layout === "sidebar")
    return (
      <div style={box}>
        <div style={nav} />
        <div style={{ flex: 1, display: "flex", gap: 3 }}>
          <div style={{ width: "28%", ...blk(0.5) }} />
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <div
              style={{
                height: 6,
                background: accent,
                opacity: 0.25,
                borderRadius: 1,
              }}
            />
            <div style={{ flex: 1, ...blk(0.35) }} />
          </div>
        </div>
      </div>
    );

  if (layout === "grid")
    return (
      <div style={box}>
        <div style={nav} />
        <div
          style={{
            height: 5,
            background: accent,
            opacity: 0.2,
            borderRadius: 1,
          }}
        />
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 3,
          }}
        >
          {[0.4, 0.3, 0.35, 0.3, 0.4, 0.3].map((op, i) => (
            <div key={i} style={blk(op)} />
          ))}
        </div>
      </div>
    );

  if (layout === "gallery")
    return (
      <div style={box}>
        <div style={nav} />
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: 3,
          }}
        >
          <div
            style={{
              gridRow: "1/3",
              background: accent,
              opacity: 0.15,
              borderRadius: 1,
            }}
          />
          <div style={blk(0.35)} />
          <div style={blk(0.25)} />
        </div>
      </div>
    );

  if (layout === "booking")
    return (
      <div style={box}>
        <div style={nav} />
        <div style={{ flex: 1, display: "flex", gap: 3 }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <div
              style={{
                height: 8,
                background: accent,
                opacity: 0.22,
                borderRadius: 1,
              }}
            />
            <div style={{ flex: 1, ...blk(0.3) }} />
          </div>
          <div
            style={{
              width: "35%",
              background: accent,
              opacity: 0.1,
              borderRadius: 1,
              border: `1px solid ${accent}30`,
            }}
          />
        </div>
      </div>
    );

  if (layout === "services")
    return (
      <div style={box}>
        <div style={nav} />
        <div
          style={{
            height: 5,
            background: accent,
            opacity: 0.18,
            borderRadius: 1,
          }}
        />
        <div
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}
        >
          {[0.45, 0.35, 0.3, 0.25].map((op, i) => (
            <div
              key={i}
              style={{
                height: 5,
                borderLeft: `2px solid ${accent}`,
                ...blk(op),
              }}
            />
          ))}
        </div>
      </div>
    );

  if (layout === "store")
    return (
      <div style={box}>
        <div style={nav} />
        <div
          style={{
            height: 5,
            background: accent,
            opacity: 0.15,
            borderRadius: 1,
          }}
        />
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 3,
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <div style={{ flex: 1, ...blk(0.35) }} />
              <div
                style={{
                  height: 3,
                  background: accent,
                  opacity: 0.28,
                  borderRadius: 1,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );

  return (
    <div style={box}>
      <div style={nav} />
      <div
        style={{ flex: 1, background: accent, opacity: 0.12, borderRadius: 2 }}
      />
      <div style={{ display: "flex", gap: 3, height: 8 }}>
        <div style={{ flex: 1, ...blk(0.4) }} />
        <div style={{ flex: 1, ...blk(0.3) }} />
        <div style={{ flex: 1, ...blk(0.2) }} />
      </div>
    </div>
  );
}

/* Animated counter */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(target);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          const dur = 1800;
          const t0 = performance.now();
          setN(0);
          const tick = (now: number) => {
            const p = Math.min((now - t0) / dur, 1);
            setN(Math.round((1 - Math.pow(1 - p, 3)) * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

/* Horizontal draggable work track */
function WorkTrack() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    };
    const onLeave = () => {
      isDown = false;
    };
    const onUp = () => {
      isDown = false;
    };
    const onMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      track.scrollLeft = scrollLeft - (x - startX) * 1.5;
    };

    track.addEventListener("mousedown", onDown);
    track.addEventListener("mouseleave", onLeave);
    track.addEventListener("mouseup", onUp);
    track.addEventListener("mousemove", onMove);
    return () => {
      track.removeEventListener("mousedown", onDown);
      track.removeEventListener("mouseleave", onLeave);
      track.removeEventListener("mouseup", onUp);
      track.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={trackRef}
      style={{
        display: "flex",
        gap: "1.5rem",
        overflowX: "scroll",
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling:
          "touch" as React.CSSProperties["WebkitOverflowScrolling"],
        paddingBottom: "1rem",
        cursor: "grab",
        userSelect: "none",
        scrollbarWidth: "none",
      }}
    >
      {LIVE_WORK.map((w) => (
        <div
          key={w.name}
          style={{
            minWidth: 380,
            flexShrink: 0,
            scrollSnapAlign: "start",
            background: C.iceDeep,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: `1px solid ${C.iceLine}`,
            borderTop: `3px solid ${C.accent}`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: 480,
            overflow: "hidden",
            transition:
              "transform 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.borderTopColor = C.accent;
            const img = e.currentTarget.querySelector(
              ".work-card-img",
            ) as HTMLImageElement | null;
            if (img) img.style.transform = "scale(1.04)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            const img = e.currentTarget.querySelector(
              ".work-card-img",
            ) as HTMLImageElement | null;
            if (img) img.style.transform = "scale(1)";
          }}
        >
          {/* Screenshot preview */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 220,
              overflow: "hidden",
              background: "#1a1f2e",
              borderBottom: `1px solid ${C.iceLine}`,
            }}
          >
            <img
              className="work-card-img"
              src={w.image}
              alt={`${w.name} preview`}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.35) 100%)",
                pointerEvents: "none",
              }}
            />
          </div>
          <div style={{ padding: "1.5rem 1.75rem 0" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "0.75rem",
              }}
            >
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: "0.5rem",
                  letterSpacing: "0.18em",
                  color: C.whiteMute,
                  textTransform: "uppercase",
                  padding: "0.2rem 0.6rem",
                  border: `1px solid ${C.iceLine}`,
                }}
              >
                {w.category}
              </span>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  color: C.accent,
                  letterSpacing: "0.06em",
                }}
              >
                {w.metric}
              </span>
            </div>
            <h3
              style={{
                fontFamily: SERIF,
                fontWeight: 600,
                fontSize: "1.5rem",
                color: C.white,
                letterSpacing: "-0.01em",
                margin: "0.5rem 0 0.5rem",
                fontStyle: "italic",
              }}
            >
              {w.name}
            </h3>
            <p
              style={{
                fontSize: "0.85rem",
                color: C.whiteSoft,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {w.desc}
            </p>
          </div>
          <div style={{ padding: "1.25rem 1.75rem 1.5rem" }}>
            {w.external ? (
              <a
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: MONO,
                  fontSize: "0.55rem",
                  letterSpacing: "0.14em",
                  color: C.whiteMute,
                  textDecoration: "none",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = C.white;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = C.whiteMute;
                }}
              >
                {w.label}
              </a>
            ) : (
              <Link
                href={w.url}
                style={{
                  fontFamily: MONO,
                  fontSize: "0.55rem",
                  letterSpacing: "0.14em",
                  color: C.whiteMute,
                  textDecoration: "none",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
              >
                {w.label}
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

/* Isometric architectural blueprint SVG centerpiece */
function BlueprintSVG() {
  return (
    <svg
      viewBox="0 0 500 500"
      width="100%"
      height="100%"
      style={{
        maxWidth: 520,
        filter: "drop-shadow(0 0 40px rgba(255,255,255,0.08))",
      }}
      aria-hidden="true"
    >
      <defs>
        <style>{`
          .bp-slow { animation: bp-rotate-slow 80s linear infinite; transform-origin: 250px 250px; }
          .bp-mid  { animation: bp-rotate-slow 55s linear infinite reverse; transform-origin: 250px 250px; }
          .bp-fast { animation: bp-rotate-slow 35s linear infinite; transform-origin: 250px 250px; }
          @keyframes bp-rotate-slow {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
        `}</style>
      </defs>

      {/* Coordinate grid marks */}
      {[100, 150, 200, 250, 300, 350, 400].map((v) => (
        <g key={`h${v}`}>
          <line
            x1={v - 4}
            y1="250"
            x2={v + 4}
            y2="250"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="0.75"
          />
          <line
            x1="250"
            y1={v - 4}
            x2="250"
            y2={v + 4}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="0.75"
          />
        </g>
      ))}

      {/* Outer ring — slow */}
      <g className="bp-slow">
        <polygon
          points="250,80 420,170 420,330 250,420 80,330 80,170"
          fill="none"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="0.75"
          strokeDasharray="6 4"
        />
        <circle cx="250" cy="80" r="2.5" fill="rgba(255,255,255,0.3)" />
        <circle cx="420" cy="170" r="2.5" fill="rgba(255,255,255,0.3)" />
        <circle cx="420" cy="330" r="2.5" fill="rgba(255,255,255,0.3)" />
        <circle cx="250" cy="420" r="2.5" fill="rgba(255,255,255,0.3)" />
        <circle cx="80" cy="330" r="2.5" fill="rgba(255,255,255,0.3)" />
        <circle cx="80" cy="170" r="2.5" fill="rgba(255,255,255,0.3)" />
      </g>

      {/* Mid ring — reverse */}
      <g className="bp-mid">
        <rect
          x="155"
          y="155"
          width="190"
          height="190"
          rx="2"
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="0.75"
          strokeDasharray="4 6"
        />
        <circle cx="155" cy="155" r="2" fill="rgba(255,255,255,0.25)" />
        <circle cx="345" cy="155" r="2" fill="rgba(255,255,255,0.25)" />
        <circle cx="345" cy="345" r="2" fill="rgba(255,255,255,0.25)" />
        <circle cx="155" cy="345" r="2" fill="rgba(255,255,255,0.25)" />
        {/* Cross diagonals */}
        <line
          x1="155"
          y1="155"
          x2="345"
          y2="345"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="0.5"
        />
        <line
          x1="345"
          y1="155"
          x2="155"
          y2="345"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="0.5"
        />
      </g>

      {/* Core isometric cube — fast */}
      <g className="bp-fast">
        {/* Top face */}
        <polygon
          points="250,160 310,195 250,230 190,195"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        {/* Left face */}
        <polygon
          points="190,195 250,230 250,300 190,265"
          fill="rgba(255,255,255,0.02)"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        {/* Right face */}
        <polygon
          points="250,230 310,195 310,265 250,300"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        {/* Vertical edge lines */}
        <line
          x1="250"
          y1="160"
          x2="250"
          y2="230"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.5"
          strokeDasharray="3 3"
        />
        <line
          x1="190"
          y1="195"
          x2="190"
          y2="265"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.5"
          strokeDasharray="3 3"
        />
        <line
          x1="310"
          y1="195"
          x2="310"
          y2="265"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.5"
          strokeDasharray="3 3"
        />
        {/* Corner dots */}
        <circle cx="250" cy="160" r="2" fill="rgba(255,255,255,0.7)" />
        <circle cx="310" cy="195" r="2" fill="rgba(255,255,255,0.6)" />
        <circle cx="190" cy="195" r="2" fill="rgba(255,255,255,0.6)" />
        <circle cx="250" cy="300" r="2" fill="rgba(255,255,255,0.5)" />
      </g>

      {/* Center crosshair — static */}
      <line
        x1="242"
        y1="250"
        x2="258"
        y2="250"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="0.75"
      />
      <line
        x1="250"
        y1="242"
        x2="250"
        y2="258"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="0.75"
      />
      <circle cx="250" cy="250" r="1.5" fill="rgba(255,255,255,0.55)" />

      {/* Dimension annotation lines */}
      <line
        x1="80"
        y1="460"
        x2="420"
        y2="460"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="0.5"
      />
      <line
        x1="80"
        y1="456"
        x2="80"
        y2="464"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="0.75"
      />
      <line
        x1="420"
        y1="456"
        x2="420"
        y2="464"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="0.75"
      />
      <text
        x="250"
        y="473"
        textAnchor="middle"
        fill="rgba(255,255,255,0.2)"
        fontSize="8"
        fontFamily="monospace"
        letterSpacing="3"
      >
        BD · SAC · 2024
      </text>

      <line
        x1="40"
        y1="80"
        x2="40"
        y2="420"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="0.5"
      />
      <line
        x1="36"
        y1="80"
        x2="44"
        y2="80"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="0.75"
      />
      <line
        x1="36"
        y1="420"
        x2="44"
        y2="420"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="0.75"
      />
    </svg>
  );
}

/* Frosted section tag */
function IcyTag({ children }: { children: string }) {
  return (
    <div
      className="igloo-reveal"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        marginBottom: "1rem",
      }}
    >
      <span style={{ width: 24, height: 1, background: C.iceLine }} />
      <span
        style={{
          fontFamily: MONO,
          fontSize: "0.58rem",
          letterSpacing: "0.22em",
          color: C.whiteMute,
          textTransform: "uppercase",
        }}
      >
        {children}
      </span>
      <span style={{ flex: 1, height: 1, background: C.iceLine }} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════ */
export default function HomeNarrative() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCat, setActiveCat] = useState("all");

  const filtered = useMemo(
    () =>
      activeCat === "all"
        ? CATALOG
        : CATALOG.filter((c) => c.cat === activeCat),
    [activeCat],
  );

  /* Scroll reveals via IntersectionObserver */
  useEffect(() => {
    document.documentElement.classList.add("js-loaded");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("igloo-revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -30px 0px" },
    );
    document.querySelectorAll(".igloo-reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* Nav scroll state */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* GSAP — hero scrub fade/scale on scroll-out */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const ctx = gsap.context(() => {
      const heroSection = document.querySelector(".hero-section");
      const heroContent = document.querySelector(".hero-content");
      if (!heroSection || !heroContent) return;

      gsap.to(heroContent, {
        scale: 1.15,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroSection,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  /* GSAP — catalog grid stagger reveal */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const ctx = gsap.context(() => {
      gsap.from(".catalog-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: { amount: 1.2, from: "start" },
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".catalog-grid",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    });
    return () => ctx.revert();
  }, [filtered]);

  const scrollTo = useCallback((id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  /* ═════════════════════ RENDER ═════════════════════ */
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(31,37,50,0.55) 0%, rgba(20,24,34,0.55) 35%, rgba(10,14,22,0.55) 100%)",
        backgroundAttachment: "fixed",
        color: C.white,
        fontFamily: "var(--font-inter, Inter), system-ui, sans-serif",
        overflowX: "hidden",
        minHeight: "100vh",
        scrollSnapType: "y proximity",
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* Loader */}
      <IglooLoader />

      {/* Cursor */}
      <Cursor />

      {/* ══════════ NAV ══════════ */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "0.6rem 2rem" : "1.25rem 2rem",
          background: scrolled ? "rgba(139,149,166,0.82)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(160%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(160%)" : "none",
          borderBottom: scrolled
            ? `1px solid ${C.iceLine}`
            : "1px solid transparent",
          transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          style={{
            maxWidth: 1360,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: SERIF,
                fontWeight: 500,
                fontStyle: "italic",
                fontSize: "1.2rem",
                color: C.white,
                letterSpacing: "0.01em",
              }}
            >
              BambergDigital
            </span>
          </Link>

          {/* Desktop nav */}
          <div
            className="hidden md:flex"
            style={{ alignItems: "center", gap: "2rem" }}
          >
            {[
              { label: "WORK", target: "live-work" },
              { label: "BLUEPRINTS", target: "blueprints" },
              { label: "CONTACT", target: "contact" },
            ].map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.target)}
                style={{
                  fontFamily: MONO,
                  fontSize: "0.55rem",
                  letterSpacing: "0.2em",
                  color: C.whiteSoft,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.25s",
                  padding: "0.25rem 0",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = C.white;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = C.whiteSoft;
                }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              style={{
                fontFamily: MONO,
                fontSize: "0.55rem",
                letterSpacing: "0.12em",
                color: C.ink,
                background: C.cream,
                border: "none",
                cursor: "pointer",
                padding: "0.45rem 1rem",
                textTransform: "uppercase",
                transition: "background 0.25s, color 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = C.accent;
                e.currentTarget.style.color = C.white;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = C.cream;
                e.currentTarget.style.color = C.ink;
              }}
            >
              FREE AUDIT
            </button>
            <AudioToggle />
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{
              background: "none",
              border: "none",
              color: C.white,
              cursor: "pointer",
              padding: "0.5rem",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden"
            style={{
              padding: "1.5rem 2rem 1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              background: "rgba(139,149,166,0.92)",
              backdropFilter: "blur(20px)",
              borderTop: `1px solid ${C.iceLine}`,
            }}
          >
            {[
              { label: "Work", target: "live-work" },
              { label: "Blueprints", target: "blueprints" },
              { label: "Contact", target: "contact" },
            ].map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.target)}
                style={{
                  fontFamily: MONO,
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  color: C.whiteSoft,
                  textTransform: "uppercase",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ══════════ HERO ══════════ */}
      <section
        id="hero"
        className="hero-section"
        style={{
          minHeight: "100svh",
          scrollSnapAlign: "start",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "7rem 2rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial light at center */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 55% at 55% 45%, rgba(255,255,255,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          className="hero-content"
          style={{
            maxWidth: 1360,
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "minmax(0,2fr) minmax(0,3fr)",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Left column */}
          <div>
            <SplitReveal
              by="word"
              stagger={0.04}
              className="igloo-reveal"
              style={{
                display: "block",
                fontFamily: MONO,
                fontSize: "0.55rem",
                letterSpacing: "0.25em",
                color: C.whiteMute,
                textTransform: "uppercase",
                marginBottom: "1.5rem",
                lineHeight: 1.8,
              }}
            >
              Sacramento · Civic Engineers of the Web · Est. 2024
            </SplitReveal>

            <h1
              style={{
                fontFamily: SERIF,
                fontWeight: 700,
                fontSize: "clamp(2.75rem, 5.5vw, 5.5rem)",
                lineHeight: 1.08,
                color: C.white,
                margin: "0 0 1.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              <SplitReveal
                by="char"
                stagger={0.025}
                style={{ display: "block" }}
              >
                Where digital
              </SplitReveal>
              <SplitReveal
                by="char"
                stagger={0.025}
                delay={0.15}
                style={{
                  display: "block",
                  fontStyle: "italic",
                  color: C.cream,
                }}
              >
                becomes durable.
              </SplitReveal>
            </h1>

            <p
              className="igloo-reveal"
              style={{
                fontFamily: SERIF,
                fontWeight: 400,
                fontSize: "1.05rem",
                color: C.whiteSoft,
                lineHeight: 1.75,
                marginBottom: "2.5rem",
                maxWidth: 380,
              }}
            >
              We don&apos;t build pages — we engineer systems. Every site is a
              blueprint, built to rank, convert, and outlast the competition.
            </p>

            <div
              className="igloo-reveal"
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <MagneticButton strength={0.35}>
                <button
                  onClick={() => scrollTo("blueprints")}
                  style={{
                    fontFamily: MONO,
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    color: C.ink,
                    background: C.cream,
                    border: "none",
                    cursor: "pointer",
                    padding: "0.75rem 1.5rem",
                    textTransform: "uppercase",
                    transition: "background 0.3s, color 0.3s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = C.accent;
                    e.currentTarget.style.color = C.white;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = C.cream;
                    e.currentTarget.style.color = C.ink;
                  }}
                >
                  ENTER CATALOG ↓
                </button>
              </MagneticButton>
              <MagneticButton strength={0.35}>
                <button
                  onClick={() => scrollTo("contact")}
                  style={{
                    fontFamily: MONO,
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    color: C.white,
                    background: "transparent",
                    border: `1px solid ${C.iceLine}`,
                    cursor: "pointer",
                    padding: "0.75rem 1.5rem",
                    textTransform: "uppercase",
                    transition: "border-color 0.3s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.iceLine;
                  }}
                >
                  Free consultation →
                </button>
              </MagneticButton>
            </div>
          </div>

          {/* Right column — the 3D centerpiece is now part of the persistent
              WorldScene canvas (fixed beneath all sections). On desktop, this
              column stays empty so the cube + spine show through. Mobile gets
              the SVG fallback because the canvas is gated off below 768px. */}
          <div
            className="hidden md:flex"
            style={{
              alignItems: "flex-end",
              justifyContent: "center",
              height: 480,
              position: "relative",
            }}
          >
            <span
              style={{
                fontFamily: MONO,
                fontSize: "0.5rem",
                letterSpacing: "0.25em",
                color: C.whiteMute,
                textTransform: "uppercase",
                animation: "igloo-pulse 2.5s ease-in-out infinite",
              }}
            >
              ↓ scroll to enter the world
            </span>
          </div>
          <div
            className="md:hidden"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 360,
            }}
          >
            <BlueprintSVG />
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="igloo-reveal"
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: MONO,
            fontSize: "0.5rem",
            letterSpacing: "0.25em",
            color: C.whiteMute,
            textTransform: "uppercase",
            animation: "igloo-pulse 2.5s ease-in-out infinite",
          }}
        >
          ↓ SCROLL TO BEGIN
        </div>
      </section>

      {/* ══════════ WHY ══════════ */}
      <section
        style={{
          minHeight: "100vh",
          scrollSnapAlign: "start",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "5rem 2rem",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            width: "100%",
            textAlign: "center",
          }}
        >
          <IcyTag>The Method</IcyTag>
          <h2
            style={{
              fontFamily: SERIF,
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: C.white,
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              marginBottom: "3.5rem",
            }}
          >
            <SplitReveal by="char" style={{ display: "block" }}>
              Most agencies build pages.
            </SplitReveal>
            <SplitReveal
              by="char"
              delay={0.2}
              style={{ display: "block", fontStyle: "italic" }}
            >
              We engineer systems.
            </SplitReveal>
          </h2>

          <div
            className="igloo-reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                num: "01",
                title: "Foundation",
                body: "Strategy and architecture before pixels. We map every page to a goal before we write a line of code.",
              },
              {
                num: "02",
                title: "Construction",
                body: "Hand-coded, no templates, no shortcuts. Every build is engineered for your specific audience and intent.",
              },
              {
                num: "03",
                title: "Reinforcement",
                body: "SEO, AI, automation — built in, not bolted on. Your site compounds over time while you run your business.",
              },
            ].map((card) => (
              <div
                key={card.num}
                style={{
                  background: C.iceDeep,
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: `1px solid ${C.iceLine}`,
                  padding: "2rem",
                  textAlign: "left",
                  transition:
                    "transform 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = C.iceLine;
                }}
              >
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: "0.55rem",
                    letterSpacing: "0.2em",
                    color: C.whiteMute,
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  {card.num}
                </span>
                <h3
                  style={{
                    fontFamily: SERIF,
                    fontWeight: 600,
                    fontSize: "1.25rem",
                    color: C.white,
                    fontStyle: "italic",
                    marginBottom: "0.75rem",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: C.whiteSoft,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section
        id="services"
        style={{
          minHeight: "100vh",
          scrollSnapAlign: "start",
          padding: "5rem 2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "rgba(0,0,0,0.04)",
        }}
      >
        <div style={{ maxWidth: 1360, margin: "0 auto", width: "100%" }}>
          <IcyTag>What We Build</IcyTag>
          <h2
            style={{
              fontFamily: SERIF,
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: C.white,
              letterSpacing: "-0.015em",
              marginBottom: "3rem",
            }}
          >
            <SplitReveal by="char" style={{ display: "inline-block" }}>
              {"Six disciplines. "}
            </SplitReveal>
            <SplitReveal
              by="char"
              delay={0.18}
              style={{ display: "inline-block", fontStyle: "italic" }}
            >
              One discipline.
            </SplitReveal>
          </h2>

          <div
            className="igloo-reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {SERVICES.map((s) => (
              <div
                key={s.num}
                style={{
                  background: C.iceDeep,
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: `1px solid ${C.iceLine}`,
                  padding: "1.75rem 2rem",
                  transition:
                    "transform 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, box-shadow 0.4s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 60px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = C.iceLine;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: "0.55rem",
                      letterSpacing: "0.18em",
                      color: C.whiteMute,
                    }}
                  >
                    {s.num}
                  </span>
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: "0.6rem",
                      letterSpacing: "0.04em",
                      color: C.accent,
                      fontWeight: 600,
                    }}
                  >
                    {s.price}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: SERIF,
                    fontWeight: 600,
                    fontSize: "1.2rem",
                    fontStyle: "italic",
                    color: C.white,
                    marginBottom: "0.5rem",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: MONO,
                    fontSize: "0.6rem",
                    letterSpacing: "0.06em",
                    color: C.whiteMute,
                    marginBottom: "0.75rem",
                  }}
                >
                  {s.desc}
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: C.whiteSoft,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {s.full}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ LIVE WORK ══════════ */}
      <section
        id="live-work"
        style={{
          minHeight: "100vh",
          scrollSnapAlign: "start",
          padding: "5rem 2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: 1360, margin: "0 auto", width: "100%" }}>
          <IcyTag>Recent Expeditions</IcyTag>
          <h2
            style={{
              fontFamily: SERIF,
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: C.white,
              letterSpacing: "-0.015em",
              marginBottom: "2.5rem",
            }}
          >
            <SplitReveal by="char" style={{ display: "inline-block" }}>
              {"Live sites. "}
            </SplitReveal>
            <SplitReveal
              by="char"
              delay={0.15}
              style={{ display: "inline-block", fontStyle: "italic" }}
            >
              Real customers.
            </SplitReveal>
          </h2>

          <div className="igloo-reveal">
            <WorkTrack />
          </div>

          <p
            className="igloo-reveal"
            style={{
              fontFamily: MONO,
              fontSize: "0.5rem",
              letterSpacing: "0.18em",
              color: C.whiteMute,
              textTransform: "uppercase",
              marginTop: "1.25rem",
            }}
          >
            ← Drag to explore
          </p>
        </div>
      </section>

      {/* ══════════ STATS ══════════ */}
      <section
        style={{
          scrollSnapAlign: "start",
          padding: "5rem 2rem",
          textAlign: "center",
        }}
      >
        <div
          className="igloo-reveal"
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "3rem",
          }}
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: SERIF,
                  fontWeight: 700,
                  fontStyle: "italic",
                  fontSize: "clamp(3rem, 5vw, 4.5rem)",
                  color: C.white,
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: "0.55rem",
                  letterSpacing: "0.2em",
                  color: C.whiteMute,
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ ABOUT ══════════ */}
      <section
        id="about"
        style={{
          scrollSnapAlign: "start",
          padding: "5rem 2rem",
          background: "rgba(0,0,0,0.04)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0,3fr) minmax(0,2fr)",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          <blockquote
            className="igloo-reveal"
            style={{
              fontFamily: SERIF,
              fontWeight: 600,
              fontStyle: "italic",
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              color: C.white,
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
              margin: 0,
              borderLeft: `2px solid ${C.iceLine}`,
              paddingLeft: "2rem",
            }}
          >
            &ldquo;I build every site like my name is on the door — because it
            is.&rdquo;
          </blockquote>

          <div className="igloo-reveal">
            <p
              style={{
                fontSize: "0.9rem",
                color: C.whiteSoft,
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              Jason Bamberg, founder. Sacramento-based. I run every project
              personally — no account managers, no offshore hand-offs. You get
              direct access to the builder.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <a
                href="mailto:hello@bambergdigital.com"
                style={{
                  fontFamily: MONO,
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  color: C.whiteSoft,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = C.white;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = C.whiteSoft;
                }}
              >
                hello@bambergdigital.com
              </a>
              <a
                href="tel:+19169077782"
                style={{
                  fontFamily: MONO,
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  color: C.whiteSoft,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = C.white;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = C.whiteSoft;
                }}
              >
                (916) 907-7782
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section
        id="contact"
        style={{
          minHeight: "60vh",
          scrollSnapAlign: "start",
          padding: "6rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <h2
          style={{
            fontFamily: SERIF,
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
            color: C.white,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "2.5rem",
            maxWidth: 700,
          }}
        >
          <SplitReveal by="char" style={{ display: "inline-block" }}>
            Let&apos;s build something that lasts.
          </SplitReveal>
        </h2>

        <div
          className="igloo-reveal"
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <MagneticButton strength={0.4}>
            <a
              href="tel:+19169077782"
              style={{
                fontFamily: MONO,
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                color: C.white,
                background: C.accent,
                textDecoration: "none",
                padding: "0.85rem 2rem",
                textTransform: "uppercase",
                transition: "box-shadow 0.3s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(232,135,43,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              BEGIN PROJECT →
            </a>
          </MagneticButton>
        </div>

        <div
          className="igloo-reveal"
          style={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="mailto:hello@bambergdigital.com"
            style={{
              fontFamily: MONO,
              fontSize: "0.55rem",
              letterSpacing: "0.12em",
              color: C.whiteMute,
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = C.white;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = C.whiteMute;
            }}
          >
            hello@bambergdigital.com
          </a>
          <a
            href="tel:+19169077782"
            style={{
              fontFamily: MONO,
              fontSize: "0.55rem",
              letterSpacing: "0.12em",
              color: C.whiteMute,
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = C.white;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = C.whiteMute;
            }}
          >
            (916) 907-7782
          </a>
        </div>
      </section>

      {/* ══════════ BLUEPRINTS CATALOG ══════════ */}
      <section
        id="blueprints"
        style={{
          minHeight: "100vh",
          scrollSnapAlign: "start",
          padding: "5rem 2rem",
          background: "rgba(0,0,0,0.05)",
        }}
      >
        <div style={{ maxWidth: 1360, margin: "0 auto", width: "100%" }}>
          <IcyTag>Industry Blueprints</IcyTag>
          <h2
            style={{
              fontFamily: SERIF,
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: C.white,
              letterSpacing: "-0.015em",
              marginBottom: "2rem",
            }}
          >
            <SplitReveal by="char" style={{ display: "inline-block" }}>
              {"Fifty industries. "}
            </SplitReveal>
            <SplitReveal
              by="char"
              delay={0.18}
              style={{ display: "inline-block", fontStyle: "italic" }}
            >
              One method.
            </SplitReveal>
          </h2>

          {/* Filter pills */}
          <div
            className="igloo-reveal"
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              marginBottom: "2.5rem",
            }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                style={{
                  fontFamily: MONO,
                  fontSize: "0.55rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "0.4rem 0.9rem",
                  border: `1px solid ${activeCat === cat.id ? "rgba(255,255,255,0.5)" : C.iceLine}`,
                  background:
                    activeCat === cat.id
                      ? "rgba(255,255,255,0.12)"
                      : "transparent",
                  color: activeCat === cat.id ? C.white : C.whiteMute,
                  cursor: "pointer",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  if (activeCat !== cat.id) {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                    e.currentTarget.style.color = C.whiteSoft;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCat !== cat.id) {
                    e.currentTarget.style.borderColor = C.iceLine;
                    e.currentTarget.style.color = C.whiteMute;
                  }
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Catalog grid */}
          <div
            className="catalog-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {filtered.map((item) => (
              <Link
                key={item.id}
                href={`/blueprints/${item.id}`}
                className="catalog-card"
                style={{
                  background: C.iceDeep,
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: `1px solid ${C.iceLine}`,
                  padding: "1.25rem",
                  transition:
                    "transform 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.3s",
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)";
                  const img = e.currentTarget.querySelector("img");
                  const overlay = e.currentTarget.querySelector(
                    ".catalog-overlay",
                  ) as HTMLDivElement | null;
                  if (img)
                    (img as HTMLImageElement).style.transform = "scale(1.06)";
                  if (overlay) overlay.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = C.iceLine;
                  const img = e.currentTarget.querySelector("img");
                  const overlay = e.currentTarget.querySelector(
                    ".catalog-overlay",
                  ) as HTMLDivElement | null;
                  if (img)
                    (img as HTMLImageElement).style.transform = "scale(1)";
                  if (overlay) overlay.style.opacity = "0";
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16/10",
                    background: "rgba(255,255,255,0.04)",
                    border: `1px solid ${C.iceLine}`,
                    borderRadius: 4,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={`/screenshots/blueprint-${item.id}.jpg`}
                    alt={`${item.name} demo preview`}
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                      filter: "saturate(0.85) brightness(0.9)",
                    }}
                  />
                  {/* Accent line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: item.accent,
                      opacity: 0.85,
                    }}
                  />
                  {/* Hover overlay */}
                  <div
                    className="catalog-overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.65) 100%)",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-start",
                      padding: "0.75rem",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "0.5rem",
                        letterSpacing: "0.18em",
                        color: "#fff",
                        textTransform: "uppercase",
                        borderBottom: "1px solid rgba(255,255,255,0.5)",
                        paddingBottom: 1,
                      }}
                    >
                      VIEW DEMO →
                    </span>
                  </div>
                </div>
                <div style={{ marginTop: "0.75rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.3rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: HEAD,
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        color: C.white,
                      }}
                    >
                      {item.name}
                    </span>
                    <span
                      style={{
                        fontFamily: MONO,
                        fontSize: "0.45rem",
                        letterSpacing: "0.12em",
                        color: C.whiteMute,
                        textTransform: "uppercase",
                      }}
                    >
                      {item.vibe.split(" & ")[0]}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: MONO,
                      fontSize: "0.5rem",
                      letterSpacing: "0.05em",
                      color: C.whiteMute,
                      margin: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.tag}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer
        style={{
          padding: "2rem",
          background: C.iceDeep,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: `1px solid ${C.iceLine}`,
        }}
      >
        <div
          style={{
            maxWidth: 1360,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: "1rem",
              color: C.whiteSoft,
            }}
          >
            BambergDigital
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: "0.5rem",
              letterSpacing: "0.12em",
              color: C.whiteMute,
              textTransform: "uppercase",
            }}
          >
            © {new Date().getFullYear()} · Sacramento, CA
          </span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a
              href="mailto:hello@bambergdigital.com"
              style={{
                fontFamily: MONO,
                fontSize: "0.5rem",
                letterSpacing: "0.1em",
                color: C.whiteMute,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = C.white;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = C.whiteMute;
              }}
            >
              hello@bambergdigital.com
            </a>
            <a
              href="tel:+19169077782"
              style={{
                fontFamily: MONO,
                fontSize: "0.5rem",
                letterSpacing: "0.1em",
                color: C.whiteMute,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = C.white;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = C.whiteMute;
              }}
            >
              (916) 907-7782
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
