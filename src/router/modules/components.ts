import LayoutsDefault from '@/layouts/default.vue'
import type { AppRouteRecordRaw } from '../types'

const componentsRoutes: Array<AppRouteRecordRaw> = [
  {
    name: 'Components',
    meta: {
      title: '组件',
      order: 20,
      icon: 'ScaleToOriginal'
    },
    path: '/comp',
    component: LayoutsDefault,
    redirect: '/comp/icon',
    children: [
      {
        name: 'Icons',
        path: 'icon',
        meta: {
          title: '图标'
        },
        component: () => import('@/views/components/icon/index.vue'),
        redirect: '/comp/icon/element',
        children: [
          {
            name: 'ElementIcons',
            path: 'element',
            component: () => import('@/views/components/icon/ElementIcon.vue'),
            meta: {
              title: 'Element图标'
            }
          },
          {
            name: 'IconPicker',
            path: 'element',
            component: () => import('@/views/components/icon/Picker.vue'),
            meta: {
              title: '图标选择器'
            }
          }
        ]
      },
      {
        name: 'Area',
        path: 'area',
        meta: {
          title: '城市选择器'
        },
        component: () => import('@/views/components/area/index.vue')
      },
      {
        name: 'Trends',
        path: 'trends',
        meta: {
          title: '趋势指示'
        },
        component: () => import('@/views/components/trends/index.vue')
      },
      {
        name: 'NoticeMessage',
        path: 'notice',
        meta: {
          title: '通知菜单'
        },
        component: () => import('@/views/components/notice-message/index.vue')
      }
    ]
  }
]

export default componentsRoutes
