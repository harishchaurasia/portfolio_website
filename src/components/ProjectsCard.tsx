import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  mainSkill: string;
  skillIcons: string[];
  githubRepo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, skills = [], mainSkill = '', skillIcons = [], githubRepo }) => {
  const mainSkillIconUrl = mainSkill ? `https://skillicons.dev/icons?i=${mainSkill.toLowerCase()}` : '';
  const skillsIconUrl = skillIcons.length > 0 ? `https://skillicons.dev/icons?i=${skillIcons.join(",")}&perline=13` : '';

  return (
    <a href={githubRepo} target="_blank" rel="noopener noreferrer" className="border border-gray-800 rounded-3xl shadow-bs p-4 flex flex-col md:flex-row items-start bg-black-800 bg-opacity-50 backdrop-blur-lg text-white mb-4 no-underline">
      {mainSkill && <img src={mainSkillIconUrl} alt={`${mainSkill} logo`} className="w-16 h-16 mb-4 mr-4" />}
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
          <img src="./ex.png" alt="External link icon" className="w-6 h-6 ml-2" />
        </div>
        <p className="mt-2">{description}</p>
        {skills.length > 0 && (
          <div className="mt-2 text-slate-400">
            <p><strong>Skills Used:</strong> {skills.join(', ')}</p>
          </div>
        )}
        {skillsIconUrl && (
          <div className="mt-2">
            <img src={skillsIconUrl} alt="Skill icons" />
          </div>
        )}
      </div>
    </a>
  );
};

export default ProjectCard;
