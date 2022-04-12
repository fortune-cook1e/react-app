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
			},
			{
				path: '/lazy-loading',
				element: () => import('@/pages/lazy-load'),
				meta: {
					requiredLogin: false
				}
			},
			{
				path: '/apis',
				element: () => import('@/pages/react-apis'),
				meta: {
					requiredLogin: false
				}
			},
			{
				path: '/key-page',
				element: () => import('@/pages/key-page'),
				meta: {
					requiredLogin: false
				}
			}
		]
	}
]
