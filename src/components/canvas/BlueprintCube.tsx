"use client";

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
  Edges,
  Environment,
  Float,
  MeshTransmissionMaterial,
  Sparkles,
} from "@react-three/drei";
import type { Group } from "three";

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
    camera.position.x = Math.sin(p * Math.PI * 0.5) * 8;
    camera.position.z = Math.cos(p * Math.PI * 0.5) * 8;
    camera.position.y = p * 2 - 1;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

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
      <Environment preset="studio" background={false} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} color="#e8872b" />

      <ScrollCamera />

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
            <icosahedronGeometry args={[0.85, 1]} />
            <MeshTransmissionMaterial
              backside
              samples={8}
              resolution={512}
              transmission={1}
              roughness={0.05}
              thickness={0.3}
              ior={1.5}
              chromaticAberration={0.03}
              distortion={0.1}
              distortionScale={0.4}
              temporalDistortion={0.1}
              color="#4a9ece"
            />
          </mesh>
        </group>
      </Float>

      <Sparkles
        count={60}
        scale={6}
        size={2}
        speed={0.3}
        opacity={0.5}
        color="#e8872b"
      />
    </>
  );
}
