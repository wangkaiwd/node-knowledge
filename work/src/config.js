
import React from 'react'
import Home from 'src/pages/home'
import MyTable from 'src/pages/table'
import MyModal from 'src/pages/modal'
const Option = () => <div>option</div>
// 左侧导航配置文件
export const leftNavConfig = [
  {
    key: '1',
    icon: 'switcher',
    content: 'tab切换',
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
    content: '模态框',
    child: [
      {
        key: '3-1',
        icon: '',
        href: '/modal',
        content: 'option1',
        component: MyModal,
      }
    ]
  },
  {
    key: '4',
    icon: 'mail',
    content: '文件夹',
    child: [
      {
        key: '4-1',
        icon: '',
        content: 'option1',
        href: '/option',
        component: Option,
      },
    ]
  }
]
