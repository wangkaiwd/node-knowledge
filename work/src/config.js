
import React from 'react'
import Home from 'src/pages/home'
import MyTable from 'src/pages/table'
import Prize from 'src/pages/modal'
import Setting from 'src/pages/setting'
// const Option = () => <div>option</div>
// 左侧导航配置文件
export const leftNavConfig = [
  {
    key: '1',
    icon: 'switcher',
    content: '列表管理',
    href: '/tab',
    component: Home
  },
  {
    key: '2',
    icon: 'table',
    content: '店铺信息',
    href: '/table',
    component: MyTable
  },
  {
    key: '3',
    icon: 'folder-add',
    content: '抽奖',
    href: '/prize',
    component: Prize,
  },
  {
    key: '4',
    icon: 'mail',
    content: '设置',
    child: [
      {
        key: '4-1',
        icon: '',
        content: '说明',
        href: '/setting',
        component: Setting,
      },
    ]
  }
]
