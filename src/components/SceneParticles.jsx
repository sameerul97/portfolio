import { Sparkles } from '@react-three/drei'
import React from 'react'

export const SceneParticles = React.memo((props) => {
  console.log('Particles', props);
  
  return (
    <>
      <object3D position={[1, 8, 0]}>
        <Sparkles count={50} scale={[5, 3.5, 2.5]} color={'purple'} size={6} speed={0.2} noise={0.1} />
      </object3D>

      <object3D position={[0, 6, 0]}>
        <Sparkles count={50} scale={[12, 2, 12]} color={'#ffe6a8'} size={10} speed={0.2} noise={0.2} />
      </object3D>

      <object3D position={[0, 5, 10]}>
        <Sparkles count={50} scale={[4, 4, 4]} color={'purple'} size={6} speed={0.2} noise={0.2} />
      </object3D>
      {/* 
      <object3D position={[0, 4, 15]}>
        <Sparkles count={50} scale={[5, 5, 5]} color={"#ffe6a8"} size={6} speed={0.2} noise={0.2}/>
      </object3D> */}
    </>
  )
})
