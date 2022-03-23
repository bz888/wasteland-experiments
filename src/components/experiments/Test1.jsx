import React, { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

export default function Test1 () {
	return (
		<Canvas style={{position: 'fixed'}}>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Suspense fallback={null}>
				{/* <Wasteland/> */}
			</Suspense>
			{/* <Box position={[1.2, 0, 0]} /> */}
		</Canvas>
	)
}