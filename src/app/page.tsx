// src/app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Intro from "../components/Intro";
import Hom from "../components/Home";
import Navs from "../components/Navs";
import Scene from "../components/Index";
import About from "../components/About";
import Prjs from "../components/Projects";
import Contact from "../components/ContactMe";

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
      
      <section id="home" className="content mt-0 md:mt-20 mx-4 md:mx-16 lg:mx-44 my-10 md:my-20 space-y-10 p-8">
        {!showIntro && showGrid && <Hom/>}
      </section>

      <section id="about" className="content mx-4 md:mx-16 lg:mx-44 my-10 md:my-20 space-y-10">
        <About />
      </section>

      <section id="projects" className="content mx-4 md:mx-16 lg:mx-44 my-10 md:my-20 space-y-10">
        <Prjs/>
      </section>

      <section id="contact" className="content mx-4 md:mx-16 lg:mx-44 my-10 md:my-28 space-y-10">
        <Contact/>
      </section>
    </div>
  );
}
