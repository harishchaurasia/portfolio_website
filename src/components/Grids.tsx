// pages/Grids.tsx
import React from 'react';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('../components/Index'), {
  ssr: false,
});

const Grids: React.FC = () => {
  return (
    <div className="grid-background flex flex-col items-center justify-center h-screen text-center">
       <h1 className="font-aloe text-white text-7xl text-gradient mt-40">Hi. I'm Harish.</h1>
       <h1 className="font-aloe text-white text-6xl text-gradient">A Games & Software Developer.</h1>

      <Scene />
      {/* <p className="font-bruce mt-48 text-2xl text-gray-200">I love building shit. 🛠️⚙️</p>*/}
    </div>
  );
};

export default Grids;
