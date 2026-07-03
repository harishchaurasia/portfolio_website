import React from "react";

/**
 * Clean dark background: two soft green/teal glows plus a vignette for depth.
 * No grid or schematic lines - the only "line" on the page is the faded rule
 * the divider gears rest on.
 */
const Background: React.FC = () => {
  return (
    <div className="eng-bg" aria-hidden="true">
      <div className="eng-glow eng-glow--1" />
      <div className="eng-glow eng-glow--2" />
      <div className="eng-vignette" />
    </div>
  );
};

export default Background;
