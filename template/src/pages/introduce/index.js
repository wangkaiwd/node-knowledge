import React, { Component } from 'react'
import Tabs from "component/tabs"
import ListAlreadyRead from './component/listAlreadyRead'
import ListUnread from './component/listUnread'
import ListTrash from './component/ListTrash'
import Language from './component/language'
import './index.less'
class Intro extends Component {
  constructor() {
    super()
    this.state = {
      unread: [
        '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
        '今晚12点整发大红包，先到先得',
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
  recoverMessage = () => {
    const { trash, unread } = this.state;
    unread.push(trash.splice(index, 1));
    this.setState({ alreadyRead, trash });
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
        <Language />
      </div>
    )
  }
}
export default Intro
