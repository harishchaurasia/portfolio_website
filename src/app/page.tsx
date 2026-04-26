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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload critical resources behind splash screen
    const preloadResources = async () => {
      try {
        // Preload critical images
        const imagesToPreload = [
          "/harish02.png",
          "/asu_logo.png",
          "/herberger.png",
          "/ira.png",
        ];

        await Promise.all(
          imagesToPreload.map(
            (src) =>
              new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = reject;
              })
          )
        );

        setIsLoading(false);
      } catch (error) {
        console.error("Error preloading resources:", error);
        setIsLoading(false);
      }
    };

    preloadResources();
  }, []);

  return (
    <div className="relative mt-2 py-4">
      <VantaComponent />
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      {!showIntro && !isLoading && (
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
            className="relative z-20 content px-4 md:px-8 mt-8 md:my-32 space-y-8 md:space-y-10 max-w-6xl mx-auto"
          >
            <Contact />
          </section>

          <Footer />
        </>
      )}
    </div>
  );
}
