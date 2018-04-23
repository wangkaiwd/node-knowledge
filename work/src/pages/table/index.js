import React, { Component } from 'react';
import {
    Table,
    Icon,
    Divider,
    Form,
    Input,
} from 'antd';
import List from './List';
// const FormItem = Form.Item;




// Form.create({})
export default class MyTable extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        // const { getFieldDecorator } = this.props.form;
        return (
            <div className="mytab">
                <div className="search">
                    {/* <Form>
                        <FormItem>
                            {getFieldDecorator('userName', )(
                                <Input placeholder="姓名" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('userName', )(
                                <Input placeholder="年龄" />
                            )}
                        </FormItem>
                    </Form> */}
                </div>
                <div className="tablelist">
                    <List />
                </div>
            </div>
        )
    }
}