"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

export default function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [display, setDisplay] = useState<ReactNode>(children);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const t = setTimeout(() => {
      setDisplay(children);
      setFade(false);
    }, 280);
    return () => clearTimeout(t);
  }, [pathname, children]);

  return (
    <div
      style={{
        transition: "opacity 0.28s ease, transform 0.28s ease",
        opacity: fade ? 0 : 1,
        transform: fade ? "translateY(8px)" : "translateY(0)",
      }}
    >
      {display}
    </div>
  );
}
