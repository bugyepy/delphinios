import { useState } from 'react'
import './App.css'

function App() {
  
  // 初回表示
  const initialView = () => {
    return (
      <div className="App" onClick={() => console.log("click!!!!")}>
        <h1>DELPHINIOS - Solar System Simulator</h1>
        <p className='guide'>Click here.</p>
      </div>
    )
  }

  return initialView()
}

export default App
