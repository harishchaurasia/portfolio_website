import React from "react";
const SkillCard: React.FC<{ title: string; skills: string[]; className?: string }> = ({
  title,
  skills,
  className = "",
}) => {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-lg p-6 md:p-7 transition-colors hover:border-[#30c555]/30 ${className}`}
    >
      <h2 className="text-lg md:text-xl font-bold text-[#30c555] mb-5 font-acorn">
        {title}
      </h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-sm text-gray-200 transition-colors hover:border-[#30c555]/50 hover:text-white"
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
    "Swift",
    "SQL",
    "PostgreSQL",
  ];

  const aiMl = [
    "LLM Agents & Agentic AI",
    "Multi-Agent Systems",
    "LangChain / LangGraph",
    "RAG Pipelines",
    "Vector Databases (FAISS)",
    "Model Context Protocol (MCP)",
    "Tool / Function Calling",
    "LLM Evaluation & Benchmarking",
    "Prompt Engineering",
    "LLM Fine-tuning",
    "vLLM / Ollama (serving)",
    "AI Safety & Guardrails",
    "Reinforcement Learning",
    "NLP",
    "PyTorch",
    "TensorFlow",
    "Hugging Face",
    "Scikit-learn",
  ];

  const cloudDevOps = [
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "REST APIs & Integrations",
    "Data Pipelines",
    "CI/CD",
    "Kafka",
    "Git / GitLab",
    "Datadog",
    "Linux/UNIX",
  ];

  const frameworks = [
    "Node.js",
    "FastAPI",
    "React",
    "Next.js",
    "Django",
    ".NET Core",
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
    <div className="space-y-8">
      <h1 className="text-[#30c555] text-3xl md:text-4xl font-acorn font-bold text-center md:text-left">
        ./skills
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
