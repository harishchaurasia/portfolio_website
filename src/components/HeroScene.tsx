"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Scene = dynamic(() => import("./Index"), { ssr: false });

// The 3D prism behind the hero. Desktop-only and lazy so the hero text/image
// (which are server-rendered) paint immediately without waiting on WebGL.
const HeroScene: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!isDesktop) return null;

  return (
    <div className="fixed inset-0 w-screen h-screen pointer-events-none z-0 translate-y-[12%] md:translate-y-[14%]">
      <div className="absolute inset-0 w-full h-full">
        <Scene />
      </div>
    </div>
  );
};

export default HeroScene;
