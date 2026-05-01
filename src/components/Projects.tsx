import React from "react";
import ProjectCard from "./ProjectsCard";

const Projects: React.FC = () => {
  return (
    <div className="mx-0 md:mx-0 lg:mx-0 my-10 md:my-20">
      <h1 className="text-[#30c555] text-6xl font-acorn font-bold text-center md:text-left mt-20 md:mt-28 mb-10 md:mb-16">
        .Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
        <ProjectCard
          title="WebSecArena (Security Benchmark for LLM Web Agents)"
          description="Designed adversarial web environments across 6 attack classes including prompt injection, phishing, and clickjacking; ran 2,160 experimental trials across 12 agent-model combinations (3 LLMs, 4 AI agent architectures). Built 3 distinct prompt injection attack vectors targeting different layers of agent perception: system-prompt mimicry, hidden HTML elements, and deceptive UI popups. Defined a 3-outcome evaluation framework (ASR, STS, DTR) to distinguish genuine robustness from overcaution; baseline agents failed at 60-100% rates across all attack classes. Built on BrowserGym and AgentLab."
          skills={[
            "Python",
            "BrowserGym",
            "AgentLab",
            "LLM",
            "Prompt Injection",
            "Adversarial Evaluation",
            "Web Security",
            "Benchmarking",
          ]}
          mainSkill="python"
          skillIcons={["python", "pytorch"]}
          githubRepo="https://github.com/harishchaurasia/Benchmarking-Privacy-Aware-Autonomous-AI-Agents"
        />
        <ProjectCard
          title="Adaptive Navigation OpenEnv (LLM Environment & RL Benchmark)"
          description="A partially-observable RL benchmark for training LLM agents on long-horizon planning under energy constraints. The agent operates with limited local perception and must explore, collect a key, unlock a checkpoint, and reach a goal. Includes an interactive simulation, OpenEnv deployment on Hugging Face Spaces, and a minimal Hugging Face TRL training pipeline that lets language models learn action policies from environment feedback."
          skills={[
            "Python",
            "OpenEnv",
            "Hugging Face TRL",
            "Reinforcement Learning",
            "Docker",
            "Streamlit",
            "NumPy",
          ]}
          mainSkill="pytorch"
          skillIcons={["python", "pytorch", "docker"]}
          githubRepo="https://github.com/harishchaurasia/Meta_OpenEnv_PyTorch_Hack"
        />
        <ProjectCard
          title="Codebase-MCP (Agentic MCP Server for Codebase Understanding) [In Progress]"
          description="An agent-capable Model Context Protocol server that lets AI tools deeply understand a software repository. Scans a codebase, parses source files via AST, builds a dependency graph, and exposes everything through an agentic tool system with persistent JSON memory, heuristic pattern detection, TF-IDF keyword search, and a minimal rule-based agent loop that plans, selects tools, and evaluates progress. Ships with Claude Desktop and Cursor integration configs."
          skills={[
            "Python",
            "MCP",
            "Pydantic",
            "AST",
            "Agent Loops",
            "Tool Registry",
            "Dependency Graphs",
            "structlog",
            "TF-IDF",
          ]}
          mainSkill="python"
          skillIcons={["python", "fastapi", "vscode"]}
          githubRepo="https://github.com/harishchaurasia/codebase-mcp"
        />
        <ProjectCard
          title="Blast Radius (VSCode Extension for Code Impact Visualization) [In Progress]"
          description="A VSCode extension that visualises the blast radius of any code change in TypeScript projects. Uses the TypeScript Compiler API to walk the AST, extract function definitions and call sites, and build an in-memory call graph with forward and reverse adjacency lists. Maps Jest test files to source functions with transitive coverage expansion, and renders an interactive Cytoscape.js dependency graph inside a VSCode webview. Click any function to see downstream calls (red), upstream callers (purple), and linked tests (green) computed on demand via BFS traversal. The Impact Summary surfaces affected function counts, recommended tests, and at-risk feature modules. All analysis runs locally - no code leaves the machine."
          skills={[
            "TypeScript",
            "VSCode Extension API",
            "TypeScript Compiler API",
            "Cytoscape.js",
            "AST",
            "Static Analysis",
            "Jest",
            "Webview",
          ]}
          mainSkill="typescript"
          skillIcons={["typescript", "vscode", "nodejs"]}
          githubRepo="https://github.com/harishchaurasia/blast-radius-vscode"
        />
        <ProjectCard
          title="AutoResearch (Multi-Agent Research Pipeline)"
          description="A Python application that takes a plain-English research question and produces a structured Markdown research report through a pipeline of five specialised agents. The Planner decomposes the question into sub-questions, the Retriever fetches snippets from Wikipedia and DuckDuckGo, the Summarizer extracts sourced facts with confidence ratings, the Critic identifies gaps and may trigger a re-retrieval pass (max 2 iterations), and the Writer composes the final report. All inter-agent messages use validated Pydantic schemas with no shared mutable state. Includes full run tracing, configurable models per agent, and a CLI entry point."
          skills={[
            "Python",
            "OpenAI API",
            "Pydantic",
            "Multi-Agent Systems",
            "LLM Orchestration",
            "Wikipedia API",
            "DuckDuckGo API",
            "Prompt Engineering",
          ]}
          mainSkill="python"
          skillIcons={["python", "md"]}
          githubRepo="https://github.com/harishchaurasia/multi-agent-autoresearch"
        />
        <ProjectCard
          title="Knowledge Brain (Multimodal RAG Assistant) [In Progress]"
          description="Knowledge Brain, also known as Personal Professor, is a multimodal Retrieval-Augmented Generation (RAG) system that lets users upload PDFs, documents, and audio to create a personalized AI tutor. It extracts and chunks text, generates embeddings using PyTorch, stores vectors in FAISS, and retrieves grounded context to answer questions via Llama 3. The system supports voice queries using Whisper, real-time chat, and a modern UI built with Next.js, TailwindCSS, and shadcn/ui. Fully local, privacy-friendly, and optimized for fast inference."
          skills={[
            "FastAPI",
            "Python",
            "Next.js",
            "FAISS",
            "PyTorch",
            "Whisper",
            "Llama 3",
            "TailwindCSS",
            "shadcn/ui",
          ]}
          mainSkill="pytorch"
          skillIcons={["python", "fastapi", "nextjs", "pytorch"]}
          githubRepo="https://github.com/harishchaurasia/KnowledgeBrain"
        />
        <ProjectCard
          title="Lyrical AI (Multimodal GenAI Assistant)"
          description="Full-stack GenAI system integrating GPT-2, Whisper, and FastAPI. Created training pipelines and a recommendation subsystem using a 350k+ song corpus. Multimodal AI assistant that generates lyrics from text and audio prompts, with a responsive frontend using React and TailwindCSS."
          skills={[
            "React",
            "FastAPI",
            "Python",
            "Whisper",
            "GPT-2",
            "TailwindCSS",
            "Hugging Face",
          ]}
          mainSkill="python"
          skillIcons={["react", "python", "fastapi", "pytorch", "tailwindcss"]}
          githubRepo="https://github.com/harishchaurasia/LyricalAI"
        />
        <ProjectCard
          title="MatchABLE (AI Workforce Matching Platform)"
          description="NLP-driven resume parser using Scikit-learn and Transformers for semantic search and candidate matching. Built a React/Next.js + Node.js system deployed on AWS, integrating ML inference APIs with CI/CD and monitoring. Connects individuals with disabilities to inclusive companies."
          skills={[
            "Scikit-Learn",
            "AWS",
            "Hugging Face Transformers",
            "React",
            "Next.js",
            "Node.js",
            "CI/CD",
          ]}
          mainSkill="nextjs"
          skillIcons={["react", "nextjs", "nodejs", "sklearn", "pytorch", "aws"]}
          githubRepo="https://github.com/harishchaurasia/match-able"
        />
        <ProjectCard
          title="SolEstate (Decentralized Lending Platform)"
          description="SolEstate is a Decentralized Money Lending Platform based on Solana. It connects borrowers from developing regions with global lenders, enabling hassle-free funding. Integrated smart contract-powered lending and repayment mechanisms, ensuring secure, transparent, and trustless transactions using Python and Node.js. Developed an intuitive and accessible UI using React, Next.js, and TailwindCSS, streamlining the lending process, facilitating ideas & startups."
          skills={[
            "React",
            "Next.js",
            "Node.js",
            "Python",
            "TailwindCSS",
            "MongoDB",
            "Solana",
          ]}
          mainSkill="nextjs"
          skillIcons={[
            "react",
            "nextjs",
            "nodejs",
            "python",
            "tailwindcss",
            "solana",
          ]}
          githubRepo="https://github.com/harishchaurasia/HackNYU25"
        />
        <ProjectCard
          title="LocalVendor (Hyperlocal Delivery App)"
          description="Developed a mobile platform for instant local deliveries, connecting users with nearby vendors for fast, 15-30 minute delivery of fresh items like fruits and groceries. The app ensures a smooth and timely experience by facilitating real-time vendor communication and order tracking."
          skills={[
            "React Native",
            "JavaScript",
            "TailwindCSS",
            "Firebase",
            "Figma",
          ]}
          mainSkill="react"
          skillIcons={["javascript", "tailwind", "firebase", "figma"]}
          githubRepo="https://github.com/harishchaurasia/LocalVendor"
        />
        <ProjectCard
          title="Real-Time Speech to Image Gen (Speech-to-Image ML App)"
          description="Developed a real-time speech-to-image generation application during ASU HACKML 2022. Leveraged Assembly AI's audio transcription API alongside a simplified machine learning model inspired by OpenAI's DALL-E paper. Implemented robust integration of real-time transcription with generative capabilities using Node.js and Python."
          skills={["Python", "AssemblyAI", "Machine Learning", "Node.js"]}
          mainSkill="Python"
          skillIcons={["python", "tensorflow", "nodejs"]}
          githubRepo="https://github.com/harishchaurasia/MLHackathon2022"
        />
        <ProjectCard
          title="Susinator (Contract Intelligence Web App)"
          description="Co-developed a user-friendly frontend with Nextjs and ChakraUI for a contract document analysis web app. Utilized Amazon AWS, DynamoDB, and RapidAPI for backend file handling and contract simplification."
          skills={["Nextjs", "ChakraUI", "AWS", "DynamoDB", "RapidAPI"]}
          mainSkill="Nextjs"
          skillIcons={["nextjs", "aws", "dynamodb"]}
          githubRepo="https://github.com/harishchaurasia/Susinator"
        />
        <ProjectCard
          title="Dodge Apocalypto (3D Open-World Game)"
          description="Collaborated with my team to design game levels and implement functionalities using C# Scripts. Developed a 3D Open-World Game with Unity and NavMesh, winning the best game award in a class of 50 teams."
          skills={["C#", "Unity", "NavMesh"]}
          mainSkill="Unity"
          skillIcons={["blender", "cs", "unity"]}
          githubRepo="https://drive.google.com/file/d/1OYAcn2PssKbmePcfPlq988iof-a6uRmU/view?usp=sharing"
        />
        <ProjectCard
          title="VNC Public School Website (Private School Website)"
          description="Designed the app in figma, developed a responsive and user-friendly website for VNC Public School using Next.js. Implemented a modern and clean design with TailwindCSS, ensuring a seamless user experience across devices."
          skills={["Nextjs", "React", "TailwindCSS", "Vercel"]}
          mainSkill="react"
          skillIcons={["nextjs", "javascript", "figma", "tailwind", "vercel"]}
          githubRepo="https://github.com/harishchaurasia/vncpublicschool"
        />
        <ProjectCard
          title="SkyWand (iOS Weather App)"
          description="Designed the app in Figma, focusing on user experience and visual appeal in line with Apple's Design Policies. Implemented advanced features using SwiftUI and Swift, integrating WeatherAPI for real-time weather data."
          skills={["Figma", "SwiftUI", "Swift", "WeatherAPI", "Vercel"]}
          mainSkill="Swift"
          skillIcons={["figma", "vscode"]}
          githubRepo="https://github.com/harishchaurasia/weatherApp_iOS"
        />
        <ProjectCard
          title="Interactive 3D Portfolio (Personal Portfolio Website)"
          description="Created an interactive 3D portfolio using Three.js and @react-three/fiber, used api routes, and responsiveness showcasing various projects with immersive 3D visualizations and animations."
          skills={[
            "React",
            "Vanta.js",
            "Three.js",
            "Blender",
            "@react-three/fiber",
            "TailwindCSS",
            "Vercel",
          ]}
          mainSkill="react"
          skillIcons={[
            "threejs",
            "javascript",
            "blender",
            "nextjs",
            "tailwind",
            "vercel",
          ]}
          githubRepo="https://github.com/harishchaurasia/portfolio_website"
        />
        <ProjectCard
          title="ArkaForge - Game Technology Company (Game Based Learning, Digital Twins, Simulation)"
          description="Building a game technology studio focused on simulation-based training, digital twins, and interactive systems for high-stakes industries. Delivering game-based learning and workforce training solutions across manufacturing, energy, defense, and research sectors. Developed simulation systems for Los Alamos National Laboratory in partnership with ASU."
          skills={[
            "Unreal Engine",
            "Unity",
            "C++",
            "C#",
            "VR/AR",
            "Digital Twins",
            "Simulation",
            "Game-Based Learning",
          ]}
          mainSkill="unreal"
          skillIcons={["unreal", "unity", "cpp", "cs", "blender"]}
          githubRepo="https://arkaforge.com"
          logo="/arkaforge_logo_square.png"
        />
      </div>
    </div>
  );
};

export default Projects;
