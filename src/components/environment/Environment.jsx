import { Environment, Sky } from "@react-three/drei";

export default function WorldEnvironment() {
  return (
    <>
      <Sky
        distance={450000}
        sunPosition={[10, 10, 5]}
      />

      <Environment preset="sunset" />
    </>
  );
}