import { ComponentType } from '../types'

// 根据类型获取组件
export const getComponentByType = (type: ComponentType): string => {
	switch (type) {
		case ComponentType.Button:
			return 'Button'
		case ComponentType.Table:
			return 'Table'
		default:
			return ''
	}
}

// 根据组件获取组件类型
export const getTypeByComponent = (component: string): ComponentType => {
	switch (component) {
		case 'Button':
			return ComponentType.Button
		case 'Table':
			return ComponentType.Table
		default:
			return -1
	}
}
