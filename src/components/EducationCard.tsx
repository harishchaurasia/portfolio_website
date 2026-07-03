import React from "react";
import Image from "next/image";

interface EducationCardProps {
  degreeType: string;
  degreeName: string;
  concentration?: string;
  schoolName: string;
  collegeName: string;
  universityName: string;
  degreeDateRange: string;
  description: string;
  logo: string;
  className?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  degreeType,
  degreeName,
  concentration,
  collegeName,
  universityName,
  degreeDateRange,
  description,
  logo,
}) => {
  return (
    <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-lg shadow-bs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#30c555]/40 md:p-6">
      <div className="flex items-start gap-4">
        <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <Image
            src={logo}
            alt={`${degreeType} logo`}
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
            <h2 className="font-sf_pro text-lg font-bold text-white md:text-xl">
              {degreeName}
            </h2>
            <span className="flex-shrink-0 whitespace-nowrap rounded-full border border-[#30c555]/30 bg-[#30c555]/10 px-2.5 py-0.5 font-acorn text-[0.7rem] text-[#30c555]">
              {degreeDateRange}
            </span>
          </div>
          {concentration && (
            <p className="mt-1 font-acorn text-sm font-medium text-[#30c555]">
              {concentration}
            </p>
          )}
          <p className="mt-1 font-acorn text-sm text-gray-400">
            {universityName}
          </p>
          <p className="font-acorn text-xs text-gray-500">{collegeName}</p>
        </div>
      </div>

      <p className="mt-4 font-sf_pro text-sm leading-relaxed text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default EducationCard;
