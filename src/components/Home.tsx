// pages/Grids.tsx
import React from 'react';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('../components/Index'), {
  ssr: false,
});

const Grids: React.FC = () => {
  return (
    <div className="grid-background flex flex-col items-center justify-center h-screen text-center bg-transparent p-4">
      <h1 className="font-recharge font-black text-white text-center text-8xl text-gradient mb-4">
        Hi. I'm Harish.
      </h1>
      <h1 className="font-recharge text-white text-7xl text-gradient">A Developer.</h1>  
      <Scene />
    </div>
  );
};

export default Grids;
