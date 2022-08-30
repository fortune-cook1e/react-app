import { getUniqueId } from '@/utils'
import {
	PageConfig,
	MaterialComponentData,
	EngineComponentType,
	EngineComponentData
} from '../types'

// 左侧组件列表数据
// TIP: 每次增加一个组件需要在以下地方同步处理
// 1. utils 枚举和组件类型的映射
// 2. types 组件类型枚举
// 3. CanvasComponentData 组件类型
export const MATERIAL_LIST: MaterialComponentData[] = [
	{
		id: 'button',
		cmpType: EngineComponentType.Button,
		name: '按钮',
		style: {},
		values: {
			text: '默认文本',
			type: 'primary',
			disabled: false
		}
	},
	{
		id: 'employee',
		cmpType: EngineComponentType.Employee,
		name: '员工管理',
		style: {},
		values: {
			page: 1,
			pageSize: 10
		}
	}
]

export const DEFAULT_PAGE_CONFIG: PageConfig = {
	style: {},
	title: '默认标题'
}

export const DEFAULT_ENGINE_DATA: EngineComponentData[] = [
	{
		id: 'page',
		uniqueId: getUniqueId(),
		cmpType: EngineComponentType.Page,
		name: '页面配置',
		style: {},
		values: {
			title: '首页',
			style: {}
		}
	}
]

export * from './event'
