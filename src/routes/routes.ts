import { RouteConfig } from '@/types'

export const routes: RouteConfig[] = [
	{
		path: '/',
		element: () => import('@/Layout'),
		children: [
			{
				index: true,
				element: () => import('@/pages/home'),
				meta: {
					requiredLogin: false
				}
			},
			{
				path: '/theme',
				element: () => import('@/pages/theme'),
				meta: {
					requiredLogin: false
				}
			},
			{
				path: '/canvas',
				element: () => import('@/pages/canvas'),
				meta: {
					requiredLogin: false
				}
			}
		]
	}
]
