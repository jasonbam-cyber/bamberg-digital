"use client";

import {
  createElement,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactElement,
  type RefObject,
} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface Props {
  children: string;
  as?: ElementType;
  by?: "char" | "word";
  delay?: number;
  stagger?: number;
  className?: string;
  style?: CSSProperties;
}

export default function SplitReveal({
  children,
  as = "span",
  by = "char",
  delay = 0,
  stagger = 0.025,
  className,
  style,
}: Props): ReactElement {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const node = ref.current;
      if (!node) return;
      const items = node.querySelectorAll<HTMLElement>(".split-item");
      if (!items.length) return;
      gsap.set(items, { yPercent: 110 });
      gsap.to(items, {
        yPercent: 0,
        duration: 1,
        stagger,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: node,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: ref as RefObject<HTMLElement> },
  );

  const tokens = by === "char" ? children.split("") : children.split(/(\s+)/);

  const inner = tokens.map((tok, i) => {
    const isSpace = /^\s+$/.test(tok);
    return createElement(
      "span",
      {
        key: i,
        style: {
          display: "inline-block",
          overflow: "hidden",
          verticalAlign: "top",
          whiteSpace: isSpace ? "pre" : undefined,
          lineHeight: "inherit",
        } as CSSProperties,
      },
      createElement(
        "span",
        {
          className: "split-item",
          style: {
            display: "inline-block",
            willChange: "transform",
          } as CSSProperties,
        },
        tok,
      ),
    );
  });

  return createElement(
    as,
    {
      ref,
      className,
      style,
    },
    inner,
  );
}
