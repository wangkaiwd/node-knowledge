/*
 * @Author: wangkai
 * @Date: 2018-05-06 14:31:51
 * @Last Modified by: wangkaiwd
 * @Last Modified time: 2018-06-30 12:40:53
 * @Desc: 用户分布信息图
 */
import React, { Component } from 'react'
import { fetchUserCityCount } from 'src/http/api'
import echarts from 'echarts'
import './map.less'
class map extends Component {
  constructor() {
    super()
    this.state = {
      city: {},
    }
  }
  componentDidMount = () => {
    const container = document.querySelector('.map-container');
    const userDistCharts = echarts.init(container);
    this.setState({ userDistCharts }, () => {
      this.getData();
    })
  }
  getData = () => {
    const { userDistCharts } = this.state;
    userDistCharts.showLoading();
    fetchUserCityCount({},
      res => {
        userDistCharts.hideLoading();
        this.setState({ city: res.user_city },
          () => this.initCharts()
        )
      });
  }
  initCharts = () => {
    const { userDistCharts } = this.state;
    const { beijing, shanghai, hangzhou, shenzhen, qita } = this.state.city;
    const option = {
      title: {
        text: '用户分布',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['北京', '上海', '深圳', '杭州', '其它']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: beijing, name: '北京' },
            { value: shanghai, name: '上海' },
            { value: shenzhen, name: '深圳' },
            { value: hangzhou, name: '杭州' },
            { value: qita, name: '其它' }
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
    userDistCharts.resize();
    // debugger
    window.addEventListener('resize', () => {
      userDistCharts.resize();
    })
  }
  render() {
    return (
      <div className="map-container" style={{ width: '100%', height: '100%' }}>
      </div>
    )
  }
}
export default map
