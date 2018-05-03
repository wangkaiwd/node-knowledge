/*
 * @Author: wangkai
 * @Date: 2018-04-28 20:58:43
 * @Last Modified by: wangkai
 * @Last Modified time: 2018-05-02 21:54:11
 * @Desc: 餐馆列表页面
 */

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
  message
} from 'antd';

import List from './List';
import UpdateModal from './component/updateModal';
import { fetchRestaurantsSearch } from '../../http/api';

const FormItem = Form.Item;

class MyTable extends Component {
  constructor() {
    super();
    this.state = {
      List: {},
      Modal: {},
      itemValue: {},
    }
  }
  // 查询
  handleSubmit = (e) => {
    e.preventDefault();
    const { List } = this.state;
    const searchKey = this.props.form.getFieldsValue();
    if (!searchKey.keyword) return message.warning('搜索内容不能为空!');
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
  // 修改
  handleEdit = (record) => {
    const { Modal } = this.state;
    // console.log('modal', record);
    Modal.setState({ visible: true, itemValue: record });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { Modal } = this.state;
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
            handleEdit={this.handleEdit}
          />
        </div>
        {/* 并不用让内容在点击编辑时显示，因为变量本来就是在编辑时赋值的 */}
        <UpdateModal
          onRef={(Modal) => this.setState({ Modal })}
        />
      </div>
    )
  }
}
// 注册表单的双向数据绑定
export default Form.create()(MyTable);
