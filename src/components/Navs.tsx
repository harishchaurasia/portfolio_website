import React, { useState, useEffect } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

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
    if (isMobile) {
      setIsNavbarVisible(false);
    }
  };

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const navbarHeight = 105;
  const mobileOffset = -navbarHeight - 90;
  const scrollDuration = 250;

  return (
    <>
      {isMobile && (
        <button
          onClick={toggleNavbar}
          className="fixed top-3 left-3 text-xl p-2 text-white"
          style={{ border: 'none', background: 'transparent' }}
        >
          {isNavbarVisible ? <FaTimes /> : <FaBars />}
        </button>
      )}
      <nav className={`fixed top-3 left-1/2 transform -translate-x-1/2 mt-1 p-4 rounded-3xl z-10 ${isMobile && !isNavbarVisible ? 'bg-transparent border-none' : 'border border-gray-900 bg-black-800 bg-opacity-50 backdrop-blur-lg bg-[#1a1a1a]'}`}>
        <ul className={`flex flex-col md:flex-row items-center text-white ${isMobile ? 'mt-4' : ''} ${isMobile && !isNavbarVisible ? 'hidden' : 'md:flex md:space-x-8'}`}>
          <li className={`font-bruce  text-xl py-1 px-4 rounded-full ${activeSection === 'home' ? 'bg-[#333333] bg-opacity-70' : 'bg-opacity-0'} hover:bg-opacity-70`}>
            <Link
              to="home"
              smooth={true}
              duration={scrollDuration}
              offset={isMobile ? mobileOffset : -navbarHeight}
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
              offset={isMobile ? mobileOffset : -navbarHeight}
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
              offset={isMobile ? mobileOffset : -navbarHeight}
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
              offset={isMobile ? mobileOffset : -navbarHeight}
              className="cursor-pointer"
              spy={true}
              onSetActive={() => handleSetActive('contact')}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
