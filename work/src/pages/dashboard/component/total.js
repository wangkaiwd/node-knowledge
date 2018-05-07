import React, { Component } from 'react'
import {
  fetchTotalUserCount,
  fetchTotalOrderCount,
  fetchLoginAdminCount,
} from 'src/http/api'
import { Card, Button, Icon } from 'antd';
class Total extends Component {
  constructor() {
    super()
    this.state = {
      user: 0,
      order: 0,
      admin: 0,
    }
  }
  componentDidMount = () => {
    this.getData();
  }
  getData = () => {
    fetchTotalUserCount({}, res => this.setState({ user: res.count }));
    fetchTotalOrderCount({}, res => this.setState({ order: res.count }));
    fetchLoginAdminCount({}, res => this.setState({ admin: res.count }));
  }
  render() {
    return (
      <React.Fragment>
        <Card.Grid>
          <div className="dashboard-icon">
            <Icon type="user-add" />
          </div>
          <div className="dashboard-count">
            <span className="number">
              {this.state.user}
            </span>
            <span className="text">
              注册用户
            </span>
          </div>
        </Card.Grid>
        <Card.Grid>
          <div className="dashboard-icon">
            <Icon type="pay-circle-o" />
          </div>
          <div className="dashboard-count">
            <span className="number">
              {this.state.order}
            </span>
            <span className="text">
              订单
            </span>
          </div>
        </Card.Grid>
        <Card.Grid>
          <div className="dashboard-icon">
            <Icon type="usergroup-add" />
          </div>
          <div className="dashboard-count">
            <span className="number">
              {this.state.admin}
            </span>
            <span className="text">
              管理员
            </span>
          </div>
        </Card.Grid>
      </React.Fragment>
    )
  }
}
export default Total
