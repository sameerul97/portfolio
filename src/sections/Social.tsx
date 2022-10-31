import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { View, Preload, OrbitControls, PerspectiveCamera, CameraShake, Environment } from '@react-three/drei'
import { useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import Section from '../components/Section'
import { Mesh } from 'three'
import Github from '../components/Github'
import LinkedIn from 'src/components/Linkedin'

export default function Social() {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>
  //   const view1 = useRef<HTMLDivElement>()
  const view1 = useRef() as React.MutableRefObject<HTMLDivElement>
  const [githubHovered, setGithubHovered] = useState(false)
  const [linkedinHovered, setLinkedinHovered] = useState(false)
  const [boxes, setBoxes] = React.useState(0)

  return (
    <>
      <div ref={ref}>
        <Section id="social" classes="position-relative">
          {/* <h1>Social</h1> */}
          <div className=" my-5">
            <div className="row my-5">
              {/* <div className="col m-auto text-center">
            <img src="./linkedin.svg" className="img-fluid " />
          </div>
          <div className="col m-auto text-center">
            <img src="./github.svg" className="img-fluid " />
          </div> */}
              <div
                ref={view1}
                className="space translateX"
                style={{ margin: '0.2em', width: 500, height: 500, display: 'inline-block' }}
              />

              <div className="col-sm-4 offset-sm-3">
                <div className="text-center text-sm-right">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/sameerul-hameed-3ab72912a/"
                    onMouseEnter={() => setLinkedinHovered(true)}
                    onMouseLeave={() => setLinkedinHovered(false)}
                    className="mr-4">
                    <img src="./linkedin.svg" className="img-fluid " />
                  </a>
                  <button
                    type="button"
                    onClick={() => setBoxes((box) => box + 3)}
                    // onMouseEnter={() => setGithubHovered(true)}
                    // onMouseLeave={() => setGithubHovered(false)}
                    className="ml-4 btn btn-light bg-transparent border-0">
                    <img src="./github.svg" className="img-fluid " />
                  </button>
                  {/* <a
                    target="_blank"
                    href="https://github.com/sameerul97"
                    onMouseEnter={() => setGithubHovered(true)}
                    onMouseLeave={() => setGithubHovered(false)}
                    className="ml-4">
                    <img src="./github.svg" className="img-fluid " />
                  </a> */}
                  {/* <a target="_blank" href="https://en-gb.facebook.com/WaltDisneyStudiosUK" className="icon_color">
                        <i className="fab fa-facebook-f fa-2x m-2"></i>
                    </a> */}
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Canvas eventSource={ref} className="canvas">
          <Suspense fallback={null}>
            <View track={view1}>
              {/* <color attach="background" args={['lightpink']} /> */}
              <Scene />
              {/* <TransformControls> */}
              {/* <Soda scale={6} position={[0, -1.6, 0]} /> */}
              {/* <Github githubHovered={githubHovered} /> */}
              {/* {githubHovered && */}
              {Array.from({ length: boxes }, (_, i) => {
                return <Github key={i} x={i} y={i} />
              })}
              {/* } */}
              <LinkedIn linkedinHovered={linkedinHovered} />
              {/* </TransformControls> */}
              <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
              {/* <OrbitControls makeDefault /> */}

              <ambientLight intensity={1} />
              <pointLight position={[20, 30, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} color="blue" />
              <Environment preset="studio" />
            </View>
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[20, 30, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="blue" />
      <Environment preset="dawn" />
    </>
  )
}

function useHover() {
  const [hovered, hover] = useState(false)
  return [hovered, { onPointerOver: (e: any) => (e.stopPropagation(), hover(true)), onPointerOut: () => hover(false) }]
}

function Soda(props: any) {
  const ref = useRef<Mesh>()
  const [hovered, spread] = useHover()
  const { nodes, materials }: any = useGLTF('./sameer_2.glb')
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta
    }
  })
  return (
    <group ref={ref} {...props} {...spread} dispose={null}>
      <mesh geometry={nodes.Mesh_sodaBottle.geometry}>
        <meshStandardMaterial color={hovered ? 'red' : 'green'} roughness={0} metalness={0.8} envMapIntensity={2} />
      </mesh>
      <mesh geometry={nodes.Mesh_sodaBottle_1.geometry} material={materials.red} material-envMapIntensity={0} />
    </group>
  )
}
