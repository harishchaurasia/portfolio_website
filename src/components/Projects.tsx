import React from 'react';
import ProjectCard from './ProjectsCard';

const Projects: React.FC = () => {
  return (
    <div className="mx-4 md:mx-16 lg:mx-44 my-10 md:my-20 space-y-10">
      <h1 className="text-[#30c555] text-6xl font-acorn font-bold text-center md:text-left mx-0 md:mx-0 mt-56 mb-16">
        .Projects
      </h1>
      <ProjectCard 
        title="Interactive 3D Portfolio"
        description="Created an interactive 3D portfolio using Three.js and @react-three/fiber, used api routes, and responsiveness showcasing various projects with immersive 3D visualizations and animations."
        skills={['React', 'Vanta.js','Three.js','Blender', '@react-three/fiber', 'TailwindCSS', 'Vercel']}
        mainSkill="react"
        skillIcons={['threejs','blender', 'nextjs', 'tailwind', 'vercel']}
        githubRepo="https://github.com/harishchaurasia/portfolio_website"
      />
      <ProjectCard 
        title="VNC Public School Website"
        description="Designed the app in figma, developed a responsive and user-friendly website for VNC Public School using Next.js. Implemented a modern and clean design with TailwindCSS, ensuring a seamless user experience across devices."
        skills={['Nextjs', 'React', 'TailwindCSS', 'Vercel']}
        mainSkill="react"
        skillIcons={['nextjs', 'figma', 'tailwind', 'vercel']}
        githubRepo="https://github.com/harishchaurasia/vncpublicschool"
      />
      <ProjectCard 
        title="SkyWand"
        description="Designed the app in Figma, focusing on user experience and visual appeal in line with Apple’s Design Policies. Implemented advanced features using SwiftUI and Swift, integrating WeatherAPI for real-time weather data."
        skills={['Figma', 'SwiftUI', 'Swift', 'WeatherAPI', 'Vercel']}
        mainSkill="Swift"
        skillIcons={['figma', 'vscode']}
        githubRepo="https://github.com/harishchaurasia/weatherApp_iOS"
      />
      <ProjectCard 
        title="Susinator"
        description="Co-developed a user-friendly frontend with Nextjs and ChakraUI for a contract document analysis web app. Utilized Amazon AWS, DynamoDB, and RapidAPI for backend file handling and contract simplification."
        skills={['Nextjs', 'ChakraUI', 'AWS', 'DynamoDB', 'RapidAPI']}
        mainSkill="Nextjs"
        skillIcons={['nextjs', 'aws', 'dynamodb']}
        githubRepo="https://github.com/harishchaurasia/Susinator"
      />
      <ProjectCard 
        title="Dodge Apocalypto"
        description="Collaborated with my team to design game levels and implement functionalities using C# Scripts. Developed a 3D Open-World Game with Unity and NavMesh, winning the best game award in a class of 50 teams."
        skills={['C#', 'Unity', 'NavMesh']}
        mainSkill="Unity"
        skillIcons={['blender','cs', 'unity']}
        githubRepo="https://drive.google.com/file/d/1OYAcn2PssKbmePcfPlq988iof-a6uRmU/view?usp=sharing"
      />
    </div>
  );
};

export default Projects;
