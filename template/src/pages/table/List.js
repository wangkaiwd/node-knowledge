import React, { Component } from "react";
import TabList from 'component/tablist';
import {
  fetchRestaurantsList,
  fetchRestaurantsCount
} from "src/http/api";
import * as pagin from 'src/pages/tools/pagin';
import { Divider } from 'antd';
import { withRouter } from 'react-router-dom';

const columns = function () {
  return [
    {
      title: '店铺名称',
      dataIndex: 'name',
      key: 'name',
      width: '18%',
    },
    {
      title: '店铺地址',
      dataIndex: 'address',
      key: 'address',
      width: '35%',
    },
    {
      title: '店铺介绍',
      dataIndex: 'description',
      key: 'description',
      width: '18%'
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;" onClick={() => this.props.handleEdit(record)}>编辑</a>
        </span>
      ),
    }
  ];
}

class List extends Component {
  constructor() {
    super();
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
  componentWillMount = () => {
    this.props.onRef(this);
  }
  componentDidMount = () => {
    this.getList();
    this.getCount();
  }
  // 获取餐馆列表
  getList = (searchKey) => {
    const params = {
      ...this.pageKey,
      ...searchKey,
    };
    this.setState({ loading: true })
    fetchRestaurantsList(params, res => {
      this.setState({
        dataSource: res,
        loading: false,
      })
    });
  }
  // 获取餐馆数量
  getCount = () => {
    fetchRestaurantsCount({}, (res) => this.setState({ total: res.count }));
  }
  render() {
    return (
      <TabList
        {...this.state}
        columns={this.columns()}
        scroll={{ y: 400 }}
        current={this.pageKey.offset / this.pageKey.limit + 1}
        pageSize={this.pageKey.limit}
        onChange={this.pageChange}
        onShowSizeChange={this.pageSizeChange}
      />
    )
  }
}
export default withRouter(List)
