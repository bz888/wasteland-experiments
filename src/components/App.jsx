import { Container, Group } from '@mantine/core'
import React, { useState } from 'react'


function App() {
	// const [count, setCount] = useState(0)

	return (
		<Group className="app" position='center' direction='column' spacing='lg' style={{right: '35em', paddingTop: '5em'}}>
			<Container size="xs" px="xs">Test-1</Container>
			<Container size="xs" px="xs">PlaceHolder</Container>
			<Container size="xs" px="xs">PlaceHolder</Container>
			<Container size="xs" px="xs">PlaceHolder</Container>
			<Container size="xs" px="xs">PlaceHolder</Container>
		</Group>
	)
}

export default App
