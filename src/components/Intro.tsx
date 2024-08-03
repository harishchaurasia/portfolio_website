// src/components/Intro.tsx
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const introRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null); // Store the timeline
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setViewportHeight(window.innerHeight);

      const handleResize = () => {
        setViewportHeight(window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        onComplete: onComplete, // Calling the onComplete function when the animation finishes
      });

      timelineRef.current = timeline; // Storing the timeline reference

      // Customizable values
      const duration = 1; // Duration for each text to appear and disappear
      const stayDuration = 0.5; // Duration for each text to stay visible
      const gap = 0.95; // Additional gap time between each text

      timeline
        .to(".intro-text h1:nth-child(1)", { autoAlpha: 1, duration: duration })
        .to(
          ".intro-text h1:nth-child(1)",
          { autoAlpha: 0, duration: duration },
          `+=${stayDuration}`
        )
        .to(
          ".intro-text h1:nth-child(2)",
          { autoAlpha: 1, duration: duration },
          `-=${duration - gap}`
        )
        .to(
          ".intro-text h1:nth-child(2)",
          { autoAlpha: 0, duration: duration },
          `+=${stayDuration}`
        )
        .to(
          ".intro-text h1:nth-child(3)",
          { autoAlpha: 1, duration: duration },
          `-=${duration - gap}`
        )
        .to(
          ".intro-text h1:nth-child(3)",
          { autoAlpha: 0, duration: duration },
          `+=${stayDuration}`
        )
        .to(
          ".intro-text h1:nth-child(4)",
          { autoAlpha: 1, duration: duration },
          `-=${duration - gap}`
        )
        .to(
          ".intro-text h1:nth-child(4)",
          { autoAlpha: 0, duration: duration },
          `+=${stayDuration}`
        )
        .to(".intro-container", { autoAlpha: 0, duration: 1 }, `-=${duration}`);
    }, introRef);

    return () => ctx.revert();
  }, [onComplete]);

  const skipIntro = () => {
    if (timelineRef.current) {
      timelineRef.current.progress(1);
    }
  };

  return (
    <div
      ref={introRef}
      className="intro-container flex items-center justify-center text-center relative"
      style={{ height: `${viewportHeight}px` }}
    >
      <div className="intro-text font-acorn text-white text-7xl md:text-8xl lg:text-9xl font-bold text-gradient">
        <h1 className="hidden-text">Eat.</h1>
        <h1 className="hidden-text">Sleep.</h1>
        <h1 className="hidden-text">Build.</h1>
        <h1 className="hidden-text">Repeat.</h1>
      </div>
      <button
        onClick={skipIntro}
        className="absolute bottom-4 right-4 md:bottom-10 md:right-10 p-2 md:p-4 border border-gray-800 bg-black-800 bg-opacity-50 backdrop-blur-lg rounded-2xl text-white transition transform hover:scale-105"
      >
        Skip Intro
      </button>
    </div>
  );
};

export default Intro;
