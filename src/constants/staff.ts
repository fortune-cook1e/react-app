import { Occupation, Department } from '@/types'

export const OCCUPATION_OPTIONS = [
	{
		label: '前端工程师',
		value: Occupation.FrontEnd
	},
	{
		label: 'Golang后端工程师',
		value: Occupation.Golang
	},
	{
		label: 'PHP后端工程师',
		value: Occupation.PHP
	},
	{
		label: '大数据工程师',
		value: Occupation.BigData
	},
	{
		label: '测试工程师',
		value: Occupation.TestEngineer
	},
	{
		label: '项目经理',
		value: Occupation.ProjectManager
	},
	{
		label: '运营经理',
		value: Occupation.OperationsManager
	},
	{
		label: '未知',
		value: Occupation.Unknown
	}
]

export const DEPARTMENT_OPTIONS = [
	{
		label: '集团',
		value: Department.Group
	},
	{
		label: '哥伦布',
		value: Department.Columbus
	},
	{
		label: '前哨',
		value: Department.Outpost
	},
	{
		label: 'CDP',
		value: Department.CDP
	},
	{
		label: 'MAP',
		value: Department.MAP
	},
	{
		label: '产研中台',
		value: Department.ProductionPlatform
	},
	{
		label: '全民营销',
		value: Department.Qmyx
	},
	{
		label: '鹰眼',
		value: Department.Eagle
	},
	{
		label: '业务中台',
		value: Department.BusinessPlatform
	},
	{
		label: '人力资源部',
		value: Department.HR
	},
	{
		label: 'AI云店',
		value: Department.AiCard
	},
	{
		label: '活动中心',
		value: Department.ActivityCenter
	},
	{
		label: 'AIoT',
		value: Department.AIoT
	},
	// {
	// 	label: 'SVIP',
	// 	value: Department.SVIP
	// },
	{
		label: '未知',
		value: Department.Unknown
	}
]
