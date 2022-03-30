import React from 'react'
import { HashRouter } from 'react-router-dom'
import Error from './components/ErrorBoundary'
import RouteMap from '@/routes'

const App = (): JSX.Element => {
	return (
		<Error>
			{/* 这里由于 git-page 不支持 BrowserRouter 所以改用HashRouter */}
			<HashRouter>
				<RouteMap />
			</HashRouter>
		</Error>
	)
}

export default App
