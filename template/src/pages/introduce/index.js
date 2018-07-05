import React, { Component } from 'react'
import { Card } from 'antd'
import Tabs from "component/tabs"
import ListAlreadyRead from './component/listAlreadyRead'
import ListUnread from './component/listUnread'
import ListTrash from './component/ListTrash'
import Language from './component/language'
import TodoList from './component/TodoList'
import './index.less'
class Intro extends Component {
  constructor() {
    super()
    this.state = {
      unread: [
        '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
        ' 今晚12点整发大红包，先到先得',
        '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
        '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
      ],
      alreadyRead: [],
      trash: [],
    }
  }
  getTabConfig = () => {
    let tabConfig;
    return tabConfig = [
      {
        title: `未读消息(${this.state.unread.length})`,
        key: '1',
        link: ListUnread,
        params: {
          data: this.state.unread,
          addMessage: this.addMessage,
          addAllMessage: this.addAllMessage,
        }
      },
      {
        title: `已读消息(${this.state.alreadyRead.length})`,
        key: '2',
        link: ListAlreadyRead,
        params: {
          data: this.state.alreadyRead,
          deleteMessage: this.deleteMessage,
          deleteAllMessage: this.deleteAllMessage,
        }
      },
      {
        title: `回收站(${this.state.trash.length})`,
        key: '3',
        link: ListTrash,
        params: {
          data: this.state.trash,
          recoverMessage: this.recoverMessage,
          recoverAllMessage: this.recoverAllMessage
        }
      },
    ]
  }
  // 消息管理
  addMessage = (index) => {
    const { unread, alreadyRead } = this.state;
    alreadyRead.push(unread.splice(index, 1))
    this.setState({ unread, alreadyRead });
  }
  addAllMessage = () => {
    let { unread, alreadyRead } = this.state;
    alreadyRead = unread;
    unread = [];
    this.setState({ unread, alreadyRead });
  }
  deleteMessage = (index) => {
    const { alreadyRead, trash } = this.state;
    trash.push(alreadyRead.splice(index, 1));
    this.setState({ alreadyRead, trash });
  }
  deleteAllMessage = () => {
    let { alreadyRead, trash } = this.state;
    trash = alreadyRead;
    alreadyRead = [];
    this.setState({ alreadyRead, trash });
  }
  recoverMessage = (index) => {
    const { trash, unread } = this.state;
    unread.push(trash.splice(index, 1));
    this.setState({ unread, trash });
  }
  recoverAllMessage = () => {
    let { unread, trash } = this.state;
    unread = trash;
    trash = [];
    this.setState({ unread, trash });
  }
  render() {
    const tabConfig = this.getTabConfig();
    return (
      <div>
        <Tabs
          tabConfig={tabConfig}
        />
        <div
          className="language"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            background: '#ECECEC',
            padding: '30px',
            marginTop: '20px'
          }}>
          <Card title="语言详情" bordered={false} style={{ width: '34%' }}>
            <Language />
          </Card>
          <Card title="待办事项" extra={<a href="javascript:;">添加</a>} bordered={false} style={{ width: '64%' }}>
            <TodoList />
          </Card>
        </div>
      </div>
    )
  }
}
export default Intro
