import { Menu, Icon, Button, Layout } from 'antd';
import React, { Component } from 'react';
import { leftNavConfig } from 'src/config';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
} from 'react-router-dom'
import Home from "src/pages/home";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { Header, Sider, Content } = Layout;


export default class LeftNav extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
        };
    }
    // 左侧导航的收合
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        /**
         * 如果父组件中没有配置路由的话
         * this.props对象中是不会有关于路由的对象的
         * 像this.props.history.push,this.props.match是没有办法使用的
         * 
        */
        const { history } = this.props;
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        {
                            leftNavConfig.map(item => (
                                <Menu.Item key={item.key}>
                                    <Icon type={item.icon} />
                                    <span onClick={() => history.push(item.href)}>{item.content}</span>
                                </Menu.Item>
                            ))
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <Switch>
                            <Route path="/tab" component={Home} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}