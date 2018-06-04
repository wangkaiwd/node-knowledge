## react-router 3.0路由跳转动画

### react-router的版本
要使用react-router v3需要在安装的时候指定版本号，否则会出现某些对象没有依赖，比如：`hashHistory`对象。
```
npm install react-router@3
```
配合的动画组件是官方推荐的`react-addons-css-transition-group`

### 使用过程
1. 在切换的时候会出现俩个要切换的页面，在俩个`div`中，需要唯一的`key`(这里使用`this.props.locaion.pathname`)来进行区分
2. 在进行路由切换的时候会为对应路由的`div`添加类，为相应的类添加动画
### 待解决问题
1. 在浏览器进行前进和后退点击时路由的`location.action`都是`POP`


