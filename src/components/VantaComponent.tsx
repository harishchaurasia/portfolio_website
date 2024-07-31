// src/components/VantaComponent.tsx
"use client";

import React, { useEffect, useRef } from "react";

const VantaComponent = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const loadVanta = async () => {
      try {
        // Dynamically loadinng three.js version 0.122.0, specifically
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/three.js/r122/three.min.js";
        script.onload = async () => {
          // Ensuring THREE is set on the window
          window.THREE = window.THREE || {};

          const VANTA = await import("vanta/dist/vanta.birds.min");
          console.log("Vanta.js loaded:", VANTA);
          if (vantaRef.current) {
            console.log("Initializing Vanta.js on element:", vantaRef.current);
            VANTA.default({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: true,
              minHeight: 200.0,
              minWidth: 200.0,
              quantity: 5,
              scale: 1,
              scaleMobile: 0.5,
              backgroundColor: 	0x000000,
              backgroundAlpha:1,
              colorMode: 'lerp',
              color1: 0x000000,
              color2: 0x7d9d,
              // color2: 0x7c08ff,

              birdSize: 1,
              wingSpan: 12,
              speedLimit: 5,
              separation: 20.0, 
              alignment: 20.0, 
              cohesion: 15 ,
            });
          }
        };
        document.head.appendChild(script);
      } catch (error) {
        console.error("Error loading Vanta.js or three.js:", error);
      }
    };

    loadVanta();
  }, []);

  return <div ref={vantaRef} className="vanta-bg"></div>;
};

export default VantaComponent;
