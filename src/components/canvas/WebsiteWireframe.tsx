"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Edges } from "@react-three/drei";
import * as THREE from "three";

interface PanelDef {
  y: number;
  width: number;
  height: number;
  depth: number;
  emissive?: string;
}

const PANELS: PanelDef[] = [
  { y: 1.6, width: 3.6, height: 0.18, depth: 0.06 },
  { y: 1.0, width: 3.6, height: 0.95, depth: 0.06, emissive: "#e8872b" },
  { y: 0.15, width: 3.6, height: 0.55, depth: 0.06 },
  { y: -0.55, width: 3.6, height: 0.65, depth: 0.06 },
  { y: -1.3, width: 3.6, height: 0.4, depth: 0.06 },
  { y: -1.85, width: 3.6, height: 0.18, depth: 0.06 },
];

const CORNERS: [number, number, number][] = [
  [-1.95, 2.05, 0],
  [1.95, 2.05, 0],
  [-1.95, -2.05, 0],
  [1.95, -2.05, 0],
];

export default function WebsiteWireframe() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.18;
    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.6) * 0.06;
  });

  return (
    <Float speed={1} rotationIntensity={0.15} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, 0.4, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.9, 4.1, 0.04]} />
          <meshBasicMaterial
            wireframe
            color="#ffffff"
            transparent
            opacity={0.12}
          />
        </mesh>

        {PANELS.map((p, i) => (
          <mesh key={i} position={[0, p.y, 0]}>
            <boxGeometry args={[p.width, p.height, p.depth]} />
            <meshStandardMaterial
              color={p.emissive ? p.emissive : "#0a0e16"}
              metalness={p.emissive ? 0.4 : 0.9}
              roughness={p.emissive ? 0.4 : 0.2}
              emissive={p.emissive || "#000000"}
              emissiveIntensity={p.emissive ? 0.4 : 0}
              transparent
              opacity={0.85}
            />
            <Edges threshold={15} color={p.emissive ? "#e8872b" : "#4a9ece"} />
          </mesh>
        ))}

        {CORNERS.map((pos, i) => (
          <mesh key={`corner-${i}`} position={pos}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial color="#e8872b" />
          </mesh>
        ))}
      </group>
    </Float>
  );
}
