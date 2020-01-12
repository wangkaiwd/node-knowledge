## `Express`入门

### `HTTP`协议

#### curl
* `-s, --slient`: 不显示进度条或错误信息
* `-v, --verbose`: 显示`curl`的相关信息以及网络库使用的版本
* `-o, --output`: 输出到文件而不是标准输出(`stdout`,输出到命令行)

例子：  
```text
curl -s -v -o /dev/null http://www.baidu.com
```

> 提示：
> * `*`开头：注释， `>`开头：请求， `<`开头： 响应
> * `-o /dev/null`可以隐藏`HTML`文本，防止内容过多影响显示
>
> 关于`/dev/null`的相关资料：[wiki](https://zh.wikipedia.org/wiki//dev/null)
### 请求和响应
浏览器会使用`MIME`类型(不是文件扩展)来决定如何处理一个`URL`。
* [Incomplete list of MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types)


### 中间件

### 错误处理

#### next('route')
这种细微的知识在文档中其实不太好找，我们可以在遇到问题的时候直接阅读`express`的源码。
在不停反复查找源码的过程中会渐渐熟悉源码