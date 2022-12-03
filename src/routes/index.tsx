import { Suspense, ComponentType } from 'react'
import { createHashRouter } from 'react-router-dom'

import { studyRoutes, apisRoutes, noLayoutRoutes } from './routes'

import ProtectedRoute from '@/components/ProtectedRoute'
import Layout from '@/Layout'
import Dashboard from '@/pages/dashboard'
import NotFound from '@/pages/not-found'
import { IRoute } from '@/types'

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

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      ...setProtectedRoute(studyRoutes),
      ...setProtectedRoute(apisRoutes)
    ]
  },
  ...setProtectedRoute(noLayoutRoutes),
  {
    path: '*',
    element: <NotFound />
  }
])

export default router
