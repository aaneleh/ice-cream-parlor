import React, { Suspense, useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber' //npm i @react-three/fiber
import { useGLTF, OrbitControls } from '@react-three/drei'; //npm i @react-three/drei
import { TextureLoader } from 'three/src/loaders/TextureLoader'

/***************** PAREDE ******************/
//MUDAR O TIPO DE MATERIAL PRA NÃO PEGAR LUZ, DAÍ NÃO FODE MINHAS CORES
function Background () {
  const colorMap = useLoader(TextureLoader, './BackgroundWithText.png')
  return (
    //scale: [largura, altura, espessura]
    <mesh position={[0 , 3.5, -6]} scale={[26,14,1]}>
      <planeGeometry/>
      <meshLambertMaterial map={colorMap} />
    </mesh>
  )
}

/***************** SORVETE ******************/
function Sorvete({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Sorvete.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      {/* posição: [esquerda-direita, altura, frente-atras] */}
      <group position={[-1.1, 4, 4]} rotation={[1.55, -0.73, 0.98]} scale={[0.64, -0.17, 1.42]}>
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
      <group position={[0, -3.0, 2]} scale={[10.82, 7.57, 10.82]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder002.geometry} material={materials.MC_TABLE_CALACATA} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder002_1.geometry} material={materials['Material.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('/Mesa.glb')

export default function Home(){
  return (
    <div className="home">
      {/*esquerda direita?, altura, o quao longe eu to*/}
      <Canvas style={{width: '100vw', height: '100vh'}} dpr={[1, 2]} camera={ { position: [0, 7, 35], fov: 25 } }>
        <Suspense>

          <ambientLight intensity={0.20}/>
          <pointLight position={[0, 7, 5]} intensity={0.5} />
          <OrbitControls/>

          <Sorvete/>
          <Mesa/>
          <Background/>
        </Suspense>
      </Canvas>
    </div>
  );
};