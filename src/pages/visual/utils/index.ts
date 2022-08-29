import { EngineComponentType } from '../types/index'

// 根据类型获取组件
export const getComponentByType = (type: EngineComponentType): string => {
	switch (type) {
		case EngineComponentType.Button:
			return 'Button'
		case EngineComponentType.Employee:
			return 'Employee'
		default:
			return ''
	}
}

// 根据组件获取组件类型
export const getTypeByComponent = (component: string): EngineComponentType => {
	switch (component) {
		case 'Button':
			return EngineComponentType.Button
		case 'Table':
			return EngineComponentType.Table
		default:
			return -1
	}
}
