import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'

const Celurit = (props: GroupProps) => {
  const { nodes, materials } = useGLTF('/3D/celurit.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
        position={[0, 0, 0]}
          geometry={nodes.Object_4.geometry}
          material={materials.Material}
          scale={0.053}
        />
      </group>
    </group>
  )
}
useGLTF.preload('/3D/celurit.glb')

export default Celurit;
