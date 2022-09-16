import { Image, Scroll, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React from 'react'
import { useRef } from 'react'


export default function Images() {
    const {width, height} = useThree((state) => state.viewport)
    const data = useScroll()
    const media = useRef()
    useFrame(() => {
                media.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
                media.current.children[1].material.zoom = 1 + data.range(1 / 6, 1 / 3) / 2
                media.current.children[5].material.zoom = 1 + data.range(1.8 / 4, 1 / 3) / 2
            })
  return (
    <group ref={media}>
    
        <Image position={[-3, 0, 0]} scale={[width, height, 1]} url="./image1.jpg"  />
        <Image position={[0, -height * 1.8, 0.5]} scale={[width / 1.2, height / 1.3, 1]} url="./image2.png" />
        <Image position={[-4.2, -height * 3.2, 0]} scale={[width / 3.5, height / 1.3, 1]} url="./image3.jpg" />
        <Image position={[0, -height * 3.2, 1]} scale={[width / 3.5, height / 1.3, 1]} url="./Frame9.png" />
        <Image position={[1, -height * 3.2, 3]} scale={[width / 10, height / 4, 1]} url="./image5.jpg" />
        <Image position={[2, -height * 4.55, 0]} scale={[width / 1.6, height, 1]} url="./image7.png"  />
    
    </group>
  )
}
