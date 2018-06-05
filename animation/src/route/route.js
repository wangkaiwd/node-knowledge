import React from 'react'
import App from '../app'
import Home from '../components/home'
import User from '../components/user'
import Product from '../components/product'
import { Route, hashHistory } from 'react-router'
// 可以通过onEnter函数进行登录验证
const requireAuth = () => {
  if (window.auth) {
    hashHistory.replace('/');
  }
}
const RouteConfig = (
  <Route path="/" component={App}>
    <Route path="/home" component={Home} onEnter={requireAuth}>
      <Route path="/home/user" component={User} />
    </Route>
    <Route path="/product" component={Product} />
  </Route>
)
export default RouteConfig;
