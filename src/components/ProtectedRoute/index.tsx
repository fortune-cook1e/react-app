import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import useUserStore from '@/store/user'
import globalConfig from '@/utils/config'
interface Props {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: Props): JSX.Element => {
  const navigate = useNavigate()
  const { user } = useUserStore()

  useEffect(() => {
    // TIP: 目前不开启路由拦截
    // if (!isUserLogin && globalConfig.isDev) {
    // 	navigate('/login')
    // 	queryClient.invalidateQueries()
    // }
    if (!user) {
      // navigate('/login')
    }
  }, [])
  return <>{children}</>
}

export default ProtectedRoute
