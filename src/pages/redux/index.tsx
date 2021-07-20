import React from 'react'

import { useAppDispatch } from '@/store/index'
import { useSelector } from 'react-redux'
import { fetchUser, userSelector } from '@/store/slices/userSlice'

const Redux = () => {
	// const dispatch = useDispatch()
	const dispatch = useAppDispatch()
	const { user, loading } = useSelector(userSelector)

	const handleClick = async () => {
		console.log('haha')
		await dispatch(fetchUser())
		console.log('done!')
	}

	return (
		<div>
			<h1>Reduxtoolkit</h1>

			<div>-------</div>
			<div>
				<button onClick={handleClick}>get userr info</button>
			</div>
			<div>
				<p>username:{user.name}</p>
				<p>userage:{user.age}</p>
				<p>userloading:{loading ? 'true' : 'false'}</p>
			</div>
		</div>
	)
}

export default Redux
