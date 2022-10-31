import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Mesh } from 'three'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Curve: THREE.Mesh
  }
  materials: {
    ['SVGMat.001']: THREE.MeshStandardMaterial
  }
}

export default function LinkedIn({ linkedinHovered }: { linkedinHovered: boolean }) {
  const ref = useRef<Mesh>(null!)
  const { nodes, materials } = useGLTF('/linkedin.glb') as unknown as GLTFResult

  useFrame((state, delta) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime()
      ref.current.rotation.z += delta / 4
      ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, linkedinHovered ? 0 : 2, 0.1)
      ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, linkedinHovered ? 0.003 : -1, 0.1)
      ref.current.position.y = THREE.MathUtils.lerp(
        ref.current.position.y,
        true ? (-0.5 + Math.sin(t)) / 12 : -2.3,
        0.1
      )
    }
  })
  return (
    <group position={[-1, 0, 0]} scale={16} dispose={null}>
      <mesh
        ref={ref}
        rotation={[Math.PI / 2, 0, 0]}
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials['SVGMat.001']}
        scale={12}>
        <meshPhysicalMaterial color="purple" metalness={0.1} transmission={1} thickness={1} roughness={0.1} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/linkedin.glb')
