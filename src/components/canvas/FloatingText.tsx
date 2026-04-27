"use client";

import { Text } from "@react-three/drei";

type Msg = {
  y: number;
  text: string;
  size?: number;
  color?: string;
};

const MESSAGES: Msg[] = [
  // Mid-page: anchor moment
  { y: -16, text: "I am your founder.", size: 0.7, color: "#e8872b" },
  { y: -17.2, text: "I build it myself.", size: 0.7 },

  // Late-page: closing emotional beat
  { y: -36, text: "Twenty industries.", size: 0.55 },
  { y: -37, text: "One craftsman.", size: 0.55, color: "#4a9ece" },
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
