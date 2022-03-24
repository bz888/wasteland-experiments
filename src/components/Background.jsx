import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useState, Suspense } from 'react'

import Wasteland from './Wasteland'
import Box from './assets/Box'


export default function Background () {

	return (
		<>
		
			<Canvas 
				style={{position: 'fixed'}}
			>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<Suspense fallback={null}>
					<Wasteland/>
				</Suspense>
				{/* <Box position={[1.2, 0, 0]} /> */}
			</Canvas>
		</>
	)
}