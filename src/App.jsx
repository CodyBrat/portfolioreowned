import { useState } from 'react'
import LightRays  from './components/LightRays.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Light Rays Background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#b6b6b6ff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>
      {/* Foreground Text */}
      <div className="bg-gif h-screen w-screen flex items-center justify-center">
        <h1 className="text-[14rem] font-bold text-white drop-shadow-lg">
           CODY 
        </h1>
         <div className="w-60"></div>
        <h1 className="text-[14rem] font-bold text-white drop-shadow-lg">
          BRAT
          </h1>
      </div>
    </div>
  )
}

export default App
