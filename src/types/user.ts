export enum Gender {
	Male = 1,
	Female = 0
}

export interface IUser {
	id: string
	username: string
	age: number
	gender: Gender
}

export interface LoginRequest {
	username: string
	password: string
}
