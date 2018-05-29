import React, { Component } from 'react'
import TabList from 'component/tablist';
import {
  fetchLoginAdminList,
  fetchLoginAdminCount
} from "src/http/api"
import * as pagin from 'src/pages/tools/pagin';
class Admin extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: [],
      loading: false,
      total: 0,
    }
    // 分页
    this.pageKey = { ...pagin.pageKey };
    // 表格配置项
    this.columns = columns.bind(this);
    this.pageChange = pagin.pageChange.bind(this);
    this.pageSizeChange = pagin.pageSizeChange.bind(this);
  }
  componentDidMount = () => {
    this.getCount();
    this.getList();
  }
  // 获取参观列表
  getList = () => {
    const params = {
      ...this.pageKey,
    };
    this.setState({ loading: true })
    fetchLoginAdminList(params, res => {
      this.setState({
        dataSource: res.data,
        loading: false,
      })
    });
  }
  // 获取餐馆数量
  getCount = () => {
    fetchLoginAdminCount({}, (res) => this.setState({ total: res.count }));
  }
  render() {
    return (
      <div className="page-content">
        <div className="tablelist">
          <TabList
            {...this.state}
            columns={this.columns()}
            scroll={{ y: 400 }}
            current={this.pageKey.offset / this.pageKey.limit + 1}
            pageSize={this.pageKey.limit}
            onChange={this.pageChange}
            onShowSizeChange={this.pageSizeChange}
          />
        </div>
      </div>
    )
  }
}
export default Admin

// 表格配置
function columns() {
  return [
    {
      title: '姓名',
      dataIndex: 'user_name',
      key: 'user_name',
      width: '8%'
    },
    {
      title: '注册日期',
      dataIndex: 'create_time',
      key: 'create_time',
      width: '15%',
    },
    {
      title: '地址',
      dataIndex: 'city',
      key: 'city',
      width: '10%'
    },
    {
      title: '权限',
      dataIndex: 'admin',
      key: 'admin',
      width: '8%',
    },
  ]
}
