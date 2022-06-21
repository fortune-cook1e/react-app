import { LoginRequest } from './../../types/user'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { login, logout, register } from '@/apis/user'
import { RootState } from '@/store'
import { IUser } from '@/types/user'
import { LOCAL_STORAGE_USER_KEY } from '@/constants'
import { setStorage, getStorage } from '@/utils'

const initUser = () => {
	const user = getStorage('local', LOCAL_STORAGE_USER_KEY)
	return user ? JSON.parse(user) : null
}

export interface UserState {
	user: IUser | null
}

const initialState: UserState = {
	user: initUser()
}

export const doLogin = createAsyncThunk('users/login', async (params: LoginRequest) => {
	const data = await login(params)
	return data
})

export const doLogout = createAsyncThunk('users/logout', async () => {
	await logout()
	return
})

export const doRegister = createAsyncThunk('users/register', async (params: LoginRequest) => {
	const data = await register(params)
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
				console.log('login pending...')
			})
			.addCase(doLogin.fulfilled, (state, action) => {
				state.user = action.payload
				setStorage('local', LOCAL_STORAGE_USER_KEY, JSON.stringify(action.payload))
			})
			.addCase(doLogin.rejected, () => {
				throw new Error('login rejected')
			})
			.addCase(doLogout.pending, () => {
				console.log('logout pending...')
			})
			.addCase(doLogout.fulfilled, state => {
				state.user = null
			})
			.addCase(doLogout.rejected, () => {
				throw new Error('logout rejected')
			})
			.addCase(doRegister.pending, () => {
				console.log('register pending...')
			})
			.addCase(doRegister.fulfilled, (state, action) => {
				state.user = action.payload
				setStorage('local', LOCAL_STORAGE_USER_KEY, JSON.stringify(action.payload))
			})
			.addCase(doRegister.rejected, () => {
				throw new Error('register rejected')
			})
	}
})

const userReducer = userSlice.reducer
export const { setUser } = userSlice.actions
export const userSelector = (state: RootState): UserState => state.user
export default userReducer
