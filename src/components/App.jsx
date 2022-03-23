import React, { useState, useRef } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'



function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/03.24.2022' element={<Home/>}/>
				<Route path='/02.24.2022' element={<Home/>}/>
				<Route path='/01.24.2022' element={<Home/>}/>
				<Route path='/04.25.2022' element={<Home/>}/>
				<Route path='/03.22.2022' element={<Home/>}/>
				<Route path='/03.23.2022' element={<Home/>}/>
			</Routes>
			

		</>
	)
}

export default App
