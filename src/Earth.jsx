import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Earth from "../public/Earth";

import "../src/styles/can.css";

function Eartha() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Canvas className="bg-blue-gray-300 w-[20%] h-[100vw]">
        <ambientLight intensity={1} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default Eartha;
