"use client";

import React, { useState, useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const NAV_ITEMS = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

const NAVBAR_HEIGHT = 105;
const MOBILE_OFFSET = -NAVBAR_HEIGHT - 10;
const SCROLL_DURATION = 100;

const Nav: React.FC = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const onSetActive = (to: string) => {
    setActive(to);
    setOpen(false);
  };

  const linkClass = (to: string) =>
    `block cursor-pointer rounded-full px-5 py-2 font-acorn font-semibold transition-colors ${
      active === to
        ? "bg-[#30c555] text-zinc-950"
        : "text-gray-300 hover:bg-white/10 hover:text-white"
    }`;

  const arkaforge = (extra = "") => (
    <a
      href="https://arkaforge.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 font-acorn font-semibold text-[#30c555] transition-colors hover:border-[#30c555] hover:bg-[#30c555] hover:text-zinc-950 ${extra}`}
    >
      ArkaForge
      <FaArrowUpRightFromSquare className="text-[0.7em] opacity-80" />
    </a>
  );

  const navLink = (to: string, label: string, offset: number) => (
    <Link
      to={to}
      smooth
      spy
      duration={SCROLL_DURATION}
      offset={offset}
      onSetActive={() => onSetActive(to)}
      className={linkClass(to)}
    >
      {label}
    </Link>
  );

  return (
    <>
      {/* Desktop: centered pill */}
      <nav className="fixed left-1/2 top-3 z-50 hidden -translate-x-1/2 md:block">
        <ul className="flex items-center gap-2 rounded-full border border-white/10 bg-black/50 p-2 backdrop-blur-lg">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>{navLink(item.to, item.label, -NAVBAR_HEIGHT)}</li>
          ))}
          <li className="ml-2">{arkaforge()}</li>
        </ul>
      </nav>

      {/* Mobile: top bar with logo (left) + hamburger (right) */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-lg md:hidden">
        <div className="relative flex items-center px-4 py-3">
          <img
            src="/mtrxk2.png"
            alt="Harish Chaurasia logo"
            className="mx-auto h-8 w-auto"
          />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            className="absolute right-2 top-1/2 flex min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-lg text-xl text-[#30c555] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#30c555] focus-visible:outline-offset-2"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {open && (
          <div className="flex flex-col gap-2 border-t border-white/10 px-4 pb-4 pt-3">
            {NAV_ITEMS.map((item) => (
              <React.Fragment key={item.to}>
                {navLink(item.to, item.label, MOBILE_OFFSET)}
              </React.Fragment>
            ))}
            <div className="mt-1">{arkaforge("justify-center")}</div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
