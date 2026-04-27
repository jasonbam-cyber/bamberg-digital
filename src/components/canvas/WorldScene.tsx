"use client";

import { Suspense, useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
  Edges,
  Environment,
  Float,
  MeshTransmissionMaterial,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";
import Spine from "./Spine";
import BlueprintPlanes from "./BlueprintPlanes";

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
    const targetX = Math.sin(p * Math.PI * 1.5) * 3;
    const targetZ = 8 + Math.sin(p * Math.PI * 2) * 1.5;
    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
    camera.position.z += (targetZ - camera.position.z) * 0.05;
    camera.lookAt(0, targetY, 0);
  });

  return null;
}

function HeroCube() {
  const outer = useRef<THREE.Group>(null);
  const middle = useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (outer.current) {
      outer.current.rotation.y += delta * 0.15;
      outer.current.rotation.x += delta * 0.05;
    }
    if (middle.current) {
      middle.current.rotation.y -= delta * 0.22;
      middle.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.3}
      floatIntensity={0.4}
      position={[0, 0, 0]}
    >
      <group ref={outer}>
        <mesh>
          <boxGeometry args={[3.2, 3.2, 3.2]} />
          <meshBasicMaterial
            wireframe
            color="#ffffff"
            transparent
            opacity={0.18}
          />
        </mesh>
      </group>

      <group ref={middle}>
        <mesh>
          <boxGeometry args={[2.2, 2.2, 2.2]} />
          <meshStandardMaterial
            color="#0a0e16"
            metalness={0.95}
            roughness={0.15}
            transparent
            opacity={0.6}
          />
          <Edges threshold={15} color="#e8872b" />
        </mesh>
      </group>

      <mesh>
        <icosahedronGeometry args={[0.85, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          resolution={256}
          transmission={1}
          roughness={0.05}
          thickness={0.3}
          ior={1.5}
          chromaticAberration={0.03}
          color="#4a9ece"
        />
      </mesh>
    </Float>
  );
}

export default function WorldScene() {
  return (
    <>
      <Environment preset="studio" background={false} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} color="#e8872b" />
      <ScrollCamera />
      <HeroCube />
      <Spine />
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
