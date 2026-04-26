import React, { useRef } from 'react';
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import * as THREE from 'three';

interface GLTFResult {
  nodes: {
    Infinity_loop: THREE.Mesh;
  };
  materials: Record<string, THREE.Material>;
}

export default function Model() {
  const { nodes } = useGLTF("/squareInfinity1_75.glb") as unknown as GLTFResult;
  const { viewport } = useThree();
  const torus = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (torus.current) {
      torus.current.rotation.x += 0.001;
    }
  });

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.3, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.04, min: 0, max: 1 },
    backside: { value: false },
  });

  const s = Math.min(viewport.width, viewport.height) / 2.5;
  
  return (
    <group position={[0, -0.40 * s, 0]} scale={s}>
      <Text 
        font={'/fonts/recharge_bd.otf'} 
        position={[0, 0, 0]} 
        fontSize={0.18} 
        color="white" 
        anchorX="center" 
        anchorY="middle"
      >
        Hello World.
      </Text>
      <mesh ref={torus} geometry={nodes.Infinity_loop.geometry}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}
