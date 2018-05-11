import React, { Component } from 'react'
import {
  Popover,
  Layout,
  Icon,
  Button,
  message,
} from 'antd'
import { withRouter } from 'react-router-dom'
import { fetchLoginSingout } from 'src/http/api';
import "./index.less"
const { Header, Sider, Content } = Layout;
class Top extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 气泡卡片是否显示
      visible: false,
    }
  }
  // 退出登录
  singout = () => {
    fetchLoginSingout({}, (res) => {
      message.success(res.success);
      console.log('this', this)
      // this.props.history.push('/login');
      localStorage.clear();
    })
  }
  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }
  render() {
    return (
      <Header className="leftnav-header">
        <Icon
          className="trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
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
              title={this.props.userInfo.user_name}
              icon="user"
            >
              {this.props.userInfo.user_name}
            </Button>
          </Popover>

        </div>
      </Header>
    )
  }
}
export default withRouter(Top)
