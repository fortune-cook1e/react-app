import { PageRequest, PageResponse } from './request'
import { Gender } from './user'

export interface IStaff {
	id: string
	name: string
	gender: Gender
	occupation: string
	entryTime: string
	resignationTime: string
	company: string
}

export interface IStaffListRequest extends PageRequest {
	keyword?: string
}

export interface IStaffListResponse {
	list: IStaff[]
	pager: PageResponse
}
