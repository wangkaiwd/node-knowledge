import React from 'react';
import { List, Button } from 'antd';
import Dayjs from 'dayjs';
const ListUnread = (props) => {
  let time = Dayjs().format('YYYY-MM-DD-HH:mm:ss'); // 展示;
  const { addMessage, addAllMessage } = props;
  return (
    <div>
      <List
        bordered
        size="small"
        dataSource={props.data}
        renderItem={(item, i) => (
          <List.Item>
            <div className="message-text">{item}</div>
            <div>
              <span className="message-time">{time}</span>
              <Button size="small" onClick={() => { addMessage(i) }}>标为已读</Button>
            </div>
          </List.Item>
        )}
      />
      <Button
        className="message-footbutton"
        onClick={addAllMessage}
        type="primary"
        disabled={props.data.length === 0}
      >
        全部标为已读
      </Button>
    </div>
  )
}
export default ListUnread;
