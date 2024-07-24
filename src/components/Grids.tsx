// src/components/Grids.tsx
import React from 'react';

const Grids: React.FC = () => {
  return (
    <div className="grid-background flex flex-col items-center h-screen text-center">
      
      <h1 className="font-aloe text-white text-9xl font-bold text-gradient mt-36">Hi. I'm Harish.</h1>
      <h2 className="font-aloe text-white text-9xl font-bold text-gradient">A Developer.</h2>
      <p className="font-bruce mt-16 text-2xl text-gray-200">I love building shit. 🛠️⚙️</p>
      <p className="font-bruce mt-2 text-2xl text-gray-200">Eat. Sleep. Build & Repeat.♾️</p>
      {/* <RoundedImg 
        src="/harish_headshot_black.png"
        alt="My Image"
        width="315px"
        height="315px"
        top="2030px"
        left="223px"
      />  */}
     
      <div className='relative h-screen mt-36'>
      </div>
    </div>
  );
};

export default Grids;