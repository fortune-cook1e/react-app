import { getUniqueId } from './../../../utils/index'
import { ComponentData } from '../types'

interface UseComponentsResponse {
	componentData: ComponentData[]
}

export const useComponents = (): UseComponentsResponse => {
	return {
		componentData: [
			{
				id: 'button',
				componentId: 'Button',
				name: '按钮组件'
			},
			{
				id: 'Picture',
				componentId: 'Picture',
				name: '图像组件'
			}
		]
	}
}
