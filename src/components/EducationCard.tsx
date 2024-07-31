import React from "react";

interface EducationCardProps {
  degreeType: string;
  degreeName: string;
  schoolName: string;
  collegeName: string;
  universityName: string;
  degreeDateRange: string;
  description: string;
  logo: string;
  className: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  degreeType,
  degreeName,
  schoolName,
  collegeName,
  universityName,
  degreeDateRange,
  description,
  logo,
}) => {
  return (
    <div
      className={`border border-gray-800 rounded-3xl shadow-bs p-4 flex flex-col md:flex-row items-start bg-black-800 bg-opacity-50 backdrop-blur-lg text-white mb-4`}
    >
      <img
        src={logo}
        alt={`${degreeType} logo`}
        className="w-20 h-20 mr-4 rounded-full"
      />
      <div className="flex-1">
        <h2 className="text-xl md:text-2xl font-bold font-sf_pro">
          {degreeName}
        </h2>
        <p className="text-sm md:text-base text-gray-400 font-medium font-acorn">
          {schoolName}
        </p>
        <p className="text-sm md:text-base text-gray-400 font-medium font-acorn">
          {collegeName}
        </p>
        <p className="text-sm md:text-base text-gray-400 font-medium font-acorn">
          {universityName}
        </p>
        <p className="text-sm md:text-base text-gray-400 font-medium font-acorn">
          {degreeDateRange}
        </p>
        <p className="mt-2 text-sm md:text-base text-justify font-regular font-sf_pro">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
