
import { OrbitControls } from '@react-three/drei'

import sphereVertexShader from '../shaders/sphere/vertexShader.glsl'
import sphereFragmentShader from '../shaders/sphere/fragmentShader.glsl'

import wobbleVertexShader from '../shaders/wobble/vertexShader.glsl'
import wobbleFragmentShader from '../shaders/wobble/fragmentShader.glsl'


import CustomShaderMaterial from 'three-custom-shader-material'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'



export default function Scene() {
  const materialRef = useRef()
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
    }
  })


  return (
    <>
    {/* Sphere */}
    <mesh position = {[0,0,0]}>
      <sphereGeometry 
      args = {[1,32,32]}
      />
      <CustomShaderMaterial
      baseMaterial = {THREE.MeshPhysicalMaterial}
      vertexShader={wobbleVertexShader}
      fragmentShader={wobbleFragmentShader}
      
      metalness={0}
      roughness={0.5}
      ior={1.5}
      thickness={1.5}
      transparent = {true}
      color={new THREE.Color("#ffffff")}
      />

    </mesh>

    <OrbitControls/>
    </>
  )
}
