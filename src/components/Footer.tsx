// src/components/Footer.tsx
import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div className="text-white pt-8">
      <div className="font-acorn flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3">
        <p>mail.harishchaurasia@gmail.com</p>
        <span className="hidden md:inline">|</span>
        <p>© 2026 Harish Chaurasia. All Rights Reserved.</p>
        <span className="hidden md:inline">|</span>
        <a
          href="https://arkaforge.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#30c555] transition-colors hover:text-[#28a347]"
        >
          Also building: ArkaForge
          <FaArrowUpRightFromSquare className="text-[0.7em] opacity-80" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
