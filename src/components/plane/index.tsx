import { ReactElement} from 'react'
import { Euler, Vector3, Color } from "three";

interface planeProps {
    rotation?: Euler;
    position?: Vector3;
    color?: Color;
  }
function Plane(props: planeProps): ReactElement {
  return (
    <mesh receiveShadow  rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[1000, 1000]}/>
      <meshStandardMaterial color="#9a9a85" />
    </mesh>
  )
}

export default Plane;