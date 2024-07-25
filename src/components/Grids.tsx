// pages/Grids.tsx
import React from 'react';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('../components/Index'), {
  ssr: false,
});

const Grids: React.FC = () => {
  return (
    <div className="grid-background flex flex-col items-center justify-center h-screen text-center">
      <Scene />
    </div>
  );
};

export default Grids;
