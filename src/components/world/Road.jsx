export default function Road() {
  return (
    <mesh receiveShadow position={[0, 0.01, 0]}>
      <boxGeometry args={[40, 0.02, 6]} />
      <meshStandardMaterial color="#3b3b3b" />
    </mesh>
  );
}