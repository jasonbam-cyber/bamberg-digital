"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Billboard, Text } from "@react-three/drei";
import * as THREE from "three";

const TOP_Y = 10;
const BOTTOM_Y = -50;
const SPINE_LEN = TOP_Y - BOTTOM_Y;
const SPINE_MID = (TOP_Y + BOTTOM_Y) / 2;

export default function Spine() {
  const spineRef = useRef<THREE.Mesh>(null);
  const topCapRef = useRef<THREE.Mesh>(null);
  const bottomCapRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const pulse = 0.2 + Math.sin(t * 0.5) * 0.08;
    if (spineRef.current) {
      const m = spineRef.current.material as THREE.MeshStandardMaterial;
      m.emissiveIntensity = pulse;
    }
    if (topCapRef.current) {
      const m = topCapRef.current.material as THREE.MeshStandardMaterial;
      m.emissiveIntensity = pulse * 0.8;
    }
    if (bottomCapRef.current) {
      const m = bottomCapRef.current.material as THREE.MeshStandardMaterial;
      m.emissiveIntensity = pulse * 0.8;
    }
  });

  return (
    <group>
      {/* Spine column */}
      <mesh ref={spineRef} position={[0, SPINE_MID, -2]}>
        <cylinderGeometry args={[0.018, 0.018, SPINE_LEN, 8]} />
        <meshStandardMaterial
          color="#d4752a"
          emissive="#c96820"
          emissiveIntensity={0.2}
          metalness={0.3}
          roughness={0.5}
        />
      </mesh>

      {/* Top cap — horizontal plate */}
      <mesh ref={topCapRef} position={[0, TOP_Y, -2]}>
        <cylinderGeometry args={[0.55, 0.55, 0.08, 32]} />
        <meshStandardMaterial
          color="#e8872b"
          emissive="#e8872b"
          emissiveIntensity={0.4}
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>
      {/* Top cap inner ring (decorative) */}
      <mesh position={[0, TOP_Y + 0.05, -2]}>
        <ringGeometry args={[0.18, 0.5, 48]} />
        <meshBasicMaterial
          color="#e8872b"
          transparent
          opacity={0.35}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Bottom cap — horizontal plate the spine "lands" on */}
      <mesh ref={bottomCapRef} position={[0, BOTTOM_Y, -2]}>
        <cylinderGeometry args={[0.7, 0.85, 0.1, 32]} />
        <meshStandardMaterial
          color="#e8872b"
          emissive="#e8872b"
          emissiveIntensity={0.4}
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>
      {/* Bottom cap halo ring */}
      <mesh position={[0, BOTTOM_Y - 0.06, -2]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.85, 1.4, 64]} />
        <meshBasicMaterial
          color="#e8872b"
          transparent
          opacity={0.18}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Footer text — billboarded so always faces camera */}
      <Billboard position={[0, BOTTOM_Y - 1.6, -2]} follow>
        <Text
          fontSize={0.5}
          color="rgba(255,255,255,0.85)"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.18}
        >
          BAMBERG DIGITAL
        </Text>
        <Text
          position={[0, -0.7, 0]}
          fontSize={0.32}
          color="rgba(255,255,255,0.6)"
          anchorX="center"
          anchorY="middle"
        >
          Sacramento, CA
        </Text>
        <Text
          position={[0, -1.25, 0]}
          fontSize={0.32}
          color="rgba(255,255,255,0.6)"
          anchorX="center"
          anchorY="middle"
        >
          hello@bambergdigital.com
        </Text>
        <Text
          position={[0, -1.8, 0]}
          fontSize={0.32}
          color="rgba(255,255,255,0.6)"
          anchorX="center"
          anchorY="middle"
        >
          (916) 907-7782
        </Text>
      </Billboard>
    </group>
  );
}
