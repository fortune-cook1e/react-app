import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
// import ClientMonitor, { CustomOptionsType } from 'skywalking-client-js'

import AntConfigProvider from './components/AntConfigProvider'
import { TOKEN_FAILURE_EVENT } from './constants/pub'
import useUserStore from './store/user'
import { clearIndexedDb, initIndexedDb } from './utils/config'
import pubSub from './utils/pub'

import router from '@/routes'

const App = (): JSX.Element => {
  const { clearUser } = useUserStore()

  useEffect(() => {
    // TOKEN失效后将用户信息清空
    pubSub.subscribe(TOKEN_FAILURE_EVENT, clearUser)

    initIndexedDb()

    // ClientMonitor.register({
    //   collector: 'http://localhost:3000',
    //   service: 'test-ui',
    //   pagePath: '/current/page/name',
    //   serviceVersion: 'v1.0.0'
    // })

    return () => {
      clearIndexedDb()
      pubSub.unsubscribe(TOKEN_FAILURE_EVENT, clearUser)
    }
  }, [])

  return (
    <AntConfigProvider>
      <RouterProvider router={router} />
    </AntConfigProvider>
  )
}

export default App
