import { useFrame, useThree } from "@react-three/fiber";

export default function CameraController() {
  const { camera } = useThree();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Fly straight down the road
    camera.position.set(0, 5, 20 - t * 2);

    // Always look forward
    camera.lookAt(0, 2, -100);
  });

  return null;
}