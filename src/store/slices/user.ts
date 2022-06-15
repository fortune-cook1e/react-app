import { LoginRequest } from './../../types/user'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { login } from '@/apis/user'
import { RootState } from '@/store'
import { Gender, IUser } from '@/types/user'

export interface UserState {
	user: IUser
}

const initialState: UserState = {
	user: {
		id: '',
		username: '',
		age: 0,
		gender: Gender.Female
	}
}

const doLogin = createAsyncThunk('users/login', async (params: LoginRequest) => {
	const { data } = await login(params)
	return data
})

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload
		}
	},
	extraReducers: builder => {
		builder
			.addCase(doLogin.pending, () => {
				console.log('pending...')
			})
			.addCase(doLogin.fulfilled, (state, action) => {
				state.user = action.payload
			})
	}
})

const userReducer = userSlice.reducer
export const { setUser } = userSlice.actions
export const userSelector = (state: RootState): UserState => state.user
export default userReducer
