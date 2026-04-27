"use client";

import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture, Float, Text } from "@react-three/drei";
import * as THREE from "three";

const SCREENS = [
  "/screenshots/blueprint-restaurant.jpg",
  "/screenshots/blueprint-photographer.jpg",
  "/screenshots/blueprint-brewery.jpg",
  "/screenshots/blueprint-dental.jpg",
  "/screenshots/blueprint-realtor.jpg",
  "/screenshots/blueprint-salon.jpg",
];

export default function Laptop3D() {
  const groupRef = useRef<THREE.Group>(null!);
  const screenMatRef = useRef<THREE.MeshBasicMaterial>(null!);
  const [active, setActive] = useState(0);
  const [fadeOpacity, setFadeOpacity] = useState(1);
  const textures = useTexture(SCREENS) as THREE.Texture[];

  useEffect(() => {
    textures.forEach((t) => {
      t.colorSpace = THREE.SRGBColorSpace;
    });
  }, [textures]);

  useEffect(() => {
    let cancelled = false;
    const cycle = async () => {
      while (!cancelled) {
        await new Promise((r) => setTimeout(r, 3500));
        if (cancelled) return;
        setFadeOpacity(0);
        await new Promise((r) => setTimeout(r, 400));
        if (cancelled) return;
        setActive((a) => (a + 1) % SCREENS.length);
        setFadeOpacity(1);
      }
    };
    cycle();
    return () => {
      cancelled = true;
    };
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.4) * 0.18;
    if (screenMatRef.current) {
      screenMatRef.current.opacity +=
        (fadeOpacity - screenMatRef.current.opacity) * 0.08;
    }
  });

  // Screen tilt: open ~105 degrees (slightly past vertical)
  const tilt = (-105 * Math.PI) / 180;

  return (
    <Float speed={1.3} rotationIntensity={0.1} floatIntensity={0.6}>
      <group ref={groupRef} position={[0, 0.2, 0]}>
        {/* Base / keyboard slab */}
        <mesh position={[0, -0.5, 0]}>
          <boxGeometry args={[3.4, 0.12, 2.2]} />
          <meshStandardMaterial
            color="#1a1d24"
            metalness={0.85}
            roughness={0.35}
          />
        </mesh>

        {/* Trackpad indent */}
        <mesh position={[0, -0.435, 0.55]}>
          <boxGeometry args={[1.4, 0.005, 0.9]} />
          <meshStandardMaterial
            color="#0a0c10"
            metalness={0.6}
            roughness={0.5}
          />
        </mesh>

        {/* Hinge group - pivots at top edge of base */}
        <group position={[0, -0.44, -1.1]} rotation={[tilt, 0, 0]}>
          {/* Screen body (bezel) */}
          <mesh position={[0, 1.05, 0.04]}>
            <boxGeometry args={[3.4, 2.05, 0.08]} />
            <meshStandardMaterial
              color="#0a0c10"
              metalness={0.85}
              roughness={0.4}
            />
          </mesh>

          {/* Display surface - front of bezel */}
          <mesh position={[0, 1.05, 0.082]}>
            <planeGeometry args={[3.18, 1.85]} />
            <meshBasicMaterial
              ref={screenMatRef}
              map={textures[active]}
              toneMapped={false}
              transparent
              opacity={1}
            />
          </mesh>

          {/* Camera dot at top */}
          <mesh position={[0, 2.0, 0.085]}>
            <sphereGeometry args={[0.018, 16, 16]} />
            <meshStandardMaterial
              color="#000000"
              metalness={1}
              roughness={0.2}
            />
          </mesh>

          {/* Brand emboss on lid back (visible from camera angle) */}
          <Text
            position={[0, 1.05, -0.05]}
            rotation={[0, Math.PI, 0]}
            fontSize={0.22}
            color="#2a2d35"
            anchorX="center"
            anchorY="middle"
            letterSpacing={-0.02}
          >
            BD
          </Text>
        </group>

        {/* Subtle base shadow plane */}
        <mesh position={[0, -0.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[5, 3.5]} />
          <meshBasicMaterial color="#000000" transparent opacity={0.18} />
        </mesh>
      </group>
    </Float>
  );
}
