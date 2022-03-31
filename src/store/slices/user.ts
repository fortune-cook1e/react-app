import { createSlice } from '@reduxjs/toolkit'

import { fetchUserInfo } from '@/apis/user'
import { RootState, AppDispatch } from '@/store'
import { IUser } from '@/types/user'

export interface UserState {
	loading: boolean
	user: IUser
}

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
		setUser: (state, action) => {
			console.log('dsadas')
			state.user = action.payload
		},
		setLoading: (state, action) => {
			state.loading = action.payload
		}
	}
})

const userReducer = userSlice.reducer
export const { setUser, setLoading } = userSlice.actions
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
