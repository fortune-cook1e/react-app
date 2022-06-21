import { IUser } from '@/types/user'
import { LoginRequest } from './../types'
import request from '@/utils/request'

export const login = (data: LoginRequest): Promise<IUser> => {
	return request({
		url: '/users/login',
		method: 'post',
		data
	})
}

export const logout = (): Promise<void> => {
	return request({
		url: '/users/logout',
		method: 'post'
	})
}

export const register = (data: LoginRequest): Promise<IUser> => {
	return request({
		url: '/users/register',
		method: 'post',
		data
	})
}

export const getUsers = (): Promise<IUser[]> =>
	request({
		url: '/users',
		method: 'get'
	})
