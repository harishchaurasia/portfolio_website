import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  mainSkill: string;
  skillIcons: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, skills = [], mainSkill, skillIcons = [] }) => {
  const mainSkillIconUrl = `https://skillicons.dev/icons?i=${mainSkill.toLowerCase()}`;
  const skillsIconUrl = skillIcons.length > 0 ? `https://skillicons.dev/icons?i=${skillIcons.join(",")}&perline=13` : '';

  return (
    <div className="border border-gray-800 rounded-3xl shadow-bs p-4 flex flex-col md:flex-row items-start bg-black-800 bg-opacity-50 backdrop-blur-lg text-white mb-4">
      <img src={mainSkillIconUrl} alt={`${mainSkill} logo`} className="w-16 h-16 mr-4" />
      <div className="flex-1">
        <h2 className="text-lg font-bold">{title}</h2>
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
    </div>
  );
};

export default ProjectCard;
