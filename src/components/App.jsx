import { Button, Container, Group, MantineProvider, ScrollArea, Text, Title } from '@mantine/core'
import React, { useState } from 'react'
import  useMousePosition  from '../context/MousePosition'


function App() {
	// const [count, setCount] = useState(0)
	const mousePosition = useMousePosition()
	return (
		<MantineProvider theme={{
			fontSize: '30rem'
		}}>
			<ScrollArea style={{height: '50em'}}>
				<Group className="app" position='center' direction='column' spacing='xl' style={{right: '35em', paddingTop: '5em'}}>
					<Container size="md">
						<Title>TEST-1</Title>
					</Container>



					{/* <Container size="lg" px="xs">{mousePosition.x} : {mousePosition.y}</Container> */}
				</Group>
			</ScrollArea>
		</MantineProvider>
	)
}

export default App
