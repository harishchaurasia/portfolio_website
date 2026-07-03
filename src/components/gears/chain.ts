// Gear meshing geometry, per standard spur-gear (full-depth involute) rules.
//
// The single most important rule: two gears mesh only if they share a MODULE
//   m = pitch diameter / number of teeth
// With a shared module, every tooth is physically the same size, so they seat.
// Derived quantities (all in px, since we render 1 unit = 1 px):
//   pitch radius  rp = m * N / 2
//   addendum      = m           -> tip (outer) radius  ra = m * (N + 2) / 2
//   dedendum      = 1.25 * m     -> root radius         rd = m * (N - 2.5) / 2
//   circular pitch p = pi * m    (same for all meshing gears)
// External-gear center distance = rp1 + rp2 = m * (N1 + N2) / 2.
// Teeth are phase-offset by half a tooth at the contact line so a tooth of one
// gear sits in a valley of the other.

const ADDENDUM = 1;
const DEDENDUM = 1.25;
export const PAD = 6; // px breathing room around the tip circle in the svg
const TWO_PI = Math.PI * 2;

export const pitchRadius = (m: number, N: number) => (m * N) / 2;
export const tipRadius = (m: number, N: number) => (m * (N + 2 * ADDENDUM)) / 2;
export const rootRadius = (m: number, N: number) =>
  (m * (N - 2 * DEDENDUM)) / 2;
export const gearSize = (m: number, N: number) =>
  2 * (tipRadius(m, N) + PAD);

const mod = (n: number, d: number) => ((n % d) + d) % d;
const deg2rad = (d: number) => (d * Math.PI) / 180;
const rad2deg = (r: number) => (r * 180) / Math.PI;

export interface ChainGearSpec {
  teeth: number;
  dir: 1 | -1;
  /** optional px nudge of THIS gear only (does not move the others) */
  dx?: number;
  dy?: number;
}

export interface BuiltGear {
  teeth: number;
  module: number;
  direction: 1 | -1;
  size: number;
  cx: number;
  cy: number;
  phaseDeg: number;
  speedPerPx: number;
  idleDegPerSec: number;
}

export interface ChainOptions {
  startX: number;
  startY: number;
  /** screen-space angle (deg, 0 = right, 90 = down) from each gear to the next */
  segAnglesDeg: number[];
  /** shared module (px) - controls tooth size for the whole chain */
  module: number;
  baseSpeed: number;
  baseIdle: number;
  /**
   * Per-segment fine-tune of the gap between gears (px). 0 = perfect mesh
   * (default). Positive pulls the pair apart, negative pushes them closer /
   * more overlapped. One entry per segment, i.e. length = gears.length - 1.
   */
  segGaps?: number[];
}

/**
 * Builds an open chain of meshing gears. Consecutive gears share the module,
 * sit exactly rp1+rp2 apart, spin at the matched inverse-teeth rate in the
 * given (alternating) directions, and are phase-aligned so teeth interlock.
 */
export function buildGearChain(
  gears: ChainGearSpec[],
  opts: ChainOptions
): BuiltGear[] {
  const {
    startX,
    startY,
    segAnglesDeg,
    module: m,
    baseSpeed,
    baseIdle,
    segGaps = [],
  } = opts;
  const out: BuiltGear[] = [];

  // Base (meshing) centers, before any per-gear dx/dy nudge. The chain math
  // always uses these so an individual gear's nudge does not drag the others.
  const baseX: number[] = [];
  const baseY: number[] = [];

  for (let i = 0; i < gears.length; i++) {
    const { teeth, dir, dx = 0, dy = 0 } = gears[i];

    let bx = startX;
    let by = startY;
    let phaseRad = 0;

    if (i > 0) {
      const prev = out[i - 1];
      const phi = deg2rad(segAnglesDeg[i - 1]); // world angle prev -> this
      const d =
        pitchRadius(m, prev.teeth) +
        pitchRadius(m, teeth) +
        (segGaps[i - 1] ?? 0);
      bx = baseX[i - 1] + d * Math.cos(phi);
      by = baseY[i - 1] + d * Math.sin(phi);

      // Half-tooth interlock. Tooth centers sit at fractional 0 of a tooth
      // cycle in the Gear drawing; valley centers at 0.5.
      const stepPrev = TWO_PI / prev.teeth;
      const rhoPrev = deg2rad(prev.phaseDeg);
      const sA = mod((phi - rhoPrev) / stepPrev, 1);
      const stepThis = TWO_PI / teeth;
      phaseRad = phi + Math.PI - (sA + 0.5) * stepThis;
    }

    baseX[i] = bx;
    baseY[i] = by;

    out.push({
      teeth,
      module: m,
      direction: dir,
      size: gearSize(m, teeth),
      cx: bx + dx,
      cy: by + dy,
      phaseDeg: rad2deg(phaseRad),
      speedPerPx: baseSpeed / teeth,
      idleDegPerSec: baseIdle / teeth,
    });
  }

  return out;
}
