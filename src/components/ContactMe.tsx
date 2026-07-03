import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";

const socials = [
  {
    href: "mailto:harishchaurasia143@gmail.com",
    label: "Email Harish",
    icon: faEnvelope,
  },
  {
    href: "https://linkedin.com/in/harishchaurasia",
    label: "LinkedIn profile",
    icon: faLinkedin,
  },
  {
    href: "https://github.com/harishchaurasia",
    label: "GitHub profile",
    icon: faGithub,
  },
  {
    href: "https://instagram.com/mtrx_music",
    label: "Instagram profile",
    icon: faInstagram,
  },
  {
    href: "https://x.com/harischaurasia",
    label: "X (Twitter) profile",
    icon: faXTwitter,
  },
];

const ContactMe: React.FC = () => {
  return (
    <div className="my-16 md:my-20">
      <h1 className="text-[#30c555] text-5xl md:text-6xl font-acorn font-bold text-center md:text-left mb-10 md:mb-16">
        .Contact Me
      </h1>

      <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-lg md:grid-cols-2">
        {/* Left: content */}
        <div className="flex flex-col justify-center p-8 md:p-10">
          <p className="font-acorn text-xs uppercase tracking-[0.25em] text-[#30c555]">
            Get in touch
          </p>
          <h2 className="mt-3 font-sf_pro text-3xl font-bold text-white md:text-4xl">
            Let&apos;s build something.
          </h2>
          <p className="mt-4 font-sf_pro text-sm leading-relaxed text-gray-300 md:text-base">
            Open to AI, Software, and Forward-Deployed Engineer roles. If
            you&apos;re hiring, building something with agents or LLMs, or just
            have an idea worth chasing, my inbox is always open.
          </p>
          <p className="mt-4 font-acorn text-sm font-bold tracking-wide text-[#30c555] md:text-base">
            EAT. SLEEP. BUILD. REPEAT.
          </p>

          {/* Primary actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:harishchaurasia143@gmail.com" className="btn btn-primary">
              <FontAwesomeIcon icon={faEnvelope} className="btn-icon" />
              <span>Email me</span>
            </a>
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <FontAwesomeIcon icon={faFilePdf} className="btn-icon" />
              <span>Resume</span>
            </a>
          </div>

          {/* Social row */}
          <div className="mt-6 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-white/10 text-gray-300 transition-colors hover:border-[#30c555] hover:text-[#30c555] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#30c555] focus-visible:outline-offset-2"
              >
                <FontAwesomeIcon icon={s.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: photo (framed) */}
        <div className="p-4 md:p-5">
          <div className="relative h-72 overflow-hidden rounded-2xl border border-white/15 ring-1 ring-inset ring-white/5 md:h-full md:min-h-[400px]">
            <Image
              src="/harish03.webp"
              alt="Harish Chaurasia"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
