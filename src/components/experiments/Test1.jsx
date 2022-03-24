import React, { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
// import Box from '../assets/Box'
import { Physics, useBox, usePlane } from '@react-three/cannon'

function DemoBox (props) {
	// const ref = useRef()
	const [boxRef, api] = useBox(()=> ({mass: 1, position: [0, 5, 0], rotation: [0.4, 0.2, 0.5], ...props}))

	const [hover, setHover] = useState(false)
	const [click, setClick] = useState(false)
  
	// useFrame(({ clock }) => api.position.set(Math.sin(clock.getElapsedTime()) * 5, 0, 0))
	useFrame((state, delta)=> (boxRef.current.rotation.x += 0.01))

	return (
		<mesh
			ref={boxRef}
			scale={click ? 1.5 : 1}
			onClick={() => setClick(!click)}
			onPointerOver={() => setHover(true)}
			onPointerOut={() => setHover(false)}
			receiveShadow castShadow>
        
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hover ? 'hotpink' : 'orange'} />
		</mesh>
	)
}

function Plane (props) {
	const [ref] = usePlane(()=> ({rotation: [-Math.PI/2, 0, 0]}))
	return (
		<mesh {...props} ref={ref} receiveShadow>
			<planeGeometry args={[100,100]}/>
			<meshStandardMaterial attach='material' color='lightblue'/>
		</mesh>
	)
}
export default function Test1 () {
	return (
		<Canvas 
			shadows dpr={[1, 2]} gl={{ alpha: false }} camera={{ position: [-1, 10, 5], fov: 45}} 
			style={{position: 'fixed', backgroundColor: 'grey'}} >
			<ambientLight intensity={0.5}/>
			<directionalLight position={[10, 10, 10]} castShadow shadow-mapSize={[2048, 2048]} />
			<Stars/>
			<OrbitControls/>
			<Suspense fallback={null}>
				<Physics>
					<DemoBox position={[0.1, 5, 0]}/>
					<DemoBox position={[0, 10, -1]}/>
					<DemoBox position={[0, 20, -2]}/>
					<Plane position={[0, -5.5, 0]}/>
				</Physics>
			</Suspense>
		</Canvas>
	)
}