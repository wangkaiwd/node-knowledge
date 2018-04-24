import React, { Component } from 'react';
import {
    Table,
    Icon,
    Divider,
    Form,
    Input,
    Row,
    Col,
    Button,
} from 'antd';
import List from './List';

const FormItem = Form.Item;

class MyTable extends Component {
    constructor() {
        super();
        this.state = {
            List: {}
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="mytab">
                <div className="search-header">
                    <Form layout="inline">
                        <Row>
                            <Col span={12}>
                                <FormItem>
                                    {getFieldDecorator('userName', )(
                                        <Input placeholder="请输入姓名" />
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('userName', )(
                                        <Input placeholder="请输入年龄" />
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem>
                                    <Button type="primary" icon="search">搜索</Button>
                                    <Button className="btn-reset">重置</Button>
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div className="tablelist">
                    <List
                        onRef={(List) => this.setState({ List })}
                    />
                </div>
            </div>
        )
    }
}
// 注册表单的双向数据绑定
export default Form.create()(MyTable);