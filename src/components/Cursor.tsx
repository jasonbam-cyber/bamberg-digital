"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    const label = labelRef.current;
    if (!el || !label) return;

    if (
      typeof matchMedia !== "undefined" &&
      matchMedia("(hover: none)").matches
    )
      return;

    document.body.style.cursor = "none";
    let mx = 0,
      my = 0,
      cx = -100,
      cy = -100;
    let running = true;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const tick = () => {
      if (!running) return;
      cx += (mx - cx) * 0.12;
      cy += (my - cy) * 0.12;
      el.style.left = `${cx}px`;
      el.style.top = `${cy}px`;
      requestAnimationFrame(tick);
    };

    const onEnterInteractive = () => {
      el.classList.add("hover");
      label.style.opacity = "1";
    };
    const onLeaveInteractive = () => {
      el.classList.remove("hover");
      label.style.opacity = "0";
    };
    const onEnterCard = () => {
      el.classList.add("card-hover");
    };
    const onLeaveCard = () => {
      el.classList.remove("card-hover");
    };

    const attachListeners = () => {
      document
        .querySelectorAll<HTMLElement>("a, button, [data-cursor-hover]")
        .forEach((el2) => {
          el2.addEventListener("mouseenter", onEnterInteractive);
          el2.addEventListener("mouseleave", onLeaveInteractive);
        });
      document
        .querySelectorAll<HTMLElement>("[data-cursor-card]")
        .forEach((el2) => {
          el2.addEventListener("mouseenter", onEnterCard);
          el2.addEventListener("mouseleave", onLeaveCard);
        });
    };

    window.addEventListener("mousemove", onMove);
    requestAnimationFrame(tick);
    attachListeners();

    const obs = new MutationObserver(attachListeners);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      running = false;
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      obs.disconnect();
    };
  }, []);

  return (
    <div ref={cursorRef} id="custom-cursor" aria-hidden="true">
      <span
        ref={labelRef}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.5rem",
          letterSpacing: "0.12em",
          fontFamily: "var(--font-mono, monospace)",
          color: "#fff",
          opacity: 0,
          transition: "opacity 0.2s",
          userSelect: "none",
        }}
      >
        GO
      </span>
    </div>
  );
}
