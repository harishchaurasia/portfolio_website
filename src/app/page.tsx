// src/app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Intro from "../components/Intro";
import Hom from "../components/Home";
import Navs from "../components/Navs";
import Scene from "../components/Index";
import About from "../components/About";

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
    <div className="relative my-2 py-4">
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      {!showIntro && showNav && <Navs />}
      
      <section id="home" className="content border border-gray-700 rounded-3xl mt-0 md:mt-20 mx-4 md:mx-16 lg:mx-44 my-10 md:my-20 space-y-10 shadow-bs p-8">
        {!showIntro && showGrid && <Hom/>}
      </section>

      <section id="about" className="content mx-4 md:mx-16 lg:mx-44 my-10 md:my-20 space-y-10">
        <About />
      </section>

      <section id="projects" className="content mx-4 md:mx-16 lg:mx-44 my-10 md:my-20 space-y-10">
        <div className="text-white max-w-2xl p-8">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          {/* Add project content here */}
        </div>
      </section>

      <section id="contact" className="content mx-4 md:mx-16 lg:mx-44 my-10 md:my-20 space-y-10">
        <div className="text-white max-w-2xl p-8">
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          {/* Add contact content here */}
        </div>
      </section>
    </div>
  );
}
