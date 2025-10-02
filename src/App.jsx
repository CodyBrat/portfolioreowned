import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gif h-screen w-screen flex items-center justify-center">
        <h1 className="text-[14rem] font-bold text-white drop-shadow-lg">
          PRIYO
        </h1>
        <div className="w-50"></div>
        <h1 className="text-[6rem] font-bold text-white drop-shadow-lg">
          MANIFESTO
        </h1>
      </div>
    </>
  )
}

export default App
