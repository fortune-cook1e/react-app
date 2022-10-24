import type { RouteObject } from 'react-router-dom'

export type IRoute = RouteObject & {
  path?: string
  element: any
  title: string
  key: string
  children?: IRoute[]
  icon?: string
  index?: boolean
  meta?: {
    menu: boolean
    auth: boolean
  }
}

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
