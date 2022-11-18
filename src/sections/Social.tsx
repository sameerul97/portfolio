import React, { Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { View, Preload, OrbitControls, PerspectiveCamera, CameraShake, Environment } from '@react-three/drei'
import { useState } from 'react'
import { Mesh } from 'three'

import Section from '../components/Section'
import Github from '../components/Github'
import LinkedIn from '../components/Linkedin'

interface IIconState {
  github: number
  linkedIn: number
}

enum ActionTypes {
  IncreaseGithub = 'INCREASE_GITHUB',
  IncreaseLinkedIn = 'INCREASE_LINKEDIN',
  ResetGithub = 'RESET_GITHUB',
  ResetLinkedIn = 'RESET_LINKEDIN',
}

const initialState: IIconState = { github: 100, linkedIn: 100 }
const incrementBy = 33.3333333333

function reducer(state: IIconState, action: ActionTypes) {
  switch (action) {
    case ActionTypes.IncreaseGithub:
      return { ...state, github: Math.round(state.github - incrementBy) }
    case ActionTypes.IncreaseLinkedIn:
      return { ...state, linkedIn: Math.round(state.linkedIn - incrementBy) }
    case ActionTypes.ResetGithub:
      return { ...state, github: 100 }
    case ActionTypes.ResetLinkedIn:
      return { ...state, linkedIn: 100 }

    default:
      return state
  }
}

export default function Social() {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>
  const view1 = useRef() as React.MutableRefObject<HTMLDivElement>
  const [linkedinHovered, setLinkedinHovered] = useState(false)
  const [githubModels, setGithubModels] = React.useState(0)
  const [linkedInModels, setLinkedInModels] = React.useState(0)
  const [state, dispatch] = React.useReducer(reducer, initialState)

  useEffect(() => {
    // console.log(state)
    if (state.linkedIn === 1) {
      setTimeout(() => dispatch(ActionTypes.ResetLinkedIn), 1000)
    }

    if (state.github === 1) {
      setTimeout(() => dispatch(ActionTypes.ResetGithub), 1000)
    }
  }, [state])
  return (
    <>
      <div ref={ref}>
        <Section id="social" classes="position-relative">
          {/* <h1>Social</h1> */}
          <div className=" my-5">
            <div
              ref={view1}
              className="space translateX"
              style={{ margin: '0.2em', width: 500, height: 500, display: 'inline-block' }}
            />
            <div className="social-button row my-5 justify-content-center">
              <a
                target="_blank"
                onClick={(e) => {
                  if (state.linkedIn !== 34) {
                    e.preventDefault()
                  }
                  dispatch(ActionTypes.IncreaseLinkedIn)
                  setLinkedInModels((linkedInModels) => linkedInModels + 2)
                }}
                href="https://www.linkedin.com/in/sameerul-hameed-3ab72912a/"
                className="mx-4 position-relative overflow-hidden">
                <img src="./linkedin.svg" className="img-fluid position-relative" />
                <div style={{ top: `${state.linkedIn}%` }}></div>
              </a>

              <a
                target="_blank"
                onClick={(e) => {
                  if (state.github !== 34) {
                    e.preventDefault()
                  }
                  dispatch(ActionTypes.IncreaseGithub)
                  setGithubModels((githubModels) => githubModels + 2)
                }}
                href="https://github.com/sameerul97"
                className="mx-4 position-relative overflow-hidden">
                <img src="./github2.svg" className="img-fluid position-relative" />
                <div style={{ top: `${state.github}%` }}></div>
              </a>
            </div>
          </div>
        </Section>
        <Canvas eventSource={ref} className="canvas">
          <Suspense fallback={null}>
            <View track={view1}>
              <Scene />
              {Array.from({ length: githubModels }, (_, i) => {
                return <Github key={i} x={i} y={i} />
              })}

              {Array.from({ length: linkedInModels }, (_, i) => {
                return <LinkedIn key={i} x={i + 10} y={i} />
              })}

              {/* <LinkedIn linkedinHovered={linkedinHovered} /> */}
              <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
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
      <pointLight position={[0, 0, 0]} intensity={1} />
      <pointLight position={[0, 0, 0]} color="blue" />
      <Environment preset="warehouse" />
    </>
  )
}

function useHover() {
  const [hovered, hover] = useState(false)
  return [hovered, { onPointerOver: (e: any) => (e.stopPropagation(), hover(true)), onPointerOut: () => hover(false) }]
}
