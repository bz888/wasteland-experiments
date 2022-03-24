// import { useBox } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'



export default function Box (props) {
	const ref = useRef()
	// const [boxRef] = useBox(()=> ({mass: 1}))

	const [hover, setHover] = useState(false)
	const [click, setClick] = useState(false)
  
	useFrame((state, delta)=> (ref.current.rotation.x += 0.01))

	return (
		<mesh
			{...props}
			ref={ref}
			scale={click ? 1.5 : 1}
			onClick={() => setClick(!click)}
			onPointerOver={() => setHover(true)}
			onPointerOut={() => setHover(false)}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hover ? 'hotpink' : 'orange'} />
		</mesh>
	)
}