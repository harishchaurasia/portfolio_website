// src/components/Index.jsx
'use client';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Environment } from '@react-three/drei';

export default function Index() {
  return (
    <Canvas
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 100], fov: 75 }}
    >
      <Model />
      <directionalLight intensity={2} position={[0, 2, 3]} />
      <Environment preset="forest" />
    </Canvas>
  );
}
