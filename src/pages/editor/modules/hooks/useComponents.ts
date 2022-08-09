import { lazy } from 'react'
import { ComponentData } from '../../types'

interface UseComponentsResponse {
	componentData: ComponentData[]
}

export const useComponents = (): UseComponentsResponse => {
	return {
		componentData: [
			{
				id: 'Button',
				name: 'Button',
				component: lazy(() => import('../../components/Button'))
			},
			{
				id: 'Picture',
				name: 'Picture',
				component: lazy(() => import('../../components/Picture'))
			}
		]
	}
}
