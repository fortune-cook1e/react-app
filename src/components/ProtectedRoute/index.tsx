import { useAuth } from '@/hooks'
import globalConfig from '@/utils/config'
import React, { useEffect } from 'react'
import { useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

interface Props {
	children: React.ReactNode
}

const ProtectedRoute = ({ children }: Props): JSX.Element => {
	const { isUserLogin } = useAuth()
	const navigate = useNavigate()
	const queryClient = useQueryClient()

	useEffect(() => {
		// TIP: 当用户没有登录时 跳转到登录页 并使所有请求缓存失效
		// TIP: 只有在开发环境下 路由拦截才生效 生效根据env文件的VITE_APP_ENV字段决定
		if (!isUserLogin && globalConfig.isDev) {
			navigate('/login')
			queryClient.invalidateQueries()
		}
	}, [])
	return <>{children}</>
}

export default ProtectedRoute
