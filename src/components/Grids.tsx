// pages/Grids.tsx
import React from 'react';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('../components/Index'), {
  ssr: false,
});

const Grids: React.FC = () => {
  return (
    <div className="grid-background flex flex-col items-center justify-center h-screen text-center">
       <h1 className="font-acorn font-bold text-white text-8xl text-gradient mt-48">Hi. I'm Harish.</h1>
       {/* <h1 className="font-recharge text-white mt-2 text-7xl text-gradient">A Developer.</h1> */}
       <div className='flex'>
        {/* <p className="font-bruce mt-3 text-2xl text-white">And,</p> */}
        {/* <p className="font-bruce mt-3 text-2xl text-black">..</p> */}
        {/* <p className="font-bruce mt-3 text-2xl text-red-900">'I love building shit.'</p> */}

       </div>
             
      <Scene />

    </div>
  );
};

export default Grids;
