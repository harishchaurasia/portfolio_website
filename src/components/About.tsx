import React from "react";
import ImageWithRoundedCorners from "./RoundImages";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import Skills from "../components/SkillCard";

const About: React.FC = () => {
  return (
    <div className="mx-4 md:mx-16 lg:mx-44 my-32 md:my-20 space-y-10">
      <h1 className="text-[#30c555] text-5xl md:text-6xl font-acorn font-bold text-center md:text-left mb-10 md:mb-16">
        .About Me
      </h1>
      <div className="flex flex-col xl:flex-row p-0 md:p-0 bg-transparent mb-10 md:mb-16 items-stretch xl:items-stretch">
        <div className="backdrop-blur-lg rounded-3xl border border-gray-700 flex-shrink-0 flex justify-center items-center overflow-hidden w-full max-w-xs h-auto md:w-60 md:h-60 mx-auto">
          <ImageWithRoundedCorners
            src="/harish03.png"
            alt="Harish Chaurasia"
            className="object-contain w-full h-auto md:w-52 md:h-52"
          />
        </div>

        <div className="flex-1 xl:ml-6 p-4 md:p-8 text-white text-center xl:text-left border border-gray-900 bg-black-800 bg-opacity-50 backdrop-blur-lg rounded-3xl mt-5 xl:mt-0 mx-4 md:mx-8 xl:mx-0 flex items-center h-48 md:h-60">
          <p className=" font-sf_pro text-sm md:text-base lg:text-md leading-relaxed">
            I'm a passionate software engineer, applications developer, and
            creative problem-solver, blending full-stack development, AI/ML, and
            UI/UX to craft intelligent, user-centric solutions. With a strong
            focus on human-computer interaction, I'm actively researching
            haptics to enhance digital experiences through touch and feedback.
            From building scalable tools & applications to designing intuitive
            interfaces and pushing the boundaries of gamification and AI-driven
            applications, I thrive on turning complex ideas into seamless,
            impactful, and just plain fun software.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-10 mx-0 md:mx-0 lg:mx-0">
        <Skills />
      </div>

      <div className="md:grid-cols-2 gap-4">
        <div className="mt-24 md:mt-36 space-y-8">
          <h1 className="text-4xl font-acorn font-bold text-[#cfb73b] my-4 text-center md:text-left">
            ./education
          </h1>
          <EducationCard
            degreeType="Major"
            degreeName="B.Sc in Computer Science"
            schoolName="Ira A. Fulton Schools of Engineering"
            collegeName="School of Computing and Augmented Intelligence"
            universityName="Arizona State University"
            degreeDateRange="2022 - 2025"
            description="With my major in Computer-Science, I am concentrating on Web and Software development, building a strong foundation in Data Structures and Algorithms. Currently learning iOS Development, React Native, and AI."
            logo="/asu_logo.png"
            className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl"
          />
          <EducationCard
            degreeType="Minor"
            degreeName="Minor in Popular Music"
            schoolName="Herberger Institute for Design and the Arts"
            collegeName="School of Music, Dance and Theatre"
            universityName="Arizona State University"
            degreeDateRange="2023 - 2025"
            description="Studying advanced music production and stage technology, with a focus on sound design. Over 4 years of experience in music production and 2 years in DJing."
            logo="/herberger.png"
            className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl"
          />
          <EducationCard
            degreeType="Certification"
            degreeName="Certification in Game Development"
            schoolName="Ira A. Fulton Schools of Engineering"
            collegeName="School of Computing and Augmented Intelligence"
            universityName="Arizona State University"
            degreeDateRange="2022 - 2025"
            description="Learning game design and development, proficient in Unity and Unreal Engine, experienced in HLSL and MonoGame framework by Microsoft, currently learning 3D design and narrative."
            logo="/ira.png"
            className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl"
          />
        </div>

        <div className="mt-24 space-y-8">
          <h1 className="text-4xl font-acorn font-bold text-[#cfb73b] my-4 text-center md:text-left">
            ./experiences
          </h1>
          <ExperienceCard
            title="Software & Games Developer"
            companyName="School of Manufacturing Systems and Networks"
            dateRange="Dec 2023 - Present"
            description="Developed and optimized Blueprints & C++ code for game programming, focusing on performance and user experience. Innovated in sound design and created engaging game levels, contributing to immersive gaming experiences."
            logo="/msn.png"
            className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl"
          />
          <ExperienceCard
            title="AR/VR Developer & Workforce Development Researcher"
            companyName="ASU Laboratory for Energy And Power Solutions"
            dateRange="Jan 2023 - Oct 2023"
            description="Developed AR/VR training modules for Microgrid and Electrical subsystems, assisted in content development and hardware integration, and analyzed data for sponsored projects to improve workforce training."
            logo="/leaps.png"
            className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl"
          />
          <ExperienceCard
            title="Tech & Design Lead"
            companyName="EPICS at ASU"
            dateRange="Aug 2022 - Dec 2022"
            description="Led the Team Shonto Solar project using Project Management. Designed the electronic interface and backend, creating efficient products to maximize utility with minimal resource use."
            logo="/epics.png"
            className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl"
          />
          <ExperienceCard
            title="Core Officer"
            companyName="Google Developer Student Club at Arizona State University"
            dateRange="Oct 2022 - Present"
            description="Planned & Facilitated events and outreach activities, engaged students in tech initiatives, and promoted the Google Developer Student Club with a mission to teach basic tech skills."
            logo="/asu_dsc.png"
            className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl"
          />
          <ExperienceCard
            title="President"
            companyName="Devil's DJing Club at Arizona State University"
            dateRange="Apr 2023 - Present"
            description="Organized and managed music workshops & events, collaborated with DJs and musicians, managed social media, and trained members to enhance their technical skills and creativity in music."
            logo="/djing.png"
            className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
