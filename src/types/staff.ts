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
	department: string
}

export interface IStaffListRequest extends PageRequest {
	keyword?: string
}

export interface IStaffListResponse {
	list: IStaff[]
	pager: PageResponse
}

export enum Occupation {
	FrontEnd = 'frontEnd',
	PHP = 'php',
	Golang = 'golang',
	ProjectManager = 'projectManager',
	BigData = 'bigData',
	OperationsManager = 'operationsManager',
	TestEngineer = 'testEngineer',
	Unknown = 'unknown'
}

export enum Department {
	Columbus = 'columbus', // 哥伦布
	Eagle = 'eagle',
	BusinessPlatform = 'businessPlatform', // 业务中台
	HR = 'hr',
	ProductionPlatform = 'productionPlatform', // 产研中台
	AiCard = 'aiCard', // AI云店
	Qmyx = 'qmyx', // 全民营销
	ActivityCenter = 'activityCenter', // 活动中心
	AIoT = 'aiot',
	SVIP = 'svip',
	Outpost = 'outpost', // 前哨
	CDP = 'cdp',
	MAP = 'map',
	Group = 'group', // 集团
	Unknown = 'unknown'
}
