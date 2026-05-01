import React from "react";
const SkillCard: React.FC<{ title: string; skills: string[]; className?: string }> = ({
  title,
  skills,
  className = "",
}) => {
  return (
    <div className={`bg-opacity-50 backdrop-blur-lg rounded-3xl p-8 space-y-6 border border-gray-900 ${className}`}>
      <h2 className="text-2xl font-bold text-[#30c555] text-center">{title}</h2>
      <ul className="list-disc list-inside text-white text-left space-y-2">
        {skills.map((skill) => (
          <li
            key={skill}
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
  const languages = [
    "Python",
    "C++",
    "Java",
    "C#",
    "JavaScript/TypeScript",
    "SQL",
  ];

  const aiMl = [
    "PyTorch",
    "TensorFlow",
    "Hugging Face",
    "Scikit-learn",
    "RAG Pipelines",
    "MCP",
    "AI Agents",
    "Agentic AI",
    "LLM Fine-tuning",
    "AI Safety",
    "Reinforcement Learning",
    "NLP",
    "Robotics",
  ];

  const cloudDevOps = [
    "Azure",
    "AWS",
    "Docker",
    "Kubernetes",
    "Kafka",
    "CI/CD",
    "Git",
    "Linux/UNIX",
  ];

  const frameworks = [
    "Node.js",
    "FastAPI",
    "React",
    "Next.js",
    "Django",
    "Unity",
    "Unreal Engine",
  ];

  const coursework = [
    "AI/ML",
    "Natural Language Processing",
    "Reinforcement Learning",
    "Software Engineering",
    "Full-Stack Development",
    "Cloud Computing",
    "Human Computer Interaction",
    "Game Engine Programming",
    "Object-Oriented Programming",
    "DBMS",
  ];

  const languagesAndFrameworks = [...languages, ...frameworks];

  return (
    <div className="space-y-16">
      <h1 className="mt-16 text-[#30c555] text-5xl md:text-6xl font-acorn font-bold text-left mb-16">
        {" "}
        ./skills{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillCard title="Languages & Frameworks" skills={languagesAndFrameworks} />
        <SkillCard title="AI/ML" skills={aiMl} />
        <SkillCard title="Cloud/DevOps" skills={cloudDevOps} />
        <SkillCard title="Relevant Coursework" skills={coursework} />
      </div>
    </div>
  );
};

export default Skills;
