import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './app.less'
class App extends Component {
  constructor() {
    super()
    this.state = {

    }
    window.auth = 1;
  }
  render() {
    const { action } = this.props.location;
    const isAnimation = this.props.location.pathname.lastIndexOf('/') === 0;
    const data = { id: 3, name: 'sam', age: 36 }
    const path = {
      pathname: '/home',
      state: data
    }
    return (
      <div className="app">
        <ul className="nav">
          <li><Link to={path}>首页</Link></li>
          <li><Link to="/product">商品</Link></li>
          <button onClick={() => hashHistory.go(-1)}>返回</button>
        </ul>
        {
          isAnimation ?
            <ReactCSSTransitionGroup
              component="div"
              className="react-container"
              transitionName={action === 'PUSH' ? 'slide-in' : 'slide-out'}
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              {/* 需要一个唯一的key */}
              <div style={{ height: '100%' }} key={this.props.location.pathname} className={this.props.location.pathname}>
                {this.props.children}
              </div>
            </ReactCSSTransitionGroup>
            :
            <div style={{ height: '100%' }}>
              {this.props.children}
            </div>
        }
      </div>
    );
  }
}

export default App;

