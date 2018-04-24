import React, { Component } from "react";
import TabList from 'component/tablist';
import axios from 'axios';
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
    }
  }
  componentWillMount = () => {
    this.props.onRef(this);
  }
  componentDidMount = () => {
    this.getList();
  }
  // 获取表格列表
  getList = () => {
    this.setState({ loading: true })
    axios.get('http://cangdu.org:8001/shopping/restaurants?latitude=31.22967&longitude=121.4762').then(
      ({ data }) => {
        this.setState({
          dataSource: data,
          loading: false
        });
      });
  }
  // 可以将每个组件的配置对象单独写，然后通过扩展运算符写入
  tableProps = () => {
    return {
      rowKey: "id",
      bordered: true,
      columns,
      scroll: { y: 376 },
      // 安装babel后才支持这样写
      ...this.state,
    }
  }
  render() {
    // 调用this.setState()方法之后会调用render()方法，会重新执行tableProps()方法
    const tableProps = this.tableProps();
    return (
      <TabList {...tableProps} />
    )
  }
}