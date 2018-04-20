import React, { Component } from 'react'
import { Layout, Menu, Icon, LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import LeftNav from './component/leftNav'
const { Header, Sider, Content } = Layout;


export default class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <LocaleProvider className="page" locale={zh_CN}>
                <LeftNav />
            </LocaleProvider>
        )
    }
}