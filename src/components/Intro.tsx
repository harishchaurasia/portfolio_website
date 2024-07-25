// src/components/Intro.tsx
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Intro: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#welcome-text", { opacity: 1, duration: 1.5, delay: 0.5 })
      .to("#welcome-text", { opacity: 0, duration: 1.5, delay: 1 });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <h1 id="welcome-text" className="text-8xl text-transparent bg-clip-text bg-gradient-to-t from-yellow-700 to-orange-600 opacity-0 font-imperfect">
        Welcome...
      </h1>
    </div>
  );
  
};

export default Intro;
