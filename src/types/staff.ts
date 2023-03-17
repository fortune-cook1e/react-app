import { PageRequest, PageResponse } from './request'
import { Gender } from './user'

export interface IStaff {
  id: string
  name: string
  gender: Gender
  occupation: string
  entry_time: string
  resignation_time: string
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
  Columbus = 'columbus',
  Eagle = 'eagle',
  BusinessPlatform = 'businessPlatform',
  HR = 'hr',
  ProductionPlatform = 'productionPlatform',
  AiCard = 'aiCard',
  Qmyx = 'qmyx',
  ActivityCenter = 'activityCenter',
  AIoT = 'aiot',
  SVIP = 'svip',
  Outpost = 'outpost',
  Group = 'group',
  Unknown = 'unknown'
}
