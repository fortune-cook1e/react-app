import { atom, selector, selectorFamily } from 'recoil'

import { login } from '@/apis/user'
import { USER_LOGIN_KEY, USER_STATE_KEY } from '@/constants/recoil'
import { IUser, LoginRequest } from '@/types'

const initialState: IUser | null = null

export const userState = atom<IUser | null>({
  key: USER_STATE_KEY,
  default: initialState
})
