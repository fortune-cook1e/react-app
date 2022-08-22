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
		// TIP: 目前不开启路由拦截
		// if (!isUserLogin && globalConfig.isDev) {
		// 	navigate('/login')
		// 	queryClient.invalidateQueries()
		// }
	}, [])
	return <>{children}</>
}

export default ProtectedRoute
