/*
 * @Author: wangkai
 * @Date: 2018-04-28 20:58:43
 * @Last Modified by: wangakiwd
 * @Last Modified time: 2018-05-29 11:18:56
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
import * as pagin from 'src/pages/tools/pagin';
const FormItem = Form.Item;

class MyTable extends Component {
  constructor() {
    super();
    this.state = {
      List: {},
      Modal: {},
      itemValue: {},
      visible: false,
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
    List.pageKey = { ...pagin.pageKey }
    List.getList();
    List.setState({ showPagination: true });
  }
  // 修改
  handleEdit = (record) => {
    this.setState({ visible: true, itemValue: record });
  }

  onCancel = () => {
    this.setState({ visible: false });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    // const { Modal } = this.state;
    const { visible, itemValue } = this.state;
    return (
      <div className="page-content">
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
        {
          visible &&
          <UpdateModal
            onRef={(Modal) => this.setState({ Modal })}
            visible={visible}
            itemValue={itemValue}
            onCancel={this.onCancel}
          />
        }

      </div>
    )
  }
}
// 注册表单的双向数据绑定
export default Form.create()(MyTable);
