import React,{Component} from 'react';
import {render} from 'react-dom';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

/**
 * @description 
 * 实现一个tab选项卡组件，可以通过遍历实现任意个数，并且可以进行内容切换，
 * 刷新页面时依旧显示当前tab选项卡和对应的页面
 * @author wangkaiwd
 * @export
 * @class MyTabs
 */
export default class MyTabs extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>   
        );
    }
}

render(<Tabs />, document.getElementById('box'));

