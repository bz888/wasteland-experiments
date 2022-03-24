import {  Code,  Group, MantineProvider, ScrollArea, Text, Title } from '@mantine/core'
import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Background from './Background'
import Wasteland from './Wasteland'

Home.propTypes
function Home ({ pages }) {

	// const [count, setCount] = useState(0)
	// const mousePosition = useMousePosition()
	const [scrollPosition, setScrollPosition] = useState({x: 0, y: 0})
	return (
		<>

			<Background/>
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
							{pages && pages.map((page, idx) => (
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
