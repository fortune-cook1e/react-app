export enum Gender {
	Male = 1,
	Female = 0,
	Unknown = 2
}

export interface IUser {
	id: string
	username: string
	age: number
	gender: Gender
	accessToken: string
}

export interface LoginRequest {
	username: string
	password: string
}
