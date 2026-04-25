"use client";
import { useEffect } from "react";

export default function StoryClient() {
  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    const segs = document.querySelectorAll(".progress-seg");
    const wrap = document.getElementById("slides-wrap") as HTMLElement;
    if (!wrap) return;
    let cur = 0;
    const total = slides.length;

    function goTo(n: number) {
      if (n < 0 || n >= total) return;
      cur = n;
      wrap.style.transform = `translateX(-${cur * 100}%)`;
      segs.forEach((s, i) => {
        s.classList.toggle("active", i <= cur);
      });
      const el = slides[cur] as HTMLElement;
      el.querySelectorAll(".fade-up").forEach((node, i) => {
        const item = node as HTMLElement;
        item.style.animationDelay = `${i * 0.1}s`;
        item.style.opacity = "0";
        void item.offsetWidth;
        item.style.opacity = "";
        item.classList.remove("fade-up");
        void item.offsetWidth;
        item.classList.add("fade-up");
      });
    }

    let startX = 0;
    let isDragging = false;

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (!isDragging) return;
      isDragging = false;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) < 40) return;
      if (dx < 0) goTo(cur + 1);
      else goTo(cur - 1);
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button")) return;
      if (e.clientX > window.innerWidth / 2) goTo(cur + 1);
      else goTo(cur - 1);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") goTo(cur + 1);
      if (e.key === "ArrowLeft") goTo(cur - 1);
    };

    document.addEventListener("touchstart", onTouchStart);
    document.addEventListener("touchend", onTouchEnd);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeyDown);

    const slide3Words = document.querySelectorAll(".word-reveal");
    slide3Words.forEach((w, i) => {
      (w as HTMLElement).style.animationDelay = `${i * 0.08}s`;
    });

    goTo(0);

    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchend", onTouchEnd);
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
}
