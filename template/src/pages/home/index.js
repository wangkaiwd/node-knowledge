import React, { Component } from 'react';
import MyTabs from 'component/tabs';
import { Switch, Route, Redirect } from 'react-router-dom';
import User from './component/user';
import Admin from './component/admin';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabConfig: [
        { title: '管理员', key: '1', link: Admin, params: {} },
        { title: '用户', key: '2', link: User, params: {} }
      ]
    }
  }
  render() {
    return (
      <div>
        <MyTabs
          tabConfig={this.state.tabConfig}
          history={this.props.history}
          path={this.props.match.path}
        />
      </div>
    )
  }
}
