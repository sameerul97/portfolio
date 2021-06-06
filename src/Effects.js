import React, { useEffect, useRef } from 'react'
import { useThree, useFrame, extend } from 'react-three-fiber'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'

extend({ EffectComposer, ShaderPass, RenderPass, UnrealBloomPass })

export function Effects() {
  const composer = useRef()
  const bloomPass = useRef()

  const { scene, gl, size, camera } = useThree()

  useEffect(() => void composer.current.setSize(size.width, size.height), [size])

  useFrame(() => {
    composer.current.render()
  }, 1)
  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      <unrealBloomPass attachArray="passes" ref={bloomPass} args={[0.2, 1.017, 0.021]} />
    </effectComposer>
  )
}
