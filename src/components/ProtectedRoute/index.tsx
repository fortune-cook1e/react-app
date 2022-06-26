import { useAuth } from '@/hooks'
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
		if (!isUserLogin) {
			navigate('/login')
			queryClient.invalidateQueries()
		}
	}, [])
	return <>{children}</>
}

export default ProtectedRoute
