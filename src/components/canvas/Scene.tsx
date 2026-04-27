"use client";

import { Canvas } from "@react-three/fiber";
import { Preload, View } from "@react-three/drei";
import { Suspense } from "react";
import tunnel from "tunnel-rat";
import Effects from "./Effects";

export const t = tunnel();

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
      <Suspense fallback={null}>
        <t.Out />
        <View.Port />
        <Effects />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
