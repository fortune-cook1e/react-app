import { SET_USER } from '../types'
import { InitialState } from '../reducers/user'
import { getUserInfo } from '@/apis/index'
import { Dispatch } from 'redux'
import store from '@/store'

export type ACTIONTYPE = { type: typeof SET_USER; payload: InitialState }

export const setUserInfo = () => {
	return async (dispatch: Dispatch): Promise<void> => {
		const user = await getUserInfo()
		dispatch({
			type: SET_USER,
			payload: user
		})
	}
}

export const setUser = async () => {
	const user = await getUserInfo()
	store.dispatch({
		type: SET_USER,
		payload: user
	})
}
