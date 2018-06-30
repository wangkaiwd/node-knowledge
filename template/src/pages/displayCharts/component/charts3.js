import React, { Component } from 'react'
import echarts from 'echarts';
class Charts3 extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount = () => {
    this.initCharts();
  }
  initCharts = () => {
    const charts3 = echarts.init(this.chartsNode);
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['利润', '支出', '收入']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'value'
        }
      ],
      yAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
      ],
      series: [
        {
          name: '利润',
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: 'inside'
            }
          },
          data: [200, 170, 240, 244, 200, 220, 210]
        },
        {
          name: '收入',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true
            }
          },
          data: [320, 302, 341, 374, 390, 450, 420]
        },
        {
          name: '支出',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'left'
            }
          },
          data: [-120, -132, -101, -134, -190, -230, -210]
        }
      ]
    };
    charts3.setOption(option);
    setTimeout(() => {
      charts3.resize();
    }, 8);
    window.addEventListener('resize', () => {
      clearInterval(this.timer);
      this.timer = setTimeout(() => {
        charts3.resize();
      }, 16);
    })
  }
  render() {
    return (
      <div
        className="charts-item"
        ref={(node) => this.chartsNode = node}
        style={{ width: '100%', height: '600px' }}
      >
      </div >
    )
  }
}
export default Charts3
