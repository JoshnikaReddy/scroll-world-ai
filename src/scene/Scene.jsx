import { Canvas } from "@react-three/fiber";

import CameraRig from "../components/camera/CameraRig";
import WorldEnvironment from "../components/environment/Environment";
import Lights from "../components/lighting/Lights";
import World from "./World";

export default function Scene() {
  return (
    <Canvas
      shadows
      camera={{
        position: [0, 8, 20],
        fov: 45,
      }}
    >
      <CameraRig />

      <color attach="background" args={["#bfd7ff"]} />

      <fog attach="fog" args={["#bfd7ff", 40, 180]} />

      <WorldEnvironment />

      <Lights />

      <World />
    </Canvas>
  );
}