import { Sky, PerspectiveCamera, Environment, Float, Stats } from '@react-three/drei'
import {
  EffectComposer,
  HueSaturation,
  ChromaticAberration,
  GodRays,
  DepthOfField,
  BrightnessContrast,
  Bloom,
} from '@react-three/postprocessing'
import { BlendFunction, Resizer, KernelSize } from 'postprocessing'

import React, { Suspense, useState, useRef, useMemo } from 'react'

import { Water } from 'three-stdlib'
import { useThree, useLoader, useFrame, extend } from '@react-three/fiber'

import * as THREE from 'three'
import { Color, CylinderGeometry, Mesh, MeshBasicMaterial } from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { SceneParticles } from './SceneParticles'

extend({ Water })

let lightColor = new Color(1, 0.2, 0.1)
let mesh = new Mesh(
  new CylinderGeometry(0.3, 0.3, 0.2, 20),
  new MeshBasicMaterial({
    color: lightColor,
    transparent: true,
    opacity: 1,
  })
)
mesh.rotation.x = Math.PI * 0.5
mesh.position.set(1.17, 10.5, -30.1)
mesh.scale.set(2.5, 2, 2)

export function SceneContainer({zoom}) {
  return (
    <Suspense fallback={null}>
      <Environment background={'only'} files={'/textures/bg.hdr'} />
      <Environment background={false} files={'/textures/envmap.hdr'} />
      {/* <Sky /> */}
      {/* <PerspectiveCamera
        makeDefault
        fov={50}
        position={[-1.75, 10.85, 20.35]}
      /> */}
      <Stats />
      <Float speed={0.5} rotationIntensity={0.6} floatIntensity={0.6}>
        <primitive object={mesh} />
        <spotLight
          penumbra={1}
          distance={500}
          angle={60.65}
          attenuation={1}
          anglePower={3}
          intensity={0.3}
          color={lightColor}
          position={[1.19, 10.85, -4.45]}
          target-position={[0, 0, -1]}
        />
        <SceneParticles />
      </Float>
      {/* <Sky
        azimuth={0.1}
        turbidity={10}
        rayleigh={1.05}
        inclination={0.5}
        distance={450}
      /> */}
      {/* <FloatingRocks /> */}
      <Sameer />
      <Ocean zoom={zoom} />
      <EffectComposer stencilBuffer={true}>
        <DepthOfField focusDistance={0.012} focalLength={0.045} bokehScale={7} />
        {/* <HueSaturation hue={0} saturation={-0.15} />
        <BrightnessContrast brightness={0.0} contrast={0.035} />
        <ChromaticAberration
          radialModulation={true}
          offset={[0.00175, 0.00175]}
        /> */}
        <GodRays
          sun={mesh}
          blendFunction={BlendFunction.Screen}
          samples={40}
          density={0.97}
          decay={0.97}
          weight={0.6}
          exposure={0.3}
          clampMax={1}
          width={Resizer.AUTO_SIZE}
          height={Resizer.AUTO_SIZE}
          kernelSize={KernelSize.SMALL}
          blur={true}
        />
        {/* <Bloom
          intensity={1.0} // The bloom intensity.
          blurPass={undefined} // A blur pass.
          width={Resizer.AUTO_SIZE} // render width
          height={Resizer.AUTO_SIZE} // render height
          kernelSize={KernelSize.LARGE} // blur kernel size
          luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        /> */}
      </EffectComposer>
    </Suspense>
  )
}

function Ocean({ zoom }) {
  const ref = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg')
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping

  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding,
    }),
    [waterNormals]
  )
  // useFrame((state, delta) => {
  //   ref.current.material.uniforms.time.value += delta
  // })
  useFrame((state, delta) => (ref.current.material.uniforms.time.value += Math.cos(delta) / (zoom ? 150 : 45)))

  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}

const Sameer = () => {
  const gltf = useLoader(GLTFLoader, './sameer_2.glb')

  return <primitive object={gltf.scene} position={[0, 5.75, 0]} scale={2} />
}
