"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.5,
      smoothWheel: true,
      autoRaf: true,
    });
    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
