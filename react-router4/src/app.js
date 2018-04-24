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
                        <Route path="/index" component={Index} />
                        <Route path="/about" component={About} />
                        <Route path="/topics" component={Topics} />
                        {/* 不管匹配到什么路径都会跳转到 "/",有于使用Switch,已配置的路由不会跳转到'/index' */}
                        {/* <Redirect to="/index" /> */}
                        {/** 
                            当匹配到'/about'的时候会跳转到'/index',
                            但是由于使用了Switch，会在匹配到'/about'时停止匹配
                            所以这样写并不会生效

                            但是在匹配到其它路径的时候还是会返回'/index'
                        */}
                        {/* <Redirect form="/about" to="/index" /> */}
                    </Switch>
                </div>
            </Router>
        )
    }
}

// 首页
const Index = () => (
    <div>
        首页
        <Switch>
            <Route path="/hello" component={Hello} />
            <Route path="/hehe" component={Hehe} />
        </Switch>
    </div>
)
// 关于
const About = () => <div>关于</div>
// 主题列表
const Topics = () => <div>主题列表</div>

const Hello = () => <h2>你好</h2>
const Hehe = () => <h2>呵呵</h2>