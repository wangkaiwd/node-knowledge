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
import "./leftNav.less"

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { Header, Sider, Content } = Layout;
/**
 * @todo:
 * 1. 当有子菜单时还要进行遍历
 * 2. 路由到4.0后，组件对应的路由属性获取方式
 */
export default class LeftNav extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
            defaultSelectedKeys: ['1'],
        };
    }
    componentWillMount = () => {
        this.setDefault();
    }
    // 左侧导航的收合
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    // 设置默认激活id
    setDefault = () => {
        const { pathname } = this.props.location;
        leftNavConfig.map(
            item => item.href === pathname && this.setState({ defaultSelectedKeys: [item.key] })
        )
    }
    render() {
        /**
         * 如果父组件中没有配置路由的话
         * this.props对象中是不会有关于路由的对象的
         * 像this.props.history.push,this.props.match是没有办法使用的
         * 
        */
        return (
            <Layout className="leftnav">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        onClick={(e) => this.props.history.push(leftNavConfig[e.key - 1].href)}
                        mode="inline"
                        defaultSelectedKeys={this.state.defaultSelectedKeys}>
                        {
                            leftNavConfig.map(item => (
                                <Menu.Item key={item.key}>
                                    <Icon type={item.icon} />
                                    <span>{item.content}</span>
                                </Menu.Item>
                            ))
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="leftnav-header">
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content className="leftnav-content">
                        <Switch>
                            {
                                leftNavConfig.map(
                                    item => <Route
                                        path={item.href}
                                        component={item.component}
                                        key={item.key}
                                    />)
                            }
                            {/* 由于使用了Switch,所以在匹配到其它自己没有配置的路由会跳转到'/tab' */}
                            <Redirect to="/tab" />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}