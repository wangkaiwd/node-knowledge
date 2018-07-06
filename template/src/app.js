import React, { Component } from 'react'
import { Layout, LocaleProvider } from 'antd'
import { Switch, Route, Redirect } from 'react-router-dom'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import LeftNav from './component/leftNav'
import Login from 'src/pages/login'

export default class App extends Component {
  constructor() {
    super();
  }
  /**
   * @description
   * @todo:
   * 1. 在配置路由的时候碰到一些疑惑，要通过一些demo,
   * 2. 路由的配置方式也应该进行仔细思考
   * 3. 如何进行全局loading页面的配置
   * 4. 匹配不到路由404页面
   */
  render() {
    return (
      <LocaleProvider className="page" locale={zh_CN}>
        <div className="page-content">
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/index" component={LeftNav} />
            <Redirect to="/login" />
          </Switch>
        </div>
      </LocaleProvider>
    )
  }
}
