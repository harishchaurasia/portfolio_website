import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const FLAGSHIP = [
  "WebSecArena",
  "Adaptive Navigation OpenEnv",
  "AutoResearch",
  "Codebase-MCP",
  "Knowledge Brain (RAG)",
  "MatchABLE",
  "ArkaForge",
];

// Compact home-page teaser. The full grid lives on /projects to keep the
// landing page short and scannable.
const ProjectsTeaser: React.FC = () => {
  return (
    <div className="my-10 md:my-20">
      <h1 className="text-[#30c555] text-5xl md:text-6xl font-acorn font-bold text-center md:text-left mb-6">
        .Projects
      </h1>
      <p className="text-gray-300 font-sf_pro text-sm md:text-base max-w-2xl text-center md:text-left mb-8 leading-relaxed">
        17+ builds across AI agents, LLM systems, evaluation, and full-stack -
        from an adversarial security benchmark for LLM web agents, to an RL
        environment deployed on Hugging Face, an agentic MCP server, and
        multimodal RAG.
      </p>
      <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
        {FLAGSHIP.map((name) => (
          <span
            key={name}
            className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-sm text-gray-200"
          >
            {name}
          </span>
        ))}
      </div>
      <div className="flex justify-center md:justify-start">
        <Link href="/projects" className="btn btn-primary">
          <span>Browse all projects</span>
          <FaArrowRight className="btn-arrow" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectsTeaser;
