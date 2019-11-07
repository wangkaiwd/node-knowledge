## `Node.js`调试
> 使用工具： `chrome + webstorm`

### `webstorm`调试
> 这是一篇译文，原文在这里：[Running and Debugging Node.js](https://www.jetbrains.com/help/webstorm/running-and-debugging-node-js.html#running)

#### 运行和调试`Node.js`

`WebStorm`帮助你运行和调试你的`Node.js`应用程序。你能调试使用`WebStorm`启动的应用程序，也可以连接到已经运行的应用程序。

#### 运行一个`Node.js`应用程序
`WebStorm`根据一个`Node.js`类型的运行配置来运行`Node.js`的应用程序，`WebStorm`也使用这个配置文件来调试本地的`Node.js`应用。

##### 创建一个`Node.js`运行/调试配置
1. 从主菜单选择`Run | Edit Configuration`, 然后在`Edit Configuration`的对话框的工具栏中点击加号，从显示的列表中选择`Node.js`，操作之后`Run/Debug Configuration:Node.js`对话框会打开
2. 指定要使用的`Node.js`解释器。这会是一个本地`Node.js`解释器或者一个适用于`Linux`的`Windows`子系统上的`Node.js`

3. 在`JavaScript File`表单域，指定启动应用程序的主要文件的路径（例如，为`Node.js Express`应用程序设置`bin/www`）

4. 可选的：
    * 指定自定义`Node.js`启动时的`Node Parameters`(`Node`参数)。 

### 命令行和`chrome`调试
在`Node.js`执行时传入`--inspect-brk`标志，如：  
```shell script
node --inspect index.js
```

[`debugger`](http://nodejs.cn/api/debugger.html): 在文档底部
