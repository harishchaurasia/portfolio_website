// src/app/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Intro from '../components/Intro';
import Grids from '../components/Grids';
import Navs from '../components/Nav';
import Scene from '../components/Index';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    if (!showIntro) {
      const timer = setTimeout(() => {
        setShowNav(true);
        setShowGrid(true);
        setShowScene(true);
      }, 200); // Short delay after intro to show main content

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [showIntro]);

  return (
    <div className="relative">
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      {!showIntro && showNav && <Navs />}
      <section id="home" className="content">
        {!showIntro && showGrid && <Grids />}
      </section>
      <section id="about" className="content">
        {/* Add about content here */}
      </section>
      <section id="projects" className="content">
        {/* Add projects content here */}
      </section>
      <section id="contact" className="content">
        {/* Add contact content here */}
      </section>
    </div>
  );
}
