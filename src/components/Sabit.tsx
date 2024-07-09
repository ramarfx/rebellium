import { Canvas, extend } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "./Loader";
import { OrbitControls } from "@react-three/drei";
import Celurit from "./models/Celurit";

extend({
  OrbitControls,
  Celurit,
});

const Sabit = () => {
  return (
    <Canvas
      className="h-[350px] w-screen md:h-[300px] md:w-[1000px] border"
      camera={{ position: [0, 0, 82] }}>
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={8} />
        <OrbitControls enablePan={false} />

        <group position={[0, 25, 0]}>
          <Celurit scale={25} position={[-20, 0, 0]} rotation={[0, 0, Math.PI / 6]}  />
          <Celurit scale={25} position={[20, 0, 0]} rotation={[0, Math.PI, Math.PI / 6]}  />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default Sabit;
