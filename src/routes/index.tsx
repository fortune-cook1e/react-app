import React, { Suspense, ComponentType } from 'react'
import { useRoutes } from 'react-router-dom'
import ProtectedRoute from '@/components/ProtectedRoute'
import NotFound from '@/pages/not-found'
import { IRoute } from '@/types'
import { routes } from './routes'

interface LazyComponentProps {
	component: ComponentType
	needProtect?: boolean
}

// 懒加载、路由拦截
function setProtectedComponent(props: LazyComponentProps) {
	const { component, needProtect = true } = props
	const Component = component
	return (
		<Suspense fallback={<div>加载中...</div>}>
			{needProtect ? (
				<ProtectedRoute>
					<Component />
				</ProtectedRoute>
			) : (
				<Component />
			)}
		</Suspense>
	)
}

const setProtectedRoute = (routes: IRoute[]): IRoute[] => {
	if (!routes.length) return []
	// 遍历增加权限HOC
	routes.forEach((route: IRoute) => {
		const { meta, element } = route
		const Component = element
		route.element = setProtectedComponent({ component: Component, needProtect: meta?.auth })
		!!route?.children && setProtectedRoute(route.children)
	})
	return routes
}

const protectedRoutes = setProtectedRoute(routes)

const RouteElement = (): JSX.Element | null => {
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
