/*
 * @Author: wangkai
 * @Date: 2018-05-06 12:40:58
 * @Last Modified by: wangakiwd
 * @Last Modified time: 2018-06-28 18:02:20
 * @Desc: 商品信息更新模态框
 */
import { Form, Input, Button, Row, Col, message, Modal, Cascader, Select } from 'antd';
const FormItem = Form.Item;
import * as updateConfig from './config'
import React, { Component } from 'react'
import { fetchRestaurantsUpdate } from "src/http/api"

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
    let { name, address, description, phone, category, image_path } = this.props.itemValue;
    this.setState({
      shopImgpath: image_path
    });
    const categoryArr = category.split("/");
    this.props.form.setFieldsValue({
      name,
      address,
      description,
      phone,
      category: categoryArr,
    });
  }

  handleOk = () => {
    const params = this.props.form.getFieldsValue();
    params.category = params.category.join("/");
    params.id = this.props.itemValue.id;
    delete params.prefix;
    params.image_path = this.state.shopImgpath;
    fetchRestaurantsUpdate(params, res => {
      message.success(res.msg);
      this.props.success();
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = updateConfig.formItemLayout;
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
        </Form>
      </Modal>
    )
  }
}
export default Form.create()(UpdateModal)
