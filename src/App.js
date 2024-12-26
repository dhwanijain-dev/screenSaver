// src/App.js
import { Environment, MeshTransmissionMaterial, Text } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
// import { FontLoader } from 'three/examples/jsm/Addons.js'

// import bebasNeue from './bebasNeue.json' 

const Cube = () => {
  const cube = useRef()
  useFrame(() => {
    if (cube.current) {
      cube.current.rotation.x += 0.01
      cube.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={cube}>
      <torusKnotGeometry args={[1, 0.3, 300, 100, 2, 3]} /> 
      {/* <RoundedBox/> */}
      {/* <Sphere args={[1, 100, 100]} /> */}
      {/* <meshStandardMaterial color="orange" /> */}
      {/* <MeshWobbleMaterial factor={1} speed={10} /> */}
      <MeshTransmissionMaterial
        transparent
        // opacity={0.9}
        roughness={0}
        thickness={0.20} // Increased thickness for a thicker glass
        transmission={1}
        // clearcoat={1}
        clearcoatRoughness={0}
        chromaticAberration={0.02}
        ior={1.2} 
        backside={true}
        color={'#ffffff'}

       />
        
      {/* <MeshTransmissionMaterial  /> */}
    </mesh>
  )
}

const App = () => {

  // const font = useLoader(FontLoader, bebasNeue);
  return (
    <>
    <Canvas style={{ height: '100vh',position:'absolute',background:'transparent' }} gl={{ alpha: true, }} >
      {/* <ambientLight intensity={0.5}/>
      <pointLight position={[10, 10, 10]} /> */}
      {/* <DirectionalLight/> */}
      <directionalLight position={[0, 3, 2]} intensity={3} />
      <Environment preset="city" />  
      <Cube />
      {/* <Suzzane/> */}
        <Text position={[0, 0, 0]} fontSize={1} color='white'>
        DHWANI JAIN
      </Text>
    </Canvas>
    

    </>
  )
}

export default App