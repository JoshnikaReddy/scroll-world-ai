import { useFrame, useThree } from "@react-three/fiber";
import useScrollProgress from "../../hooks/useScrollProgress";
import { cameraPoints } from "../../utils/cameraPath";
import * as THREE from "three";

export default function CameraController() {
  const { camera } = useThree();
  const progress = useScrollProgress();

  const curve = new THREE.CatmullRomCurve3(cameraPoints);

  useFrame(() => {
    const point = curve.getPoint(progress);

    camera.position.lerp(point, 0.08);

    const lookPoint = curve.getPoint(Math.min(progress + 0.02, 1));

    camera.lookAt(lookPoint);
  });

  return null;
}