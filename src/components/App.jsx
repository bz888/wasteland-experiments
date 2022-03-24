import React, { useState, useRef } from 'react'
// import { Link, Route, Routes } from 'react-router-dom'
import { HashRouter as Router, Route, Routes, useMatch } from 'react-router-dom'
import Test1 from './experiments/Test1'
import Home from './Home'



function App() {
	const pages = [
		{title: 'TEST-1', url: '03.24.2022'},
		{title: 'TEST-2', url: '02.24.2022'},
		{title: 'TEST-3', url: '01.24.2022'},
		{title: 'TEST-4', url: '04.25.2022'},
		{title: 'TEST-5', url: '03.22.2022'},
		{title: 'TEST-6', url: '03.23.2022'}]
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Home pages={pages}/>}/>
					<Route path='/03.24.2022' element={<Test1/>}/>
					<Route path='/02.24.2022' element={<Home/>}/>
					<Route path='/01.24.2022' element={<Home/>}/>
					<Route path='/04.25.2022' element={<Home/>}/>
					<Route path='/03.22.2022' element={<Home/>}/>
					<Route path='/03.23.2022' element={<Home/>}/>
				</Routes>
			</Router>
			

		</>
	)
}

export default App
