import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export default function Wasteland({ ...props }) {
	const group = useRef()
	const { nodes, materials } = useGLTF('../../wasteland-font3.gltf')

	useFrame((state)=>{
		const t = state.clock.getElapsedTime()
		group.current.rotation.z = -0.2 - ( 1 + Math.sin( t / 1.5)) / 30
		group.current.rotation.x = Math.cos( t / 4 ) / 0.5
		group.current.rotation.y = Math.cos( t / 4 ) / 4
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
