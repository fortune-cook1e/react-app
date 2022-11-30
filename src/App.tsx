import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { TOKEN_FAILURE_EVENT } from './constants/pub'
import { userState } from './recoil/atoms'
import { clearIndexedDb, initIndexedDb } from './utils/config'
import pubSub from './utils/pub'

import router from '@/routes'

const App = (): JSX.Element => {
  const [, setUser] = useRecoilState(userState)

  const clearUser = () => {
    setUser(null)
  }

  useEffect(() => {
    // TOKEN失效后将用户信息清空
    pubSub.subscribe(TOKEN_FAILURE_EVENT, clearUser)

    initIndexedDb()

    return () => {
      clearIndexedDb()
      pubSub.unsubscribe(TOKEN_FAILURE_EVENT, clearUser)
    }
  }, [])

  return <RouterProvider router={router} />
}

export default App
