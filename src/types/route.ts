import type { RouteObject } from 'react-router-dom'

export interface IRoute extends RouteObject {
	path?: string
	element: any
	title: string
	key: string
	children?: IChildRoute[]
	icon?: string
	meta?: {
		menu: boolean
		auth: boolean
	}
}

export type IChildRoute = Omit<IRoute, 'children' | 'icon'>

export interface MenuItem {
	title: string
	icon: string
	path?: string
	key: string
	children?: ChildMenuItem[]
}

export interface ChildMenuItem {
	title: string
	path?: string
	key: string
	children?: ChildMenuItem[]
}
