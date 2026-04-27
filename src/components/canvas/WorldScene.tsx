"use client";

import { Suspense, useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Environment, Sparkles } from "@react-three/drei";
import Spine from "./Spine";
import BlueprintPlanes from "./BlueprintPlanes";
import WebsiteWireframe from "./WebsiteWireframe";
import FloatingText from "./FloatingText";

function ScrollCamera() {
  const { camera } = useThree();
  const scrollRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = Math.min(window.scrollY / Math.max(max, 1), 1);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame(() => {
    const p = scrollRef.current;
    const targetY = -p * 48;
    const targetX = Math.sin(p * Math.PI * 1.5) * 2;
    const targetZ = 6.5 + Math.sin(p * Math.PI * 2) * 1.2;
    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
    camera.position.z += (targetZ - camera.position.z) * 0.05;
    camera.lookAt(0, targetY, 0);
  });

  return null;
}

export default function WorldScene() {
  return (
    <>
      <Environment preset="studio" background={false} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} color="#e8872b" />
      <ScrollCamera />
      <WebsiteWireframe />
      <Spine />
      <FloatingText />
      <Suspense fallback={null}>
        <BlueprintPlanes />
      </Suspense>
      <Sparkles
        count={120}
        scale={[12, 60, 12]}
        size={2.5}
        speed={0.3}
        opacity={0.4}
        color="#e8872b"
      />
      <fog attach="fog" args={["#0a0e16", 8, 60]} />
    </>
  );
}
