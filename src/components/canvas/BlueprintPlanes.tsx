"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useTexture, Billboard } from "@react-three/drei";
import { CATALOG } from "@/data/catalog";

type PlaneData = {
  id: string;
  position: [number, number, number];
  accent: string;
};

const HELIX_IDS = [
  "restaurant",
  "bakery",
  "brewery",
  "dental",
  "salon",
  "spa",
  "gym",
  "yoga",
  "contractor",
  "landscaping",
  "realtor",
  "photographer",
  "florist",
  "nonprofit",
];

const TILE_W = 3.4;
const TILE_H = 2.1;
const Y_TOP = -3;
const Y_BOTTOM = -50;
const SIDE_OFFSET = 1.9; // alternating left/right of spine — wider since tiles sit ~2 units back

export default function BlueprintPlanes() {
  const positions = useMemo<PlaneData[]>(() => {
    const items = HELIX_IDS.map((id) =>
      CATALOG.find((c) => c.id === id),
    ).filter((c): c is (typeof CATALOG)[number] => Boolean(c));

    return items.map((item, i) => {
      const t = i / Math.max(items.length - 1, 1);
      const y = Y_TOP + t * (Y_BOTTOM - Y_TOP);
      // Alternate left/right side of spine — softer arc, never directly behind
      const side = i % 2 === 0 ? -1 : 1;
      const x = side * SIDE_OFFSET;
      // Pushed back ~2 units in world Z so tiles no longer crowd camera
      const z = -1.0 + Math.sin(t * Math.PI * 1.4) * 0.6;
      return {
        id: item.id,
        position: [x, y, z],
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

  return (
    <group>
      {positions.map((p, i) => {
        const tex = textureArray[i];
        if (tex) tex.colorSpace = THREE.SRGBColorSpace;
        return (
          <BillboardTile
            key={p.id}
            position={p.position}
            texture={tex}
            accent={p.accent}
          />
        );
      })}
    </group>
  );
}

function BillboardTile({
  position,
  texture,
  accent,
}: {
  position: [number, number, number];
  texture: THREE.Texture;
  accent: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshBasicMaterial>(null);
  const edgeRef = useRef<THREE.LineSegments>(null);
  const { camera } = useThree();

  useFrame(() => {
    if (!meshRef.current || !matRef.current) return;
    // Distance from camera along Y — tile is "active" when camera is at its Y
    const dy = Math.abs(camera.position.y - position[1]);
    // Active range: 0..6 → opacity 1..0.4, scale 1.04..0.92
    const active = Math.max(0, 1 - dy / 6);
    const opacity = 0.55 + active * 0.45;
    const scale = 0.92 + active * 0.12;
    matRef.current.opacity += (opacity - matRef.current.opacity) * 0.1;
    meshRef.current.scale.setScalar(
      meshRef.current.scale.x + (scale - meshRef.current.scale.x) * 0.1,
    );
  });

  return (
    <Billboard
      position={position}
      follow
      lockX={false}
      lockY={false}
      lockZ={false}
    >
      <mesh ref={meshRef}>
        <planeGeometry args={[TILE_W, TILE_H]} />
        <meshBasicMaterial
          ref={matRef}
          map={texture}
          transparent
          opacity={0.75}
          toneMapped={false}
          side={THREE.DoubleSide}
        />
      </mesh>
      <lineSegments ref={edgeRef}>
        <edgesGeometry args={[new THREE.PlaneGeometry(TILE_W, TILE_H)]} />
        <lineBasicMaterial color={accent} transparent opacity={0.5} />
      </lineSegments>
    </Billboard>
  );
}
