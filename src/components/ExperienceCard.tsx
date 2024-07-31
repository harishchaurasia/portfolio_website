import React from "react";

interface ExperienceCardProps {
  title: string;
  companyName: string;
  dateRange: string;
  description: string;
  logo: string;
  className: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  companyName,
  dateRange,
  description,
  logo,
}) => {
  return (
    <div
      className={`border border-gray-800 rounded-3xl shadow-bs p-4 flex flex-col md:flex-row items-start bg-black-800 bg-opacity-50 backdrop-blur-lg text-white mb-4`}
    >
      <img
        src={logo}
        alt={`${companyName} logo`}
        className="w-20 h-20 mr-4 rounded-full"
      />
      <div className="flex-1">
        <h2 className="text-xl md:text-2xl font-bold font-sf_pro">{title}</h2>
        <p className="text-sm md:text-base text-gray-400 font-medium font-acorn">
          {companyName}
        </p>
        <p className="text-sm md:text-base text-gray-400 font-medium font-acorn">
          {dateRange}
        </p>
        <p className="mt-2 text-sm md:text-base text-justify font-regular font-sf_pro">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
