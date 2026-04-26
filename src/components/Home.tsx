import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const Scene = dynamic(() => import("../components/Index"), {
  ssr: false,
});

const Grids: React.FC = () => {
  const [isNotMobile, setIsNotMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsNotMobile(window.innerWidth >= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative w-full min-h-[85vh] md:min-h-[calc(100vh-6rem)] flex items-start justify-center pt-16 md:pt-20 lg:pt-24 overflow-hidden">
      {/* 3D prism - scoped to hero only */}
      {isNotMobile && (
        <div className="fixed inset-0 w-screen h-screen pointer-events-none z-0 translate-y-[12%] md:translate-y-[14%]">
          <div className="absolute inset-0 w-full h-full">
            <Scene />
          </div>
        </div>
      )}

      {/* Full-bleed gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/30 to-black/50 pointer-events-none z-[1]" />

      {/* Content - on top */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-10 md:pb-16 -translate-y-2 md:-translate-y-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start lg:items-center">
          {/* Left: Profile image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#30c555]/30 to-transparent rounded-2xl blur-lg" />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-2 border-gray-600/80 shadow-2xl rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/harish02.png"
                  alt="Harish Chaurasia"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
                />
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#30c555]/25 to-transparent" />
              </div>
            </div>
          </div>

          {/* Right: Typography + CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
            <p className="text-[#30c555] font-acorn text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] mb-3 md:mb-4">
              AI/ML & Software Engineer
            </p>
            <h1 className="font-acorn font-bold text-gray-100 leading-[1.05] tracking-tight mb-3 md:mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Hi. I&apos;m <span className="text-[#30c555]">Harish</span>.
            </h1>
            <p className="text-gray-400 font-acorn mb-6 md:mb-8 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
              Building AI Agents · Agentic Systems · MCPs · Agent Evaluation
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="/Harish's Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn hero-btn-outline"
              >
                Resume
              </a>
              <a
                href="https://www.linkedin.com/in/harishchaurasia"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn hero-btn-outline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/harishchaurasia"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn hero-btn-outline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 md:left-12 text-gray-500/50 text-xs font-mono hidden lg:block z-10">
        {"< build · ship · iterate />"}
      </div>
    </div>
  );
};

export default Grids;
