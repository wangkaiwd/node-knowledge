import React, { Component } from 'react'
import {
  Popover,
  Layout,
  Icon,
  Button,
  message,
} from 'antd'
import "./index.less"
import Bread from 'src/component/bread'
import { withRouter } from 'react-router-dom'
import { fetchLoginSingout } from 'src/http/api'
const { Header } = Layout;
class Top extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 气泡卡片是否显示
      visible: false,
    }
    // debugger;
  }
  // 退出登录
  singout = () => {
    fetchLoginSingout({}, (res) => {
      message.success(res.success);
      this.props.history.push('/login');
      localStorage.clear();
    })
  }
  // 气泡提示框
  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }
  render() {
    return (
      <Header className="leftnav-header">
        <Icon
          className="trigger"
          type={this.props.type ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.toggle}
        />
        <Bread
          initMenu={this.props.initMenu}
          breadConfig={this.props.breadConfig}
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
