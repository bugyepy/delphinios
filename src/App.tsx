
// import { useState } from 'react'
import './App.css'
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { type Mesh, Vector3 } from 'three';
import PropTypes from 'prop-types';

const Rig = ({ v = new Vector3() }) => {
  return useFrame((state) => {
    state.camera.position.lerp(v.set(state.mouse.x * 2, state.mouse.y * 2, 10), 0.05)
  })
};

interface BoxProps {
  position: [x: number, y: number, z: number];
}

const Box: React.FC<BoxProps> = (props) => {
  const mesh = useRef<Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame(() => (mesh.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => { setActive(!active); }}
      onPointerOver={() => { setHover(true); }}
      onPointerOut={() => { setHover(false); }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};


interface SphereProps {
  args: number[]
}

const Sphere: React.FC<SphereProps> = (props) => {
  const mesh = useRef<Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame(() => (mesh.current.rotation.x += 0.01));

  return (
    <mesh
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => { setActive(!active); }}
      onPointerOver={() => { setHover(true); }}
      onPointerOut={() => { setHover(false); }}
    >
      <sphereBufferGeometry args={props.args} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

Sphere.propTypes = {
  args: PropTypes.array.isRequired
};

function App() {
  // NOTE: メイン画面の開発用に一旦初回表示まわりを非表示に
  // const [isInitialView, setIsInitialView] = useState(false)

  // const setAppView = () => {
  //   setIsInitialView(true)
  // }

  // 初回表示
  // const initialView = () => {
  //   return (
  //     <div
  //       className="App"
  //       onClick={() => {
  //         setAppView()
  //       }}
  //     >
  //       <h1 className="title">DELPHINIOS - Solar System Simulator</h1>
  //       <p className="guide">Click here.</p>
  //     </div>
  //   )
  // }

  // メイン画面
  const appView = () => {
    return (
      <div className="App">
        <Canvas>
          <ambientLight />
          <fog attach="fog" color={'#fff'} near={1} far={30} />
          <Rig />
          <pointLight position={[10, 10, 10]} />
          <Sphere args={[1, 24, 24]} />
          <Box position={[0, 1, -10]} />
          <Box position={[-2.5, 0, -5]} />
          <Box position={[2.5, 0, 0]} />
        </Canvas>
      </div>
    )
  }

  const view = () => {
    // if (!isInitialView) {
    //   return initialView()
    // }

    return appView()
  }

  return view()
}

export default App
