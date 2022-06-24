import { PageRequest } from './request'
import { Gender } from './user'

export interface IStaff {
	id: string
	name: string
	gender: Gender
	occupation: string
	entryTime: number
	resignationTime: number
}

export interface IStaffListRequest extends PageRequest {
	keyword?: string
}
