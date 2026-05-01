"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Intro from "../components/Intro";

const VantaComponent = dynamic(() => import("../components/VantaComponent"), {
  ssr: false,
});
const Hom = dynamic(() => import("../components/Home"));
const Navs = dynamic(() => import("../components/Navs"));
const About = dynamic(() => import("../components/About"));
const Prjs = dynamic(() => import("../components/Projects"));
const Contact = dynamic(() => import("../components/ContactMe"));
const Footer = dynamic(() => import("../components/Footer"));

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="relative mt-2 py-4">
      {isDesktop && <VantaComponent />}
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      {!showIntro && (
        <>
          <Navs />
          <section id="home" className="content mt-28 md:mt-20 w-full mb-0">
            <Hom />
          </section>

          <section
            id="about"
            className="relative z-20 content px-4 md:px-8 my-6 md:my-20 space-y-8 md:space-y-10 max-w-6xl mx-auto"
          >
            <About />
          </section>

          <section
            id="projects"
            className="relative z-20 content px-4 md:px-8 my-6 md:my-20 space-y-8 md:space-y-10 max-w-6xl mx-auto"
          >
            <Prjs />
          </section>

          <section
            id="contact"
            className="relative z-20 content px-4 md:px-8 my-6 md:my-20 space-y-8 md:space-y-10 max-w-6xl mx-auto"
          >
            <Contact />
          </section>

          <Footer />
        </>
      )}
    </div>
  );
}
