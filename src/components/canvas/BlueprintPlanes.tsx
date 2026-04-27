"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { CATALOG } from "@/data/catalog";

type PlaneData = {
  id: string;
  position: [number, number, number];
  rotation: [number, number, number];
  accent: string;
};

const HELIX_IDS = [
  "restaurant",
  "bakery",
  "brewery",
  "dental",
  "medical",
  "salon",
  "spa",
  "gym",
  "yoga",
  "contractor",
  "landscaping",
  "realtor",
  "lawyer",
  "photographer",
  "videographer",
  "florist",
  "interior",
  "nonprofit",
  "childcare",
  "auto-dealer",
];

export default function BlueprintPlanes() {
  const groupRef = useRef<THREE.Group>(null);

  const positions = useMemo<PlaneData[]>(() => {
    const items = HELIX_IDS.map((id) =>
      CATALOG.find((c) => c.id === id),
    ).filter((c): c is (typeof CATALOG)[number] => Boolean(c));

    return items.map((item, i) => {
      const t = i / items.length;
      const angle = t * Math.PI * 5;
      const radius = 2.8 + Math.sin(t * Math.PI * 2) * 0.4;
      const y = -2 - t * 48;
      return {
        id: item.id,
        position: [Math.cos(angle) * radius, y, Math.sin(angle) * radius],
        rotation: [0, -angle + Math.PI / 2, 0],
        accent: item.accent,
      };
    });
  }, []);

  const textureUrls = useMemo(
    () => positions.map((p) => `/screenshots/blueprint-${p.id}.jpg`),
    [positions],
  );

  const textures = useTexture(textureUrls);
  const textureArray = useMemo(
    () => (Array.isArray(textures) ? textures : [textures]) as THREE.Texture[],
    [textures],
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.04;
  });

  return (
    <group ref={groupRef}>
      {positions.map((p, i) => {
        const tex = textureArray[i];
        if (tex) tex.colorSpace = THREE.SRGBColorSpace;
        return (
          <mesh key={p.id} position={p.position} rotation={p.rotation}>
            <planeGeometry args={[2.6, 1.6]} />
            <meshBasicMaterial
              map={tex}
              transparent
              opacity={0.85}
              side={THREE.DoubleSide}
              toneMapped={false}
            />
          </mesh>
        );
      })}
    </group>
  );
}
