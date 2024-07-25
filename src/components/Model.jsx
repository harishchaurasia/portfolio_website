import React, { useRef } from 'react';
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';

export default function Model() {
  const { nodes } = useGLTF("/squareInfinity1.glb");
  const { viewport } = useThree();
  const torus = useRef(null);
  
  useFrame(() => {
    torus.current.rotation.x += 0.001;
  });

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.3, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.09, min: 0, max: 1 },
    backside: { value: false },
  });

  return (
    <group scale={viewport.width / 3.75}>
      <Text font={'/fonts/Aloevera.ttf'} position={[0, 0, -3]} fontSize={1} color="white" anchorX="center" anchorY="middle">
        A Developer
      </Text>
      <mesh ref={torus} {...nodes.Infinity_loop}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}