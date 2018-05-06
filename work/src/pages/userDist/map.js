/*
 * @Author: wangkai
 * @Date: 2018-05-06 14:31:51
 * @Last Modified by: wangkai
 * @Last Modified time: 2018-05-06 15:39:40
 * @Desc: echarts地图
 */
import React, { Component } from 'react'
import echarts from 'echarts'
import './map.less'
class map extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount = () => {
    this.initCharts();
  }
  initCharts = () => {
    const userDistCharts = echarts.init(this.echartsNode);
    const option = {
      title: {
        text: '用户分布',
        subtext: '纯属虚构',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    userDistCharts.setOption(option);
  }
  render() {
    return (
      <div className="map" ref={(echartsNode) => this.echartsNode = echartsNode}>

      </div>
    )
  }
}
export default map
