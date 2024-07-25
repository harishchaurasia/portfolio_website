import React, { useRef } from 'react';
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';

export default function Model() {
  const { nodes } = useGLTF("/squareInfinity2_0.glb");
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
      <Text font={'/fonts/Aloevera.ttf'} position={[0, 5, -3]} fontSize={2.5} color="white" anchorX="center" anchorY="middle">
        Hi. I'm Harish.
      </Text>
      {/* <Text font={'/fonts/Aloevera.ttf'} position={[0, 2, -3]} fontSize={2.5} color="white" anchorX="center" anchorY="middle">
        A Developer
      </Text>
      <Text font={'/fonts/BruceForeverRegular.ttf'} position={[0, -2, -3]} fontSize={1.5} color="gray" anchorX="center" anchorY="middle">
        I love building shit. 🛠️⚙️
      </Text>
      <Text font={'/fonts/BruceForeverRegular.ttf'} position={[0, -4, -3]} fontSize={1.5} color="gray" anchorX="center" anchorY="middle">
        Eat. Sleep. Build & Repeat.♾️
      </Text> */}
      <mesh ref={torus} {...nodes.Infinity_loop}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}
