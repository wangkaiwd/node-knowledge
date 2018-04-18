import React, { Component } from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import './tabs.css';
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
    constructor() {
        super();
    }
    render() {
        const { tabConfig } = this.props
        return (
            <div className="tabs">
                <Tabs defaultActiveKey="1">
                    {tabConfig.map( item => (
                        <TabPane tab={item.title} key={item.key}>{<item.content/>}</TabPane>
                    ))}
                </Tabs>
            </div>
        )
    }
}