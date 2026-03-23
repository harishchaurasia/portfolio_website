import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  mainSkill: string;
  skillIcons: string[];
  githubRepo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  skills = [],
  mainSkill = "",
  skillIcons = [],
  githubRepo,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);

  const mainSkillIconUrl = mainSkill
    ? `https://skillicons.dev/icons?i=${mainSkill.toLowerCase()}`
    : "";
  const skillsIconUrl =
    skillIcons.length > 0
      ? `https://skillicons.dev/icons?i=${skillIcons.join(",")}&perline=13`
      : "";

  const showDetails = !isMobile || isExpanded;
  const bracketTokens = title.match(/(\([^)]*\)|\[[^\]]*\])/g) ?? [];
  const leadLine = bracketTokens
    .map((token) => token.slice(1, -1).trim())
    .filter(Boolean)
    .join(" · ");
  const displayTitle = title
    .replace(/\s*(\([^)]*\)|\[[^\]]*\])/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();

  const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isMobile) return;
    if (!isExpanded) {
      e.preventDefault();
      setIsExpanded(true);
    }
  };

  useEffect(() => {
    if (!isMobile || !isExpanded) return;

    const handleOutsideTap = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!cardRef.current || !target) return;
      if (!cardRef.current.contains(target)) {
        setIsExpanded(false);
      }
    };

    window.addEventListener("click", handleOutsideTap);
    window.addEventListener("touchstart", handleOutsideTap);

    return () => {
      window.removeEventListener("click", handleOutsideTap);
      window.removeEventListener("touchstart", handleOutsideTap);
    };
  }, [isExpanded, isMobile]);

  return (
    <a
      ref={cardRef}
      href={githubRepo}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleCardClick}
      className="relative border border-gray-800 rounded-3xl shadow-bs p-4 flex flex-col md:flex-row items-start bg-black-800 bg-opacity-50 backdrop-blur-lg hover:shadow-xs text-white mb-4 no-underline"
    >
      {mainSkill && (
        <img
          src={mainSkillIconUrl}
          alt={`${mainSkill} logo`}
          className="w-16 h-16 mb-4 mr-4"
        />
      )}
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h2 className="pr-10 text-xl md:text-2xl font-bold">{displayTitle}</h2>
          <img
            src="./ex.png"
            alt="External link icon"
            className="absolute top-4 right-4 w-6 h-6 ml-2"
          />
        </div>
        {leadLine && (
          <p className="mt-1 text-sm text-[#30c555] font-medium">{leadLine}</p>
        )}
        {isMobile && !isExpanded && (
          <p className="mt-2 text-sm text-gray-400">
            Tap to expand, tap again to open GitHub.
          </p>
        )}
        {showDetails && (
          <>
            <p className="mt-2">{description}</p>
            {skills.length > 0 && (
              <div className="mt-2 text-slate-400">
                <p>
                  <strong>Skills Used:</strong> {skills.join(", ")}
                </p>
              </div>
            )}
            {skillsIconUrl && (
              <div className="mt-2">
                <img src={skillsIconUrl} alt="Skill icons" />
              </div>
            )}
          </>
        )}
        {isMobile && isExpanded && (
          <div className="mt-3 text-xs text-[#30c555]">
            Next tap opens repository
          </div>
        )}
      </div>
    </a>
  );
};

export default ProjectCard;
