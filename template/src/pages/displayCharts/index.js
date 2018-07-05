import React, { Component } from 'react'
import Charts1 from './component/charts1'
import Charts2 from './component/charts2'
import Charts3 from './component/charts3'
import Charts4 from './component/charts4'
import { Card, Row, Col } from 'antd'

class DisplayCharts extends Component {
  render() {
    return (
      <div className="display-charts">
        <div className="title">
          echarts图表
        </div>
        <div style={{ background: '#ECECEC', padding: '16px' }}>
          <Row gutter={16}>
            <Col span={24}>
              <Card
                title="折线图"
                bordered={false}
              >
                <Charts1 />
              </Card>
            </Col>
            <Col span={24} style={{ marginTop: '16px' }}>
              <Card title="气泡图" bordered={false}>
                <Charts2 />
              </Card>
            </Col>
            <Col span={24} style={{ marginTop: '16px' }}>
              <Card title="柱状图" bordered={false}>
                <Charts3 />
              </Card>
            </Col>
            <Col span={24} style={{ marginTop: '16px' }}>
              <Card title="折现方格图" bordered={false}>
                <Charts4 />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default DisplayCharts;
