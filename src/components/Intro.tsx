// src/components/Intro.tsx
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const introRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        onComplete: onComplete, // Calling the onComplete function when the animation finishes
      });


      // Customizable values
      const duration = 1  ; // Duration for each text to appear and disappear
      const stayDuration = 0.50; // Duration for each text to stay visible
      const gap = 0.95; // Additional gap time between each text

      timeline
        .to(".intro-text h1:nth-child(1)", { autoAlpha: 1, duration: duration })
        .to(".intro-text h1:nth-child(1)", { autoAlpha: 0, duration: duration }, `+=${stayDuration}`)
        .to(".intro-text h1:nth-child(2)", { autoAlpha: 1, duration: duration }, `-=${duration - gap}`)
        .to(".intro-text h1:nth-child(2)", { autoAlpha: 0, duration: duration }, `+=${stayDuration}`)
        .to(".intro-text h1:nth-child(3)", { autoAlpha: 1, duration: duration }, `-=${duration - gap}`)
        .to(".intro-text h1:nth-child(3)", { autoAlpha: 0, duration: duration }, `+=${stayDuration}`)
        .to(".intro-text h1:nth-child(4)", { autoAlpha: 1, duration: duration }, `-=${duration - gap}`)
        .to(".intro-text h1:nth-child(4)", { autoAlpha: 0, duration: duration }, `+=${stayDuration}`)
        .to(".intro-container", { autoAlpha: 0, duration: 1 }, `-=${duration}`); // Fade out the entire intro container immediately after the last text disappears
    }, introRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={introRef} className="intro-container flex items-center justify-center h-screen text-center">
      <div className="intro-text font-acorn text-white text-7xl md:text-8xl lg:text-9xl font-bold text-gradient">
        <h1 className="hidden-text">Eat.</h1>
        <h1 className="hidden-text">Sleep.</h1>
        <h1 className="hidden-text">Build.</h1>
        <h1 className="hidden-text">Repeat.</h1>
      </div>
    </div>
  );
};

export default Intro;
