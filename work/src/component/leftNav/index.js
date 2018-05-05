import {
  Menu,
  Icon,
  Button,
  Layout,
  Card,
  Avatar,
  Popover,
  message,
} from 'antd';
import React, { Component } from 'react';
import { leftNavConfig } from 'src/config';
import { fetchLoginSingout } from 'src/http/api';
import * as minix from "src/utils/minix";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom'
import "./leftNav.less"

const { Meta } = Card;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { Header, Sider, Content } = Layout;
/**
 * @todo:
 * 路由到4.0后，组件对应的路由属性获取方式
 *
 * FIXME:
 *  需求：如果刷新页面之前选中的是二级菜单的话，对应的一级菜单要展开
 *  实现方法：在命名的时候使用 1-1的命名方法，当菜单只有二级的话：默认展开key值为1的就可以
 *  存在问题：当命名方式发生改变或这菜单还有更深的层级时，这种方法会出问题
 */
export default class LeftNav extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
      defaultSelectedKeys: ['1'],
      defaultOpenKeys: [],
      userInfo: minix.getItem('userInfo') || {},
      // 气泡卡片是否显示
      visible: false,
    };
  }
  componentWillMount = () => {
    this.loginMonitor();
    this.setDefault();
  }
  // 登录检测
  loginMonitor = () => {
    const userInfo = minix.getItem('userInfo');
    if (!userInfo) {
      this.props.history.push('/login');
      message.warning('请先登录!');
    }
  }
  //
  singout = () => {
    fetchLoginSingout({}, (res) => {
      message.success(res.success);
    })
    this.props.history.push('/login');
    localStorage.clear();
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
    const { path } = this.props.match;
    // 寻找相同路径
    const findPath = (arrTree) => {
      arrTree.map(item => {
        if (item.child) {
          return findPath(item.child)
        }
        if (`${path}${item.href}` === pathname) {
          this.setState({
            defaultSelectedKeys: [item.key],
            defaultOpenKeys: [item.key.charAt(0)],
          });
        }
      })
    }
    findPath(leftNavConfig);
  }
  // 点击跳转对应路由
  handleMenuClick = (e) => {
    // 寻找相同的key
    const loopClick = (arrTree) => {
      arrTree.map(item => {
        if (item.child) return loopClick(item.child);
        if (item.key === e.key) this.props.history.push(`${this.props.match.path}${item.href}`);
      })
    }
    loopClick(leftNavConfig)
  }
  // 生成对应页面路由
  createRoute = (routeTree) => {
    return (
      routeTree.map(item => {
        if (item.child) return this.createRoute(item.child);
        return <Route key={item.key} path={`${this.props.match.path}${item.href}`} component={item.component} />
      })
    )
  }
  // 递归生成二级菜单
  renderSubMenu = (menuTree) => {
    return (
      <SubMenu
        key={menuTree.key}
        title={
          <span>
            <Icon type={menuTree.icon} />
            <span>{menuTree.content}</span>
          </span>
        }
      >
        {
          menuTree.child.map(
            sub => {
              if (sub.child) return this.renderSubMenu(sub);
              return <Menu.Item key={sub.key}>{sub.content}</Menu.Item>
            }
          )
        }
      </SubMenu>
    )
  }
  handleVisibleChange = (visible) => {
    this.setState({ visible });
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
          <div className="logo">
            <Card
            >
              <Meta
                className={this.state.collapsed ? "hide" : "show"}
                avatar={<Avatar src="../../assets/logo.jpg" />}
                description={this.state.collapsed || "to be stronger"}
              />
            </Card>
          </div>
          <Menu
            theme="dark"
            onClick={this.handleMenuClick}
            mode="inline"
            defaultSelectedKeys={this.state.defaultSelectedKeys}
            defaultOpenKeys={this.state.defaultOpenKeys}
          >
            {leftNavConfig.map(item => {
              // debugger;
              if (item.child) return this.renderSubMenu(item)
              return (
                <Menu.Item key={item.key}>
                  <Icon type={item.icon} />
                  <span>{item.content}</span>
                </Menu.Item>
              )
            })}

          </Menu>
        </Sider>
        <Layout>
          <Header className="leftnav-header">
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <div className="personal-center">
              <Button
                className="ell"
                icon="github"
                onClick={() => location.href = "https://github.com/wangkaiwd"}
              >
                github
              </Button>
              <Popover
                content={<a onClick={this.singout}>singout</a>}
                trigger="click"
                visible={this.state.visible}
                onVisibleChange={this.handleVisibleChange}
              >
                <Button
                  className="ell"
                  title={this.state.userInfo.user_name}
                  icon="user"
                >
                  {this.state.userInfo.user_name}
                </Button>
              </Popover>

            </div>
          </Header>
          <Content className="leftnav-content">
            <Switch>
              {this.createRoute(leftNavConfig)}
              {/* 由于使用了Switch,所以在匹配到其它自己没有配置的路由会跳转到'/tab' */}
              <Redirect to={`${this.props.match.path}/tab`} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
