import React, { Component } from 'react';
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './app.less'
class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className="app">
        <ul className="nav">
          <li><Link to="/home">首页</Link></li>
          <li><Link to="/product">商品</Link></li>
        </ul>
        <ReactCSSTransitionGroup
          component="div"
          className="react-container"
          transitionName="slide-in"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {/* 需要一个唯一的key */}
          <div style={{ height: '100%' }} key={this.props.location.pathname} className={this.props.location.pathname}>
            {this.props.children}
          </div>
        </ReactCSSTransitionGroup>

      </div>
    );
  }
}

export default App;

