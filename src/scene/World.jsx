import Ground from "../components/world/Ground";

import City from "./City";
import Forest from "./Forest";
import River from "./River";
import Mountains from "./Mountains";

export default function World() {
  return (
    <>
      <Ground />

      <City />

      <Forest />

      <River />

      <Mountains />
    </>
  );
}