"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

export default function CanvasHost() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(min-width: 769px)").matches) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="r3f-canvas-host">
      <Scene />
    </div>
  );
}
