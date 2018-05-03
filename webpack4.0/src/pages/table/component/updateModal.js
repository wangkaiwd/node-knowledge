import { Form, Input, Button, Row, Col, message, Modal, Cascader } from 'antd';
const FormItem = Form.Item;

import React, { Component } from 'react'
class UpdateModal extends Component {
  constructor() {
    super()
    this.state = {
      visible: false,
      itemValue: {},
    }
    this.modalOption = modalOption.bind(this);
  }
  componentDidMount = () => {
    this.props.onRef(this);
  }
  handleOk = () => {
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    // console.log('itemvalue', this.state.itemValue);
    return (
      <Modal
        {...this.modalOption()}
      >
        <Form>
          <FormItem
            {...formItemLayout}
            label="店铺名称"
          >
            {getFieldDecorator('name', {

            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="详细地址"
          >
            {getFieldDecorator('address', {

            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="店铺介绍"
          >
            {getFieldDecorator('description', {

            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="联系电话"
          >
            {getFieldDecorator('phone', {

            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="店铺分类"
          >
            {getFieldDecorator('category', {

            })(
              <Cascader>

              </Cascader>
            )}
          </FormItem>
        </Form>
      </Modal>
    )
  }
}
export default Form.create()(UpdateModal)

// 模态框配置
function modalOption() {
  return {
    visible: this.state.visible,
    title: '修改店铺信息',
    maskClosable: true,
    onCancel: () => this.setState({ visible: false }),
    onOk: this.handleOk
  }
}
