"use client";

import React from "react";
import Gear from "./Gear";
import { buildGearChain, BuiltGear, ChainGearSpec } from "./chain";

/** Renders a pre-computed meshing chain; parent supplies the positioned box.
 *  Gears rotate as the page scrolls (no automatic spin). */
const Chain: React.FC<{ gears: BuiltGear[]; strokeWidth?: number }> = ({
  gears,
  strokeWidth = 2,
}) => (
  <>
    {gears.map((g, i) => (
      <Gear
        key={i}
        teeth={g.teeth}
        module={g.module}
        direction={g.direction}
        speedPerPx={g.speedPerPx}
        idleDegPerSec={g.idleDegPerSec}
        phase={g.phaseDeg}
        strokeWidth={strokeWidth}
        style={{
          position: "absolute",
          left: g.cx - g.size / 2,
          top: g.cy - g.size / 2,
        }}
      />
    ))}
  </>
);

/* ------------------------------------------------------------------ */
/* Pre-computed meshing chains                                        */
/* ------------------------------------------------------------------ */
// ===================================================================
// CORNER CLUSTER  (bottom-right of the screen)  -- adjust here
// Each entry = one gear: `teeth` (size, more teeth = bigger) and `dir`
// (spin direction; MUST alternate +1, -1, +1 for the teeth to mesh).
const CORNER: ChainGearSpec[] = [
  // dx/dy = px nudge of THAT gear only (right/down positive). Leave 0 for a clean mesh.
  { teeth: 16, dir: 1, dx: 0, dy: 0 }, // gear 1 (biggest, anchored at startX/startY)
  { teeth: 12, dir: -1, dx: -8, dy: -2 }, // gear 2 (placed off gear 1 at segAnglesDeg[0])
  { teeth: 9, dir: 1, dx: 0, dy: -5 }, // gear 3 (placed off gear 2 at segAnglesDeg[1])
];
const cornerChain = buildGearChain(CORNER, {
  startX: 300, // gear 1 CENTER x within the 360x360 corner box (bigger = right)
  startY: 300, // gear 1 CENTER y within the box (bigger = down)
  segAnglesDeg: [215, 300], // angle to gear 2, then gear 3 (0=right,90=down,180=left,270=up)
  module: 8, // tooth size for the whole cluster (bigger = bigger gears + wider spacing)
  segGaps: [0, 0], // fine-tune spacing per gap: + pulls apart, - overlaps more
  baseSpeed: 0.55, // scroll rotation speed
  baseIdle: 0, // scroll-driven only, no auto spin
});

// ===================================================================
// DIVIDER TRAIN  (the row of gears between sections)  -- adjust here
const DIVIDER: ChainGearSpec[] = [
  { teeth: 15, dir: 1 },
  { teeth: 11, dir: -1 },
  { teeth: 13, dir: 1 },
];
const dividerChain = buildGearChain(DIVIDER, {
  startX: 35, // gear 1 CENTER x within the 180x80 divider box
  startY: 40, // gear 1 CENTER y (40 = vertically centered in the 80px box)
  segAnglesDeg: [0, 0], // 0 = lay the train out horizontally to the right
  module: 4, // tooth size; pairs with teeth 15/11/13 to keep the original gear size
  segGaps: [4, 3], // fine-tune spacing per gap: + pulls apart, - overlaps more
  baseSpeed: 0.9, // scroll rotation speed
  baseIdle: 0, // scroll-driven only, no auto spin
});

/* ------------------------------------------------------------------ */
const CornerGears: React.FC = () => (
  <div
    className="pointer-events-none fixed bottom-0 right-0 z-[2] select-none opacity-[0.2] origin-bottom-right scale-[0.55] sm:scale-75 md:scale-100"
    aria-hidden="true"
  >
    <div className="relative h-[360px] w-[360px]">
      <Chain gears={cornerChain} />
    </div>
  </div>
);

export const GearDivider: React.FC = () => (
  <div
    className="pointer-events-none my-8 flex items-center justify-center md:my-14"
    aria-hidden="true"
  >
    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#30c555]/25" />
    <div className="relative h-[80px] w-[180px] opacity-70">
      <Chain gears={dividerChain} strokeWidth={1.2} />
    </div>
    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#30c555]/25" />
  </div>
);

/* ------------------------------------------------------------------ */
export const GearsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <>
    <CornerGears />
    {children}
  </>
);
