import React from "react";
import ImageWithRoundedCorners from "./RoundImages";

const About = () => {
  return (
    // <div className="flex flex-col md:flex-row border border-gray-700 rounded-3xl  mt-10 md:mt-20 mx-16 md:mx-36">
      <div className="flex border border-gray-800 justify-center md:justify-start items-center rounded-3xl shadow-bs p-2 md:mx-36">
        <ImageWithRoundedCorners
          src="/harish_headshot_black.png"
          alt="Your Name"
          width="350px"
          height="350px"
        />
        <div className="flex-1 mt-4 md:mt-0 md:ml-6 my-4 p-4 md:p-8 flex items-center">
          <p>
          Hi there 👋, I'm a Computer Science major with interests in various fields 
          such as Development, Artificial Intelligence, and Machine Learning. 
          Alongside my studies, I am pursuing minors in Music and Entrepreneurship, 
          while also obtaining a Certification in Game Development. Beyond my 
          academic pursuits, I express my creativity through my work as a performing 
          DJ, Music Producer, and Songwriter. In my free time, I also enjoy writing 
          Prose and Poetry. I am committed to utilizing my diverse skill set and 
          knowledge to contribute to innovative projects and make a positive impact 
          in the industry.
          </p>
        </div>
      </div>
    // </div>
  );
};

export default About;
