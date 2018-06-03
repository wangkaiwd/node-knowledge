import ReactDOM from "react-dom"
// 要使用react-router v3版本，要在安装的时候指定安装的router版本
// npm i react-router@3
import './index.less'
import { Router, hashHistory } from 'react-router'
import route from './route/route'
const render = component => {
  ReactDOM.render(
    <Router routes={component} history={hashHistory} />,
    document.getElementById("app"));
}

render(route)

if (module.hot) {
  // 当 "./App"文件发生变化时，重新执行render(App)
  module.hot.accept("./route/route", () => {
    render(route);
  });
}

/**
 * webpack Api: accept
 * 1. 接受(accept)给定依赖模块更新，并触发一个回掉函数来对这些更新做出响应。
 * @example:
 * module.hot.accept(
 * dependencies, // 可以是一个字符串或字符串数组
 * callback, // 用于在模块更新后触发函数
 * )
 *
 */

/**
 * 真正启用热更新的3步：
 *  1. 配置devServer: hot: true;
 *  2. 开启webpack自带插件： HotModuleReplacementPlugin
 *  3. 在主要js文件中检查是否有module.hot：
 *   if(module.hot) {
 *     module.hot.accept();
 *   }
 */
