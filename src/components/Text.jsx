import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Text({ ...props }) {
	const group = useRef()
	const { nodes, materials } = useGLTF('../glb/wasteland-font1.glb')
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh geometry={nodes.Text.geometry} material={materials['Material.001']} position={[-2.4, 1.34, 0]} />
		</group>
	)
}

useGLTF.preload('../glb/wasteland-font1.glb')
