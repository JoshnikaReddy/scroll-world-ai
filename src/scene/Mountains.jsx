import { Box } from "@react-three/drei";

export default function Mountains() {
  return (
    <>
      {/* Mountain 1 */}
      <Box args={[25, 18, 25]} position={[-18, 9, -360]}>
        <meshStandardMaterial color="#6b7280" />
      </Box>

      {/* Mountain 2 */}
      <Box args={[35, 24, 35]} position={[18, 12, -390]}>
        <meshStandardMaterial color="#78716c" />
      </Box>

      {/* Mountain 3 */}
      <Box args={[30, 20, 30]} position={[0, 10, -430]}>
        <meshStandardMaterial color="#52525b" />
      </Box>
    </>
  );
}