import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import "./index.less"
class Bread extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  handleClick = (route) => {
    const { history, initMenu } = this.props;
    initMenu();
    history.push(route);
  }
  render() {
    const { breadConfig } = this.props;
    return (
      <Breadcrumb className="bread">
        <Breadcrumb.Item onClick={() => this.handleClick('/index/dashboard')}> <a href="javascript:;">Dashboard</a></Breadcrumb.Item>
        {breadConfig.map((item, i) => (
          <Breadcrumb.Item key={i}>{item.content}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    )
  }
}
export default withRouter(Bread)
