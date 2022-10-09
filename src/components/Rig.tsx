import { OrbitControls, OrbitControlsProps } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useState, useRef } from 'react'
import * as THREE from 'three'
import { useControls } from 'leva'
import { OrbitControls as OB } from 'three/examples/jsm/controls/OrbitControls'
import { OrbitControls as IOrbitControls } from 'three-stdlib'
export const Rig = ({ zoom, rate }: { zoom: boolean; rate: number }) => {
  const [vec] = useState(() => new THREE.Vector3())
  const orbitControlsRef = useRef<IOrbitControls>(null)

  useFrame((state, delta) => {
    if (zoom) {
      if (rate >= 8) {
        rate -= 0.055
      }

      orbitControlsRef.current?.setAzimuthalAngle?.(0)
      orbitControlsRef.current?.setPolarAngle?.(1.58)
      state.camera.position.lerp(vec.set(0, 8.5, rate), 0.02)
    } else {
      // state.camera.position.lerp(vec.set(-state.mouse.x * 10, 8 + state.mouse.y * 6, 15), 0.02)
      state.camera.position.lerp(vec.set(-state.mouse.x * 8, 8 + state.mouse.y * 7.1, 15), 0.02)
    }
    // state.camera.position.set(position[0], position[1], position[2])

    // controls?.setAzimuthalAngle(azimuth)
    // controls?.setPolarAngle(polar)
  })

  // TODO: Control orbitcontrol props on zoom=true. props include maxPolarAngle={positionCenter}
  // return <OrbitControls makeDefault enablePan={true} enableZoom={false} />
  return (
    // <OrbitControls makeDefault enablePan={false} enableZoom={false} target={[0, 5, 5]} maxPolarAngle={Math.PI * 0.6} />
    <OrbitControls
      ref={orbitControlsRef}
      makeDefault
      enablePan={false}
      enableZoom={false}
      target={[0, 5, 5]}
      maxPolarAngle={Math.PI * 0.6}
    />
  )
}
