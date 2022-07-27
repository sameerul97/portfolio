// import React, { useEffect, useRef } from 'react'
// import { useThree, useFrame, extend } from '@react-three/fiber'
// // import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
// // import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
// // import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
// // import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'

// // extend({ EffectComposer, ShaderPass, RenderPass, UnrealBloomPass })

// export function Effects() {
//   const composer = useRef()
//   const bloomPass = useRef()

//   const { scene, gl, size, camera } = useThree()

//   useEffect(() => void composer.current.setSize(size.width, size.height), [size])

//   useFrame(() => {
//     composer.current.render()
//   }, 1)
//   return (
//     <effectComposer ref={composer} args={[gl]}>
//       <renderPass attachArray="passes" scene={scene} camera={camera} />
//       <unrealBloomPass attachArray="passes" ref={bloomPass} args={[0.2, 1.017, 0.021]} />
//     </effectComposer>
//   )
// }

import React from 'react'
import { EffectComposer, DepthOfField, Noise, Vignette } from '@react-three/postprocessing'
import { Bloom } from '@react-three/postprocessing'

export function Effects() {
  return (
    <EffectComposer>
      {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
      <Bloom
        intensity={2.0} // The bloom intensity.
        width={1645} // render width
        height={9000} // render height
        kernelSize={5} // blur kernel size
        luminanceThreshold={1.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
        luminanceSmoothing={0.0025} // smoothness of the luminance threshold. Range is [0, 1]
      />
      {/* <Noise opacity={0.02} /> */}
      {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
    </EffectComposer>
  )
}
