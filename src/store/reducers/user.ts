import { SET_USER } from '../types'
import { ACTIONTYPE } from '../actions/user'

export type InitialState = {
	name: string
	age: number
}

const initialState: InitialState = {
	name: '',
	age: 0
}

const actions = {
	[SET_USER]: (state = initialState, action: ACTIONTYPE) => {
		const { payload } = action
		return payload
	}
}

export default (state = initialState, action: ACTIONTYPE): InitialState => {
	const handler = actions[action.type]
	if (handler) {
		return handler(state, action)
	}
	return state
}
