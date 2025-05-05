import { Canvas } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Box(props) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  // Track the cursor position
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setMouse({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Update the rotation and smoothly transition the position based on the mouse position and hover state
  useFrame((state, delta) => {
    const { x, y } = mouse

    // Smoothly interpolate the position
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.05
      meshRef.current.rotation.y += delta * 0.05

      // Apply more pronounced movement when hovering
      if (hovered) {
        meshRef.current.position.x = meshRef.current.position.x + (x * 1.5 - meshRef.current.position.x) * 0.1
        meshRef.current.position.y = meshRef.current.position.y + (-y * 1.5 - meshRef.current.position.y) * 0.1
      } else {
        // Smoothly return to the original position when not hovering
        meshRef.current.position.x = meshRef.current.position.x + (0 - meshRef.current.position.x) * 0.1
        meshRef.current.position.y = meshRef.current.position.y + (0 - meshRef.current.position.y) * 0.1
      }
    }
  })

  return (
    <mesh
      {...props}
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <torusKnotGeometry args={[1, 0.4, 128, 64]} />
      <meshNormalMaterial wireframe />
    </mesh>
  )
}

export default function Scene() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}/>
      </Canvas>
    </div>
  )
}
