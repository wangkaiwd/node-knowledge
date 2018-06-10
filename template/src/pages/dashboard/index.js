/*
 * @Author: wangkai
 * @Date: 2018-05-06 14:20:31
 * @Last Modified by: wangakiwd
 * @Last Modified time: 2018-06-10 17:39:44
 * @Desc: 仪表盘页面
 * 主要进行一些数据的展示
 */
import React, { Component } from 'react'
import { Card, Button, message } from 'antd';
import Tabs from 'src/component/tabs';
import Today from './component/today';
import Total from './component/total';
import SwitchChars from './component/switchCharts'
import {
  fetchTodayUserCount,
  fetchTodayOrderCount,
  fetchTodayAdminCount
} from 'src/http/api'
import "./index.less"
import * as minix from "src/utils/minix";
class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      todayData: [],
      totalData: [],
    }
    this.tabConfig = [
      { title: '当日数据', key: '1', link: Today },
      { title: '总数据', key: '2', link: Total }
    ]
  }
  componentWillMount = () => {
    this.loginMonitor();
  }
  // 登录检测
  loginMonitor = () => {
    const userInfo = minix.getItem('userInfo');
    if (!userInfo) {
      this.props.history.push('/login');
      message.warning('请先登录!');
    }
  }
  render() {
    return (
      <div className="dashboard">
        <div className="page-content">
          <Card title="数据统计">
            <Tabs
              tabConfig={this.tabConfig}
            />
          </Card>
          <div className="dashboard-charts">
            <SwitchChars></SwitchChars>
          </div>
        </div>
      </div>
    )
  }
}
export default Dashboard
