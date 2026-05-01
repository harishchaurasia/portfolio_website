import React from "react";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import Skills from "../components/SkillCard";

const About: React.FC = () => {
  return (
    <div className="mx-0 my-16 md:my-20 space-y-8 md:space-y-10">
      <h1 className="text-[#30c555] text-5xl md:text-6xl font-acorn font-bold text-center md:text-left mb-10 md:mb-16">
        .About Me
      </h1>

      <div className="p-0 mb-8 md:mb-16 flex justify-center">
        <div className="w-full p-5 md:p-6 text-white text-center border border-gray-900 bg-black bg-opacity-50 backdrop-blur-lg rounded-3xl mx-auto flex items-center justify-center min-h-0">
          <p className="font-sf_pro text-sm md:text-base text-center max-w-3xl mx-auto">
            AI/ML engineer specializing in agentic AI, RL environments, and
            applied LLM systems. I build AI agents, MCPs, and tool-calling
            workflows with a focus on safety, robustness, and real-world
            deployment. Shipped digital-twin simulations with Los Alamos
            National Lab, deployed LLM agents on Hugging Face, and led
            full-stack AI products from research to production.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-10">
        <Skills />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {/* Education */}
        <div className="mt-16 md:mt-36 space-y-8">
          <h1 className="text-4xl font-acorn font-bold text-[#30c555] my-4 text-center md:text-left">
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
            logo="/asu_logo.webp"
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
            logo="/asu_logo.webp"
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
        <div className="mt-16 md:mt-24 space-y-8">
          <h1 className="text-4xl font-acorn font-bold text-[#30c555] my-4 text-center md:text-left">
            ./experiences
          </h1>
          <ExperienceCard
            title="Software Developer"
            companyName="School of Manufacturing Systems and Networks, ASU"
            dateRange="Dec 2023 - Present"
            description="Optimized C++ digital-twin simulation pipelines, improving runtime performance by 15% in real-time training environments. Built interactive simulation systems with real-time feedback loops for complex physical workflows in VR-based training setups. Delivered high-fidelity simulation modules with Los Alamos National Lab, improving training accuracy by 30% in immersive environments."
            logo="/msn.png"
            className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl"
          />
          <ExperienceCard
            title="AR/VR Developer & Researcher"
            companyName="ASU Laboratory for Energy and Power Solutions"
            dateRange="Jan 2023 - Oct 2023"
            description="Developed AR/VR microgrid training systems enabling interactive visualization of power networks across 10+ institutions. Built real-time simulation and interaction workflows for immersive learning environments, improving system engagement."
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
            description="Mentored 750+ students via workshops on AI/ML, cloud, MLOps, and full-stack; organized hackathons and technical bootcamps."
            logo="/asu_dsc.png"
            className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
