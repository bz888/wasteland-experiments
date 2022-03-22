import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import useMousePosition from '../context/MousePosition'


export default function Wasteland({ ...props }) {
	const mousePosition = useMousePosition()

	const group = useRef()
	const { nodes, materials } = useGLTF('../../wasteland-font3.gltf')

	useFrame((state)=>{
		const t = state.clock.getElapsedTime()

		const x = mousePosition.x * 0.001
		const y = mousePosition.y * 0.001
		// constant rotation
		// group.current.rotation.y = 0.05 * t
		
		group.current.rotation.z =  ( 1 + Math.sin( t / 1.5)) / 20
		group.current.rotation.x = (1 + Math.sin( t / 10 )) / 0.5
		group.current.rotation.y = (1 + Math.sin( t / 10 )) / 1
		
		group.current.rotation.y += 0.5 * ( x - 	group.current.rotation.y)
		group.current.rotation.x += 0.05 * ( y - 	group.current.rotation.x)
		group.current.rotation.z += 0.05 * ( y - 	group.current.rotation.z)
	})
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh 
				geometry={nodes.Text.geometry} 
				material={materials['Material.001']} 
				position={[-4.2, 0.5, 0]} 
				rotation={[Math.PI / 2, 0, 0]}
				scale={2}
			/>
		</group>
	)
}
