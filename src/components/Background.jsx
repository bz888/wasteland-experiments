import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import Box from './Box'
import Text from './Text'


export default function Background () {
	// const ref = useRef()

	// const [hover, setHover] = useState(false)
	// const [click, setClick] = useState(false)
  
	// useFrame((state, delta)=> (ref.current.rotation.x += 0.01))

	return (
		<Canvas style={{position: 'fixed'}}>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Text position={[-1.2, 0, 0]} />
			<Box position={[1.2, 0, 0]} />
		</Canvas>
	)
}