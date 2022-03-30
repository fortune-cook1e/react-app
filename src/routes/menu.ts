import { MenuItem } from './../types/route'

export const menu: MenuItem[] = [
	{
		title: '首页',
		icon: '',
		path: '/'
	},
	{
		title: '学习页',
		icon: '',
		children: [
			{
				title: '主题色',
				path: '/theme'
			}
		]
	}
]
