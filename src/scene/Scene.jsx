import { Canvas } from "@react-three/fiber";

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 2, 8],
        fov: 45,
      }}
    >
      <color attach="background" args={["#050505"]} />

      <ambientLight intensity={2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#ff7a00" />
      </mesh>
    </Canvas>
  );
}