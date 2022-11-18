import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Mesh } from 'three'
import { useFrame } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'

type GLTFResult = GLTF & {
  nodes: {
    Curve: THREE.Mesh
  }
  materials: {
    ['SVGMat.001']: THREE.MeshStandardMaterial
  }
}

// export default function Github({ githubHovered }: { githubHovered: boolean }) {
//   const ref = useRef<Mesh>(null!)
//   const { nodes, materials } = useGLTF('/github.glb') as unknown as GLTFResult

//   useFrame((state, delta) => {
//     if (ref.current) {
//       const t = state.clock.getElapsedTime()
//       ref.current.rotation.z += delta / 4
//       ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, githubHovered ? 0 : 10, 0.1)
//       ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, githubHovered ? -0.003 : 1, 0.1)
//       ref.current.position.y = THREE.MathUtils.lerp(
//         ref.current.position.y,
//         true ? (-0.5 + Math.sin(t)) / 12 : -4.3,
//         0.1
//       )
//     }
//   })

//   return (
//     <group scale={16} dispose={null}>
//       <mesh
//         ref={ref}
//         rotation={[Math.PI / 2, 0, 0]}
//         castShadow
//         receiveShadow
//         geometry={nodes.Curve.geometry}
//         material={materials.SVGMat}
//         scale={12}>
//         <meshPhysicalMaterial color="purple" metalness={0.1} transmission={1} thickness={1} roughness={0.1} />
//       </mesh>
//     </group>
//   )
// }

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export default function LinkedIn({ x, y }: { x: number; y: number }) {
  const ref = useRef<Mesh>(null!)
  const { nodes, materials } = useGLTF('/linkedin.glb') as unknown as GLTFResult

  const { position, scale, rotation, opacity } = useSpring({
    to: {
      position: [getRandomArbitrary(-2, 2), getRandomArbitrary(2.5, 4), 2],
      scale: getRandomArbitrary(90, 120),
      rotation: [Math.PI / 2, 0, 3],
      opacity: 0.3,
    },
    from: {
      position: [getRandomArbitrary(-2, 0.5), getRandomArbitrary(-4, -2), 0],
      rotation: [Math.PI / 2, 0, 0],
      scale: getRandomArbitrary(120, 200),
      opacity: 1,
    },
    config: { duration: 4000, mass: 5, tension: 500, friction: 150 },
  })

  return (
    <animated.mesh
      // @ts-ignore
      position={position}
      scale={scale}
      // @ts-ignore
      rotation={rotation}
      ref={ref}
      // rotation={[Math.PI / 2, 0, 0]}
      castShadow
      receiveShadow
      geometry={nodes.Curve.geometry}>
      {/* <boxBufferGeometry attach="geometry" args={[1, 1, 1]} /> */}
      {/* <animated.meshStandardMaterial color="white" opacity={opacity} /> */}

      {/* @ts-ignore */}
      <animated.meshPhysicalMaterial
        color={'#5effff'}
        // @ts-ignore
        shininess={1}
        metalness={1}
        transmission={1}
        thickness={3}
        roughness={0.4}
      />
      {/* <animated.meshPhongMaterial
        color={'white'}
        shininess={1}
        metalness={1}
        roughness={0.1}
        transparent={true}
        // opacity={opacity}
      /> */}
    </animated.mesh>
  )
}

useGLTF.preload('/linkedin.glb')
