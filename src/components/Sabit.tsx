import { Canvas, extend } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import Loader from "./Loader";
import { Environment, OrbitControls } from "@react-three/drei";
import Celurit from "./models/Celurit";
import { useRotateAnimation } from "../func/rotateAnimation";
import { Group } from "three";

extend({
  OrbitControls,
  Celurit,
});

const Scene = () => {
  const celuritRef = useRef<Group>(null!);
  useRotateAnimation(celuritRef);

  return (
    <>
      <OrbitControls enablePan={false} enableZoom={false} />
      <ambientLight intensity={8} />

      <group position={[0, 20, 0]} ref={celuritRef}>
        <directionalLight intensity={5} position={[30, 50, 30]} />
        <directionalLight intensity={5} position={[-30, -15, -30]} />

        <Celurit
          scale={25}
          position={[-20, 0, 0]}
          rotation={[0, 0, Math.PI / 6]}
        />
        <Celurit
          scale={25}
          position={[20, 0, 0]}
          rotation={[0, Math.PI, Math.PI / 6]}
        />
      </group>
    </>
  );
};

const Sabit = () => {
  return (
    <Canvas
      className="h-[350px] w-screen md:h-[300px] md:w-[500px]"
      camera={{ position: [0, 0, 82] }}>
      <Suspense fallback={<Loader />}>
        <Scene />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
};

export default Sabit;
