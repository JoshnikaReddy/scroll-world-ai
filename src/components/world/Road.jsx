export default function Road() {
  return (
    <mesh receiveShadow position={[0, 0.01, -40]}>
      <boxGeometry args={[120, 0.02, 6]}/>
      <meshStandardMaterial color="#3b3b3b" />
    </mesh>
  );
}