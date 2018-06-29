import React from 'react';
import { List, Button } from 'antd';
import Dayjs from 'dayjs';
const ListAlreadyRead = (props) => {
  let time = Dayjs().format('YYYY-MM-DD-HH:mm:ss'); // 展示;
  const { deleteMessage, deleteAllMessage } = props;
  return (
    <div>
      <List
        bordered
        size="small"
        dataSource={props.data}
        renderItem={(item, i) => (
          <List.Item>
            <div className="message-text ell">{item}</div>
            <div>
              <span className="message-time">{time}</span>
              <Button size="small" type="danger" onClick={() => { deleteMessage(i) }}>删除</Button>
            </div>
          </List.Item>
        )}
      />
      <Button
        className="message-footbutton"
        onClick={deleteAllMessage}
        type="danger"
        disabled={props.data.length === 0}
      >
        删除全部
      </Button>
    </div>
  )
}
export default ListAlreadyRead;
