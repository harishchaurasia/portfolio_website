import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

// Personal "off the clock" card: a hover-spinning vinyl with the MTRX logo as
// the record label, an animated equalizer, and an Instagram link. Pure CSS
// animation (see globals.css .mtrx-*), so it stays a server component.
const MusicCard: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-lg md:p-6">
      <div className="flex flex-col items-center gap-5 sm:flex-row md:gap-6">
        {/* Vinyl record - spins on hover */}
        <div className="mtrx-vinyl-wrap flex-shrink-0">
          <div className="mtrx-vinyl relative h-28 w-28 rounded-full">
            <div className="mtrx-label">
              <Image
                src="/mtrxk2.png"
                alt="MTRX logo"
                fill
                className="object-contain p-1"
                sizes="48px"
              />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 text-center sm:text-left">
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <h3 className="font-acorn text-2xl font-bold text-[#30c555]">
              MTRX
            </h3>
            <div className="mtrx-eq" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <p className="mt-1 font-sf_pro text-sm text-gray-300 md:text-base">
            Music Producer <span className="text-gray-600">·</span> 5+ yrs
            &nbsp;&nbsp; DJ <span className="text-gray-600">·</span> 3+ yrs
          </p>
          <p className="mt-2 font-sf_pro text-sm text-gray-400">
            When I&apos;m off the clock, I produce and DJ for fun.
          </p>
          <a
            href="https://instagram.com/mtrx_music"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm mt-4"
          >
            <FaInstagram className="btn-icon" />
            <span>@mtrx_music</span>
          </a>
        </div>

        {/* DJ photo */}
        <div className="relative hidden h-28 w-40 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 md:block">
          <Image
            src="/DJ_IMG.webp"
            alt="Harish DJing"
            fill
            className="object-cover"
            sizes="160px"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
