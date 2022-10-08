import { OrbitControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { useControls } from 'leva'

export const Rig = ({ zoom, rate }: { zoom: boolean; rate: number }) => {
  const [vec] = useState(() => new THREE.Vector3())
  // const { position, azimuth, polar } = useControls({
  //   position: [0, 7.1, 15],
  //   azimuth: { value: 0, min: -4, max: Math.PI },
  //   polar: { value: 1.58, min: 0, max: 9 },
  // })
  const controls = useThree((state) => state.controls)

  useFrame((state, delta) => {
    if (zoom) {
      if (rate >= 8) {
        rate -= 0.055
      }
      console.log(rate)
      controls?.setAzimuthalAngle(0)
      controls?.setPolarAngle(1.58)
      // state.camera.position.lerp(vec.set(0, 7, rate), 0.02)
      state.camera.position.lerp(vec.set(0, 7.1, rate), 0.02)
    } else {
      // state.camera.position.lerp(vec.set(-state.mouse.x * 10, 8 + state.mouse.y * 6, 15), 0.02)
      state.camera.position.lerp(vec.set(-state.mouse.x * 4, 8 + state.mouse.y * 7.1, 15), 0.02)
    }
    // state.camera.position.set(position[0], position[1], position[2])

    // controls?.setAzimuthalAngle(azimuth)
    // controls?.setPolarAngle(polar)
  })

  // TODO: Control orbitcontrol props on zoom=true. props include maxPolarAngle={positionCenter}
  // return <OrbitControls makeDefault enablePan={true} enableZoom={false} />
  return (
    <OrbitControls makeDefault enablePan={false} enableZoom={false} target={[0, 5, 5]} maxPolarAngle={Math.PI * 0.6} />
  )
}
