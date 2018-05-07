/*
 * @Author: wangkai
 * @Date: 2018-05-06 12:43:52
 * @Last Modified by: wangkai
 * @Last Modified time: 2018-05-07 12:42:59
 * @Desc: 抽奖页面
 */

import React, { Component } from 'react';
import { Button } from 'antd';
import './index.less';
import RowItem from './component/rowItem';
import { message } from 'antd'

class LotterDraw extends Component {
  constructor() {
    super()
    this.state = {
      luckId: '',  // 中奖id
      activeId: '', // 激活样式id
      loops: 2, // 循环次数
      isRolling: false, // 是否正在摇奖
    }
    this.handleBegin = this.handleBegin.bind(this);
  }
  // 开始进行抽奖
  handleBegin() {
    this.initLuckData();
    // if (this.state.isRolling) {
    //   message.warning('正在摇奖,请勿重复点击');
    // }
    // debugger;
    // 启动定时器
    // 这里由于setState执行是异步的，所以获取时有可能为''，在赋值之后直接进行获取，
    //      可能得不到更新后的值
    let activeId = 0; // 激活id
    let count = 0; // 用来统计循环次数
    this.timer = setInterval(() => {
      if (activeId == this.state.luckId && this.state.loops <= parseInt(count / 12)) {
        // 定时器虽然清除了，但是函数还会继续执行，执行之后activeId还会++
        this.setState({ isRolling: false });
        return clearInterval(this.timer);
      }
      if (activeId == 11) {
        this.setState({ activeId: -1 });
        activeId = -1;
      }
      // 递增
      activeId++;
      count++;
      this.setState({ activeId: this.state.activeId + 1 });
      // this.state.activeId = this.state.activeId + 1;  this.state.activeId++
      // 所以不能写成this.setState({activeId: this.state.activeId++ });
    }, 60)

  }

  // 初始化抽奖数据
  initLuckData() {
    this.state.luckId = parseInt(Math.random() * 12);
    this.setState({
      luckId: this.state.luckId,
      activeId: 0,
      isRolling: true,
    })
    clearInterval(this.timer);
  }
  render() {
    let activeId = this.state.activeId;
    return (
      <div className="prize">
        <div className="ld-container">
          <div className="ld-contain">
            <div className="row">
              {/* 这里的activeNum是后端给的id,其中可能还包括一些其他的信息 */}
              <RowItem activeId={activeId} activeNum="0" />
              <RowItem activeId={activeId} activeNum="1" />
              <RowItem activeId={activeId} activeNum="2" />
              <RowItem activeId={activeId} activeNum="3" />
            </div>
            <div className="row">
              <RowItem activeId={activeId} activeNum="11" />
              <RowItem activeId={activeId} activeNum="4" />
            </div>
            <div className="row">
              <RowItem activeId={activeId} activeNum="10" />
              <RowItem activeId={activeId} activeNum="5" />
            </div>
            <div className="row">
              <RowItem activeId={activeId} activeNum="9" />
              <RowItem activeId={activeId} activeNum="8" />
              <RowItem activeId={activeId} activeNum="7" />
              <RowItem activeId={activeId} activeNum="6" />
            </div>
            <div className="startbtn-box">
              <Button
                className="startbtn"
                disabled={this.state.isRolling}
                onClick={this.handleBegin}
                type="primary"
              >
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LotterDraw;
