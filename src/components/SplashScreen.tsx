"use client";

import React, { useEffect, useState } from "react";
import Gear from "./gears/Gear";
import { buildGearChain } from "./gears/chain";

const WORDS = ["EAT.", "SLEEP.", "BUILD.", "REPEAT."];

// Two meshing gears, idle-spinning (the splash locks scroll).
const SPLASH_GEARS = buildGearChain(
  [
    { teeth: 14, dir: 1 },
    { teeth: 10, dir: -1 },
  ],
  {
    startX: 64,
    startY: 64,
    // ~51.43deg = 2x the 14-tooth spacing (360/14), so a tooth seats in the
    // groove instead of landing tooth-to-tooth.
    segAnglesDeg: [51.43],
    module: 8,
    segGaps: [2],
    baseSpeed: 0,
    baseIdle: 1600,
  }
);
const SESSION_KEY = "splashSeen";

/**
 * Fast, non-blocking splash overlay. The page content is already rendered
 * underneath (server-side), so this never blocks SEO or first paint - it just
 * covers the screen briefly, then fades out. Shown once per browser session
 * and skipped entirely for users who prefer reduced motion.
 */
const SplashScreen: React.FC = () => {
  const [mounted, setMounted] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    // Skip if already seen this session or the user prefers reduced motion.
    const seen =
      typeof window !== "undefined" &&
      window.sessionStorage.getItem(SESSION_KEY) === "1";
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (seen || reduced) {
      setMounted(false);
      return;
    }

    // Lock scroll while the splash is visible.
    document.body.style.overflow = "hidden";

    const wordTimer = window.setInterval(() => {
      setWordIndex((i) => (i + 1 < WORDS.length ? i + 1 : i));
    }, 300);

    const leaveTimer = window.setTimeout(() => finish(), 1500);

    return () => {
      window.clearInterval(wordTimer);
      window.clearTimeout(leaveTimer);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const finish = () => {
    setLeaving(true);
    window.sessionStorage.setItem(SESSION_KEY, "1");
    document.body.style.overflow = "";
    window.setTimeout(() => setMounted(false), 500);
  };

  if (!mounted) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#05070c] transition-opacity duration-500 ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Meshing gears loader */}
      <div className="relative h-[180px] w-[180px]">
        {SPLASH_GEARS.map((g, i) => (
          <Gear
            key={i}
            teeth={g.teeth}
            module={g.module}
            direction={g.direction}
            speedPerPx={0}
            idleDegPerSec={g.idleDegPerSec}
            phase={g.phaseDeg}
            strokeWidth={2.5}
            style={{
              position: "absolute",
              left: g.cx - g.size / 2,
              top: g.cy - g.size / 2,
            }}
          />
        ))}
      </div>

      <div className="mt-8 flex gap-3 font-acorn text-2xl font-bold md:text-3xl">
        {WORDS.map((w, i) => (
          <span
            key={w}
            className={`transition-all duration-300 ${
              i <= wordIndex
                ? "text-[#30c555] opacity-100"
                : "text-zinc-700 opacity-40"
            }`}
          >
            {w}
          </span>
        ))}
      </div>

      <button
        onClick={finish}
        aria-label="Skip intro"
        className="absolute bottom-8 right-8 min-h-[44px] min-w-[44px] rounded-2xl border border-zinc-800 bg-black/50 px-4 py-2 font-acorn text-sm text-zinc-300 backdrop-blur-lg transition hover:scale-105 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#30c555] focus-visible:outline-offset-2"
      >
        Skip
      </button>
    </div>
  );
};

export default SplashScreen;
