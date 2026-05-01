import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  mainSkill: string;
  skillIcons: string[];
  githubRepo: string;
  logo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  skills = [],
  mainSkill = "",
  skillIcons = [],
  githubRepo,
  logo,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);

  const mainSkillIconUrl = useMemo(
    () =>
      mainSkill
        ? `https://skillicons.dev/icons?i=${mainSkill.toLowerCase()}`
        : "",
    [mainSkill]
  );

  const skillIconsKey = skillIcons.join(",");
  const skillsIconUrl = useMemo(
    () =>
      skillIcons.length > 0
        ? `https://skillicons.dev/icons?i=${skillIconsKey}&perline=13`
        : "",
    [skillIcons.length, skillIconsKey]
  );

  const { displayTitle, leadLine } = useMemo(() => {
    const tokens = title.match(/(\([^)]*\)|\[[^\]]*\])/g) ?? [];
    return {
      leadLine: tokens
        .map((t) => t.slice(1, -1).trim())
        .filter(Boolean)
        .join(" · "),
      displayTitle: title
        .replace(/\s*(\([^)]*\)|\[[^\]]*\])/g, "")
        .replace(/\s{2,}/g, " ")
        .trim(),
    };
  }, [title]);

  const showDetails = !isMobile || isExpanded;
  const stripWidth = Math.max(48, skillIcons.length * 48);

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
      {(logo || mainSkill) && (
        <Image
          src={logo || mainSkillIconUrl}
          alt={`${mainSkill || "project"} logo`}
          width={64}
          height={64}
          className="w-16 h-16 mb-4 mr-4 rounded-lg object-cover"
          unoptimized={!logo}
        />
      )}
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h2 className="pr-10 text-xl md:text-2xl font-bold">{displayTitle}</h2>
          <Image
            src="/ex.png"
            alt="External link icon"
            width={24}
            height={24}
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
                <Image
                  src={skillsIconUrl}
                  alt="Skill icons"
                  width={stripWidth}
                  height={48}
                  unoptimized
                  loading="lazy"
                />
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

export default React.memo(ProjectCard);
