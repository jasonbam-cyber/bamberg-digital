"use client";

import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Effects from "./Effects";

const WorldScene = dynamic(() => import("./WorldScene"), { ssr: false });

type SceneProps = React.ComponentProps<typeof Canvas>;

export default function Scene(props: SceneProps) {
  return (
    <Canvas
      {...props}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, 2.5]}
      camera={{ fov: 35, near: 0.1, far: 200, position: [0, 0, 8] }}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        ...(props.style ?? {}),
      }}
    >
      <color attach="background" args={["#0a0e16"]} />
      <Suspense fallback={null}>
        <WorldScene />
        <Effects />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
