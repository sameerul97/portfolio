import * as THREE from 'three'
import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useResource, useThree, useLoader } from 'react-three-fiber'
import { Html, Octahedron, useTextureLoader, useCubeTextureLoader, MeshDistortMaterial, Stats } from 'drei'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { Effects } from '../components/Effects'
import useCheckMobileScreen from '../hooks/useCheckMobileScreen'
// import { Effects } from './_Effect';

function Hero({ material }) {
  const main = useRef()

  useFrame(({ clock, mouse }) => {
    main.current.rotation.z = clock.getElapsedTime()
    main.current.rotation.y = THREE.MathUtils.lerp(main.current.rotation.y, mouse.x * Math.PI, 0.1)
    main.current.rotation.x = THREE.MathUtils.lerp(main.current.rotation.x, mouse.y * Math.PI, 0.1)
  })

  return <Octahedron args={[1, 5]} ref={main} material={material} position={[0, 0, -2]} detail={0} />
}

function Instances({ material }) {
  const [sphereRefs] = useState(() => [])
  const initialPositions = [
    [-4, 2, -2],
    [-5, 12, -2],
    [-1, -1, -13],
    [-6, -4, -10],
    [6, -2, -3],
    [3, 4, -12],
    [5, -2, -23],
    [4, 10, -20],
  ]

  useFrame(() => {
    sphereRefs.forEach((el) => {
      el.position.y += 0.02
      if (el.position.y > 19) el.position.y = -18
      el.rotation.x += 0.06
      el.rotation.y += 0.06
      el.rotation.z += 0.02
    })
  })

  return (
    <>
      <Hero material={material} />
      {initialPositions.map((pos, i) => (
        <Octahedron
          args={[1, 4]}
          position={[pos[0], pos[1], pos[2]]}
          material={material}
          key={i}
          ref={(ref) => (sphereRefs[i] = ref)}
        />
      ))}
    </>
  )
}

const Sameer = () => {
  const gltf = useLoader(GLTFLoader, './sameer_2.glb')

  return <primitive object={gltf.scene} position={[0, -0.75, 0]} />
}

const CameraController = () => {
  const { camera, gl } = useThree()
  const [vec] = useState(() => new THREE.Vector3())
  const isMobileScreen = useCheckMobileScreen()

  useEffect(() => {
    let controls

    if (!isMobileScreen) {
      controls = new OrbitControls(camera, gl.domElement)
      controls.enableZoom = false
    }

    return () => {
      if (!isMobileScreen) {
        controls.dispose()
      }
    }
  }, [camera, gl, isMobileScreen])

  useFrame((state) => {
    // if (!isMobileScreen) {
    state.camera.position.lerp(vec.set(-state.mouse.x * 6, 4 + state.mouse.y * 6, 14), 0.05)
    state.camera.lookAt(0, 0, 0)
    // }
  })

  return null
}

function SceneProps() {
  const bumpMap = useTextureLoader('./bump.jpg')
  const envMap = useCubeTextureLoader(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'], { path: './cube/' })
  const [matRef, material] = useResource()

  return (
    <>
      <MeshDistortMaterial
        ref={matRef}
        envMap={envMap}
        bumpMap={bumpMap}
        color={'#010101'}
        roughness={0.25}
        metalness={1}
        bumpScale={0.005}
        clearcoat={1}
        clearcoatRoughness={1}
        radius={1}
        distort={0.4}
      />
      {material && <Instances material={material} />}
    </>
  )
}

export function Header() {
  return (
    <Canvas
      colorManagement={false}
      gl={{ alpha: false }}
      camera={{ position: [0, 0, 100], fov: 18 }}
      onCreated={({ gl, scene }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping
        gl.outputEncoding = THREE.sRGBEncoding
      }}>
      <color attach="background" args={['#050505']} />
      <fog color="#161616" attach="fog" near={8} far={30} />

      <Stats showPanel={0} className="stats" />
      <CameraController />
      <ambientLight color={'white'} intensity={2} />

      <Suspense fallback={<Html center>Loading.</Html>}>
        <SceneProps />
        <Sameer />
      </Suspense>

      <Effects />
    </Canvas>
  )
}
