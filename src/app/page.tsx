"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Intro from "../components/Intro";
import VantaComponent from "../components/VantaComponent";

const Hom = dynamic(() => import("../components/Home"));
const Navs = dynamic(() => import("../components/Navs"));
const About = dynamic(() => import("../components/About"));
const Prjs = dynamic(() => import("../components/Projects"));
const Contact = dynamic(() => import("../components/ContactMe"));
const Footer = dynamic(() => import("../components/Footer"));

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [showScene, setShowScene] = useState(false);
  const [showSections, setShowSections] = useState(false);

  useEffect(() => {
    if (!showIntro) {
      const timer = setTimeout(() => {
        setShowNav(true);
        setShowGrid(true);
        setShowScene(true);
        setShowSections(true);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  return (
    <div className="relative mt-2 py-4">
      <VantaComponent />
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      {!showIntro && showNav && <Navs />}

      <section id="home" className="content mt-28 md:mt-20 w-full mb-0">
        {!showIntro && showGrid && <Hom />}
      </section>

      <section
        id="about"
        className="relative z-20 content px-4 md:px-8 my-6 md:my-20 space-y-8 md:space-y-10 max-w-6xl mx-auto"
      >
        {!showIntro && showSections && <About />}
      </section>

      <section
        id="projects"
        className="relative z-20 content px-4 md:px-8 my-6 md:my-20 space-y-8 md:space-y-10 max-w-6xl mx-auto"
      >
        {!showIntro && showSections && <Prjs />}
      </section>

      <section
        id="contact"
        className="relative z-20 content px-4 md:px-8 mt-8 md:my-32 space-y-8 md:space-y-10 max-w-6xl mx-auto"
      >
        {!showIntro && showSections && <Contact />}
      </section>

      {!showIntro && showSections && <Footer />}
    </div>
  );
}
