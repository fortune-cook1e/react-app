import React, { lazy, Suspense, ComponentType } from 'react'
import { useRoutes } from 'react-router-dom'
import ProtectedRoute from '@/components/ProtectedRoute'
import NotFound from '@/pages/not-found'
import { IRoute } from '@/types'
import { routes } from './routes'

interface LazyComponentProps {
	importFunc: () => Promise<{ default: ComponentType<any> }>
	needProtect?: boolean
}

// 懒加载、路由拦截
function LazyComponent(props: LazyComponentProps) {
	const { importFunc, needProtect = true } = props
	const LazyComponent = lazy(importFunc)
	return (
		<Suspense fallback={<div>路由懒加载...</div>}>
			{needProtect ? (
				<ProtectedRoute>
					<LazyComponent />
				</ProtectedRoute>
			) : (
				<LazyComponent />
			)}
		</Suspense>
	)
}

const setProtectedRoute = (routes: IRoute[]): IRoute[] => {
	if (!routes.length) return []
	// 遍历增加权限HOC
	routes.forEach((route: IRoute) => {
		const { meta } = route
		route.element = <LazyComponent importFunc={route.element} needProtect={meta?.auth} />
		!!route?.children && setProtectedRoute(route.children)
	})
	return routes
}

const protectedRoutes = setProtectedRoute(routes)

const RouteElement = (): any => {
	const element = useRoutes([
		...protectedRoutes,

		{
			path: '*',
			element: <NotFound />
		}
	])
	return element
}

export default RouteElement
