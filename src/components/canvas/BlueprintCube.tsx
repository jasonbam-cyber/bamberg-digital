"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Edges, MeshDistortMaterial, Float } from "@react-three/drei";
import type { Group } from "three";

export default function BlueprintCube() {
  const outer = useRef<Group>(null);
  const middle = useRef<Group>(null);
  const inner = useRef<Group>(null);

  useFrame((_state, delta) => {
    if (outer.current) {
      outer.current.rotation.y += delta * 0.15;
      outer.current.rotation.x += delta * 0.05;
    }
    if (middle.current) {
      middle.current.rotation.y -= delta * 0.22;
      middle.current.rotation.z += delta * 0.1;
    }
    if (inner.current) {
      inner.current.rotation.x += delta * 0.3;
      inner.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#e8872b" />
      <directionalLight
        position={[-5, -5, 5]}
        intensity={0.5}
        color="#4a9ece"
      />

      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
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

        <group ref={inner}>
          <mesh>
            <icosahedronGeometry args={[0.85, 0]} />
            <MeshDistortMaterial
              color="#4a9ece"
              metalness={0.8}
              roughness={0.1}
              distort={0.35}
              speed={2}
            />
          </mesh>
        </group>
      </Float>
    </>
  );
}
