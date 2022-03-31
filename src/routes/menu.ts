import { MenuItem } from './../types/route'

export const menu: MenuItem[] = [
	{
		title: '首页',
		icon: '',
		path: '/',
		name: 'home'
	},
	{
		title: '学习页',
		name: 'study',
		icon: '',
		children: [
			{
				title: '主题色',
				path: '/theme',
				name: 'theme'
			},
			{
				title: 'canvas',
				path: '/canvas',
				name: 'canvas'
			}
		]
	}
]
