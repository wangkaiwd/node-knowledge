import React from "react";
import { Divider, Icon } from 'antd'
export const columns = [
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
                <a href="javascript:;">Action 一 {record.name}</a>
                <Divider type="vertical" />
                <a href="javascript:;">Delete</a>
                <Divider type="vertical" />
                <a href="javascript:;" className="ant-dropdown-link">
                    More actions <Icon type="down" />
                </a>
            </span>
        ),
    }
];