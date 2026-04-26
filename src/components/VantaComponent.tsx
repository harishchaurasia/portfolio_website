"use client";

import React, { useEffect, useRef } from "react";

const VantaComponent = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    let script: HTMLScriptElement | null = null;

    const loadVanta = async () => {
      if (vantaEffect.current) return;

      try {
        script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r122/three.min.js";
        script.async = true;
        
        script.onload = async () => {
          if (!window.THREE) window.THREE = (window as any).THREE || {};

          const VANTA = await import("vanta/dist/vanta.birds.min");
          
          if (vantaRef.current && !vantaEffect.current) {
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
              colorMode: 'lerp',
              color1: 0x000000,
              color2: 0x7d9d,
              birdSize: 1,
              wingSpan: 12,
              speedLimit: 5,
              separation: 20.0,
              alignment: 20.0,
              cohesion: 15,
            });
          }
        };
        
        document.head.appendChild(script);
      } catch (error) {
        console.error("Error loading Vanta.js:", error);
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return <div ref={vantaRef} className="vanta-bg" />;
};

export default VantaComponent;
