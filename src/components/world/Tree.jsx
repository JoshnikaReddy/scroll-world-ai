import { useGLTF } from "@react-three/drei";

export default function Tree(props) {
  const { scene } = useGLTF("/models/tree_thin.glb");

  return (
    <primitive
      object={scene.clone()}
      scale={2}
      position={[0, 0, 0]}
      {...props}
    />
  );
}

useGLTF.preload("/models/tree_thin.glb");