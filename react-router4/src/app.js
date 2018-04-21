import React, { Component } from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
    NavLink
} from 'react-router-dom'


export default class App extends Component {
    constructor() {
        super();
    }
    render() {
        /** 
         *  最初使的路由相关API必须嵌套在Router中，否则会报错
         *  Router组件中必选只有一个根元素，否则也会报错
         * */
        return (
            <Router>
                <div>
                    <ul>
                        <li><NavLink to="/index">首页</NavLink></li>
                        <li><NavLink to="/about">关于</NavLink></li>
                        <li><NavLink to="/topics">主题列表</NavLink></li>
                    </ul>

                    <Switch>
                        {/* Switch只会匹配到第一个符合要求的路由 */}
                        <Route path="/" exact component={Index} />
                        <Route path="/index" component={Index} />
                        <Route path="/about" component={About} />
                        <Route path="/topics" component={Topics} />
                        {/* <Redirect to="/" /> */}
                    </Switch>
                </div>
            </Router>
        )
    }
}

// 首页
const Index = () => <div>首页</div>
// 关于
const About = () => <div>关于</div>
// 主题列表
const Topics = () => <div>主题列表</div>