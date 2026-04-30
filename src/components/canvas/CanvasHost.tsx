"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

// Routes where the fixed 3D canvas overlaps copy — disable the overlay.
const CANVAS_BLOCKED_ROUTES = ["/web-design", "/about"];

export default function CanvasHost() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(min-width: 769px)").matches) setShow(true);
  }, []);

  if (!show) return null;
  if (CANVAS_BLOCKED_ROUTES.some((r) => pathname.startsWith(r))) return null;

  return (
    <div className="r3f-canvas-host">
      <Scene />
    </div>
  );
}
