import {  Code,  Group, MantineProvider, ScrollArea, Text, Title } from '@mantine/core'
import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Background from './Background'
import Wasteland from './Wasteland'


function Home () {
	const pages = [
		{title: 'TEST-1', url: '03.24.2022'},
		{title: 'TEST-2', url: '02.24.2022'},
		{title: 'TEST-3', url: '01.24.2022'},
		{title: 'TEST-4', url: '04.25.2022'},
		{title: 'TEST-5', url: '03.22.2022'},
		{title: 'TEST-6', url: '03.23.2022'}]
	// const [count, setCount] = useState(0)
	// const mousePosition = useMousePosition()
	const [scrollPosition, setScrollPosition] = useState({x: 0, y: 0})
	return (
		<>

			<Background>
				<Wasteland/>
			</Background>
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
						onScrollPositionChange={setScrollPosition} 
						type='scroll'
					>
						<Group spacing={80} direction='column' >
							{pages.map((page, idx) => (
								<Title 
									key={idx}
									component={Link}
									to={`/${page.url}`}
								>{page.title}</Title>
							))}
						</Group>
		 		</ScrollArea>
				</Group>
		 <Text>
					<Code>{`{ x: ${scrollPosition.x}, y: ${scrollPosition.y}}`}</Code>
		 </Text>
			</MantineProvider>
		</>
	)
}

export default Home
