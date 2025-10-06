import React from "react";
import ImageWithRoundedCorners from "./RoundImages";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import Skills from "../components/SkillCard";

const About: React.FC = () => {
  return (
    <div className="mx-0 my-32 md:my-20 space-y-10">
      <h1 className="text-[#30c555] text-5xl md:text-6xl font-acorn font-bold text-center md:text-left mb-10 md:mb-16">
        .About Me
      </h1>

      <div className="flex flex-col xl:flex-row p-0 mb-10 md:mb-16 items-stretch">
        <div className="rounded-3xl flex-shrink-0 flex justify-center items-center overflow-hidden w-full max-w-xs h-auto md:w-60 md:h-60 mx-auto">
          <ImageWithRoundedCorners
            src="/harish03.png"
            alt="Harish Chaurasia"
            className="object-cover w-full h-auto md:w-52 md:h-52"
          />
        </div>

        <div className="flex-1 xl:ml-6 p-4 md:p-8 text-white text-center xl:text-left border border-gray-900 bg-black bg-opacity-50 backdrop-blur-lg rounded-3xl mt-5 xl:mt-0 mx-4 md:mx-8 xl:mx-0 flex items-center h-auto md:h-60">
          <p className="font-sf_pro text-sm md:text-base lg:text-md leading-relaxed">
            I'm a full-stack and AI/ML engineer with 3+ years of experience in
            building intelligent, user-centric software. I specialize in
            developing scalable web platforms, fine-tuning NLP models, and
            designing responsive frontends with a strong focus on HCI and
            gamification. My work spans AI systems, immersive technologies, and
            cloud-based applications — combining creativity, data, and
            engineering to build impactful, intuitive experiences.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-10">
        <Skills />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {/* Education */}
        <div className="mt-24 md:mt-36 space-y-8">
          <h1 className="text-4xl font-acorn font-bold text-[#cfb73b] my-4 text-center md:text-left">
            ./education
          </h1>
          <EducationCard
            degreeType="Major"
            degreeName="MS in Computer Science (AI/ML)"
            schoolName="Ira A. Fulton Schools of Engineering"
            collegeName="School of Computing and Augmented Intelligence"
            universityName="Arizona State University"
            degreeDateRange="2024 - 2026"
            description="Pursuing MS in Computer Science with a focus on AI/ML, NLP, and immersive systems. Exploring intersections between HCI and AI to create intelligent, interactive digital experiences."
            logo="/asu_logo.png"
            className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl"
          />
          <EducationCard
            degreeType="Major"
            degreeName="BS in Computer Science"
            schoolName="Ira A. Fulton Schools of Engineering"
            collegeName="School of Computing and Augmented Intelligence"
            universityName="Arizona State University"
            degreeDateRange="2022 - 2025"
            description="Built a foundation in software engineering, algorithms, and data structures while exploring HCI, immersive technologies, and AI-driven systems for web and mobile platforms."
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
            description="Studying advanced music production and sound design, with hands-on experience in DJing and digital composition."
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
            description="Trained in Unity and Unreal Engine with experience in C#, HLSL, and interactive 3D design. Focused on game systems, narrative design, and simulation-based learning."
            logo="/ira.png"
            className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl"
          />
        </div>

        {/* Experience */}
        <div className="mt-24 space-y-8">
          <h1 className="text-4xl font-acorn font-bold text-[#cfb73b] my-4 text-center md:text-left">
            ./experiences
          </h1>
          <ExperienceCard
            title="Software Developer"
            companyName="School of Manufacturing Systems and Networks, ASU"
            dateRange="Dec 2023 - Present"
            description="Optimized C++ code, digital twins, and interactive UIs to simulate industrial workflows. Built Unreal Engine simulations with real-time feedback and collaborated with Los Alamos National Lab to enhance operational accuracy."
            logo="/msn.png"
            className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl"
          />
          <ExperienceCard
            title="AR/VR Developer & Researcher"
            companyName="ASU Laboratory for Energy and Power Solutions"
            dateRange="Jan 2023 - Oct 2023"
            description="Developed AR/VR training modules for microgrid systems using Unity, ARKit, and Vuforia. Integrated hardware simulations and automated training workflows to improve efficiency."
            logo="/leaps.png"
            className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl"
          />
          <ExperienceCard
            title="Software Lead"
            companyName="EPICS at ASU"
            dateRange="Aug 2022 - Dec 2022"
            description="Led a 6-member team to deliver community-based software solutions. Implemented agile workflows, reduced development cycles, and managed stakeholder communication."
            logo="/epics.png"
            className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl"
          />
          <ExperienceCard
            title="Technical Officer & Treasurer"
            companyName="Google Developer Student Club, ASU"
            dateRange="Jan 2022 - Present"
            description="Organized 15+ workshops on full-stack, AI/ML, and cloud computing. Led hackathons and initiatives impacting 500+ students and boosting participation by 40%."
            logo="/asu_dsc.png"
            className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl"
          />
          <ExperienceCard
            title="President"
            companyName="Devil's DJing Club, ASU"
            dateRange="Apr 2023 - Present"
            description="Managed music production workshops, collaborations, and events. Mentored members in performance and production while fostering a creative and technical learning environment."
            logo="/djing.png"
            className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
