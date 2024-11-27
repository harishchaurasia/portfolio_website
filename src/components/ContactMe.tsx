import React from "react";
import ImageWithRoundedCorners from "./RoundImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactMe: React.FC = () => {
  return (
    <div className="py-4 mx-0 md:mx-8 lg:mx-44 my-56 md:my-20 space-y-10">
      <h1 className="text-[#30c555] text-5xl md:text-6xl lg:text-7xl font-bold text-center md:text-left mb-16 font-acorn">
        .Contact Me
      </h1>
      <div className="flex flex-col px-2 md:flex-row items-center justify-center">
        <div className="p-4 border border-gray-900 bg-black-800 bg-opacity-50 backdrop-blur-lg rounded-3xl">
          <div className="flex-1 text-center">
            <p className="text-white mt-4 mb-4 text-4xl md:text-5xl lg:text-6xl font-bold font-sf_pro">
              I'm Harish.
            </p>
            <p className="my-4 text-[#999999] mt-8 mb-4 text-xl md:text-2xl lg:text-3xl font-medium font-acorn">
              "I love building shit"
            </p>
            <p className="text-[#999999] mb-8 text-xl md:text-2xl lg:text-3xl font-bold font-acorn">
              EAT. SLEEP. BUILD. REPEAT.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="https://github.com/harishchaurasia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 hover:bg-gray-800 text-black hover:text-green-500 font-acorn py-3 px-8 rounded-full transition duration-10 text-sm md:text-lg lg:text-xl"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/harishchaurasia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 hover:bg-gray-800 text-black hover:text-green-500 font-acorn py-3 px-8 rounded-full transition duration-10 text-sm md:text-lg lg:text-xl"
            >
              LinkedIn
            </a>
          </div>
          <div className="mt-6">
            <a
              href="/Resume2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-gray-800 text-black hover:text-green-500 font-acorn py-3 px-8 rounded-full transition duration-10 text-sm md:text-lg lg:text-xl"
            >
              Resume
            </a>
          </div>

          </div>
        </div>
        <div className="border border-gray-800 rounded-3xl flex-shrink-0 mt-10 md:mt-0 md:ml-10 shadow-ts">
          <ImageWithRoundedCorners
            src="/harish02.png"
            alt="Your Name"
            width="350px"
            height="350px"
          />
        </div>
      </div>
      <div className="mt-8 justify-center text-center">
        <div className="mt-24 flex justify-center space-x-6 border border-gray-900 bg-black-800 bg-opacity-50 backdrop-blur-lg rounded-3xl p-4 mx-auto max-w-fit">
          <a
            href="mailto:harishchaurasia143@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="w-8 h-8 md:w-10 md:h-10 rounded-lg"
              style={{ color: "#999999" }}
            />
          </a>
          <a
            href="https://linkedin.com/in/harishchaurasia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-8 h-8 md:w-10 md:h-10 rounded-lg"
              style={{ color: "#999999" }}
            />
          </a>
          <a
            href="https://github.com/harishchaurasia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="w-8 h-8 md:w-10 md:h-10 rounded-lg"
              style={{ color: "#999999" }}
            />
          </a>
          <a
            href="https://instagram.com/mtrx_music"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-8 h-8 md:w-10 md:h-10 rounded-lg"
              style={{ color: "#999999" }}
            />
          </a>
          <a
            href="https://x.com/harischaurasia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              className="w-8 h-8 md:w-10 md:h-10 rounded-lg"
              style={{ color: "#999999" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
