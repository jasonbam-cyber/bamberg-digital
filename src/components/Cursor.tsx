"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const el = ref.current;
    if (!el) return;

    document.body.style.cursor = "none";

    let x = 0,
      y = 0,
      tx = 0,
      ty = 0;
    let running = true;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      if (!running) return;
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      el.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove);
    tick();

    const restoreInputCursor = () => {
      document
        .querySelectorAll<HTMLElement>("input, textarea, select")
        .forEach((inp) => {
          inp.style.cursor = "text";
        });
    };
    const obs = new MutationObserver(restoreInputCursor);
    obs.observe(document.body, { childList: true, subtree: true });
    restoreInputCursor();

    return () => {
      running = false;
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", onMove);
      obs.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      id="custom-cursor"
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 8,
        height: 8,
        marginLeft: -4,
        marginTop: -4,
        borderRadius: "50%",
        background: "#fff",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "difference",
      }}
    />
  );
}
