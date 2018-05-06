/*
 * @Author: wangkai
 * @Date: 2018-05-06 14:20:31
 * @Last Modified by: wangkai
 * @Last Modified time: 2018-05-06 17:07:11
 * @Desc: 仪表盘页面
 * 主要进行一些数据的展示
 */
import React, { Component } from 'react'
import * as minix from "src/utils/minix";
class Dashboard extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount = () => {
    this.loginMonitor();
  }
  // 登录检测
  loginMonitor = () => {
    const userInfo = minix.getItem('userInfo');
    // console.log('login');
    if (!userInfo) {
      console.log('userInfo', userInfo);
      this.props.history.push('/login');
      // message.warning('请先登录!');
    }
  }
  render() {
    return (
      <div>
        Dashboard
     </div>
    )
  }
}
export default Dashboard
