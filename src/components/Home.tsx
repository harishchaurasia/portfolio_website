// pages/Grids.tsx
import React from 'react';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('../components/Index'), {
  ssr: false,
});

const Grids: React.FC = () => {
  return (
    <div className="grid-background flex flex-col items-center justify-center h-screen text-center bg-transparent p-4">
      <div className='border border-gray-900 rounded-3xl shadow-bs bg-opacity-90 bg-black-800 bg-opacity-50 backdrop-blur-sm'>
        <h1 className= "font-xirod mt-4 mx-8 font-black text-white text-center text-7xl text-gradient mb-4">
          Hi. I'm Harish.
        </h1>
        <h1 className="font-acorn mb-2 text-white text-7xl text-gradient">A Developer.</h1>  
      </div>
      <Scene />
    </div>
  );
};

export default Grids;
