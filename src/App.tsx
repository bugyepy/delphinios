import { MouseEvent, useState } from 'react'
import './App.css'

function App() {
  // ページ固有のTODO
  // TODO: クリックしたら先に進み、ポワワ〜ンとなる波紋上のアニメーションと共に太陽系の初期レンダリングが！！　すごい！！
  // TODO: クリックで画面遷移？ 1ページでやる？ それとも現状の「タイトル+Click here.」表示を関数化して単に切り替えるだけにする？
  // TODO: → 初回レンダリング用の太陽系（パラメータの変更はなし、天文計算の結果だけをCanvasとかWebGLとかで出力する？）を表示する機能
  // TODO: → パラメータの変更UIを実装。初期値の表示、変更。値はリアルタイムにレンダリングされる

  // 開発系TODO
  // TODO: CSS系のライブラリの導入, React Emotionとか？

  // TODO: initialViewはStoreで管理して、SessionStorageか何かに保存しておきたい。初回以降は見なくてもいいように
  const [isInitialView, setIsInitialView] = useState(false);
  
  // TODO: クリックした位置に小さめの波紋を出してポワワ〜ンとさせながら、appViewを表示する関数群
  // TODO: 全体的に関数名は要検討
  // TODO: Transition系のなんかが欲しい
  // TODO: これは任意の座標に小さめの波紋を出す関数
  
  // TODO: なんか、これみたいな感じでコンポーネントで作りたい
  // TODO: https://qiita.com/hanaitama-kaz/items/1f7feb55cb2f7ef1b035
  const addRipple = () => {
    return <div>Ripple</div>
  }

  // TODO: こっちは諸々の関数を呼んだあとappViewを表示する関数
  // FIXME: App要素（このコンポーネントの一番上のDivくん）の高さが最低限しかないので端っこの方のClickイベントが取れない！
  const setAppView = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(`X: ${event.clientX}, Y: ${event.clientY}`)

    // TODO: めんどくさいので波紋まわりができるまではこれはコメントアウトしておく
    // setIsInitialView(true)
  }

  // 初回表示
  const initialView = () => {
    return (
      <div className="App" onClick={(e) => setAppView(e)}>
        <h1 className='title'>DELPHINIOS - Solar System Simulator</h1>
        <p className='guide'>Click here.</p>
      </div>
    )
  }

  // メイン画面
  const appView = () => {
    return (
      <div className='App'>
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

  return (
    view()
  )
}

export default App
