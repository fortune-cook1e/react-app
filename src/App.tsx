import React, { Suspense, useState, CSSProperties } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { routes } from './routes'
import Error from './components/ErrorBoundary'

const App: React.FC = () => {
	return (
		<Error>
			<div className='app'>
				this is app
				<Suspense fallback={<span />}>
					<Router>{renderRoutes(routes)}</Router>
				</Suspense>
			</div>
		</Error>
	)
}

export default App
