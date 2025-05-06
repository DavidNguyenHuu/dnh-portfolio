import './App.css'
import Letterbox from './components/Letterbox'
import Scene from './canvas/Scene'
import { Canvas } from '@react-three/fiber'


function App() {


  return (
    
    <div style={{width: '100vw', height:'100vh'}}>
      {/* Keep Letterbox for UI elements only */}
      <Letterbox />
      <Canvas
        style = {{background:'rgb(0,0,0,1)'}}
        gl= {{alpha:true}}
        camera={{position:[0,0,5],fov: 60}}
      >
        <ambientLight intensity={0.5}/>
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Scene />
      </Canvas>
   
    </div>
  )
}

export default App
