// src/components/ContactMe.tsx
import React from 'react';

const ContactMe: React.FC = () => {
  return (
    <div className=" py-4 mx-4 md:mx-16 lg:mx-44 my-56 md:my-20 space-y-10">
      <h1 className="text-[#30c555] text-6xl font-bold text-left mb-16">
        .Contact Me
      </h1>
      <div className="flex flex-col px-10 md:flex-row items-center justify-between">
        <div className="flex-1 text-center">
          <p className="text-white mb-4 text-3xl font-bold">I'm Harish</p>
          <p className="text-white mb-4 text-xl">"I love building shit"</p>
          <p className="text-white mb-8 text-2xl font-bold">EAT. SLEEP. BUILD. REPEAT.</p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="mailto:your-email@example.com"
              className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-full transition duration-300 text-mds"
            >
              Email Me
            </a>
            <a
              href="/path/to/your/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-4 px-8 rounded-full transition duration-300 text-md"
            >
              View Resume
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 mt-10 md:mt-0">
          <img
            src="/harish02.png"
            alt="Your Name"
            className="w-70 h-70 rounded-3xl shadow-bs"
          />
        </div>
      </div>
      <div className="mt-8 text-center">
      {/* <h1 className="text-left text-4xl font-bold text-[#cfb73b] mt-28 mb-16">.connect with me</h1> */}
        <div className="mt-24 flex justify-center space-x-4">
          <a href="https://linkedin.com/in/harishchaurasia" target="_blank" rel="noopener noreferrer">
            <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" className="w-10 h-10" />
          </a>
          <a href="https://github.com/harishchaurasia" target="_blank" rel="noopener noreferrer">
            <img src="https://skillicons.dev/icons?i=github" alt="GitHub" className="w-10 h-10" />
          </a>
          <a href="https://twitter.com/harishchaurasia" target="_blank" rel="noopener noreferrer">
            <img src="https://skillicons.dev/icons?i=twitter" alt="Twitter" className="w-10 h-10" />
          </a>
          <a href="https://instagram.com/mtrx_music" target="_blank" rel="noopener noreferrer">
            <img src="https://skillicons.dev/icons?i=instagram" alt="Instagram" className="w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
