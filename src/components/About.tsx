import React from 'react';
import ImageWithRoundedCorners from './RoundImages';

const About = () => {
  return (
    <div className="flex items-center">
      <div className="flex mt-20 mx-36">
        <ImageWithRoundedCorners 
          src="/harish_headshot_black.png" 
          alt="Your Name" 
          width="300px" 
          height="300px" 
        />
              <div className="mt- flex-1">
        <p>
          I’m [Your Name], a [Your Profession] who thrives in the intersection of innovation and artistry. My journey in [Your Field] has been a thrilling ride, marked by a relentless pursuit of excellence and a deep passion for [Key Skills/Technologies].
        </p>
        <p>
          Over the past [X] years, I've worked in various areas of digital design, including [Your Skills/Fields]. I'm proud to have worn many hats.
        </p>
        <p>
          These days, I focus on [Your Current Focus/Project], a [Description of Current Focus/Project].
        </p>
      </div>
      </div>
    </div>
  );
};

export default About;
