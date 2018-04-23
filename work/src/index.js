import React from 'react';
import { render } from 'react-dom'
// import Route from './router/routes'
import { HashRouter as Router } from 'react-router-dom'
import App from './app'
import "./style/common.less"
import "./style/base.less";

render(<Router><App /></Router>, document.getElementById('box'));