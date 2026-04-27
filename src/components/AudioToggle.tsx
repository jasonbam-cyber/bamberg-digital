"use client";

import { useState, useRef, useEffect } from "react";

type WebAudioWindow = Window & {
  webkitAudioContext?: typeof AudioContext;
};

export default function AudioToggle() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const filterRef = useRef<BiquadFilterNode | null>(null);

  const init = () => {
    const w = window as WebAudioWindow;
    const Ctor = window.AudioContext ?? w.webkitAudioContext;
    if (!Ctor) return;
    const ctx = new Ctor();

    const master = ctx.createGain();
    master.gain.value = 0;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 800;
    filter.Q.value = 0.7;

    filter.connect(master).connect(ctx.destination);

    const freqs = [55, 165, 220];
    const gains = [0.05, 0.025, 0.018];
    freqs.forEach((f, i) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = f;
      osc.detune.value = i * 6;
      g.gain.value = gains[i];

      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.value = 0.05 + i * 0.03;
      lfoGain.gain.value = gains[i] * 0.4;
      lfo.connect(lfoGain).connect(g.gain);
      lfo.start();

      osc.connect(g).connect(filter);
      osc.start();
    });

    ctxRef.current = ctx;
    masterGainRef.current = master;
    filterRef.current = filter;
  };

  const toggle = async () => {
    if (!ctxRef.current) init();
    const ctx = ctxRef.current;
    if (!ctx) return;
    if (ctx.state === "suspended") await ctx.resume();
    const next = !on;
    setOn(next);
    masterGainRef.current?.gain.linearRampToValueAtTime(
      next ? 1 : 0,
      ctx.currentTime + 0.6,
    );
  };

  useEffect(() => {
    const onScroll = () => {
      const ctx = ctxRef.current;
      const filter = filterRef.current;
      if (!ctx || !filter) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = Math.min(window.scrollY / Math.max(max, 1), 1);
      const target = 200 + p * 3800;
      filter.frequency.linearRampToValueAtTime(target, ctx.currentTime + 0.2);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
