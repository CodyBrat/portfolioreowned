import { useState } from 'react'
import LightRays  from './components/LightRays.jsx'
import Dither from './components/Dither.jsx'
import TrailingCursor from './components/cursors/cursor.jsx'
import avatarImage from './assets/avatar.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <TrailingCursor />
      {/* Dither Background */}
      <div className="absolute inset-0 z-0">
        <Dither
          waveColor={[0.3, 0.3, 0.3]}     // grey-ish
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>
      {/* Light Rays Background */}
      {/* <div className="absolute inset-0 z-0">
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
      </div> */}
      {/* Foreground Text */}
      <div className="bg-gif h-screen w-screen flex items-center justify-center">
        <h1 className="text-[16rem] font-bold text-white drop-shadow-lg -mr-40">
          CODY
        </h1>
        <div className="relative flex items-center justify-center">
          <img 
            src={avatarImage} 
            alt="Avatar" 
            className="w-98 h-98 object-contain -mt-10"
          />
        </div>
        <h1 className="text-[16rem] font-bold text-white drop-shadow-lg -ml-37 -mb-15">
          BRAT
        </h1>
      </div>
    </div>
  )
}

export default App
