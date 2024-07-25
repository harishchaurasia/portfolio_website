// src/app/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Intro from '../components/Intro';
import Grids from '../components/Grids';
import Navs from '../components/Nav';
import Scene from '../components/index';


export default function Home() {
  const [showNav, setShowNav] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowNav(true);
    }, 4200);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowGrid(true);
    }, 4200); 
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowScene(true);
  //   }, 4200); 
  // }, []);

  return (
    <div className="relative">
      <Intro />
      {showNav && <Navs />}
      {showScene && <Scene />}
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