import { Button, Container, Group, MantineProvider, ScrollArea, Text, Title } from '@mantine/core'
import React, { useState, useRef } from 'react'
import  useMousePosition  from '../context/MousePosition'


function App() {
	const viewport = useRef()
	// const [count, setCount] = useState(0)
	// const mousePosition = useMousePosition()
	return (
		<MantineProvider theme={{
			headings: {
				fontFamily: 'Open Sans',
				sizes: {
					h1: { fontSize: 80 }
				}
			}
		}}>
			<Group className="app" position='center' direction='column' spacing='xs' style={{right: '35em', paddingTop: '5em'}}>
				<ScrollArea style={{height: '50em'}} viewportRef={viewport}>
					<Title>TEST-1</Title>
					<Title>TEST-1</Title>
					<Title>TEST-1</Title>
					<Title>TEST-1</Title>
					{/* <Container size="lg" px="xs">{mousePosition.x} : {mousePosition.y}</Container> */}
		 </ScrollArea>
			</Group>
		</MantineProvider>
	)
}

export default App
