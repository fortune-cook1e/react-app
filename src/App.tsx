import React, { useEffect } from 'react'
import { HashRouter } from 'react-router-dom'

import ReactErrorBoundary from './components/ErrorBoundary'
import { clearIndexedDb, initIndexedDb } from './utils/config'

import RouteMap from '@/routes'

const App = (): JSX.Element => {
  useEffect(() => {
    initIndexedDb()
    return () => {
      clearIndexedDb()
    }
  }, [])

  return (
    <ReactErrorBoundary>
      {/* 这里由于 git-page 不支持 BrowserRouter 所以改用HashRouter */}
      <HashRouter>
        <RouteMap />
      </HashRouter>
    </ReactErrorBoundary>
  )
}

export default App
