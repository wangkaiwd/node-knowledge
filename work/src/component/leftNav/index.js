import { Menu, Icon, Button, Layout } from 'antd';
import React, { Component } from 'react';
import { leftNavConfig } from 'src/config';

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
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
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
                                    <span>{item.content}</span>
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
                        Content
                    </Content>
                </Layout>
            </Layout>
        );
    }
}