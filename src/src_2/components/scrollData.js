import { ScrollControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

export default function ScrollData({children}) {
  return (
    <Suspense fallback={null}>
        <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
         <ScrollControls
         pages={7.4}
         damping={4}>
         {children}
         </ScrollControls>
        </Canvas>
    </Suspense>
  )
}
