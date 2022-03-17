import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { MantineProvider } from '@mantine/core'
import Background from './components/Background'

const theme = {
	breakpoints: {
		xs: 500,
		sm: 800,
		md: 1000,
		lg: 1200,
		xl: 1400,
	}
}

ReactDOM.render(
	<React.StrictMode>
		<MantineProvider theme={theme}>
			<Background/>
			<App />
		</MantineProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
