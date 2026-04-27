"use client";
import { useEffect, useState } from "react";

export default function IglooLoader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let p = 0;
    const tick = () => {
      p += Math.random() * 12 + 3;
      if (p >= 100) {
        setProgress(100);
        setTimeout(() => setDone(true), 400);
        return;
      }
      setProgress(p);
      setTimeout(tick, 80 + Math.random() * 60);
    };
    tick();
  }, []);

  if (done) return null;

  const filled = Math.round((progress / 100) * 12);
  const bar = "=".repeat(filled) + "-".repeat(12 - filled);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background:
          "linear-gradient(180deg, #8B95A6 0%, #9BA5B6 50%, #B4BCC8 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.25rem",
        transition: "opacity 0.6s ease",
        opacity: progress >= 100 ? 0 : 1,
        pointerEvents: progress >= 100 ? "none" : "auto",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono, monospace)",
          letterSpacing: "0.4em",
          color: "rgba(255,255,255,0.9)",
          fontSize: "14px",
          userSelect: "none",
        }}
      >
        {bar}
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "0.55rem",
          letterSpacing: "0.25em",
          color: "rgba(255,255,255,0.45)",
          textTransform: "uppercase",
          userSelect: "none",
        }}
      >
        Bamberg Digital
      </span>
    </div>
  );
}
