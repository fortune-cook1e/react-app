import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/reducers'
import { setUserInfo, setUser } from '@/store/actions/user'

const Redux = () => {
	const dispatch = useDispatch()
	const user = useSelector((state: RootState) => state.user)

	const handleClick = () => {
		dispatch(setUserInfo())
	}

	const handleAsync = () => {
		setUser()
	}

	return (
		<div>
			<h1>Redux Page</h1>
			<button onClick={handleClick}>test redux-thunk</button>
			<button onClick={handleAsync}>test async function</button>
			<p>{user.name}</p>
			<p>{user.age}</p>
		</div>
	)
}

export default Redux
