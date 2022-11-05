import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { LoginRequest } from './../../types/user'

import { login, logout, register } from '@/apis/user'
import { LOCAL_STORAGE_USER_KEY } from '@/constants'
import { RootState } from '@/store'
import { IUser } from '@/types/user'
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

export const doLogin = createAsyncThunk('user/login', async (params: LoginRequest) => {
  const data = await login(params)
  return data
})

export const doLogout = createAsyncThunk('user/logout', async () => {
  await logout()
  return
})

export const doRegister = createAsyncThunk('user/register', async (params: LoginRequest) => {
  const data = await register(params)
  return data
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
      setStorage('local', LOCAL_STORAGE_USER_KEY, JSON.stringify(action.payload))
    }
  }
})

const { actions, reducer } = userSlice
export const { setUser } = actions
export const userSelector = (state: RootState): UserState => state.user
export default reducer
