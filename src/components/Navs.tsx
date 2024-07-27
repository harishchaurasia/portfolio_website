import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Nav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleSetActive = (section: string) => {
    setActiveSection(section);
  };

  return (
    <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 mt-6 p-4 rounded-full bg-[#1a1a1a] bg-opacity-90 text-slate-50 shadow-md z-50">
      <ul className="flex items-center h-5 mx-0 space-x-8">
        <li className={`font-bruce font-regular text-xl py-1 px-4 rounded-full ${activeSection === 'home' ? 'bg-[#333333] bg-opacity-70' : 'bg-opacity-0'} hover:bg-opacity-70`}>
          <Link to="home" smooth={true} duration={500} className="cursor-pointer" onSetActive={() => handleSetActive('home')}>
            Home
          </Link>
        </li>
        <li className={`font-bruce font-regular text-xl py-2 px-4 rounded-full ${activeSection === 'about' ? 'bg-green-400 bg-opacity-70' : 'bg-opacity-0'} hover:bg-opacity-70`}>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer" onSetActive={() => handleSetActive('about')}>
            About
          </Link>
        </li>
        <li className={`font-bruce font-regular text-xl py-2 px-4 rounded-full ${activeSection === 'projects' ? 'bg-green-400 bg-opacity-70' : 'bg-opacity-0'} hover:bg-opacity-70`}>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer" onSetActive={() => handleSetActive('projects')}>
            Projects
          </Link>
        </li>
        <li className={`font-bruce font-regular text-xl py-2 px-4 rounded-full ${activeSection === 'contact' ? 'bg-green-400 bg-opacity-70' : 'bg-opacity-0'} hover:bg-opacity-70`}>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer" onSetActive={() => handleSetActive('contact')}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
