import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber' //npm i @react-three/fiber
import { useGLTF, OrbitControls, Text, Environment} from '@react-three/drei'; //npm i @react-three/drei

/***************** TEXTO ******************/
function Texto() {
  return (
    <Text
      position={[-0.75, 1, -5]}
      lineHeight={1}
      font="/Dosis-ExtraBold.ttf"
      fontSize={3.5}
      letterSpacing={0.09}
      color="#f2594e"
      anchorX="center"
      anchorY="middle">
      SUMMER
    </Text>
  )
} 

/***************** SORVETE ******************/
function Sorvete({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Sorvete.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      {/* posição: [esquerda-direita, altura, frente-atras] */}
      <group position={[-1.1, 1.0, 4]} rotation={[1.55, -0.73, 0.98]} scale={[0.64, -0.17, 1.42]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube003.geometry} material={materials['Picole.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube003_1.geometry} material={materials['spruce wood varnished']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube003_2.geometry} material={materials.Sorvete} />
        <mesh castShadow receiveShadow geometry={nodes.Cube003_3.geometry} material={materials.Pote} />
        <mesh castShadow receiveShadow geometry={nodes.Cube003_4.geometry} material={materials['Material.004']} />
      </group>
    </group>
  )
}
useGLTF.preload('/Sorvete.glb')

/******************** MESA ********************/
function Mesa({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Mesa.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      {/* esquerda-direita, altura, frente-atras */}
      <group position={[0, -6, 2]} scale={[10.82, 7.57, 10.82]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder002.geometry} material={materials.MC_TABLE_CALACATA} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder002_1.geometry} material={materials['Material.002']} />
      </group>
    </group>
  )
}
useGLTF.preload('/Mesa.glb')

export default function Home(){
  return (
    <div className="home" id="home">
      <Canvas style={{width: '100vw', height: '70vh'}} dpr={[1, 2]} camera={ { position: [2, 6, 30], fov: 15 }}>
        <color attach="background" args={[0.87, 0.87, 0.87]} />
        <Suspense>
          <Environment preset="sunset" /> {/* presets: sunset, dawn, night, warehouse, forest, apartment, studio, city, park, lobby */}
          <pointLight position={[0, 7, 5]} intensity={0.5} />

          <OrbitControls/>

          <Sorvete/>
          <Mesa/>
          <Texto/>
        </Suspense>
      </Canvas>
    </div>
  );
};