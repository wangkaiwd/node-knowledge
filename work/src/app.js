import React, { Component } from 'react'
import { Layout, Menu, Icon, LocaleProvider } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import LeftNav from './component/leftNav'
import Home from "src/pages/home";
const { Header, Sider, Content } = Layout;


export default class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <LocaleProvider className="page" locale={zh_CN}>
                <div className="page-content">
                    <LeftNav />
                </div>
            </LocaleProvider>
        )
    }
}