import { createSlice, createAction } from '@reduxjs/toolkit'

import { fetchUserInfo } from '@/apis/user'
import { RootState, AppDispatch, AppThunk } from '@/store'
import { IUser } from '@/types/user'

export interface UserState {
	loading: boolean
	user: IUser
}

export const setUser = createAction<IUser, 'setUser'>('setUser')
export const setLoading = createAction<boolean, 'setLoading'>('setLoading')

const initialState: UserState = {
	loading: false,
	user: {
		name: 'username~',
		age: 0
	}
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		[setUser.type]: (state, action) => {
			state.user = action.payload
		},
		[setLoading.type]: (state, action) => {
			state.loading = action.payload
		}
	}
})

const userReducer = userSlice.reducer
export const userSelector = (state: RootState): UserState => state.user
export default userReducer

// Actions
export const fetchUser =
	() =>
	async (dispatch: AppDispatch): Promise<void> => {
		dispatch(setLoading(true))
		const data = await fetchUserInfo()
		dispatch(setUser(data))
	}
