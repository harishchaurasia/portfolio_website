import React from "react";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";

const Scene = dynamic(() => import("../components/Index"), {
  ssr: false,
});

const Grids: React.FC = () => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });

  return (
    <div className="grid-background flex flex-col items-center justify-center h-full md:h-screen text-center bg-transparent p-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Box */}
        <div className="border border-gray-900 rounded-3xl shadow-bs bg-black-800 bg-opacity-50 backdrop-blur-lg p-4 flex items-center justify-center">
          <img
            src="/harish03.png"
            alt="Harish"
            className="w-56 h-56 md:w-72 md:h-72 rounded-3xl object-cover"
          />
        </div>
        {/* Content Box */}
        <div className="border border-gray-900 rounded-3xl shadow-bs bg-black-800 bg-opacity-50 backdrop-blur-lg p-4 flex flex-col items-center justify-center">
          <h1 className="font-acorn font-medium mt-0 mx-4 text-gray-200 text-center text-6xl md:text-7xl lg:text-8xl text-gradient mb-4">
            Hi. I&apos;m Harish.
          </h1>
          <h2 className="font-acorn font-medium mx-4 text-white text-3xl md:text-4xl lg:text-5xl text-gradient mb-6">
            A Creative Developer.
          </h2>
          <div className="flex justify-center space-x-4 mx-4">
            <a
              href="/Resume2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 hover:bg-gray-800 text-black hover:text-green-500 font-acorn py-3 px-8 rounded-full transition duration-10 text-sm md:text-lg lg:text-xl"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/harishchaurasia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-gray-800 text-black hover:text-green-500 font-acorn py-3 px-8 rounded-full transition duration-10 text-sm md:text-lg lg:text-xl"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      {isNotMobile && <Scene />}
    </div>
  );
};

export default Grids;
