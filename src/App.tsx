import React, { Suspense, useState, CSSProperties } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { routes } from './routes'

const App: React.FC = () => {
	return (
		<div className='app'>
			this is app
			<Suspense fallback={<span />}>
				<Router>{renderRoutes(routes)}</Router>
			</Suspense>
		</div>
	)
}

export default App
