/*
 * @Author: wangkai
 * @Date: 2018-05-19 20:38:46
 * @Last Modified by: wangkaiwd
 * @Last Modified time: 2018-05-19 21:53:24
 * @Desc: 编辑商品的配置页面
 */
import React, { Component } from 'react'
import { fetchRestaurantCategory } from 'src/http/api'
// 模态框配置
export function modalOption() {
  return {
    visible: this.props.visible,
    title: '修改店铺信息',
    maskClosable: true,
    onCancel: this.props.onCancel,
    onOk: this.handleOk
  }
}

export function getShopAllCategory() {
  fetchRestaurantCategory({}, (res) => {
    this.setState({ categoryList: res });
  })
}

// 多级联动数据
export function options() {
  const { categoryList } = this.state;
  const options = [];
  categoryList.map(item => {
    if (item.name !== '全部商家') {
      const obj = {};
      obj.children = [];
      obj.label = obj.value = item.name;
      item.sub_categories.map((sub, i) => {
        if (i !== 0) {
          const subObj = {};
          subObj.label = subObj.value = sub.name;
          obj.children.push(subObj);
        }
      })
      options.push(obj);
    }
  });
  return options;
}

// 表格样式
export const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
