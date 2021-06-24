import React, { lazy } from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'

const Root = ({ route }: { route: RouteConfig }): any =>
	renderRoutes(route.routes)

export const routes: any = [
	{
		component: Root,
		routes: [
			{
				path: '/',
				exact: true,
				component: lazy(() => import('@/pages/home'))
			},
			{
				path: '/redux',
				exact: true,
				component: lazy(() => import('@/pages/redux'))
			},
			{
				path: '/timeout',
				exact: true,
				component: lazy(() => import('@/pages/timeout'))
			}
		]
	}
]
