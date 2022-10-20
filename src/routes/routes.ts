import { lazy } from 'react'

import { IRoute, IChildRoute } from '@/types'

export const studyRoutes: IChildRoute[] = [
  {
    path: '/lazy-load',
    element: lazy(() => import('@/pages/lazy-load')),
    title: '图片懒加载',
    key: 'lazyLoad'
  },
  {
    path: '/index-db',
    element: lazy(() => import('@/pages/indexDb')),
    title: 'IndexDB',
    key: 'indexDb'
  }
]

// 调koa-app APi相关路由
export const apisRoutes: IChildRoute[] = [
  {
    path: '/user-management',
    element: lazy(() => import('@/pages/user-management')),
    title: '用户管理',
    key: 'userManagement'
  },
  {
    path: '/staff',
    element: lazy(() => import('@/pages/staff')),
    title: '员工管理',
    key: 'staff'
  },
  {
    title: '可视化列表',
    key: 'visualManagement',
    path: '/visual-management',
    element: lazy(() => import('@/pages/visual-management'))
  }
]

export const routes: IRoute[] = [
  {
    path: '/',
    element: lazy(() => import('@/Layout')),
    title: 'home',
    key: 'home',
    icon: '',
    children: [
      {
        index: true,
        element: lazy(() => import('@/pages/dashboard')),
        title: 'dashboard',
        key: 'dashboard2'
      },
      {
        path: '/dashboard',
        element: lazy(() => import('@/pages/dashboard')),
        title: '首页',
        key: 'dashboard'
      },
      ...studyRoutes,
      ...apisRoutes
    ]
  },
  {
    path: '/editor',
    element: lazy(() => import('@/pages/editor')),
    title: '编辑器',
    key: 'editor'
  },
  {
    path: '/visual',
    element: lazy(() => import('@/pages/visual')),
    title: '可视化',
    key: 'visual'
  },
  {
    path: '/login',
    element: lazy(() => import('@/pages/login')),
    title: '登录',
    key: 'login',
    icon: ''
  }
]
