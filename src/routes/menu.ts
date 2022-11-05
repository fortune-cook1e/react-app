import { MenuItem } from './../types/route'
import { apisRoutes, studyRoutes } from './routes'

export const menu: MenuItem[] = [
  {
    title: '首页',
    icon: '',
    path: '/',
    key: 'dashboard'
  },
  {
    title: '学习',
    icon: '',
    key: 'study',
    children: [
      ...studyRoutes,
      {
        title: '编辑器',
        key: 'editor',
        path: '/editor'
      },
      {
        title: '可视化',
        key: 'visual',
        path: '/visual'
      }
    ]
  },
  {
    title: '接口调用',
    icon: '',
    key: 'apis',
    children: apisRoutes
  }
]
