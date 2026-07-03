import React from "react";

/**
 * Dark background: two soft green/teal glows, a static blueprint grid (fixed to
 * the viewport, so it never scrolls with the content), and a vignette for depth.
 */
const Background: React.FC = () => {
  return (
    <div className="eng-bg" aria-hidden="true">
      <div className="eng-glow eng-glow--1" />
      <div className="eng-glow eng-glow--2" />
      <div className="eng-grid eng-grid--fine" />
      <div className="eng-grid eng-grid--coarse" />
      <div className="eng-vignette" />
    </div>
  );
};

export default Background;
