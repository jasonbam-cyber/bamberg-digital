"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

export default function CanvasHost() {
  return (
    <div className="r3f-canvas-host">
      <Scene />
    </div>
  );
}
