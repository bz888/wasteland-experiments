import { Button, Code, Container, Group, MantineProvider, ScrollArea, Text, Title } from '@mantine/core'
import React, { useState, useRef } from 'react'
// import  useMousePosition  from '../context/MousePosition'


function App() {
	const viewport = useRef()
	// const [count, setCount] = useState(0)
	// const mousePosition = useMousePosition()
	const [scrollPosition, setScrollPosition] = useState({x: 0, y: 0})
	return (
		<MantineProvider theme={{
			spacing: { lg: 90 },
			headings: {
				fontFamily: 'Open Sans',
				sizes: {
					h1: { fontSize: 80 }
				}
			}
		}}>
			<Group 
				className="app"
			  style={{right: '35em', paddingTop: '5em'}}
			>
				<ScrollArea style={{height: '50em'}} 
					// viewportRef={viewport} 
					onScrollPositionChange={setScrollPosition} 
					type='scroll'
				>
					<Group spacing={80} direction='column' >
						<Title>TEST-1</Title>
						<Title>TEST-1</Title>
						<Title>TEST-1</Title>
						<Title>TEST-1</Title>
						<Title>TEST-1</Title>
						<Title>TEST-1</Title>
						<Title>TEST-1</Title>
						<Title>TEST-1</Title>
					</Group>
		 		</ScrollArea>
				{/* <Container size="lg" px="xs">{mousePosition.x} : {mousePosition.y}</Container> */}
			</Group>
		 <Text>
				<Code>{`{ x: ${scrollPosition.x}, y: ${scrollPosition.y}}`}</Code>
		 </Text>
		</MantineProvider>
	)
}

export default App
