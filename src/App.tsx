import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

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
