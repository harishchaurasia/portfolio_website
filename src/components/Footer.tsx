// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="text-white pt-8">
      <div className="font-acorn flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3">
        <p>harishchaurasia143@gmail.com</p>
        <span className="hidden md:inline">|</span>
        <p>© 2024 Harish Chaurasia. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
