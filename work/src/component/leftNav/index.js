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
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom'
import Top from 'src/component/header/index'
import "./leftNav.less"
import * as minix from "src/utils/minix";

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
    this.setDefault();
  }
  // 退出登录
  singout = () => {
    fetchLoginSingout({}, (res) => {
      message.success(res.success);
      this.props.history.push('/login');
      localStorage.clear();
    })
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
        if (`${path}${item.key}` === pathname) {
          const openkeys = item.key.slice(0, item.key.lastIndexOf('/'))
          this.setState({
            defaultSelectedKeys: [item.key],
            defaultOpenKeys: [openkeys],
          });
        }
      })
    }
    findPath(leftNavConfig);
  }
  // 初始化选中菜单
  initMenu = () => {
    this.setState({ defaultSelectedKeys: ['1'] });
  }
  // 获取面包屑导航配置
  getBreadConfig = () => {
    let breadConfig = [
      { content: '' },
      { content: '' },
    ];
    // leftNavConfig
    const { pathname } = this.props.location;
    const { path } = this.props.match;
    const firstPath = pathname.slice(0, pathname.lastIndexOf('/'));
    leftNavConfig.map((item) => {
      if (`${path}${item.key}` === firstPath) {
        breadConfig[0].content = item.content;
      }
      if (item.child) {
        item.child.map((_item) => {
          if (`${path}${_item.key}` === pathname) {
            breadConfig[1].content = _item.content;
          }
        })
      }
    })
    return breadConfig;
  }
  // 点击跳转对应路由
  handleMenuClick = (e) => {
    // 寻找相同的key
    const loopClick = (arrTree) => {
      arrTree.map(item => {
        if (item.child) return loopClick(item.child);
        if (item.key === e.key) this.props.history.push(`${this.props.match.path}${item.key}`);
      })
    }
    loopClick(leftNavConfig)
  }
  // 生成对应页面路由
  createRoute = (routeTree) => {
    return (
      routeTree.map(item => {
        if (item.child) return this.createRoute(item.child);
        return <Route key={item.key} path={`${this.props.match.path}${item.key}`} component={item.component} />
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
  render() {
    const { userInfo } = this.state;
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
            <Card>
              <Meta
                className={this.state.collapsed ? "hide" : "show"}
                avatar={<Avatar src={`//elm.cangdu.org/img/${userInfo.avatar}`} />}
              />
            </Card>
          </div>
          <Menu
            theme="dark"
            onClick={this.handleMenuClick}
            mode="inline"
            defaultSelectedKeys="['1']"
            defaultOpenKeys={this.state.defaultOpenKeys}
          >
            {leftNavConfig.map(item => {
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
          <Top
            userInfo={userInfo}
            type={this.state.collapsed}
            toggle={this.toggle}
            initMenu={this.initMenu}
            breadConfig={this.getBreadConfig()}
          />
          <Button onClick={this.initMenu}>click</Button>
          <Content className="leftnav-content">
            <Switch>
              {this.createRoute(leftNavConfig)}
              {/* 由于使用了Switch,所以在匹配到其它自己没有配置的路由会跳转到'/tab' */}
              <Redirect to={`${this.props.match.path}/dashboard`} />
            </Switch>
          </Content>
        </Layout>
      </Layout >
    );
  }
}
