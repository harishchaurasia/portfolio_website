import React from 'react';
import ImageWithRoundedCorners from './RoundImages';

const About = () => {
  return (
    <section id="about" style={{ padding: '2em', backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
      <h2 style={{ color: '#00FF00' }}>Welcome to My Creative Realm</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
        <ImageWithRoundedCorners 
          src="path-to-your-image.jpg" 
          alt="Your Name" 
          width="150px" 
          height="150px" 
          margin="1em"
        />
        <div style={{ maxWidth: '600px', textAlign: 'left' }}>
          <p>
            I’m [Your Name], a [Your Profession] who thrives in the intersection of innovation and artistry. My journey in [Your Field] has been a thrilling ride, marked by a relentless pursuit of excellence and a deep passion for [Key Skills/Technologies].
          </p>
          <p>
            <strong>My Craft and Vision</strong><br/>
            From crafting [Specific Projects/Skills] to exploring new frontiers in [Your Field], my work is a testament to my commitment to pushing boundaries. Whether it’s developing [Type of Projects] or collaborating with visionary teams, I bring a unique blend of creativity and technical prowess to every endeavor.
          </p>
          <p>
            <strong>Beyond the Code and Canvas</strong><br/>
            When I’m not immersed in [Your Profession], you’ll find me indulging in [Your Hobbies/Interests]. These moments of leisure fuel my creativity and provide fresh perspectives that I bring back to my work.
          </p>
          <p>
            <strong>Let's Connect and Create</strong><br/>
            I’m always on the lookout for exciting projects and collaborations. If you share a passion for innovation and creativity, let’s connect and create something extraordinary together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
