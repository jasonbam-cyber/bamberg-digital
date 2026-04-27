"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  onComplete?: () => void;
}

type Phase = "counting" | "splitting" | "done";

const HEAD = "'Montserrat', sans-serif";
const SERIF = "'Fraunces', 'Cormorant Garamond', serif";
const MONO = "'JetBrains Mono', monospace";
const DURATION = 1500;

export default function IglooLoader({ onComplete }: Props) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("counting");
  const [barWidth, setBarWidth] = useState(0);
  const startRef = useRef<number | null>(null);
  const frameRef = useRef<number>(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    // Kick off progress bar (CSS transition)
    const t = setTimeout(() => setBarWidth(100), 30);

    // Count 0→100 with cubic ease-in-out
    const tick = (now: number) => {
      if (!startRef.current) startRef.current = now;
      const elapsed = now - startRef.current;
      const p = Math.min(elapsed / DURATION, 1);
      const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      setCount(Math.round(eased * 100));
      if (p < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setCount(100);
        setTimeout(() => setPhase("splitting"), 60);
        setTimeout(() => {
          setPhase("done");
          onCompleteRef.current?.();
        }, 60 + 620);
      }
    };
    frameRef.current = requestAnimationFrame(tick);

    return () => {
      clearTimeout(t);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  if (phase === "done") return null;

  const isSplitting = phase === "splitting";

  const panelBase: React.CSSProperties = {
    position: "fixed",
    left: 0,
    right: 0,
    background: "#0a0e16",
    zIndex: 99999,
    pointerEvents: "none",
    transition: isSplitting
      ? "transform 0.62s cubic-bezier(0.76, 0, 0.24, 1)"
      : "none",
    overflow: "hidden",
  };

  const numStyle: React.CSSProperties = {
    fontFamily: HEAD,
    fontWeight: 800,
    fontSize: "clamp(7rem, 18vw, 15rem)",
    lineHeight: 1,
    color: "rgba(255,255,255,0.06)",
    letterSpacing: "-0.05em",
    userSelect: "none",
    whiteSpace: "nowrap",
  };

  const display = String(count).padStart(2, "0");

  return (
    <>
      {/* ── TOP PANEL ── */}
      <div
        style={{
          ...panelBase,
          top: 0,
          height: "50svh",
          transform: isSplitting ? "translateY(-102%)" : "translateY(0)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        {/* Wordmark */}
        <div
          style={{
            position: "absolute",
            top: "2rem",
            left: "2.5rem",
            fontFamily: SERIF,
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "1.15rem",
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "0.01em",
            animation: "loader-fade-in 0.5s ease 0.1s both",
          }}
        >
          BambergDigital
        </div>

        {/* Year tag */}
        <div
          style={{
            position: "absolute",
            top: "2.15rem",
            right: "2.5rem",
            fontFamily: MONO,
            fontSize: "0.55rem",
            letterSpacing: "0.22em",
            color: "rgba(255,255,255,0.25)",
            textTransform: "uppercase",
            animation: "loader-fade-in 0.5s ease 0.25s both",
          }}
        >
          Est. 2024
        </div>

        {/* Number top-half (clipped at midline) */}
        <div
          style={{
            ...numStyle,
            transform: "translateY(50%)",
            paddingBottom: 0,
          }}
        >
          {display}
        </div>
      </div>

      {/* ── BOTTOM PANEL ── */}
      <div
        style={{
          ...panelBase,
          bottom: 0,
          height: "50svh",
          transform: isSplitting ? "translateY(102%)" : "translateY(0)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {/* Number bottom-half */}
        <div
          style={{
            ...numStyle,
            transform: "translateY(-50%)",
          }}
        >
          {display}
        </div>

        {/* Orange progress bar */}
        <div
          style={{
            position: "absolute",
            bottom: "3.5rem",
            left: "2.5rem",
            right: "2.5rem",
            height: 1,
            background: "rgba(255,255,255,0.07)",
          }}
        >
          <div
            style={{
              height: "100%",
              background: "#e8872b",
              width: `${barWidth}%`,
              transition: `width ${DURATION}ms cubic-bezier(0.25, 0.1, 0.25, 1)`,
              boxShadow: "0 0 10px rgba(232,135,43,0.55)",
            }}
          />
        </div>

        {/* Location */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "2.5rem",
            fontFamily: MONO,
            fontSize: "0.52rem",
            letterSpacing: "0.22em",
            color: "rgba(255,255,255,0.22)",
            textTransform: "uppercase",
            animation: "loader-fade-in 0.5s ease 0.3s both",
          }}
        >
          Sacramento, CA
        </div>

        {/* Tagline */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            right: "2.5rem",
            fontFamily: MONO,
            fontSize: "0.52rem",
            letterSpacing: "0.22em",
            color: "rgba(255,255,255,0.22)",
            textTransform: "uppercase",
            animation: "loader-fade-in 0.5s ease 0.4s both",
          }}
        >
          Hand-Crafted Websites
        </div>
      </div>
    </>
  );
}
