// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="text-white pt-8">
      <div className="font-acorn flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3">
        <p>harishchaurasia143@gmail.com</p>
        <span className="hidden md:inline">|</span>
        <p>© 2026 Harish Chaurasia. All Rights Reserved.</p>
        <span className="hidden md:inline">|</span>
        <a 
          href="https://arkaforge.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#30c555] hover:text-[#28a347] transition-colors"
        >
          Also building: Arkaforge ↗
        </a>
      </div>
    </div>
  );
};

export default Footer;
