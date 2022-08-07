import React, { useEffect } from 'react'
import { HashRouter } from 'react-router-dom'

import Error from './components/ErrorBoundary'
import RouteMap from '@/routes'
import { clearIndexedDb, initIndexedDb } from './utils/config'

const App = (): JSX.Element => {
	useEffect(() => {
		initIndexedDb()
		return () => {
			clearIndexedDb()
		}
	}, [])

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
