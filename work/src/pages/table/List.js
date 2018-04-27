import React, { Component } from "react";
import TabList from 'component/tablist';
import {
  fetchRestaurantsList,
  fetchRestaurantsCount
} from "src/http/api"
import { Divider, Icon } from 'antd'
const columns = [
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
        <a href="javascript:;">编辑</a>
        <Divider type="vertical" />
        <a href="javascript:;">添加食品</a>
        <Divider type="vertical" />
        <a href="javascript:;">
          删除
        </a>
      </span>
    ),
  }
];

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      loading: false,
      total: 0,
    }
    // 分页
    this.pageKey = {
      offset: 0,
      limit: 10,
    }
  }
  initPageKey = () => {
    this.pageKey = {
      offset: 0,
      limit: 10,
    }
  }
  componentWillMount = () => {
    this.props.onRef(this);
  }
  componentDidMount = () => {
    this.getList();
    this.getCount();
  }
  // 获取参观列表
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
  // 改变页数
  pageChange = (page) => {
    this.pageKey.offset = (page - 1) * this.pageKey.limit;
    this.getList();
  }
  // 改变每页条数
  pageSizeChange = (current, pageSize) => {
    this.pageKey.offset = 0;
    this.pageKey.limit = pageSize;
    this.getList();
  }
  render() {
    return (
      <TabList
        {...this.state}
        columns={columns}
        scroll={{ y: 400 }}
        current={this.pageKey.offset / this.pageKey.limit + 1}
        pageSize={this.pageKey.limit}
        onChange={this.pageChange}
        onShowSizeChange={this.pageSizeChange}
      />
    )
  }
}
