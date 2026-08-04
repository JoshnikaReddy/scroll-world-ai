import { Plane } from "@react-three/drei";

export default function River() {
  return (
    <>
      {/* Water */}

      <Plane
        args={[40, 60]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.02, -220]}
      >
        <meshStandardMaterial
          color="#4FC3F7"
          transparent
          opacity={0.8}
        />
      </Plane>
    </>
  );
}