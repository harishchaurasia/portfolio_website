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
      <div className="border border-gray-900 rounded-3xl shadow-bs bg-black-800 bg-opacity-50 backdrop-blur-lg p-4 flex flex-col md:flex-row items-center">
        {/* Left Image */}
        <img
          // src="/harish_headshot_black.png"
          src="/harish03.png"
          alt="Harish"
          className="w-48 h-48 md:w-60 md:h-60 rounded-3xl object-cover mb-4 md:mb-0 md:mr-6"
        />
        {/* Right Content */}
        <div className="flex flex-col items-center">
          <h1 className="font-acorn font-medium mt-0 mx-4 text-gray-200 text-center text-5xl md:text-6xl lg:text-7xl text-gradient mb-4">
            Hi. I&apos;m Harish.
          </h1>
          <h2 className="font-acorn font-medium mx-4 text-white text-2xl md:text-3xl lg:text-4xl text-gradient mb-6">
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
