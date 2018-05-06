
import React from 'react'
import Dashboard from 'src/pages/dashboard'
import Home from 'src/pages/home'
import ShopInfo from 'src/pages/table'
import Prize from 'src/pages/modal'
import Setting from 'src/pages/setting'
import Userdist from 'src/pages/userDist/map'
// 左侧导航配置文件
export const leftNavConfig = [
  {
    key: '1',
    icon: 'dashboard',
    content: 'dashboard',
    href: '/dashboard',
    component: Dashboard,
  },
  {
    key: '2',
    icon: 'switcher',
    content: '数据管理',
    // href: '/tab',
    // component: Home,
    child: [
      {
        key: '2-1',
        icon: 'table',
        content: '人员列表',
        href: '/table',
        component: Home,
      },
      {
        key: '2-2',
        icon: 'table',
        content: '店铺管理',
        href: '/tab',
        component: ShopInfo
      },
    ]
  },
  // {
  //   key: '2',
  //   icon: 'table',
  //   content: '店铺信息',
  //   href: '/table',
  //   component: MyTable
  // },
  {
    key: '3',
    icon: 'gift',
    content: '抽奖',
    href: '/prize',
    component: Prize,
  },
  {
    key: '4',
    icon: 'area-chart',
    content: '图表展示',
    child: [
      {
        key: '4-1',
        icon: '',
        content: '用户分布',
        href: '/userdist',
        component: Userdist
      }
    ]
  },
  {
    key: '5',
    icon: 'mail',
    content: '设置',
    child: [
      {
        key: '5-1',
        icon: '',
        content: '说明',
        href: '/setting',
        component: Setting,
      },
    ]
  }
]
