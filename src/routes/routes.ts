import { lazy } from 'react'

import { IRoute } from '@/types'

export const studyRoutes: IRoute[] = [
  // {
  //   path: '/dashboard',
  //   lazyElement: lazy(() => import('@/pages/dashboard')),
  //   title: 'Dashboard',
  //   key: 'dashboard'
  // },
  {
    path: '/lazy-load',
    lazyElement: lazy(() => import('@/pages/lazy-load')),
    title: '图片懒加载',
    key: 'lazyLoad'
  },
  {
    path: '/index-db',
    lazyElement: lazy(() => import('@/pages/indexDb')),
    title: 'IndexDB',
    key: 'indexDb'
  },
  {
    path: '/desktop',
    lazyElement: lazy(() => import('@/pages/desktop')),
    title: 'desktop',
    key: 'desktop'
  },
  {
    path: '/web-rtc',
    lazyElement: lazy(() => import('@/pages/web-rtc')),
    title: 'webRTC',
    key: 'webRtc'
  },
  {
    path: '/unit',
    lazyElement: lazy(() => import('@/pages/unit-test')),
    title: '单元测试',
    key: 'unitTest'
  },
  {
    path: '/patters',
    lazyElement: lazy(() => import('@/pages/patterns')),
    title: 'patterns',
    key: 'patterns'
  },
  {
    path: '/carousel',
    lazyElement: lazy(() => import('@/pages/carousel')),
    title: 'Carousel',
    key: 'carousel'
  },
  {
    path: '/play-ground',
    lazyElement: lazy(() => import('@/pages/play-ground')),
    title: 'PlayGround',
    key: 'playGround'
  },
  {
    path: '/functions',
    lazyElement: lazy(() => import('@/pages/functions')),
    title: 'Functions',
    key: 'Functions'
  }
]

// 大模块功能 前后端配合
export const moduleRoutes: IRoute[] = [
  {
    path: '/user-management',
    lazyElement: lazy(() => import('@/pages/user-management')),
    title: '用户管理',
    key: 'userManagement'
  },
  {
    path: '/staff',
    lazyElement: lazy(() => import('@/pages/staff')),
    title: '员工管理',
    key: 'staff'
  },
  {
    title: '可视化列表',
    key: 'visualManagement',
    path: '/visual-management',
    lazyElement: lazy(() => import('@/pages/visual-management'))
  },
  {
    path: '/web-socket',
    lazyElement: lazy(() => import('@/pages/web-socket')),
    title: 'webSocket',
    key: 'webSocket'
  }
]

export const noLayoutRoutes: IRoute[] = [
  {
    path: '/editor',
    lazyElement: lazy(() => import('@/pages/editor')),
    title: '编辑器',
    key: 'editor'
  },
  {
    path: '/visual',
    lazyElement: lazy(() => import('@/pages/visual')),
    title: '可视化',
    key: 'visual'
  },
  {
    path: '/three',
    lazyElement: lazy(() => import('@/pages/three-dimension')),
    title: 'ThreeJs',
    key: 'three'
  },

  {
    path: '/charts',
    lazyElement: lazy(() => import('@/pages/charts')),
    title: '图表',
    key: 'charts'
  },
  {
    path: '/login',
    lazyElement: lazy(() => import('@/pages/login')),
    title: '登录',
    key: 'login'
  },
  {
    path: '/three',
    lazyElement: lazy(() => import('@/pages/three-dimension')),
    title: 'ThreeJs',
    key: 'three'
  }
]
