import { RouteConfig } from '@/types'

export const routes: RouteConfig[] = [
	{
		path: '/login',
		element: () => import('@/pages/login')
	},
	{
		path: '/',
		element: () => import('@/Layout'),
		children: [
			{
				index: true,
				element: () => import('@/pages/home'),
				meta: {
					auth: true
				}
			},
			{
				path: '/theme',
				element: () => import('@/pages/theme'),
				meta: {
					auth: false
				}
			},
			{
				path: '/canvas',
				element: () => import('@/pages/canvas'),
				meta: {
					auth: false
				}
			},
			{
				path: '/lazy-loading',
				element: () => import('@/pages/lazy-load'),
				meta: {
					auth: false
				}
			},
			{
				path: '/apis',
				element: () => import('@/pages/react-apis'),
				meta: {
					auth: false
				}
			},
			{
				path: '/demo',
				element: () => import('@/pages/demo')
			},
			{
				path: '/key-page',
				element: () => import('@/pages/key-page'),
				meta: {
					auth: false
				}
			}
		]
	}
]
