import React from 'react';
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import App from '../app';

// react-router 4 子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
// 报错：You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored
// 将嵌套的路由放一块儿会报错，要将需要嵌套的路由放到你的组件中

// 精确匹配(exact)和 Switch会对匹配造成的影响

export default () => (
    <Router>
        {/* Switch：只匹配满足地址的第一个路由
            如果'/'路由不设置 exact精确匹配的话，永远只会匹配第一个路由 "/"根路径，只会加载App组件
         */}
        <Switch>
            {/* 在跟组件App中对页面进行国际化 */}
            <Route path="/" component={App} />
        </Switch>
    </Router>
)