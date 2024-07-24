// src/components/Nav.tsx
import React from 'react';
import { Link } from 'react-scroll';

const Nav: React.FC = () => {
  return (
    <nav className="fixed top-0 right-0 p-4">
      <ul className="flex space-x-4 text-white">
        <li>
          <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:underline">
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
