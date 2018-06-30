import React, { Component } from 'react'
import { Checkbox, Icon } from 'antd'
import { List } from 'antd'
const data = [
  '今天要修复100个bug,哈哈哈',
  '今天要修复100个bug',
  '今天要修复100个bug',
  '今天要修复100个bug',
  '今天要修复100个bug',
]
class TodoList extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  onChange = () => {

  }
  render() {
    return (
      <div>
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <div className="todo-left">
                <Checkbox onChange={this.onChange}></Checkbox>
                <span style={{ marginLeft: '10px' }}>{item}</span>
              </div>
              <div className="todo-right">
                <Icon style={{ marginRight: '10px' }} type="edit" />
                <Icon type="delete" />
              </div>
            </List.Item>
          )
          }
        />
      </div>
    )
  }
}
export default TodoList
