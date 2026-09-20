"use client";

import type { MouseEvent, ReactNode } from "react";

export default function GlowCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }
  return (
    <div className={`card ${className}`} onMouseMove={onMove}>
      {children}
    </div>
  );
}
