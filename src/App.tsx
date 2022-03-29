import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import Error from './components/ErrorBoundary'
import RouteMap from '@/routes'

const App: React.FC = () => {
	return (
		<Error>
			<Router>
				<RouteMap />
			</Router>
		</Error>
	)
}

export default App
