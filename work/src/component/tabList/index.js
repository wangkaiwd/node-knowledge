import React, { Component } from 'react';
import { Table, Icon, Divider } from 'antd';
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
                />
            </div>
        )
    }
}