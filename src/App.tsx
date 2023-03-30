import { useState } from 'react'
import './App.css'

function App() {
  const [isInitialView, setIsInitialView] = useState(false)

  const setAppView = () => {
    setIsInitialView(true)
  }

  // 初回表示
  const initialView = () => {
    return (
      <div
        className="App"
        onClick={() => {
          setAppView()
        }}
      >
        <h1 className="title">DELPHINIOS - Solar System Simulator</h1>
        <p className="guide">Click here.</p>
      </div>
    )
  }

  // メイン画面
  const appView = () => {
    return (
      <div className="App">
        <p>AppView</p>
      </div>
    )
  }

  const view = () => {
    if (!isInitialView) {
      return initialView()
    }

    return appView()
  }

  return view()
}

export default App
