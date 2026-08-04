import { useThree } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";

export default function CameraRig() {
  const { camera } = useThree();

  useFrame(() => {
    camera.lookAt(0, 1, 0);
  });

  return null;
}