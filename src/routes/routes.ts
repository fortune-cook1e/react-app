import { IRoute, IChildRoute } from '@/types'

export const studyRoutes: IChildRoute[] = [
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
	},
	{
		path: '/staff',
		element: () => import('@/pages/staff'),
		title: '员工管理',
		key: 'staff'
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
	},
	{
		path: '/login',
		element: () => import('@/pages/login'),
		title: '登录',
		key: 'login',
		icon: ''
	}
]
