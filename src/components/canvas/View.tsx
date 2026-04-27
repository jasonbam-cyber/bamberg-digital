"use client";

import { forwardRef, type ReactNode, type CSSProperties } from "react";
import { View as DreiView } from "@react-three/drei";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const View = forwardRef<HTMLElement, Props>(function View(
  { children, className, style },
  ref,
) {
  return (
    <DreiView ref={ref} className={className} style={style}>
      {children}
    </DreiView>
  );
});

export default View;
