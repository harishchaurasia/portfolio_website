"use client";

import React, { useEffect, useRef } from "react";

const THREE_CDN =
  "https://cdnjs.cloudflare.com/ajax/libs/three.js/r122/three.min.js";

const loadThreeCdn = (() => {
  let promise: Promise<void> | null = null;
  return () => {
    if (typeof window === "undefined") return Promise.resolve();
    if ((window as any).THREE) return Promise.resolve();
    if (promise) return promise;
    promise = new Promise((resolve, reject) => {
      const existing = document.querySelector<HTMLScriptElement>(
        `script[data-vanta-three="1"]`
      );
      if (existing) {
        existing.addEventListener("load", () => resolve());
        existing.addEventListener("error", () => reject());
        return;
      }
      const s = document.createElement("script");
      s.src = THREE_CDN;
      s.async = true;
      s.dataset.vantaThree = "1";
      s.onload = () => resolve();
      s.onerror = () => reject(new Error("vanta three.js failed"));
      document.head.appendChild(s);
    });
    return promise;
  };
})();

const VantaComponent = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      if (vantaEffect.current) return;
      try {
        await loadThreeCdn();
        if (cancelled) return;
        const VANTA = await import("vanta/dist/vanta.birds.min");
        if (cancelled || !vantaRef.current || vantaEffect.current) return;
        vantaEffect.current = VANTA.default({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          quantity: 5,
          scale: 1,
          scaleMobile: 0.5,
          backgroundColor: 0x000000,
          backgroundAlpha: 1,
          colorMode: "lerp",
          color1: 0x000000,
          color2: 0x7d9d,
          birdSize: 1,
          wingSpan: 12,
          speedLimit: 5,
          separation: 20.0,
          alignment: 20.0,
          cohesion: 15,
        });
      } catch (error) {
        console.error("Error loading Vanta.js:", error);
      }
    };

    init();

    return () => {
      cancelled = true;
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return <div ref={vantaRef} className="vanta-bg" />;
};

export default VantaComponent;
