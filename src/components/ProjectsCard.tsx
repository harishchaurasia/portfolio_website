import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  logo: string;
  skills: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, logo, skills = [] }) => {
  const skillIconsUrl = skills.length > 0 ? `https://skillicons.dev/icons?i=${skills.join(",")}&perline=13` : '';

  return (
    <div className="border border-gray-800 rounded-3xl shadow-bs p-4 flex flex-col md:flex-row items-start bg-black-800 bg-opacity-50 backdrop-blur-sm text-white mb-4">
      <img src={logo} alt={`${title} logo`} className="w-16 h-16 mr-4" />
      <div className="flex-1">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="mt-2">{description}</p>
        {skillIconsUrl && (
          <div className="mt-2">
            <img src={skillIconsUrl} alt={`${title} skill icons`} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
