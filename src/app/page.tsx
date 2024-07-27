// src/app/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Intro from '../components/Intro';
import Grids from '../components/Grids';
import Navs from '../components/Navs';
import Scene from '../components/Index';
import About from '../components/About';

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

      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  return (
    <div className="relative">
      {/* {showIntro && <Intro onComplete={() => setShowIntro(false)} />} */}
      {!showIntro && showNav && <Navs />}
      <section id="home" className="content">
        {!showIntro && showGrid && <Grids />}
      </section>
      <section id="about" className="content h-screen flex items-center justify-center bg-black text-white">
        <div className="max-w-max p-8 w-full">
        <h1 className="text-green-500 text-6xl justify-items-start font-bold mx-36 mb-8">.About Me</h1>
          <About />
        </div>
    </section>

      <section id="projects" className="content">
      <div className=" text-white max-w-2xl p-8">
          <h1 className="text-4xl font-bold mb-4">Section 2</h1>
        </div>
      </section>
      <section id="contact" className="content">
      <div className="text-white max-w-2xl p-8">
          <h1 className="text-4xl font-bold mb-4">Section 3</h1>
        </div>
      </section>
    </div>
  );
}
