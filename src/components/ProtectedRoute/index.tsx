import { useAuth } from '@/hooks'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
	children: React.ReactNode
}

const ProtectedRoute = ({ children }: Props): JSX.Element => {
	const { isUserLogin } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (!isUserLogin) navigate('/login')
	}, [])
	return <>{children}</>
}

export default ProtectedRoute
