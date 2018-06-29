import React, { Component } from 'react';
import { Card, Progress } from 'antd';
class Language extends Component {
  render() {
    return (
      <div style={{ background: '#ECECEC', padding: '30px', marginTop: '30px' }}>
        <Card title="语言详情" bordered={false} style={{ width: '40%' }}>
          <div>

          </div>
          <Progress percent={30} status="active" />
          <Progress percent={50} status="active" />
          <Progress percent={70} status="active" />
          <Progress percent={40} status="active" />
          <Progress percent={50} status="active" />
        </Card>
      </div>
    );
  }
}

export default Language;
