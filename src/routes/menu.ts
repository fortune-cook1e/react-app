import { MenuItem } from './../types/route'
import { moduleRoutes, studyRoutes } from './routes'

// 菜单分为这么几个类别：
// 1. 功能实现(前后端结合)
// 3. Demo实现

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
        path: '/three',
        title: 'ThreeJs',
        key: 'three'
      },
      {
        path: '/charts',
        title: '图表',
        key: 'charts'
      }
    ]
  },
  {
    title: '功能实现',
    icon: '',
    key: 'apis',
    children: [
      ...moduleRoutes,
      {
        title: '可视化配置',
        key: 'visual',
        path: '/visual'
      }
    ]
  }
]
