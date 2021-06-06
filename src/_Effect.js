import React from 'react'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from 'react-postprocessing'

// ignore
// Uses https://vanruesc.github.io/postprocessing/public/docs/
// Post processing broken on mobile (renders blank screen)
export function Effects() {
  return (
    <EffectComposer>
      <DepthOfField focusDistance={0} focalLength={0} bokehScale={0.5} height={680} />
      <Bloom intensity={0.85} luminanceThreshold={0.05} luminanceSmoothing={0.05} height={1000} opacity={2} />
      <Noise opacity={0.045} />
      <Vignette eskil={false} offset={0.1} darkness={1.1} />
    </EffectComposer>
  )
}
