// src/components/Index.tsx
"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "./Model";

export default function Index() {
  return (
    <Canvas
      style={{ background: "transparent", width: "100%", height: "100%" }}
      gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 100], fov: 75 }}
    >
      <Model />
      <directionalLight intensity={2} position={[0, 2, 3]} />
      <Environment preset="sunset" />
    </Canvas>
  );
}
