"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Spine() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const m = ref.current.material as THREE.MeshStandardMaterial;
    m.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 0.7) * 0.15;
  });

  return (
    <mesh ref={ref} position={[0, -20, 0]}>
      <cylinderGeometry args={[0.04, 0.04, 70, 12]} />
      <meshStandardMaterial
        color="#e8872b"
        emissive="#e8872b"
        emissiveIntensity={0.5}
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
}
