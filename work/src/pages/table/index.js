import React, { Component } from 'react';
import { Table, Icon, Divider } from 'antd';
import { columns } from './List';
import TabList from 'component/tablist';
import axios from "axios";

export default class MyTable extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: [],
            loading: false,
        }
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
            <div className="tablelist">
                <TabList {...tableProps} />
            </div>
        )
    }
}