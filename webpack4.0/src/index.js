import React from 'react';
import { render } from 'react-dom'
import App from './app'
import "./style/common.less"
import "./style/base.less";

const hotRender = (Component) => {
  render(
    <Router><Component /></Router>,
    document.getElementById('box')
  );
}
hotRender(App);
