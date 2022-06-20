import { MenuItem } from './../types/route'
import { apisRoutes, studyRoutes } from './routes'

export const menu: MenuItem[] = [
	{
		title: '首页',
		icon: '',
		path: '/dashboard',
		key: 'dashboard'
	},
	{
		title: '学习',
		icon: '',
		key: 'study',
		children: studyRoutes
	},
	{
		title: '接口调用',
		icon: '',
		key: 'apis',
		children: apisRoutes
	}
]
