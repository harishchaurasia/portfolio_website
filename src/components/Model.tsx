import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface GLTFResult {
  nodes: {
    Infinity_loop: THREE.Mesh;
  };
  materials: Record<string, THREE.Material>;
}

const MATERIAL_PROPS = {
  thickness: 0.2,
  roughness: 0,
  transmission: 1,
  ior: 1.3,
  chromaticAberration: 0.04,
  backside: false,
} as const;

export default function Model() {
  const { nodes } = useGLTF("/squareInfinity1_75.glb") as unknown as GLTFResult;
  const { viewport } = useThree();
  const torus = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (torus.current) {
      torus.current.rotation.x += 0.001;
    }
  });

  const s = Math.min(viewport.width, viewport.height) / 2.5;

  return (
    <group position={[0, -0.4 * s, 0]} scale={s}>
      <Text
        font={"/fonts/recharge_bd.otf"}
        position={[0, 0, 0]}
        fontSize={0.18}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Hello World.
      </Text>
      <mesh ref={torus} geometry={nodes.Infinity_loop.geometry}>
        <MeshTransmissionMaterial {...MATERIAL_PROPS} />
      </mesh>
    </group>
  );
}
