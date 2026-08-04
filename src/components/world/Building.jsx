import { useGLTF } from "@react-three/drei";

export default function Building(props) {
  const { scene } = useGLTF("/models/building-skyscraper-a.glb");

  return (
    <primitive
      object={scene.clone()}
      scale={2}
      {...props}
    />
  );
}

useGLTF.preload("/models/building-skyscraper-a.glb");