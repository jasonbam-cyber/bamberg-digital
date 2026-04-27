"use client";

import { Text } from "@react-three/drei";

type Msg = {
  y: number;
  text: string;
  size: number;
  color?: string;
};

const MESSAGES: Msg[] = [
  { y: -2, text: "We are building", size: 0.55 },
  { y: -3, text: "the future of", size: 0.55 },
  { y: -4, text: "website design.", size: 0.62, color: "#e8872b" },

  { y: -10, text: "Twenty industries.", size: 0.45 },
  { y: -11, text: "One method.", size: 0.45 },
  { y: -12, text: "Infinite outcomes.", size: 0.5, color: "#4a9ece" },

  { y: -20, text: "Engineered.", size: 0.55, color: "#e8872b" },
  { y: -22, text: "Not assembled.", size: 0.4 },

  { y: -30, text: "Hand-coded.", size: 0.45 },
  { y: -31, text: "No templates.", size: 0.45 },
  { y: -32, text: "No shortcuts.", size: 0.45 },

  { y: -42, text: "Sacramento", size: 0.4 },
  { y: -43, text: "→ Nationwide", size: 0.4, color: "#e8872b" },
];

export default function FloatingText() {
  return (
    <group>
      {MESSAGES.map((m, i) => {
        const left = i % 2 === 0;
        return (
          <Text
            key={i}
            position={[left ? -1.6 : 1.6, m.y, 1.5]}
            anchorX={left ? "right" : "left"}
            anchorY="middle"
            fontSize={m.size}
            color={m.color || "#ffffff"}
            letterSpacing={-0.02}
            textAlign={left ? "right" : "left"}
            outlineWidth={0.005}
            outlineColor="#000000"
            outlineOpacity={0.6}
            maxWidth={6}
          >
            {m.text}
          </Text>
        );
      })}
    </group>
  );
}
