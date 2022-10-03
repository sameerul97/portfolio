import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import * as THREE from 'three'

export const Rig = ({ zoom, rate }: { zoom: boolean; rate: number }) => {
  const [vec] = useState(() => new THREE.Vector3())

  useFrame((state, delta) => {
    if (zoom) {
      if (rate >= 8) {
        rate -= 0.075
      }
      console.log(rate)

      state.camera.position.lerp(vec.set(0, 7, rate), 0.02)
    } else {
      state.camera.position.lerp(vec.set(-state.mouse.x * 10, 8 + state.mouse.y * 6, 15), 0.02)
    }
  })

  // TODO: Control orbitcontrol props on zoom=true. props include maxPolarAngle={positionCenter}
  return <OrbitControls enablePan={false} enableZoom={false} target={[0, 5, 5]} maxPolarAngle={Math.PI * 0.6} />
}
