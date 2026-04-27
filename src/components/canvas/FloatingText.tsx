"use client";

import { Text } from "@react-three/drei";

type Msg = {
  y: number;
  text: string;
  size?: number;
  color?: string;
};

const MESSAGES: Msg[] = [
  { y: -1, text: "We are building", size: 0.6 },
  { y: -2, text: "the future of", size: 0.6 },
  { y: -3, text: "website design.", size: 0.7, color: "#e8872b" },

  { y: -10, text: "Twenty industries.", size: 0.5 },
  { y: -11, text: "One method.", size: 0.5 },
  { y: -12, text: "Infinite outcomes.", size: 0.55, color: "#4a9ece" },

  { y: -20, text: "Engineered.", size: 0.6, color: "#e8872b" },
  { y: -21.2, text: "Not assembled.", size: 0.42 },

  { y: -30, text: "Hand-coded.", size: 0.5 },
  { y: -31, text: "No templates.", size: 0.5 },
  { y: -32, text: "No shortcuts.", size: 0.5 },

  { y: -42, text: "Sacramento", size: 0.5 },
  { y: -43, text: "→ Nationwide", size: 0.5, color: "#e8872b" },
];

export default function FloatingText() {
  return (
    <group>
      {MESSAGES.map((m, i) => (
        <Text
          key={i}
          position={[0, m.y, 2.5]}
          anchorX="center"
          anchorY="middle"
          fontSize={m.size ?? 0.5}
          color={m.color ?? "#ffffff"}
          letterSpacing={-0.02}
          textAlign="center"
          outlineWidth={0.005}
          outlineColor="#000000"
          outlineOpacity={0.7}
          maxWidth={5}
        >
          {m.text}
        </Text>
      ))}
    </group>
  );
}
