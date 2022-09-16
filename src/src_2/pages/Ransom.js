import { Scroll } from '@react-three/drei'
import React from 'react'
import Geometry from '../components/geometry'
import Html from '../components/html'
import Images from '../components/images'
import ScrollData from '../components/scrollData'

export default function Ransom() {
  return (
    <ScrollData>
      <Scroll>
      <Images />
      <Geometry />
      </Scroll>
      <Html />
    </ScrollData>
  )
}
