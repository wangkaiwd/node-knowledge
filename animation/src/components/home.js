import React, { Component } from 'react';
import { Link } from 'react-router'
import './home.less'
class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2>Home</h2>
        <h3>
          <Link to="/home/user">children</Link>
        </h3>
        <div style={{ position: 'fixed', left: 0, bottom: 0, width: '100%', backgroundColor: 'rgba(0,0,0,.4)' }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Home;
