interface RouteConfig {
	path: string
	element: any
	children?: RouteConfig[]
	meta: {
		requiredLogin?: boolean // 是否需要登录
	}
}

export const routes: RouteConfig[] = [
	{
		path: '/',
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
	}
]
