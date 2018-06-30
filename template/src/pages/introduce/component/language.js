import React, { Component } from 'react';
import { Card, Progress } from 'antd';
class Language extends Component {
  render() {
    return (
      <React.Fragment>
        React
          <Progress percent={70} status="active" className="react" />
        Antd
          <Progress percent={80} status="active" className="antd" />
        HTML
          <Progress percent={60} status="active" className="html" />
        CSS
          <Progress percent={70} status="active" className="css" />
        JavaScript
          <Progress percent={90} status="active" className="javascript" />
      </React.Fragment>
    );
  }
}

export default Language;
