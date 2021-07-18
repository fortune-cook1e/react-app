import React from 'react'
import {
	decrement,
	increment,
	counterSelector
} from '@/store/slices/counterSlice'
import { useAppDispatch } from '@/store/index'
import { useSelector } from 'react-redux'
import { fetchUser, userSelector } from '@/store/slices/userSlice'

import {
	thunkHello,
	thunkBye,
	thunkSelector,
	getAsyncData
} from '@/store/slices/thunkSlice'

const Redux = () => {
	// const dispatch = useDispatch()
	const dispatch = useAppDispatch()
	const { value = '' } = useSelector(counterSelector)
	const { user, loading } = useSelector(userSelector)
	const { message = '' } = useSelector(thunkSelector)

	return (
		<div>
			<h1>Reduxtoolkit</h1>
			<button
				aria-label='Increment value'
				onClick={() => dispatch(increment())}
			>
				Increment
			</button>
			<span>{value}</span>
			<button
				aria-label='Decrement value'
				onClick={() => dispatch(decrement())}
			>
				Decrement
			</button>
			<div>-------</div>
			<div>
				<button onClick={() => dispatch(fetchUser())}>get userr info</button>
			</div>
			<div>
				<p>username:{user.name}</p>
				<p>userage:{user.age}</p>
				<p>userloading:{loading ? 'true' : 'false'}</p>
			</div>

			<div>------</div>
			<div>thunk demo</div>
			<div>th is is thunk message:{message}</div>
			<div onClick={() => dispatch(thunkHello('hello'))}>this is hello btn</div>
			<div onClick={() => dispatch(thunkBye('byebye'))}>this is bye btn</div>
			<div onClick={() => dispatch(getAsyncData())}>this is async btn</div>
		</div>
	)
}

export default Redux
