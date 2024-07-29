import React from "react";

interface ExperienceCardProps {
  title: string;
  companyName: string;
  dateRange: string;
  description: string;
  logo: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  companyName,
  dateRange,
  description,
  logo
}) => {
  return (
    <div className="border border-gray-800 rounded-3xl shadow-bs p-4 flex flex-col md:flex-row items-start bg-transparent text-white mb-4">
      <img src={logo} alt={`${companyName} logo`} className="w-20 h-20 mr-4 rounded-full" />
      <div className="flex-1">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-400">{companyName}</p>
        <p className="text-sm text-gray-400">{dateRange}</p>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
