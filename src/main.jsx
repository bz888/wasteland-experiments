import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { MantineProvider } from '@mantine/core'
// import Background from './components/Background'
import { BrowserRouter } from 'react-router-dom'
// import { createBrowserHistory } from 'history'

// const hist = createBrowserHistory()
// const theme = {
// 	breakpoints: {
// 		xs: 500,
// 		sm: 800,
// 		md: 1000,
// 		lg: 1200,
// 		xl: 1400,
// 	}
// }

ReactDOM.render(
	<React.StrictMode>
		{/* <MantineProvider theme={{
			fontFamily: 'Open Sans',
			fontSizes: { xl: 300 }
		}}> */}
		{/* <BrowserRouter history={hist}> */}
		<App />
		{/* </BrowserRouter> */}
		{/* </MantineProvider> */}
	</React.StrictMode>,
	document.getElementById('root')
)
