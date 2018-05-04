import { Form, Input, Button, Row, Col, message, Modal, Cascader, Icon, Upload } from 'antd';
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
  // 上传图片之前
  beforeUpload = (file) => {
    console.log('file', file);
  }
  // 自定义上传方式
  handleCustomRequest = () => {
    console.log('self');
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
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
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
          <FormItem
            {...formItemLayout}
            label="商铺图片"
          >
            {getFieldDecorator('image_path', {

            })(
              <Upload
                name="image_path"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                // action="http://cangdu.org:8001/v1/addimg/shop"
                customRequest={this.handleCustomRequest}
                // onChange={this.handleChange}
                beforeUpload={this.beforeUpload}
              >
                {uploadButton}
              </Upload>
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
