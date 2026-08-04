export default function Ground() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeGeometry args={[1000, 1000, 100, 100]} />

      <meshStandardMaterial
        color="#4b5d3a"
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}