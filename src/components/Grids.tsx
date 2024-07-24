// src/components/Grids.tsx
import React from 'react';
import ImageWithRoundedCorners from './RoundImages';

const Grids: React.FC = () => {
  return (
    <div className="grid-background">
      <div className="block">
        <ImageWithRoundedCorners 
          src="/harish_headshot_black.png" 
          alt="My Image" 
          width="315px" 
          height="315px" 
        />
        <h1 className="font-imperfect text-white text-4xl mt-4">
          Hello there...
        </h1>
      </div>
    </div>
  );
};

export default Grids;
