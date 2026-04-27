"use client";
import { useEffect, useRef, useState } from "react";

type CursorState = "default" | "link" | "button" | "image" | "drag";

const HEAD = "'Montserrat', sans-serif";

const STATE_STYLES: Record<
  CursorState,
  {
    size: number;
    bg: string;
    border?: string;
    label?: string;
    labelColor?: string;
    blend?: string;
  }
> = {
  default: {
    size: 10,
    bg: "#fff",
    blend: "difference",
  },
  link: {
    size: 44,
    bg: "transparent",
    border: "2px solid rgba(255,255,255,0.85)",
    blend: "normal",
  },
  button: {
    size: 56,
    bg: "#e8872b",
    label: "GO",
    labelColor: "#fff",
    blend: "normal",
  },
  image: {
    size: 64,
    bg: "rgba(0,0,0,0.55)",
    label: "VIEW",
    labelColor: "#fff",
    blend: "normal",
  },
  drag: {
    size: 80,
    bg: "rgba(232,135,43,0.18)",
    border: "1px solid rgba(232,135,43,0.6)",
    label: "DRAG →",
    labelColor: "rgba(255,255,255,0.9)",
    blend: "normal",
  },
};

function getState(el: EventTarget | null): CursorState {
  if (!el || !(el instanceof Element)) return "default";
  const t = el as Element;
  if (t.closest(".catalog-grid") || t.closest("[data-cursor='drag']"))
    return "drag";
  if (
    t.closest("img") ||
    t.closest(".work-card") ||
    t.closest(".catalog-card") ||
    t.closest(".hero-laptop-stage")
  )
    return "image";
  if (t.closest("button") || t.closest("[role='button']")) return "button";
  if (t.closest("a")) return "link";
  return "default";
}

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<CursorState>("default");
  const posRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const runningRef = useRef(true);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const el = dotRef.current;
    if (!el) return;

    const pos = posRef.current;

    const onMove = (e: MouseEvent) => {
      pos.tx = e.clientX;
      pos.ty = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      setState(getState(e.target));
    };

    const tick = () => {
      if (!runningRef.current) return;
      pos.x += (pos.tx - pos.x) * 0.18;
      pos.y += (pos.ty - pos.y) * 0.18;
      el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    tick();

    // Keep native cursor gone on inputs
    const fixInputs = () => {
      document
        .querySelectorAll<HTMLElement>("input,textarea,select")
        .forEach((i) => (i.style.cursor = "text"));
    };
    const obs = new MutationObserver(fixInputs);
    obs.observe(document.body, { childList: true, subtree: true });
    fixInputs();

    return () => {
      runningRef.current = false;
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      obs.disconnect();
    };
  }, []);

  // Touch devices: don't render
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none)").matches
  )
    return null;

  const s = STATE_STYLES[state];

  return (
    <div
      ref={dotRef}
      id="custom-cursor"
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: s.size,
        height: s.size,
        marginLeft: -s.size / 2,
        marginTop: -s.size / 2,
        borderRadius: state === "drag" ? 999 : "50%",
        background: s.bg,
        border: s.border ?? "none",
        backdropFilter: state === "link" ? "blur(2px)" : undefined,
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: (s.blend ??
          "normal") as React.CSSProperties["mixBlendMode"],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition:
          "width 0.15s ease, height 0.15s ease, margin 0.15s ease, background 0.15s ease, border-radius 0.15s ease, opacity 0.15s ease",
        willChange: "transform",
      }}
    >
      {s.label && (
        <span
          style={{
            fontFamily: HEAD,
            fontWeight: 700,
            fontSize: state === "drag" ? "0.55rem" : "0.5rem",
            letterSpacing: "0.08em",
            color: s.labelColor,
            whiteSpace: "nowrap",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          {s.label}
        </span>
      )}
    </div>
  );
}
