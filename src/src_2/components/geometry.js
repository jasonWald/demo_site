import { Icosahedron } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from "three"
import { useRef } from 'react'

export default function Geometry() {
    const {height} = useThree((state) => state.viewport)
    const ref = useRef()

    useFrame(() => {
        ref.current.rotation.x = ref.current.rotation.y += 0.005
    })
  return (
    <Icosahedron
    ref={ref}
    args={[1, 0]}
    position={[0, -height * 4.3, 1]}
    material = {new THREE.MeshPhysicalMaterial({
        metalness: 0,  
        roughness: 0,
        transmission: 1,
        thickness: 0.5,
      })} />
  )
}
