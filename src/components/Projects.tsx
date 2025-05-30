import React from "react";
import ProjectCard from "./ProjectsCard";

const Projects: React.FC = () => {
  return (
    <div className="mx-4 md:mx-16 lg:mx-44 my-10 md:my-20">
      <h1 className="text-[#30c555] text-6xl font-acorn font-bold text-center md:text-left mt-56 mb-16">
        .Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProjectCard
          title="Lyrical AI"
          description="Lyrical.AI is an AI-powered songwriting assistant that generates lyrics from text and audio prompts. It analyzes mood and style to suggest chord progressions and musical keys, helping musicians turn ideas into structured songs. Built using OpenAI's GPT, Whisper, and FastAPI, with local inference on an RTX 5080 GPU. Designed with a responsive and intuitive frontend using React and TailwindCSS to support seamless creative interaction."
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
          skillIcons={["react", "python", "fastapi", "tailwindcss"]}
          githubRepo="https://github.com/harishchaurasia/LyricalAI"
        />

        <ProjectCard
          title="SolEstate"
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
          title="Workforce Matching Platform"
          description="Designed and developed a web platform, connecting individuals with disabilities to companies embracing inclusivity and looking to fulfill their CSR Quotas. Implemented real-time accessibility scoring using AI matching, and an intuitive UI with React and TailwindCSS. Enhanced job search efficiency by integrating AI-based resume matching and dynamic accessibility filters."
          skills={[
            "React",
            "Node.js",
            "Python",
            "TailwindCSS",
            "MongoDB",
            "AI/ML",
          ]}
          mainSkill="React"
          skillIcons={["react", "nodejs", "python", "tailwindcss"]}
          githubRepo="https://github.com/harishchaurasia/match-able"
        />
        <ProjectCard
          title="LocalVendor"
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
          title="Interactive 3D Portfolio"
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
          title="VNC Public School Website"
          description="Designed the app in figma, developed a responsive and user-friendly website for VNC Public School using Next.js. Implemented a modern and clean design with TailwindCSS, ensuring a seamless user experience across devices."
          skills={["Nextjs", "React", "TailwindCSS", "Vercel"]}
          mainSkill="react"
          skillIcons={["nextjs", "javascript", "figma", "tailwind", "vercel"]}
          githubRepo="https://github.com/harishchaurasia/vncpublicschool"
        />
        <ProjectCard
          title="SkyWand"
          description="Designed the app in Figma, focusing on user experience and visual appeal in line with Apple’s Design Policies. Implemented advanced features using SwiftUI and Swift, integrating WeatherAPI for real-time weather data."
          skills={["Figma", "SwiftUI", "Swift", "WeatherAPI", "Vercel"]}
          mainSkill="Swift"
          skillIcons={["figma", "vscode"]}
          githubRepo="https://github.com/harishchaurasia/weatherApp_iOS"
        />
        <ProjectCard
          title="Susinator"
          description="Co-developed a user-friendly frontend with Nextjs and ChakraUI for a contract document analysis web app. Utilized Amazon AWS, DynamoDB, and RapidAPI for backend file handling and contract simplification."
          skills={["Nextjs", "ChakraUI", "AWS", "DynamoDB", "RapidAPI"]}
          mainSkill="Nextjs"
          skillIcons={["nextjs", "aws", "dynamodb"]}
          githubRepo="https://github.com/harishchaurasia/Susinator"
        />
        <ProjectCard
          title="Dodge Apocalypto"
          description="Collaborated with my team to design game levels and implement functionalities using C# Scripts. Developed a 3D Open-World Game with Unity and NavMesh, winning the best game award in a class of 50 teams."
          skills={["C#", "Unity", "NavMesh"]}
          mainSkill="Unity"
          skillIcons={["blender", "cs", "unity"]}
          githubRepo="https://drive.google.com/file/d/1OYAcn2PssKbmePcfPlq988iof-a6uRmU/view?usp=sharing"
        />
        <ProjectCard
          title="Real-Time Speech to Image Gen"
          description="Developed a real-time speech-to-image generation application during ASU HACKML 2022. Leveraged Assembly AI's audio transcription API alongside a simplified machine learning model inspired by OpenAI's DALL·E paper. Implemented robust integration of real-time transcription with generative capabilities using Node.js and Python."
          skills={["Python", "AssemblyAI", "Machine Learning", "Node.js"]}
          mainSkill="Python"
          skillIcons={["python", "nodejs"]}
          githubRepo="https://github.com/harishchaurasia/MLHackathon2022"
        />
      </div>
    </div>
  );
};

export default Projects;
