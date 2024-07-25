import React from 'react';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('../components/Index'), {
  ssr: false,
});

const Grids: React.FC = () => {
  return (
    <div className="grid-background flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="font-aloe text-white text-6xl font-bold text-gradient">
        Hi. I'm Harish.
      </h1>
      <h2 className="font-aloe text-white text-4xl font-bold text-gradient mt-2">
        A Developer.
      </h2>
      <p className="font-bruce mt-6 text-xl text-gray-200">
        I love building things. 🛠️⚙️
      </p>
      <p className="font-bruce mt-2 text-xl text-gray-200">
        Eat. Sleep. Build & Repeat.♾️
      </p>
      <div className="mt-6">
        <Scene />
      </div>
    </div>
  );
};

export default Grids;
