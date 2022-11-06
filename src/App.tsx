import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import ReactErrorBoundary from './components/ErrorBoundary'
import { TOKEN_FAILURE_EVENT } from './constants/pub'
import { userState } from './recoil/atoms'
import { clearIndexedDb, initIndexedDb } from './utils/config'
import { PubSub } from './utils/pub'

import router from '@/routes'

const App = (): JSX.Element => {
  const [, setUser] = useRecoilState(userState)
  const { subscribe, unsubscribe } = PubSub()
  useEffect(() => {
    // TOKEN失效后将用户信息清空
    subscribe(TOKEN_FAILURE_EVENT, () => {
      setUser(null)
    })

    initIndexedDb()

    return () => {
      clearIndexedDb()
      unsubscribe(TOKEN_FAILURE_EVENT, () => {})
    }
  }, [])

  return (
    <ReactErrorBoundary>
      {/* 这里由于 git-page 不支持 BrowserRouter 所以改用HashRouter */}
      <RouterProvider router={router} />
    </ReactErrorBoundary>
  )
}

export default App
