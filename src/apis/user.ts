import { IUser } from '@/types/user'
import { LoginRequest } from './../types/user'
import request from '@/utils/request'

export const login = (data: LoginRequest) => {
	return request<IUser>({
		url: '/users/login',
		method: 'post',
		data
	})
}
