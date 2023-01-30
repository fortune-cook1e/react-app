import create from 'zustand'

import { login, logout, register } from '@/apis/user'
import { IUser, LoginRequest } from '@/types'

interface UserState {
  user: IUser | null
  clearUser: () => void
  doUserLoginOrRegister: (payload: LoginRequest, type: 'login' | 'register') => Promise<void>
  doUserLogout: () => Promise<void>
}

const useUserStore = create<UserState>(set => ({
  user: null,
  clearUser: () => {
    set({
      user: null
    })
  },
  doUserLoginOrRegister: async (payload: LoginRequest, type: 'login' | 'register' = 'login') => {
    const func = type === 'login' ? login : register
    const data = await func(payload)
    set(state => ({
      ...state,
      data
    }))
  },
  doUserLogout: async () => {
    await logout()
    set({
      user: null
    })
  }
}))

export default useUserStore
