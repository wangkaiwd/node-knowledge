import React from 'react'
import Dashboard from 'src/pages/dashboard'
import Home from 'src/pages/home'
import ShopInfo from 'src/pages/table'
import Setting from 'src/pages/setting'
import Userdist from 'src/pages/userDist/map'
import Introduce from 'src/pages/introduce'
import GoodsList from './pages/home/goodsList'
import OrderList from './pages/home/orderList'
import AddShop from './pages/addData/shop'
import AddGoods from './pages/addData/goods'

/**
 * 知识点：
 * 1. key是唯一标识，只要是字符串都可以，并不是只能使用'1','2','3'...等字符串
 * 2. 可以将key设置为路由地址来进行唯一标识
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
      {
        key: '/dataManage/orderList',
        icon: '',
        content: '订单列表',
        component: OrderList,
      },
      {
        key: '/dataManage/goodsList',
        icon: '',
        content: '商品列表',
        component: GoodsList,
      },
    ]
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
    key: '/add',
    icon: 'file-add',
    content: '添加数据',
    child: [
      {
        key: '/add/shop',
        icon: '',
        content: '添加商铺',
        component: AddShop,
      },
      {
        key: '/add/goods',
        icon: '',
        content: '添加商品',
        component: AddGoods,
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
        content: '管理员设置',
        component: Setting,
      },
    ]
  },
  {
    key: '/detail',
    icon: 'profile',
    content: '说明',
    child: [
      {
        key: '/detail/intro',
        icon: '',
        content: '说明',
        component: Introduce,
      }
    ]
  }
]
