/*
 * @Author: wangkai
 * @Date: 2018-05-06 12:40:58
 * @Last Modified by: wangakiwd
 * @Last Modified time: 2018-05-29 17:53:46
 * @Desc: 商品信息更新模态框
 */
import { Form, Input, Button, Row, Col, message, Modal, Cascader, Icon, Upload, Select } from 'antd';
const FormItem = Form.Item;
import * as updateConfig from './config'
import React, { Component } from 'react'
import { fetchRestaurantCategory, fetchAddimgShop } from 'src/http/api'

class UpdateModal extends Component {
  constructor() {
    super()
    this.state = {
      categoryList: [],
      shopImgpath: '',
    }
    this.modalOption = updateConfig.modalOption.bind(this);
    this.options = updateConfig.options.bind(this);
    this.getShopAllCategory = updateConfig.getShopAllCategory.bind(this);
  }
  componentDidMount = () => {
    this.getShopAllCategory();
    this.props.onRef(this);
    this.getDefaultValue();

  }

  // 获取表单的默认值
  getDefaultValue = () => {
    console.log(this.props.itemValue);
    let { name, address, description, phone, category, image_path } = this.props.itemValue;
    // http://images.cangdu.org/
    const categoryArr = category.split("/");
    this.props.form.setFieldsValue({
      name,
      address,
      description,
      phone,
      category: categoryArr


    });
  }

  handleOk = () => {

  }
  // 上传图片之前
  beforeUpload = (file) => {
    const isRightType = (file.type === 'image/jpeg') || (file.type === 'image/png');
    if (!isRightType) {
      message.error('只能上传jpg和png文件!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.warning('图片必须小于 2MB!');
    }
  }
  onChange = (value) => {
    console.log(value);
  }
  handleChange = (file, fileList, event) => {
    // console.log('object', file, fileList, event);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    // console.log('value', this.state.itemValue);
    const formItemLayout = updateConfig.formItemLayout;
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
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
              rules: [
                { required: true, message: "手机号码不能为空!" },
                { pattern: /^[1-9]\d*$/, message: "请输入数字!" },
              ]
            })(
              <Input addonBefore={prefixSelector} />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="店铺分类"
          >
            {getFieldDecorator('category', {
              initialValue: ['zhejiang', 'hangzhou', 'xihu']
            })(
              <Cascader
                // defaultValue={['zhejiang', 'hangzhou', 'xihu']}
                options={this.options()}
                onChange={this.onChange}
              >

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
                withCredentials={true}
                // action="https://elm.cangdu.org/v1/addimg/shop"
                // customRequest={this.handleCustomRequest}
                onChange={this.handleChange}
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
