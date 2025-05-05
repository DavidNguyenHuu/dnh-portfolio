import './App.css'
import Letterbox from './components/Letterbox'
import Scene from './canvas/Scene'

function App() {
  return (
      <div className="relative min-h-screen">
        <Letterbox/>
        <Scene/>
      </div>
  )
}
export default App
