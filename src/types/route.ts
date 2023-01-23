import type { LazyExoticComponent } from 'react'
import type { RouteObject } from 'react-router-dom'

export type LazyComponent = LazyExoticComponent<() => JSX.Element>

export type IRoute = RouteObject & {
  path?: string
  element?: any
  // FIXBUG: 用lazyElement 来代替element 解决ts报错问题
  lazyElement: LazyComponent
  title: string
  key: string
  children?: IRoute[]
  index?: boolean
  meta?: {
    menu: boolean
    auth: boolean
  }
}

export interface MenuItem {
  title: string
  icon?: string
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
