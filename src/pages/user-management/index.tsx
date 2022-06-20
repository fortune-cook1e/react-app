import { getUsers } from '@/apis'
import React, { useEffect } from 'react'

const UserManagement = (): JSX.Element => {
	useEffect(() => {
		getUsers().then(res => {
			console.log({ res })
		})
	}, [])

	return <div>this is user management page</div>
}

export default UserManagement
