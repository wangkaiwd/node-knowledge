import React, { Component } from 'react';
import { Table, Icon, Divider, Pagination } from 'antd';
import "./index.less";
export default class TabList extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="tablist">
        <Table
          {...this.props}
          pagination={false}
        />
        <Pagination
          total={85}
          showTotal={total => `共 ${total} 条`}
          pageSize={20}
          defaultCurrent={1}
        />
      </div>
    )
  }
}