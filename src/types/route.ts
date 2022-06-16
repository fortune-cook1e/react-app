import type { RouteObject } from 'react-router-dom'
export interface RouteConfig extends RouteObject {
	path?: string
	element: any
	children?: RouteConfig[]
	meta?: {
		title?: string // 标题
		auth?: boolean // 是否需要登录
	}
}

export interface MenuItem {
	title: string
	icon: string
	path?: string
	name: string
	children?: ChildMenuItem[]
}

export interface ChildMenuItem {
	title: string
	path: string
	name: string
	children?: ChildMenuItem[]
}