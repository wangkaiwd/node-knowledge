
import React from 'react'
import Dashboard from 'src/pages/dashboard'
import Home from 'src/pages/home'
import ShopInfo from 'src/pages/table'
import Prize from 'src/pages/modal'
import Setting from 'src/pages/setting'
import Userdist from 'src/pages/userDist/map'

/**
 * 知识点：
 * 1. key是唯一标识，只要是字符串都可以，并不是只能使用'1','2','3'...等字符串
 * 2. 可以将key设置路由来进行唯一标识
 */

// 左侧导航配置文件
export const leftNavConfig = [
  {
    key: '/dashboard',
    icon: 'dashboard',
    content: 'dashboard',
    component: Dashboard,
  },
  {
    key: '/dataManage',
    icon: 'switcher',
    content: '数据管理',
    child: [
      {
        key: '/dataManage/user',
        icon: 'table',
        content: '人员列表',
        component: Home,
      },
      {
        key: '/dataManage/shop',
        icon: 'table',
        content: '店铺管理',
        component: ShopInfo
      },
    ]
  },
  {
    key: '/prize',
    icon: 'gift',
    content: '抽奖',
    component: Prize,
  },
  {
    key: '/charts',
    icon: 'area-chart',
    content: '图表展示',
    child: [
      {
        key: '/charts/userdist',
        icon: '',
        content: '用户分布',
        component: Userdist
      }
    ]
  },
  {
    key: '/setting',
    icon: 'mail',
    content: '设置',
    child: [
      {
        key: '/setting/desc',
        icon: '',
        content: '说明',
        component: Setting,
      },
    ]
  }
]
