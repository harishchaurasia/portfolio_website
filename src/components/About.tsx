import React from "react";
import ImageWithRoundedCorners from "./RoundImages";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";

const About: React.FC = () => {
  return (
    <div className="mx-4 md:mx-16 lg:mx-44 my-10 md:my-20 space-y-10">
      <h1 className="text-[#30c555] text-6xl font-acorn font-bold text-center md:text-left mx-0 md:mx-0 mb-16">
        .About Me
      </h1>
      <div className="flex flex-col xl:flex-row border border-gray-800 rounded-3xl shadow-bs p-4 md:p-8 bg-transparent mb-16">
        <div className="flex justify-center items-center mb-4 xl:mb-0 xl:w-1/3">
          <img
            src="/harish_headshot_black.png"
            alt="Harish Chaurasia"
            className="rounded-lg w-full max-w-xs md:max-w-sm xl:max-w-none xl:w-80 h-auto"
          />
        </div>
        <div className="flex-1 xl:ml-6 p-4 md:p-8 text-white">
          <p>
            Hi there 👋, I'm Harish Chaurasia, a Computer Science major with a passion for Development, Artificial Intelligence, and Machine Learning. 
            I am pursuing minors in Music and Entrepreneurship and a Certification in Game Development. 
            Currently, I am a Software and Games Developer at the School of Manufacturing Systems and Networks, working on a project with Los Alamos National Laboratory. 
            As President of Devil's DJing Club, I organize and manage music events at ASU. 
            Additionally, I have held roles such as Outreach Officer at Google Developer Student Club and Researcher at ASU's Laboratory for Energy And Power Solutions. 
            Let's collaborate to turn challenges into innovative solutions.
          </p>
        </div>
      </div>

      <div className="md:grid-cols-2 gap-4">
        <div className="mt-40 space-y-8">
          <h1 className="text-4xl font-acorn font-bold text-[#cfb73b] my-8">.education</h1>
          <EducationCard 
            degreeType="Major" 
            degreeName="B.Sc in Computer Science" 
            schoolName="Ira A. Fulton Schools of Engineering"
            collegeName="School of Computing and Augmented Intelligence"
            universityName="Arizona State University"
            degreeDateRange="2022 - 2025"
            description="I have a concentration in Web and Software development with a strong foundation in Data Structures and Algorithms. Currently, I am learning iOS Development, React Native, and AI."
            logo="/asu_logo.png"
          />
          <EducationCard 
            degreeType="Minor" 
            degreeName="Minor in Popular Music" 
            schoolName="Herberger Institute for Design and the Arts"
            collegeName="School of Music, Dance and Theatre"
            universityName="Arizona State University"
            degreeDateRange="2023 - 2025"
            description="I am studying advanced music production and stage technology, with a focus on sound design. I have over 4 years of experience in music production and 2 years in DJing."
            logo="/herberger.png"
          />
          <EducationCard 
            degreeType="Certification" 
            degreeName="Certification in Game Development" 
            schoolName="Ira A. Fulton Schools of Engineering"
            collegeName="School of Computing and Augmented Intelligence"
            universityName="Arizona State University"
            degreeDateRange="2022 - 2025"
            description="I am learning game design and development, with experience in Unity and Unreal Engine. I am proficient in HLSL and the MonoGame framework by Microsoft, and currently learning 3D design and narrative."
            logo="/ira.png"
          />
        </div>
        
        <div className="mt-40 space-y-8">
          <h1 className="text-4xl font-acorn font-bold text-[#cfb73b] my-8">.experience</h1>
          <ExperienceCard 
            title="Software & Games Developer" 
            companyName="School of Manufacturing Systems and Networks" 
            dateRange="Dec 2023 - Present"
            description="I develop optimized C++ code for game programming, focusing on enhancing performance and user experience. My work includes innovating in sound design and creating engaging game levels, contributing to immersive gaming experiences."
            logo="/msn.png"
          />
          <ExperienceCard 
            title="Researcher & Workforce Development Specialist" 
            companyName="ASU Laboratory for Energy And Power Solutions" 
            dateRange="Jan 2023 - Oct 2023"
            description="I developed AR/VR training modules for Microgrid and Electrical subsystems, assisted in content development and hardware integration, and analyzed data for sponsored projects to improve workforce training."
            logo="/leaps.png"
          />
          <ExperienceCard 
            title="Tech & Design Lead" 
            companyName="EPICS at ASU" 
            dateRange="Aug 2022 - Dec 2022"
            description="Led the Team Shonto Solar project using Scrum Project Management. Designed the electronic interface and backend, creating efficient products to maximize utility with minimal resource use."
            logo="/epics.png"
          />
          <ExperienceCard 
            title="Core Officer" 
            companyName="Google Developer Student Club at Arizona State University" 
            dateRange="Oct 2022 - Present"
            description="I facilitate events and outreach activities, engaging students in tech initiatives and promoting the Google Developer Student Club."
            logo="/asu_dsc.png"
          />
          <ExperienceCard 
            title="President" 
            companyName="Devil's DJing Club" 
            dateRange="Apr 2023 - Present"
            description="I organize and manage music events, collaborate with DJs and musicians, manage social media, and train members to enhance their technical skills and creativity."
            logo="/djing.png"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
