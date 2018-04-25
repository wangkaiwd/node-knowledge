import React from 'react';
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import App from './app'
import "./style/common.less"
import "./style/base.less";
import { message } from 'antd'
message.config({
  top: 20,
  duration: 3,
});

render(<Router><App /></Router>, document.getElementById('box'));
