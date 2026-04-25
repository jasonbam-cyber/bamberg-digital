"use client";
import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════════════════════
   CSS — namespaced .hn- to avoid collisions with other pages
   ═══════════════════════════════════════════════════════════════ */
const CSS = `
/* ── Reset old scroll-snap ── */
html { scroll-snap-type: none !important; scroll-padding-top: 0 !important; }

/* ── Cursor glow ── */
.hn-cursor {
  position: fixed; width: 600px; height: 600px; border-radius: 50%;
  background: radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%);
  pointer-events: none; z-index: 1;
  transform: translate(-50%, -50%);
  will-change: left, top;
}

/* ── Noise overlay ── */
.hn-noise {
  position: fixed; inset: 0;
  pointer-events: none; z-index: 9998;
  opacity: 0.03; mix-blend-mode: overlay;
}

/* ════════════════ NAV ════════════════ */
.hn-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 20px 32px;
  display: flex; justify-content: space-between; align-items: center;
  transition: background 0.5s, backdrop-filter 0.5s;
}
.hn-nav.scrolled {
  background: rgba(5,5,5,0.8);
  backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
}
.hn-nav-logo {
  font-size: 1rem; font-weight: 700; color: #fff;
  text-decoration: none; letter-spacing: -0.02em;
  font-family: var(--font-montserrat), ui-sans-serif, system-ui, sans-serif;
}
.hn-nav-logo span { color: #00f0ff; }
.hn-nav-links {
  display: flex; align-items: center; gap: 32px;
}
.hn-nav-link {
  font-size: 0.75rem; color: rgba(255,255,255,0.35);
  text-decoration: none; letter-spacing: 0.1em; text-transform: uppercase;
  transition: color 0.3s;
  font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
}
.hn-nav-link:hover { color: #fff; }
.hn-nav-cta {
  font-size: 0.75rem; color: #00f0ff; text-decoration: none;
  letter-spacing: 0.05em; padding: 8px 20px;
  border: 1px solid rgba(0,240,255,0.25); border-radius: 100px;
  transition: background 0.3s, border-color 0.3s;
  font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
}
.hn-nav-cta:hover {
  background: rgba(0,240,255,0.08);
  border-color: rgba(0,240,255,0.5);
}

/* Hamburger */
.hn-hamburger {
  display: none; background: none; border: none; cursor: pointer; padding: 8px;
}
.hn-hamburger span {
  display: block; width: 24px; height: 2px; background: #fff;
  margin: 5px 0; transition: transform 0.3s, opacity 0.3s;
}

/* Full-screen overlay menu */
.hn-menu-overlay {
  position: fixed; inset: 0; z-index: 99;
  background: rgba(5,5,5,0.97);
  backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px);
  display: flex; flex-direction: column;
  justify-content: center; align-items: center; gap: 28px;
  opacity: 0; pointer-events: none; transition: opacity 0.4s;
}
.hn-menu-overlay.open { opacity: 1; pointer-events: all; }
.hn-menu-overlay a {
  font-size: clamp(1.4rem, 4.5vw, 2.2rem); font-weight: 700;
  color: rgba(255,255,255,0.6); text-decoration: none;
  transition: color 0.3s;
  font-family: var(--font-montserrat), ui-sans-serif, system-ui, sans-serif;
}
.hn-menu-overlay a:hover { color: #00f0ff; }

/* ════════════════ SECTIONS ════════════════ */
.hn-section {
  position: relative; min-height: 100vh; min-height: 100svh;
  display: flex; align-items: center; justify-content: center;
  padding: 120px 8vw; overflow: hidden; box-sizing: border-box;
}

/* ── HERO ── */
.hn-hero { flex-direction: column; background: #050505; }
.hn-hero-title {
  font-size: clamp(3.5rem, 20vw, 16rem);
  font-weight: 900; line-height: 0.85; letter-spacing: -0.05em;
  text-align: center; margin: 0; user-select: none;
  background: linear-gradient(135deg, #fff 0%, #777 50%, #fff 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0; transform: translateY(40px);
  animation:
    hn-entrance 1.2s cubic-bezier(0.16,1,0.3,1) 0.2s forwards,
    hn-gradient 8s ease 1.5s infinite;
  font-family: var(--font-montserrat), ui-sans-serif, system-ui, sans-serif;
}
.hn-hero-subtitle {
  font-size: clamp(1.8rem, 8vw, 6.5rem);
  font-weight: 200; letter-spacing: 0.18em;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(255,255,255,0.2);
  text-align: center; margin-top: -0.05em; user-select: none;
  opacity: 0; transform: translateY(30px);
  animation: hn-entrance 1.2s cubic-bezier(0.16,1,0.3,1) 0.45s forwards;
  font-family: var(--font-montserrat), ui-sans-serif, system-ui, sans-serif;
}
.hn-hero-tagline {
  font-size: clamp(0.7rem, 1.4vw, 0.85rem);
  color: rgba(255,255,255,0.18); letter-spacing: 0.3em;
  text-transform: uppercase; margin-top: 3rem;
  opacity: 0;
  animation: hn-entrance 1s cubic-bezier(0.16,1,0.3,1) 0.9s forwards;
  font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
}
.hn-scroll-cue {
  position: absolute; bottom: 36px; left: 50%;
  transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  animation: hn-float 2.8s ease-in-out infinite;
}
.hn-scroll-cue span {
  font-size: 0.6rem; color: rgba(255,255,255,0.12);
  letter-spacing: 0.25em; text-transform: uppercase;
  font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
}
.hn-scroll-line {
  width: 1px; height: 40px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.25), transparent);
}

@keyframes hn-entrance {
  to { opacity: 1; transform: translateY(0); }
}
@keyframes hn-gradient {
  0%,100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
@keyframes hn-float {
  0%,100% { transform: translateX(-50%) translateY(0); opacity: 0.5; }
  50% { transform: translateX(-50%) translateY(14px); opacity: 0.15; }
}

/* ── QUESTION (word reveal) ── */
.hn-question { background: #050505; flex-direction: column; text-align: center; }
.hn-question-text {
  font-size: clamp(2.4rem, 7vw, 5rem);
  font-weight: 800; color: #fff; line-height: 1.15;
  letter-spacing: -0.03em;
  font-family: var(--font-montserrat), ui-sans-serif, system-ui, sans-serif;
}
.hn-word {
  display: inline-block; margin-right: 0.28em;
  opacity: 0; transform: translateY(24px);
  transition: opacity 0.45s, transform 0.45s;
  transition-timing-function: cubic-bezier(0.16,1,0.3,1);
}
.hn-word.visible { opacity: 1; transform: translateY(0); }
.hn-question-answer {
  font-size: clamp(1.4rem, 3.5vw, 2.2rem);
  font-weight: 700; color: #00f0ff; margin-top: 2.5rem;
  opacity: 0; transform: translateY(20px);
  transition: opacity 0.7s 0.2s, transform 0.7s 0.2s;
  transition-timing-function: cubic-bezier(0.16,1,0.3,1);
  font-family: var(--font-montserrat), ui-sans-serif, system-ui, sans-serif;
}
.hn-question-answer.visible { opacity: 1; transform: translateY(0); }

/* ── STAT ── */
.hn-stat { background: #060608; flex-direction: column; text-align: center; }
.hn-stat-wrap { position: relative; display: inline-block; }
.hn-stat-number {
  font-size: clamp(7rem, 26vw, 17rem);
  font-weight: 900; color: #fff; line-height: 0.85;
  letter-spacing: -0.05em;
  font-family: var(--font-montserrat), ui-sans-serif, system-ui, sans-serif;
}
.hn-stat-number span { color: #00f0ff; font-size: 0.5em; }
.hn-stat-ring {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(240px, 42vw, 460px); height: clamp(240px, 42vw, 460px);
  pointer-events: none;
}
.hn-stat-ring circle { fill: none; stroke-width: 1.5; }
.hn-ring-bg { stroke: rgba(255,255,255,0.04); }
.hn-ring-fill {
  stroke: rgba(0,240,255,0.25);
  stroke-dasharray: 1570; stroke-dashoffset: 1570;
  transform: rotate(-90deg); transform-origin: center;
  transition: stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1);
}
.hn-ring-fill.animate { stroke-dashoffset: 110; }
.hn-stat-desc {
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  color: rgba(255,255,255,0.3); margin-top: 2.5rem; line-height: 1.6;
  font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
}
.hn-stat-punch {
  font-size: clamp(0.85rem, 1.8vw, 1.05rem);
  color: #00f0ff; margin-top: 1rem; font-style: italic;
  opacity: 0; transition: opacity 0.7s 0.6s;
  font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
}
.hn-stat-punch.visible { opacity: 1; }

/* ── ANSWER ── */
.hn-answer { background: #050505; text-align: center; }
.hn-answer-text {
  font-size: clamp(2rem, 5.5vw, 4.2rem);
  font-weight: 800; line-height: 1.15; letter-spacing: -0.03em;
  color: #fff; opacity: 0; transform: scale(0.92);
  transition: opacity 0.9s, transform 0.9s;
  transition-timing-function: cubic-bezier(0.16,1,0.3,1);
  font-family: var(--font-montserrat), ui-sans-serif, system-ui, sans-serif;
}
.hn-answer-text.visible { opacity: 1; transform: scale(1); }
.hn-accent { color: #00f0ff; }

/* ── HORIZONTAL SCROLL (services) ── */
.hn-hscroll-outer { position: relative; height: 300vh; background: #050505; }
.hn-hscroll-sticky {
  position: sticky; top: 0; height: 100vh;
  overflow: hidden; display: flex; align-items: center;
}
.hn-hscroll-track {
  display: flex; will-change: transform;
}
.hn-hscroll-panel {
  min-width: 100vw; height: 100vh;
  display: flex; flex-direction: column; justify-content: center;
  padding: 0 12vw; box-sizing: border-box;
}
.hn-svc-label {
  font-size: clamp(0.6rem, 1.1vw, 0.75rem);
  color: rgba(255,255,255,0.15); letter-spacing: 0.25em;
  text-transform: uppercase; margin-bottom: 1.2rem;
  font-family: ui-monospace, 'Fira Code', monospace;
}
.hn-svc-word {
  font-size: clamp(4rem, 15vw, 11rem);
  font-weight: 900; line-height: 0.9; letter-spacing: -0.05em; margin: 0;
  font-family: var(--font-montserrat), ui-sans-serif, system-ui, sans-serif;
}
.hn-svc-desc {
  font-size: clamp(0.95rem, 2.2vw, 1.25rem);
  color: rgba(255,255,255,0.35); margin-top: 1.8rem;
  max-width: 480px; line-height: 1.65;
  font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
}
.hn-svc-link {
  display: inline-block; margin-top: 1.8rem;
  font-size: 0.8rem; color: rgba(255,255,255,0.25);
  text-decoration: none; letter-spacing: 0.06em;
  transition: color 0.3s;
  font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
}
.hn-svc-link:hover { color: #fff; }
.hn-svc-link::after { content: ' \\2192'; }

/* Progress dots */
.hn-hscroll-dots {
  position: absolute; bottom: 40px; left: 50%;
  transform: translateX(-50%); display: flex; gap: 10px; z-index: 10;
}
.hn-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: rgba(255,255,255,0.12);
  transition: background 0.4s, transform 0.4s;
}
.hn-dot.active { background: #00f0ff; transform: scale(1.5); }

/* ── PRICE ── */
.hn-price { background: #060608; flex-direction: column; text-align: center; }
.hn-price-amount {
  font-size: clamp(5rem, 20vw, 15rem);
  font-weight: 900; color: #00f0ff; line-height: 0.85;
  letter-spacing: -0.05em;
  text-shadow: 0 0 100px rgba(0,240,255,0.25);
  opacity: 0; transform: scale(0.4);
  transition: opacity 0.9s, transform 0.9s;
  transition-timing-function: cubic-bezier(0.175,0.885,0.32,1.275);
  font-family: var(--font-montserrat), ui-sans-serif, system-ui, sans-serif;
}
.hn-price-amount.visible { opacity: 1; transform: scale(1); }
.hn-price-label {
  font-size: clamp(1.4rem, 3.5vw, 2rem);
  font-weight: 700; color: #fff; margin-top: 1.8rem;
  letter-spacing: -0.02em;
  opacity: 0; transform: translateY(20px);
  transition: opacity 0.6s 0.3s, transform 0.6s 0.3s;
  transition-timing-function: cubic-bezier(0.16,1,0.3,1);
  font-family: var(--font-montserrat), ui-sans-serif, system-ui, sans-serif;
}
.hn-price-label.visible { opacity: 1; transform: translateY(0); }
.hn-price-detail {
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  color: rgba(255,255,255,0.28); margin-top: 0.8rem;
  opacity: 0; transition: opacity 0.6s 0.65s;
  font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
}
.hn-price-detail.visible { opacity: 1; }
.hn-price-sub {
  font-size: clamp(0.7rem, 1.3vw, 0.8rem);
  color: rgba(255,255,255,0.12); margin-top: 0.5rem;
  opacity: 0; transition: opacity 0.6s 1s;
  font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
}
.hn-price-sub.visible { opacity: 1; }

/* ── CTA ── */
.hn-cta { background: #050505; flex-direction: column; text-align: center; }
.hn-cta-glow {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 550px; height: 550px;
  background: radial-gradient(circle, rgba(0,240,255,0.05) 0%, transparent 70%);
  pointer-events: none;
}
.hn-cta-name {
  font-size: clamp(2rem, 5.5vw, 3.2rem);
  font-weight: 800; color: #fff; letter-spacing: -0.03em;
  opacity: 0; transform: translateY(24px);
  transition: opacity 0.7s, transform 0.7s;
  transition-timing-function: cubic-bezier(0.16,1,0.3,1);
  font-family: var(--font-montserrat), ui-sans-serif, system-ui, sans-serif;
}
.hn-cta-name.visible { opacity: 1; transform: translateY(0); }
.hn-cta-role {
  font-size: clamp(0.65rem, 1.3vw, 0.8rem);
  color: #00f0ff; letter-spacing: 0.22em; text-transform: uppercase;
  margin-top: 0.6rem;
  opacity: 0; transition: opacity 0.5s 0.2s;
  font-family: ui-monospace, 'Fira Code', monospace;
}
.hn-cta-role.visible { opacity: 1; }
.hn-cta-tagline {
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  color: rgba(255,255,255,0.35); margin-top: 2rem;
  line-height: 1.7; max-width: 400px;
  opacity: 0; transform: translateY(16px);
  transition: opacity 0.6s 0.35s, transform 0.6s 0.35s;
  font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
}
.hn-cta-tagline.visible { opacity: 1; transform: translateY(0); }
.hn-cta-phone {
  display: block;
  font-size: clamp(2rem, 7vw, 3.8rem);
  font-weight: 900; color: #fff; text-decoration: none;
  letter-spacing: -0.025em; margin-top: 2.5rem;
  opacity: 0; transform: translateY(20px);
  transition: opacity 0.7s 0.5s, transform 0.7s 0.5s, color 0.3s;
  transition-timing-function: cubic-bezier(0.16,1,0.3,1);
  font-family: var(--font-montserrat), ui-sans-serif, system-ui, sans-serif;
}
.hn-cta-phone.visible { opacity: 1; transform: translateY(0); }
.hn-cta-phone:hover { color: #00f0ff; }
.hn-cta-pickup {
  font-size: clamp(0.75rem, 1.4vw, 0.85rem);
  color: rgba(255,255,255,0.18); margin-top: 0.35rem;
  opacity: 0; transition: opacity 0.5s 0.8s;
  font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
}
.hn-cta-pickup.visible { opacity: 1; }
.hn-cta-email {
  display: inline-flex; align-items: center; gap: 0.5rem;
  margin-top: 3rem; padding: 12px 28px;
  background: rgba(0,240,255,0.04);
  border: 1px solid rgba(0,240,255,0.18);
  color: #00f0ff; border-radius: 100px;
  text-decoration: none; font-weight: 600;
  font-size: clamp(0.82rem, 1.8vw, 0.92rem);
  opacity: 0; transform: translateY(16px);
  transition: opacity 0.6s 1s, transform 0.6s 1s, background 0.3s, border-color 0.3s;
  font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
}
.hn-cta-email.visible { opacity: 1; transform: translateY(0); }
.hn-cta-email:hover {
  background: rgba(0,240,255,0.09);
  border-color: rgba(0,240,255,0.45);
}

/* ════════════════ REDUCED MOTION ════════════════ */
@media (prefers-reduced-motion: reduce) {
  .hn-cursor, .hn-scroll-cue, .hn-noise { display: none !important; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.15s !important;
  }
  .hn-hero-title, .hn-hero-subtitle, .hn-hero-tagline {
    opacity: 1 !important; transform: none !important;
  }
}

/* ════════════════ MOBILE ════════════════ */
@media (max-width: 768px) {
  .hn-nav { padding: 14px 20px; }
  .hn-nav-links { display: none; }
  .hn-hamburger { display: block; }
  .hn-section { padding: 100px 7vw; }
  .hn-hero-subtitle { -webkit-text-stroke-width: 1px; }
  .hn-noise { display: none; }
  .hn-cursor { display: none; }

  /* Vertical stack for services on mobile */
  .hn-hscroll-outer { height: auto !important; }
  .hn-hscroll-sticky { position: relative !important; height: auto !important; flex-direction: column; }
  .hn-hscroll-track {
    flex-direction: column !important;
    transform: none !important;
  }
  .hn-hscroll-panel {
    min-width: 100% !important; height: auto !important;
    min-height: 80svh; padding: 60px 8vw !important;
  }
  .hn-hscroll-dots { display: none; }
}
`;

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function HomeNarrative() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [hasMouse, setHasMouse] = useState(false);
  const [statCount, setStatCount] = useState(0);
  const [visible, setVisible] = useState<Record<string, boolean>>({});
  const [hProgress, setHProgress] = useState(0);

  const cursorRef = useRef<HTMLDivElement>(null);
  const hscrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  const statCounted = useRef(false);

  /* ── Body override ── */
  useEffect(() => {
    const prevBg = document.body.style.background;
    const prevColor = document.body.style.color;
    document.body.style.background = "#050505";
    document.body.style.color = "#fff";
    return () => {
      document.body.style.background = prevBg;
      document.body.style.color = prevColor;
    };
  }, []);

  /* ── Cursor tracking + mouse detection ── */
  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      setHasMouse(true);
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    const onTouch = () => setHasMouse(false);
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("touchstart", onTouch, { once: true });
    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchstart", onTouch);
    };
  }, []);

  /* ── Intersection observer for reveal triggers ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const id = e.target.getAttribute("data-section");
          if (id) {
            setVisible((prev) => ({ ...prev, [id]: e.isIntersecting }));
          }
        });
      },
      { threshold: 0.3 },
    );
    document
      .querySelectorAll("[data-section]")
      .forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* ── Stat counter animation ── */
  useEffect(() => {
    if (visible.stat && !statCounted.current) {
      statCounted.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / 1600, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setStatCount(Math.round(eased * 93));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }, [visible.stat]);

  /* ── Scroll handler: nav, horizontal scroll, word reveal ── */
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        /* Nav background */
        setNavScrolled(window.scrollY > 80);

        /* Horizontal scroll transform */
        const isMobile = window.innerWidth <= 768;
        if (!isMobile && hscrollRef.current && trackRef.current) {
          const rect = hscrollRef.current.getBoundingClientRect();
          const scrollable =
            hscrollRef.current.offsetHeight - window.innerHeight;
          if (scrollable > 0) {
            const p = Math.max(0, Math.min(1, -rect.top / scrollable));
            setHProgress(p);
            trackRef.current.style.transform = `translateX(-${p * 200}vw)`;
          }
        }

        /* Word-by-word reveal */
        if (questionRef.current) {
          const rect = questionRef.current.getBoundingClientRect();
          const sectionProgress = Math.max(
            0,
            Math.min(
              1,
              (window.innerHeight * 0.65 - rect.top) / (rect.height * 0.6),
            ),
          );
          const words = questionRef.current.querySelectorAll(".hn-word");
          const wordsToShow = Math.floor(
            sectionProgress * words.length * 1.35,
          );
          words.forEach((w, i) => {
            (w as HTMLElement).classList.toggle("visible", i < wordsToShow);
          });
          /* Show answer after all words revealed */
          const answerEl = questionRef.current.querySelector(
            ".hn-question-answer",
          );
          if (answerEl) {
            answerEl.classList.toggle("visible", wordsToShow >= words.length);
          }
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  /* helpers */
  const v = (id: string) => (visible[id] ? "visible" : "");
  const activeDot = hProgress < 0.33 ? 0 : hProgress < 0.66 ? 1 : 2;
  const questionWords = "What if nobody could find you?".split(" ");

  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* Cursor glow (desktop only) */}
      {hasMouse && <div ref={cursorRef} className="hn-cursor" />}

      {/* Film grain overlay */}
      <svg className="hn-noise" xmlns="http://www.w3.org/2000/svg">
        <filter id="hn-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#hn-grain)" />
      </svg>

      {/* ═══════ NAV ═══════ */}
      <nav className={`hn-nav${navScrolled ? " scrolled" : ""}`}>
        <a href="/" className="hn-nav-logo">
          Bamberg <span>Digital</span>
        </a>
        <div className="hn-nav-links">
          <a href="/portfolio" className="hn-nav-link">
            Work
          </a>
          <a href="/pricing" className="hn-nav-link">
            Pricing
          </a>
          <a href="/about" className="hn-nav-link">
            About
          </a>
          <a href="mailto:hello@bambergdigital.com" className="hn-nav-cta">
            Get in touch
          </a>
        </div>
        <button
          className="hn-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            style={
              menuOpen
                ? { transform: "rotate(45deg) translate(5px, 5px)" }
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

      {/* Mobile overlay menu */}
      <div className={`hn-menu-overlay${menuOpen ? " open" : ""}`}>
        {[
          { href: "/web-design", label: "Web Design" },
          { href: "/seo", label: "SEO" },
          { href: "/social-media", label: "Social Media" },
          { href: "/pricing", label: "Pricing" },
          { href: "/portfolio", label: "Portfolio" },
          { href: "/about", label: "About" },
        ].map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          href="tel:9169077782"
          onClick={() => setMenuOpen(false)}
          style={{ color: "#00f0ff" }}
        >
          (916) 907-7782
        </a>
      </div>

      {/* ═══════ HERO ═══════ */}
      <section className="hn-section hn-hero">
        <h1 className="hn-hero-title">BAMBERG</h1>
        <p className="hn-hero-subtitle">DIGITAL</p>
        <p className="hn-hero-tagline">Sacramento&apos;s unfair advantage</p>
        <div className="hn-scroll-cue">
          <span>Scroll</span>
          <div className="hn-scroll-line" />
        </div>
      </section>

      {/* ═══════ THE QUESTION ═══════ */}
      <section
        className="hn-section hn-question"
        data-section="question"
        ref={questionRef}
      >
        <div>
          <p className="hn-question-text">
            {questionWords.map((word, i) => (
              <span key={i} className="hn-word">
                {word}
              </span>
            ))}
          </p>
          <p className="hn-question-answer">You probably are.</p>
        </div>
      </section>

      {/* ═══════ THE STAT ═══════ */}
      <section className="hn-section hn-stat" data-section="stat">
        <div style={{ textAlign: "center" }}>
          <div className="hn-stat-wrap">
            <p className="hn-stat-number">
              {statCount}
              <span>%</span>
            </p>
            <svg className="hn-stat-ring" viewBox="0 0 520 520">
              <circle className="hn-ring-bg" cx="260" cy="260" r="250" />
              <circle
                className={`hn-ring-fill${visible.stat ? " animate" : ""}`}
                cx="260"
                cy="260"
                r="250"
              />
            </svg>
          </div>
          <p className="hn-stat-desc">
            of people will never see your business online.
          </p>
          <p className={`hn-stat-punch ${v("stat")}`}>
            If you&apos;re not there, you don&apos;t exist.
          </p>
        </div>
      </section>

      {/* ═══════ THE ANSWER ═══════ */}
      <section className="hn-section hn-answer" data-section="answer">
        <h2 className={`hn-answer-text ${v("answer")}`}>
          We make you
          <br />
          <span className="hn-accent">impossible to ignore.</span>
        </h2>
      </section>

      {/* ═══════ SERVICES — horizontal scroll ═══════ */}
      <div ref={hscrollRef} className="hn-hscroll-outer">
        <div className="hn-hscroll-sticky">
          <div ref={trackRef} className="hn-hscroll-track">
            {/* Panel 1 */}
            <div className="hn-hscroll-panel">
              <p className="hn-svc-label">01 — Web Design</p>
              <h3 className="hn-svc-word" style={{ color: "#00f0ff" }}>
                DESIGN
              </h3>
              <p className="hn-svc-desc">
                Websites that make your competitors nervous. Mobile-first,
                conversion-optimized, delivered in 2 weeks.
              </p>
              <a href="/web-design" className="hn-svc-link">
                Explore web design
              </a>
            </div>
            {/* Panel 2 */}
            <div className="hn-hscroll-panel">
              <p className="hn-svc-label">02 — AI &amp; Automation</p>
              <h3 className="hn-svc-word" style={{ color: "#7c3aed" }}>
                BUILD
              </h3>
              <p className="hn-svc-desc">
                AI systems that work while you sleep. Chatbots, automation, lead
                capture — all custom-built for your business.
              </p>
              <a href="/ai-integration" className="hn-svc-link">
                Explore AI tools
              </a>
            </div>
            {/* Panel 3 */}
            <div className="hn-hscroll-panel">
              <p className="hn-svc-label">03 — SEO &amp; Growth</p>
              <h3 className="hn-svc-word" style={{ color: "#10b981" }}>
                GROW
              </h3>
              <p className="hn-svc-desc">
                SEO that compounds like interest. Social that builds authority.
                Leads that actually convert.
              </p>
              <a href="/seo" className="hn-svc-link">
                Explore SEO services
              </a>
            </div>
          </div>
          <div className="hn-hscroll-dots">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`hn-dot${activeDot === i ? " active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ═══════ PRICE ═══════ */}
      <section className="hn-section hn-price" data-section="price">
        <div style={{ textAlign: "center" }}>
          <p className={`hn-price-amount ${v("price")}`}>$497</p>
          <p className={`hn-price-label ${v("price")}`}>
            Your entire website.
          </p>
          <p className={`hn-price-detail ${v("price")}`}>
            2 weeks. Flat rate. Zero surprises.
          </p>
          <p className={`hn-price-sub ${v("price")}`}>
            Monthly growth plans from $199/mo
          </p>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="hn-section hn-cta" data-section="cta">
        <div className="hn-cta-glow" />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h2 className={`hn-cta-name ${v("cta")}`}>Jason Bamberg</h2>
          <p className={`hn-cta-role ${v("cta")}`}>Founder, Bamberg Digital</p>
          <p className={`hn-cta-tagline ${v("cta")}`}>
            Sacramento small businesses deserve
            <br />
            enterprise-grade marketing — without
            <br />
            the enterprise price tag.
          </p>
          <a href="tel:9169077782" className={`hn-cta-phone ${v("cta")}`}>
            (916) 907-7782
          </a>
          <p className={`hn-cta-pickup ${v("cta")}`}>I pick up.</p>
          <a
            href="mailto:hello@bambergdigital.com"
            className={`hn-cta-email ${v("cta")}`}
          >
            hello@bambergdigital.com
          </a>
        </div>
      </section>

      {/* Hidden SEO content */}
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
        <h1>Bamberg Digital — Sacramento AI-Powered Digital Agency</h1>
        <p>
          What if nobody could find you online? You probably are invisible. 93%
          of people will never see your business online. We make you impossible
          to ignore.
        </p>
        <p>
          We design, build, and grow. Websites from $497 in 2 weeks. SEO from
          $297/mo. Social media from $199/mo. AI integration and automation.
        </p>
        <p>
          Jason Bamberg, Founder. (916) 907-7782. hello@bambergdigital.com.
          Sacramento, CA.
        </p>
        <p>
          Serving Sacramento, Elk Grove, Folsom, Roseville, Rancho Cordova.
        </p>
      </div>
    </>
  );
}
