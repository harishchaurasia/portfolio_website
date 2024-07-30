// src/components/VantaComponent.tsx
"use client";

import React, { useEffect, useRef } from 'react';

const VantaComponent = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const loadVanta = async () => {
      try {
        // Dynamically load three.js version 0.122.0
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r122/three.min.js';
        script.onload = async () => {
          // Ensure THREE is set on the window
          window.THREE = window.THREE || {};

          const VANTA = await import('vanta/dist/vanta.birds.min');
          console.log('Vanta.js loaded:', VANTA);
          if (vantaRef.current) {
            console.log('Initializing Vanta.js on element:', vantaRef.current);
            VANTA.default({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: true,
              minHeight: 200.0,
              minWidth: 200.0,
              quantity: 5,
              scale: 0.5,
              scaleMobile: 0.5,
              backgroundColor: 0x0, // Change to desired background color
              color1: 0xff0000, // Change to desired primary bird color
              color2: 0x30B99D, // Change to desired secondary bird color
              birdSize: 0.5, // Change to desired bird size
              speedLimit: 0.8, // Change to desired speed
              separation: 25.0, // Change to desired separation
              alignment: 50.0, // Change to desired alignment
              cohesion: 75.0, // Change to desired cohesion
            });
          }
        };
        document.head.appendChild(script);
      } catch (error) {
        console.error('Error loading Vanta.js or three.js:', error);
      }
    };

    loadVanta();
  }, []);

  return (
    <div
      ref={vantaRef}
      className="vanta-bg"
    ></div>
  );
};

export default VantaComponent;
