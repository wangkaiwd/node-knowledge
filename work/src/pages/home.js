import React, { Component } from 'react';
import MyTabs from '../component/tabs/index';
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            tabConfig: [
                {title:'主页',key:'1',content:Con1},
                {title:'商品',key:'2',content:Con2}
            ]
        }
    }
    render() {
        console.log(this.state.tabConfig);
        return (
            <div>
                <MyTabs 
                    tabConfig={this.state.tabConfig}
                />
            </div>
        ) 
    }   
}

const Con1 = () => (
    <h2>
        内容1
    </h2>
)
const Con2 = () => (
    <h2>
        内容2
    </h2>
)