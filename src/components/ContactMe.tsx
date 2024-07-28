// src/components/ContactMe.tsx
import React from 'react';
import ImageWithRoundedCorners from "./RoundImages";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const ContactMe: React.FC = () => {
  return (
    <div className=" py-4 mx-4 md:mx-16 lg:mx-44 my-56 md:my-20 space-y-10">
      <h1 className="text-[#30c555] text-6xl font-bold text-left mb-16">
        .Contact Me
      </h1>
      <div className="flex flex-col px-10 md:flex-row items-center justify-center">
        <div className="flex-1 text-center">
          <p className="font-acornB text-white mb-4 text-7xl font-bold">I'm Harish.</p>
          <p className="font-xirod text-[#999999] mt-8 mb-4 text-3xl">"I love building shit"</p>
          <p className="font-acorn text-[#999999] mb-8 text-3xl font-bold">EAT. SLEEP. BUILD. REPEAT.</p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="https://linkedin.com/in/harishchaurasia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 hover:bg-gray-800 font-aloe text-black hover:text-green-500 py-3 px-8 rounded-full transition duration-300 text-xl  "
            >
              Linkedin
            </a>
            <a
              href="/Resume2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 hover:bg-gray-800 text-black hover:text-green-500 font-aloe py-3 px-8 rounded-full transition duration-300 text-xl"
            >
            Resume
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 mt-10 md:mt-0">
        <ImageWithRoundedCorners
            src="/harish02.png"
            alt="Your Name"
            width="350px"
            height="350px"
          />
        </div>
      </div>
      <div className="mt-8 text-center">
      {/* <h1 className="text-left text-4xl font-bold text-[#cfb73b] mt-28 mb-16">.connect with me</h1> */}
          <div className="mt-24 flex justify-center space-x-4">
          <a href="mailto:harishchaurasia143@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} className="w-10 h-10 rounded-lg" style={{ color: '#999999' }} />
            </a>
          <a href="https://linkedin.com/in/harishchaurasia" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="w-10 h-10 rounded-lg" style={{ color: '#999999' }} />
            </a>
            <a href="https://github.com/harishchaurasia" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="w-10 h-10 rounded-lg" style={{ color: '#999999' }} />
            </a>
            <a href="https://instagram.com/mtrx_music" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="w-10 h-10 rounded-lg" style={{ color: '#999999' }} />
            </a>
            <a href="https://twitter.com/harishchaurasia" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="w-10 h-10 rounded-lg" style={{ color: '#999999' }} />
            </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
