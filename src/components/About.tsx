import React from "react";
import ImageWithRoundedCorners from "./RoundImages";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";

const About: React.FC = () => {
  return (
    <div className="mx-4 md:mx-16 lg:mx-44 my-10 md:my-20 space-y-10">
      <h1 className="text-[#30c555] text-6xl font-bold text-center md:text-left mx-0 md:mx-0 mb-16">
        .About Me
      </h1>
      <div className="flex flex-col md:flex-row border border-gray-800 rounded-3xl shadow-bs p-4 md:p-8 bg-transparent mb-16">
        <div className="flex justify-center md:justify-start items-center mb-4 md:mb-0">
          <ImageWithRoundedCorners
            src="/harish_headshot_black.png"
            alt="Your Name"
            width="350px"
            height="350px"
          />
        </div>
        <div className="flex-1 md:ml-6 p-4 md:p-8 text-white">
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

      <div className="grid grid-cols-1 mt-8 md:grid-cols-2 gap-4">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-[#cfb73b] my-8">.education</h1>
          <EducationCard 
            degreeType="Major" 
            degreeName="B.Sc in Computer Science" 
            schoolName="Ira A. Fulton Schools of Engineering"
            collegeName="School of Computing and Augmented Intelligence"
            universityName="Arizona State University"
            degreeDateRange="2018 - 2022"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            logo="/asu_logo.png"
          />
          <EducationCard 
            degreeType="Minor" 
            degreeName="Minor in Pop Music" 
            schoolName="Herberger Institute for Design and the Arts"
            collegeName="School of Music, Dance and Theatre"
            universityName="Arizona State University"
            degreeDateRange="2018 - 2022"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            logo="/asu_logo.png"
          />
          <EducationCard 
            degreeType="Certification" 
            degreeName="Certification in Games Development" 
            schoolName="Ira A. Fulton Schools of Engineering"
            collegeName="School of Computing and Augmented Intelligence"
            universityName="Arizona State University"
            degreeDateRange="2018 - 2022"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            logo="/asu_logo.png"
          />
        </div>
        
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-[#cfb73b] my-8">.experience</h1>
          <ExperienceCard 
            title="Software Developer" 
            companyName="Tech Solutions" 
            dateRange="2022 - Present"
            description="Developed and maintained web applications using modern frameworks and technologies."
            logo="/asu_logo.png"
          />
          <ExperienceCard 
            title="Intern" 
            companyName="Innovate Labs" 
            dateRange="2021 - 2022"
            description="Assisted in the development of AI models and conducted data analysis for various projects."
            logo="/asu_logo.png"
          />
          <ExperienceCard 
            title="Freelance Developer" 
            companyName="Self-Employed" 
            dateRange="2019 - 2021"
            description="Worked on multiple freelance projects involving web development and software solutions."
            logo="/asu_logo.png"
          />
          <ExperienceCard 
            title="Freelance Developer" 
            companyName="Self-Employed" 
            dateRange="2019 - 2021"
            description="Worked on multiple freelance projects involving web development and software solutions."
            logo="/asu_logo.png"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
