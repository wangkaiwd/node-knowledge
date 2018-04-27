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
import { fetchRestaurantsSearch } from '../../http/api';

const FormItem = Form.Item;

class MyTable extends Component {
  constructor() {
    super();
    this.state = {
      List: {}
    }
  }
  // 查询
  handleSubmit = (e) => {
    e.preventDefault();
    const { List } = this.state;
    const searchKey = this.props.form.getFieldsValue();
    fetchRestaurantsSearch({ ...searchKey }, (res) => {
      List.setState({
        showPagination: false,
        dataSource: res,
      });
    })
  }
  // 重置
  handleReset = () => {
    const { List } = this.state;
    this.props.form.resetFields();
    List.initPageKey();
    List.getList();
    List.setState({ showPagination: true });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="mytab">
        <div className="search-header">
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col span={12}>
                <FormItem wrapperCol={{ span: 20 }}>
                  {getFieldDecorator('keyword', )(
                    <Input placeholder="请输入餐馆名称" />
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem>
                  <Button type="primary" htmlType="submit" icon="search">搜索</Button>
                  <Button className="btn-reset" onClick={this.handleReset}>重置</Button>
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
