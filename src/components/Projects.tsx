// src/components/Projects.tsx
import React from 'react';
import ProjectCard from './ProjectsCard';

const Projects: React.FC = () => {
  return (
    <div className="mx-4 md:mx-16 lg:mx-44 my-10 md:my-20 space-y-10">
      <h1 className="text-[#30c555] text-6xl font-bold text-center md:text-left mx-0 md:mx-0 mt-56 mb-16">
        .Projects
      </h1>
        <ProjectCard 
          title="Mini Links"
          description="Leveraged Flask and Google Maps to create an innovative full-stack application that shortens URLs by 98% and integrated SQLite3 Database to manage over 1.6 million links, enabling easier link sharing for end users."
          logo="/path/to/mini-links-logo.png"
          skills={['flask', 'googlemaps', 'sqlite']}
        />
        <ProjectCard 
          title="Health Bridge"
          description="Designed and developed a dynamic, interactive COVID-19 Symptom Survey app using 20-point diagnosis. Integrated Google Maps API to redirect users to nearby health care centers based on geo-location and suggest precautions for staying safe from virus."
          logo="/path/to/health-bridge-logo.png"
          skills={['flask', 'googlemaps', 'health']}
        />
        <ProjectCard 
          title="Zendesk Ticket Viewer"
          description="Designed and developed a static Zendesk Ticket Viewer web application as part of Zendesk's Online Assessment (OA), using Python and Flask. The application fetches and displays company tickets through the Zendesk API, offering additional details upon request."
          logo="/path/to/zendesk-ticket-viewer-logo.png"
          skills={['python', 'flask', 'zendesk']}
        />
    </div>
  );
};

export default Projects;
