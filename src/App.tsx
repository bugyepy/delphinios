import { useState } from 'react'
import './App.css'

function App() {
  
  // ページ固有のTODO
  // TODO: クリックしたら先に進み、ポワワ〜ンとなる波紋上のアニメーションと共に太陽系の初期レンダリングが！！　すごい！！
  // TODO: クリックで画面遷移？ 1ページでやる？ それとも現状の「タイトル+Click here.」表示を関数化して単に切り替えるだけにする？
  // TODO: → 初回レンダリング用の太陽系（パラメータの変更はなし、天文計算の結果だけをCanvasとかWebGLとかで出力する？）を表示する機能
  // TODO: → パラメータの変更UIを実装。初期値の表示、変更。値はリアルタイムにレンダリングされる

  // 開発系TODO
  // TODO: CSS系のライブラリの導入, React Emotionとか？

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
