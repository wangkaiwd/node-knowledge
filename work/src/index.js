import React from 'react';
import { render } from 'react-dom'
import Route from './router/routes'
import "./style/common.less"

render(<Route />, document.getElementById('box'));