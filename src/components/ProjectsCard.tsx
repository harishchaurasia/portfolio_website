"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  mainSkill: string;
  skillIcons: string[];
  githubRepo?: string;
  liveDemo?: string;
  status?: string;
  logo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  skills = [],
  mainSkill = "",
  githubRepo,
  liveDemo,
  status,
  logo,
}) => {
  const [expanded, setExpanded] = useState(false);

  const avatar = useMemo(
    () =>
      logo ||
      (mainSkill
        ? `https://skillicons.dev/icons?i=${mainSkill.toLowerCase()}`
        : ""),
    [logo, mainSkill]
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

  const isLong = description.length > 200;

  return (
    <div className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-bs backdrop-blur-lg transition-all duration-200 hover:-translate-y-0.5 hover:border-[#30c555]/40 hover:bg-white/[0.05] md:p-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        {avatar && (
          <Image
            src={avatar}
            alt={`${mainSkill || "project"} icon`}
            width={56}
            height={56}
            unoptimized={!logo}
            className="h-14 w-14 flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 object-cover"
          />
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h2 className="font-sf_pro text-lg font-bold text-white md:text-xl">
              {displayTitle}
            </h2>
            {status && (
              <span className="flex-shrink-0 whitespace-nowrap rounded-full border border-amber-400/40 bg-amber-400/10 px-2.5 py-0.5 text-[0.7rem] font-medium text-amber-300">
                {status}
              </span>
            )}
          </div>
          {leadLine && (
            <p className="mt-1 font-acorn text-sm font-medium text-[#30c555]">
              {leadLine}
            </p>
          )}
        </div>
      </div>

      {/* Description */}
      <p
        className={`mt-4 font-sf_pro text-sm leading-relaxed text-gray-300 ${
          expanded ? "" : "line-clamp-4"
        }`}
      >
        {description}
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-1 self-start font-acorn text-xs font-semibold text-[#30c555] transition-colors hover:text-[#28a347]"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}

      {/* Tech chips */}
      {skills.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-xs text-gray-300"
            >
              {s}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
        {githubRepo && (
          <a
            href={githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            <FaGithub className="btn-icon" />
            <span>Code</span>
          </a>
        )}
        {liveDemo && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <FaArrowUpRightFromSquare className="btn-icon" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default React.memo(ProjectCard);
