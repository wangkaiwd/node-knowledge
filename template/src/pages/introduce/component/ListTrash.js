import React from 'react';
import { List, Button } from 'antd';
import Dayjs from 'dayjs';
const ListTrash = (props) => {
  let time = Dayjs().format('YYYY-MM-DD-HH:mm:ss'); // 展示;
  const { recoverMessage, recoverAllMessage } = props;
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
              <Button size="small" onClick={() => { recoverMessage(i) }}>还原</Button>
            </div>
          </List.Item>
        )}
      />
      <Button
        className="message-footbutton"
        onClick={recoverAllMessage}
        type="danger"
        disabled={props.data.length === 0}
      >
        还原全部
      </Button>
    </div>
  )
}
export default ListTrash;
