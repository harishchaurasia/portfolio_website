import React, { useState, useEffect } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';

const Nav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    Events.scrollEvent.register('begin', function() {
      // Scroll event begins
    });

    Events.scrollEvent.register('end', function() {
      // Scroll event ends
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const handleSetActive = (section: string) => {
    setActiveSection(section);
  };

  const navbarHeight = 105;
  const scrollDuration = 250;

  return (
    <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 mt-1 p-4 border border-gray-800 rounded-full bg-[#1a1a1a] bg-opacity-85 text-slate-50 z-10">
      <ul className="flex items-center h-5 mx-0 space-x-8">
        <li className={`font-bruce text-xl py-1 px-4 rounded-full ${activeSection === 'home' ? 'bg-[#333333] bg-opacity-70' : 'bg-opacity-0'} hover:bg-opacity-70`}>
          <Link
            to="home"
            smooth={true}
            duration={scrollDuration}
            offset={-navbarHeight}
            className="cursor-pointer"
            spy={true}
            onSetActive={() => handleSetActive('home')}
          >
            Home
          </Link>
        </li>
        <li className={`font-bruce text-xl py-1 px-4 rounded-full ${activeSection === 'about' ? 'bg-[#333333] bg-opacity-70' : 'bg-opacity-0'} hover:bg-opacity-70`}>
          <Link
            to="about"
            smooth={true}
            duration={scrollDuration}
            offset={-navbarHeight}
            className="cursor-pointer"
            spy={true}
            onSetActive={() => handleSetActive('about')}
          >
            About
          </Link>
        </li>
        <li className={`font-bruce text-xl py-1 px-4 rounded-full ${activeSection === 'projects' ? 'bg-[#333333] bg-opacity-70' : 'bg-opacity-0'} hover:bg-opacity-70`}>
          <Link
            to="projects"
            smooth={true}
            duration={scrollDuration}
            offset={-navbarHeight}
            className="cursor-pointer"
            spy={true}
            onSetActive={() => handleSetActive('projects')}
          >
            Projects
          </Link>
        </li>
        <li className={`font-bruce text-xl py-1 px-4 rounded-full ${activeSection === 'contact' ? 'bg-[#333333] bg-opacity-70' : 'bg-opacity-0'} hover:bg-opacity-70`}>
          <Link
            to="contact"
            smooth={true}
            duration={scrollDuration}
            offset={-navbarHeight}
            className="cursor-pointer"
            spy={true}
            onSetActive={() => handleSetActive('contact')}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
