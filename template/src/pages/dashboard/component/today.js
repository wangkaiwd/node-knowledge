import React, { Component } from 'react'
import {
  fetchTodayUserCount,
  fetchTodayOrderCount,
  fetchTodayAdminCount
} from 'src/http/api'
import dayjs from 'dayjs';
import { Card, Button, Icon } from 'antd';
class Today extends Component {
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
    const params = {};
    fetchTodayUserCount(params, res => this.setState({ user: res.count }));
    fetchTodayOrderCount(params, res => this.setState({ order: res.count }));
    fetchTodayAdminCount(params, res => this.setState({ admin: res.count }));
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
              新增用户
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
              新增订单
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
              新增管理员
            </span>
          </div>
        </Card.Grid>
      </React.Fragment>
    )
  }
}
export default Today
