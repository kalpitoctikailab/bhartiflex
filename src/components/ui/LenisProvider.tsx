"use client";

import type { ReactNode } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {/* react-lenis bundles older React types; React 19’s ReactNode is wider (e.g. bigint). */}
      {children as never}
    </ReactLenis>
  );
}
