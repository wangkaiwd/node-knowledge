import React, { Component } from 'react';
import { Table, Icon, Divider, Pagination } from 'antd';
import "./index.less";
export default class TabList extends Component {
  constructor() {
    super()
  }
  render() {
    const {
      rowKey,
      bordered,
      total,
      pageSize,
      current,
      onChange,
      onShowSizeChange,
      showPagination = true,
      ...tableProps,
    } = this.props;
    return (
      <div className="tablist">
        <Table
          {...tableProps}
          rowKey={rowKey || "id"}
          bordered={bordered || true}
          pagination={false}
        />
        {
          showPagination &&
          <Pagination
            total={total}
            showTotal={total => `共 ${total} 条`}
            current={current}
            pageSize={pageSize}
            onChange={onChange}
            onShowSizeChange={onShowSizeChange}
            showSizeChanger={true}
            defaultCurrent={1}
          />
        }
      </div>
    )
  }
}
