import Ground from "../components/world/Ground";
import Tree from "../components/world/Tree";
import Road from "../components/world/Road";
import Building from "../components/world/Building";

export default function World() {
  return (
    <>
      <Ground />

      <Road />

      {/* Trees */}
     <Tree position={[-12,0,-5]} scale={2} />
<Tree position={[12,0,-5]} scale={2} />

<Tree position={[-12,0,-18]} scale={2} />
<Tree position={[12,0,-18]} scale={2} />

<Tree position={[-12,0,-32]} scale={2} />
<Tree position={[12,0,-32]} scale={2} />

<Tree position={[-12,0,-45]} scale={2} />
<Tree position={[12,0,-45]} scale={2} />

   <Building
  position={[8, 0, -8]}
  rotation={[0, Math.PI / 2, 0]}
  scale={0.8}
/>

<Building
  position={[-8, 0, -8]}
  rotation={[0, -Math.PI / 2, 0]}
  scale={0.8}
/>

<Building
  position={[8, 0, -28]}
  rotation={[0, Math.PI / 2, 0]}
  scale={0.8}
/>

<Building
  position={[-8, 0, -28]}
  rotation={[0, -Math.PI / 2, 0]}
  scale={0.8}
/>
    </>
  );
}