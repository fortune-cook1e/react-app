import { ComponentData, ComponentType } from '../types'

// 左侧组件列表数据
// TIP: 每次增加一个组件需要在以下地方同步处理
// 1. utils 枚举和组件类型的映射
// 2. types 组件类型枚举

export const COMPONENT_LIST: ComponentData[] = [
	{
		id: 'button',
		type: ComponentType.Button,
		name: '按钮'
	},
	{
		id: 'table',
		type: ComponentType.Table,
		name: '表格'
	}
]
