"use client";

import React, { useEffect, useRef } from "react";
import { tipRadius, rootRadius, gearSize } from "./chain";

/**
 * Cog silhouette with `N` teeth between tip radius `ra` and root radius `rd`.
 * Each tooth is centred on angle k*(2pi/N) (fractional 0), tapering from a wide
 * root to a narrower tip; valleys are centred at fractional 0.5.
 */
function gearPath(N: number, ra: number, rd: number): string {
  const tau = (Math.PI * 2) / N;
  const tipHalf = tau * 0.16;
  const rootHalf = tau * 0.3;
  const pt = (r: number, a: number) =>
    `${(Math.cos(a) * r).toFixed(2)},${(Math.sin(a) * r).toFixed(2)}`;
  let d = "";
  for (let i = 0; i < N; i++) {
    const c = i * tau;
    const A = pt(rd, c - rootHalf); // valley -> tooth (root)
    const B = pt(ra, c - tipHalf); // tip left
    const C = pt(ra, c + tipHalf); // tip right
    const D = pt(rd, c + rootHalf); // tooth -> valley (root)
    d += `${i === 0 ? "M" : "L"}${A} L${B} L${C} L${D} `;
  }
  return d + "Z";
}

export interface GearProps {
  teeth: number;
  /** shared module (px). Meshing gears must use the same value. */
  module: number;
  /** rotation gained per pixel scrolled */
  speedPerPx?: number;
  /** +1 or -1; meshing gears alternate */
  direction?: 1 | -1;
  /** degrees/sec of idle spin (0 = only move on scroll) */
  idleDegPerSec?: number;
  /** static base rotation (deg) used to phase-align meshing teeth */
  phase?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Blueprint-style gear whose rotation is driven by scroll position (plus an
 * optional idle spin). Respects prefers-reduced-motion by staying static.
 */
const Gear: React.FC<GearProps> = ({
  teeth,
  module,
  speedPerPx = 0.04,
  direction = 1,
  idleDegPerSec = 0,
  phase = 0,
  color = "#30c555",
  strokeWidth = 2,
  className = "",
  style,
}) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    let idleAngle = 0;

    const loop = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      idleAngle += idleDegPerSec * dt;
      const scroll = window.scrollY || window.pageYOffset || 0;
      const angle = phase + direction * (scroll * speedPerPx + idleAngle);
      if (ref.current) {
        ref.current.style.transform = `rotate(${angle}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [speedPerPx, direction, idleDegPerSec, phase]);

  const ra = tipRadius(module, teeth);
  const rd = rootRadius(module, teeth);
  const size = gearSize(module, teeth);
  const half = size / 2;
  const hub = Math.max(rd * 0.42, module * 1.2);
  const bore = hub * 0.42;

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox={`${-half} ${-half} ${size} ${size}`}
      className={className}
      style={{ willChange: "transform", ...style }}
      aria-hidden="true"
      focusable="false"
    >
      <g
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      >
        <path d={gearPath(teeth, ra, rd)} />
        <circle cx="0" cy="0" r={hub} />
        <circle cx="0" cy="0" r={bore} />
        {[0, 60, 120].map((deg) => {
          const a = (deg * Math.PI) / 180;
          const x = Math.cos(a) * hub;
          const y = Math.sin(a) * hub;
          return <line key={deg} x1={-x} y1={-y} x2={x} y2={y} />;
        })}
      </g>
    </svg>
  );
};

export default Gear;
