// src/components/Index.tsx
'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Environment } from '@react-three/drei';
import { Leva } from 'leva';

export default function Index() {
  return (
    <>
      <Canvas
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 100], fov: 75 }}
      >
        <Model />
        <directionalLight intensity={2} position={[0, 2, 3]} />
        <Environment preset="sunset" />
      </Canvas>
      <Leva hidden={true} /> {/* Hides the GUI */}
    </>
  );
}
