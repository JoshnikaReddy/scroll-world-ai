import Tree from "../components/world/Tree";

export default function Forest() {
  return (
    <>
      {/* Forest starts after the city */}

      <Tree position={[-10, 0, -90]} scale={2} />
      <Tree position={[10, 0, -90]} scale={2} />

      <Tree position={[-15, 0, -105]} scale={2} />
      <Tree position={[15, 0, -105]} scale={2} />

      <Tree position={[-8, 0, -120]} scale={2} />
      <Tree position={[8, 0, -120]} scale={2} />

      <Tree position={[-18, 0, -135]} scale={2} />
      <Tree position={[18, 0, -135]} scale={2} />

      <Tree position={[-12, 0, -150]} scale={2} />
      <Tree position={[12, 0, -150]} scale={2} />
    </>
  );
}