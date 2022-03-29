import React from 'react'

interface Props {
	children: React.ReactNode
}

const ProtectedRoute = ({ children }: Props): JSX.Element => {
	return <>{children}</>
}

export default ProtectedRoute
