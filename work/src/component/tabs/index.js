import React, { Component } from 'react';
import { Tabs } from 'antd';
import { Switch, } from 'react-router-dom'
const TabPane = Tabs.TabPane;
import './tabs.less';
/**
 * @description 传入tab配置即可进行tab页面的渲染
 * @author wangkaiwd
 * @export
 * @class MyTabs
 * @extends {Component}
 * @todo:
 *  在页面进行刷新的时候如何保证当前激活的tab不进行变化
 * 暂时解决方法：
 *  1. 在配置项中传入tab对应页面组件的路由，通过路由进行控制
 *  2. 将激活tab的索引值存入sessionStorage中
 */
export default class MyTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: '1',
    }
  }
  componentWillMount = () => {

  }
  handleTabClick = (e) => {
    const { history, path } = this.props
    this.setState({ activeKey: e });
  }
  render() {
    const { tabConfig } = this.props
    return (
      <div className="tabs">
        <Tabs activeKey={this.state.activeKey} onTabClick={this.handleTabClick}>
          {tabConfig.map(item => (
            <TabPane tab={item.title} key={item.key}> {<item.link />} </TabPane>
          ))}
        </Tabs>
      </div >
    )
  }
}
