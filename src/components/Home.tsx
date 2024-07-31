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
      <div className="border border-gray-900 rounded-3xl shadow-bs bg-opacity-90 bg-black-800 bg-opacity-50 backdrop-blur-lg p-4">
        <h1 className="font-bold mt-4 mx-8 text-white text-center text-5xl md:text-6xl lg:text-7xl text-gradient mb-8 md:mb-4">
          Hi. I'm Harish.
        </h1>
        <h2 className="font-medium font-acorn mb-4 text-white text-3xl md:text-4xl lg:text-5xl text-gradient">
          A Developer.
        </h2>
      </div>
      {isNotMobile && <Scene />}
    </div>
  );
};

export default Grids;
