/*
 * @Author: wangkai
 * @Date: 2018-05-07 15:01:16
 * @Last Modified by: wangakiwd
 * @Last Modified time: 2018-06-28 13:56:43
 * @Desc: 首页趋势图页面
 */

import React, { Component } from 'react'
import echarts from 'echarts'
import {
  fetchTodayUserCount,
  fetchTodayOrderCount,
  fetchTodayAdminCount
} from 'src/http/api'
import dayjs from 'dayjs'

// console.log('dayjs', dayjs().subtract(1, 'day').format('YYYY-MM-DD'));
/**
 * FIXME:
 * 1. 俩个图表在页面刷新的时候总是变形(分布图不知道为什么不变形了)
 * 2. 利用组件传值来获取今日数据，而不是频繁发起请求
 */
class SwitchCharts extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount = () => {
    this.initCharts();
    this.getData();
  }
  // 获取数据
  getData = () => {
    const params = {};
    fetchTodayUserCount(params, res => this.setState({ user: res.count }));
    fetchTodayOrderCount(params, res => this.setState({ order: res.count }));
    fetchTodayAdminCount(params, res => this.setState({ admin: res.count }));
  }
  initCharts = () => {
    const switchCharts = echarts.init(this.charts);
    switchCharts.resize();
    const option = {
      title: {
        text: '今日数据趋势图',
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['最高气温', '最低气温', '新增管理员']
      },
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} °C'
        }
      },
      series: [
        {
          name: '最高气温',
          type: 'line',
          data: [11, 11, 15, 13, 12, 13, 10],
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          },
          markLine: {
            data: [
              { type: 'average', name: '平均值' }
            ]
          }
        },
        {
          name: '最低气温',
          type: 'line',
          data: [1, -2, 2, 5, 3, 2, 0],
          markPoint: {
            data: [
              { name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }
            ]
          },
          markLine: {
            data: [
              { type: 'average', name: '平均值' },
              [{
                symbol: 'none',
                x: '90%',
                yAxis: 'max'
              }, {
                symbol: 'circle',
                label: {
                  normal: {
                    position: 'start',
                    formatter: '最大值'
                  }
                },
                type: 'max',
                name: '最高点'
              }]
            ]
          }
        }
      ]
    };
    switchCharts.setOption(option);
    switchCharts.resize();
    window.addEventListener('resize', () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        switchCharts.resize()
      }, 16)
    })
  }
  render() {
    return (
      <div
        className="switch-charts"
        style={{ height: '400px', width: '100%' }}
        ref={(switchCharts) => this.charts = switchCharts}>
      </div>
    )
  }
}
export default SwitchCharts
