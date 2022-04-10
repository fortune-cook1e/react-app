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
			},
			{
				title: '图片懒加载',
				path: '/lazy-loading',
				name: 'lazy-loading'
			},
			{
				title: 'react-apis 学习',
				path: '/apis',
				name: 'apis'
			}
		]
	}
]
