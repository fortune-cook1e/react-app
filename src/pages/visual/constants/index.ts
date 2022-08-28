import { MaterialComponentData, EngineComponentType } from '../types'

// 左侧组件列表数据
// TIP: 每次增加一个组件需要在以下地方同步处理
// 1. utils 枚举和组件类型的映射
// 2. types 组件类型枚举
// 3. CanvasComponentData 组件类型
export const MATERIAL_LIST: MaterialComponentData[] = [
	{
		id: 'button',
		type: EngineComponentType.Button,
		name: '按钮',
		style: {},
		props: {}
	},
	{
		id: 'table',
		type: EngineComponentType.Table,
		name: '表格',
		style: {},
		props: {}
	}
]
