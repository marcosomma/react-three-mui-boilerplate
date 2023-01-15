import { Suspense, ReactElement, useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, OrbitControls } from "@react-three/drei";
import Loader from "../../components/loader";
import Plane from "../../components/plane";
import Lights from "../../components/lights";
import { StateContext } from "../../context/providers/State";

function CanvasContainer(): ReactElement {
  const { state } = useContext(StateContext);
  console.log('state', state)
  return (
    <Canvas shadows camera={{ position: [50, 20, 50] }}>
      <OrbitControls maxPolarAngle={Math.PI / 2 - 0.1} maxDistance={500} />
      <Suspense fallback={<Loader />}>
        <Preload all />
        <Lights />
        <Plane />
      </Suspense>
    </Canvas>
  );
}

export default CanvasContainer;
