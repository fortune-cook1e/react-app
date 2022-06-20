import { IRoute, IChildRoute } from '@/types'

export const studyRoutes: IChildRoute[] = [
	{
		path: '/theme',
		element: () => import('@/pages/theme'),
		title: '主题色',
		key: 'theme'
	},
	{
		path: '/canvas',
		element: () => import('@/pages/canvas'),
		title: 'Canvas',
		key: 'canvas'
	},
	{
		path: '/lazy-load',
		element: () => import('@/pages/lazy-load'),
		title: '图片懒加载',
		key: 'lazyLoad'
	}
]

// 调koa-app APi相关路由
export const apisRoutes: IChildRoute[] = [
	{
		path: '/user-management',
		element: () => import('@/pages/user-management'),
		title: '用户管理',
		key: 'userManagement'
	}
]

export const routes: IRoute[] = [
	{
		path: '/',
		element: () => import('@/Layout'),
		title: 'home',
		key: 'home',
		icon: '',
		children: [
			{
				path: '/dashboard',
				element: () => import('@/pages/dashboard'),
				title: '首页',
				key: 'dashboard'
			},
			...studyRoutes,
			...apisRoutes
		]
	}
]
