import React, { Component } from "react";
import TabList from 'component/tablist';
import axios from "axios";
import { Divider, Icon } from 'antd'
const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: '15%',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        width: '15%',
    },
    {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
        width: '20%'
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
                <a href="javascript:;">详情</a>
                <Divider type="vertical" />
                <a href="javascript:;">删除</a>
                <Divider type="vertical" />
                <a href="javascript:;">
                    编辑
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
        axios.get('http://yapi.demo.qunar.com/mock/5938/tablist').then(
            ({ data }) => {
                this.setState({
                    dataSource: data.data.list,
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