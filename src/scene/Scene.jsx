import { Canvas } from "@react-three/fiber";
import Lights from "../components/lighting/Lights";
import Ground from "../components/world/Ground";

export default function Scene() {
  return (
    <Canvas
      shadows
      camera={{
        position: [0, 3, 8],
        fov: 45,
      }}
    >
      <color attach="background" args={["#050505"]} />

      <Lights />

      <Ground />

      <mesh position={[0, 1, 0]} castShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#ff7a00" />
      </mesh>
    </Canvas>
  );
}