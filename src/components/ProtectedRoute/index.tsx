import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import globalConfig from '@/utils/config'
interface Props {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: Props): JSX.Element => {
  const navigate = useNavigate()

  useEffect(() => {
    // TIP: 目前不开启路由拦截
    // if (!isUserLogin && globalConfig.isDev) {
    // 	navigate('/login')
    // 	queryClient.invalidateQueries()
    // }
  }, [])
  return <>{children}</>
}

export default ProtectedRoute
