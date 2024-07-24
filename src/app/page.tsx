// src/app/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Intro from '../components/Intro';
import Grids from '../components/Grids';
import Navs from '../components/Nav';


export default function Home() {
  const [showBugs, setShowBugs] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showGrid, setShowGrid] = useState(false);

  // Timeline for showing the nav bar
  useEffect(() => {
    setTimeout(() => {
      setShowNav(true);
    }, 4200);
  }, []);

  // Timeline for showing the grids
  useEffect(() => {
    setTimeout(() => {
      setShowGrid(true);
    }, 4200); 
  }, []);

  return (
    <div className="relative">
      <Intro />
      {showNav && <Navs />}

      <section id="home" className="content">
      {showGrid && <Grids />}
      </section>
      <section id="about" className="content">
      </section>
      <section id="projects" className="content">
      </section>
      <section id="contact" className="content">
      </section>
    </div>
  );
}