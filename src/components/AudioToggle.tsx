"use client";

import { useState, useRef, useEffect } from "react";

type WebAudioWindow = Window & {
  webkitAudioContext?: typeof AudioContext;
};

export default function AudioToggle() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const init = () => {
    const w = window as WebAudioWindow;
    const Ctor = window.AudioContext ?? w.webkitAudioContext;
    if (!Ctor) return;
    const ctx = new Ctor();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = 60;
    gain.gain.value = 0;
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    ctxRef.current = ctx;
    gainRef.current = gain;
  };

  const toggle = () => {
    if (!ctxRef.current) init();
    const next = !on;
    setOn(next);
    if (gainRef.current && ctxRef.current) {
      if (ctxRef.current.state === "suspended") {
        void ctxRef.current.resume();
      }
      gainRef.current.gain.linearRampToValueAtTime(
        next ? 0.04 : 0,
        ctxRef.current.currentTime + 0.4,
      );
    }
  };

  useEffect(
    () => () => {
      void ctxRef.current?.close();
    },
    [],
  );

  return (
    <button
      onClick={toggle}
      aria-label={on ? "Mute ambient sound" : "Play ambient sound"}
      style={{
        background: "transparent",
        border: "1px solid rgba(255,255,255,0.18)",
        color: "rgba(255,255,255,0.7)",
        padding: "0.4rem 0.7rem",
        cursor: "pointer",
        fontFamily: "var(--font-mono, monospace)",
        fontSize: "0.55rem",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
      }}
    >
      {on ? "♪ ON" : "♪ OFF"}
    </button>
  );
}
