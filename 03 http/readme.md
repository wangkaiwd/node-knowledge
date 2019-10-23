## 搭建静态服务器
> `TypeScript`+`node.js`实现静态服务器

`WebStorm`快捷键： `complete current statement`

### 学习内容
* 搭建静态服务器
* 通过`http`模块发起请求
* 实现服务代理

### 用到的工具
* `ts-node-dev`

### `curl`常用命令


### `node.js`文档阅读
1. 通过`http.createServer`来创建服务
2. 步骤1执行`http.createServer`后返回一个`http.Server`实例
3. 阅读`http.Server`文档，里面介绍了`request`事件，并且接收`request`和`response`俩个参数 

处理`post`请求：  
1. `request`事件中的`request`参数是`http.IncomingMessage`类，其对应的方法大概浏览一遍
2. 文档中显示`http.IncomingMessage`类又继承自`stream.Readable`
3. 在`stream.Readable`类中发现`data`和`end`事件


### 费曼学习法
今天新接触的学习方法，运用起来大概如下：
1. 通过思维导图记录所学知识点
2. 花时间复述思维导图中记录的内容，针对其中无法复述的内容进行针对学习
3. 当将思维导图的内容完全记忆后，将知识总结为文章进行分享

