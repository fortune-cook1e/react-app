import { IUser } from '@/types/user'
import { LoginRequest } from './../types'
import request from '@/utils/request'

export const login = (data: LoginRequest): Promise<IUser> => {
	return request({
		url: '/user/login',
		method: 'post',
		data
	})
}

export const logout = (): Promise<void> => {
	return request({
		url: '/user/logout',
		method: 'post'
	})
}

export const register = (data: LoginRequest): Promise<IUser> => {
	return request({
		url: '/user/register',
		method: 'post',
		data
	})
}

export const getUsers = (): Promise<IUser[]> =>
	request({
		url: '/user/list',
		method: 'get'
	})
