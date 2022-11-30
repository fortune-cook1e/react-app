import { lazy } from 'react'

import { IRoute } from '@/types'

export const studyRoutes: IRoute[] = [
  // {
  //   path: '/dashboard',
  //   element: lazy(() => import('@/pages/dashboard')),
  //   title: 'Dashboard',
  //   key: 'dashboard'
  // },
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
  },
  {
    path: '/desktop',
    element: lazy(() => import('@/pages/desktop')),
    title: 'desktop',
    key: 'desktop'
  },
  {
    path: '/rtc',
    element: lazy(() => import('@/pages/web-rtc')),
    title: 'webRTC',
    key: 'webRtc'
  },
  {
    path: '/unit',
    element: lazy(() => import('@/pages/unit-test')),
    title: '单元测试',
    key: 'unitTest'
  }
]

// 调koa-app APi相关路由
export const apisRoutes: IRoute[] = [
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

export const noLayoutRoutes: IRoute[] = [
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
