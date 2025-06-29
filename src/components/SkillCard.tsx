import React from "react";
const SkillCard: React.FC<{ title: string; skills: string[] }> = ({
  title,
  skills,
}) => {
  return (
    <div className="bg-opacity-50 backdrop-blur-lg rounded-3xl p-8 space-y-6 border border-gray-900">
      <h2 className="text-2xl font-bold text-[#cfb73b] text-center">{title}</h2>
      <ul className="list-disc list-inside text-white text-left space-y-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="text-sm md:text-base lg:text-base break-words leading-relaxed"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills: React.FC = () => {
  const programmingLanguages = [
    "Java",
    "Python",
    "C++",
    "HLSL",
    "C#",
    "SQL",
    "JavaScript",
    "Bash",
  ];

  const technicalConcepts = [
    "UI/UX Design",
    "Machine Learning",
    "Data Visualisation",
    "Software Engineering",
    "Artificial Intelligence",
    "Website Design/Development",
    "Data Structures/Algorithms",
    "Object-Oriented Programming",
    "Game Design/Development",
    "Game Engine Programming",
    "Human Computer Interaction",
    "Software Development Life Cycle",
  ];

  const toolsAndAPIs = [
    "ReactJS",
    "NextJS",
    "GraphQL",
    "Git/Github",
    "TailwindCSS",
    "Unity Engine",
    "Unreal Engine",
    "Visual Studio",
    "Visual Studio Code",
    "Microsoft XNA Framework",
  ];

  return (
    <div className="space-y-16">
      <h1 className="mt-16 mb-10 text-[#30c555] text-5xl md:text-6xl font-acorn font-bold text-left mb-16">
        {" "}
        ./skills{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:[grid-template-columns:repeat(3,minmax(320px,1fr))] gap-6">
        <SkillCard
          title="Programming Languages"
          skills={programmingLanguages}
        />
        <SkillCard title="Tools & Frameworks" skills={toolsAndAPIs} />
        <SkillCard title="Technical Concepts" skills={technicalConcepts} />
      </div>
    </div>
  );
};

export default Skills;
