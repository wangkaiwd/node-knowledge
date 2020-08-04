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

### `express API`
几个比较重要的`api`:
* [express.json](http://expressjs.com/en/4x/api.html#express.json): `Express`中内置的中间件函数。它基于`body-parser`并且用`JSON`载荷解析即将到来的请求。
* [express.urlencoded](http://expressjs.com/en/4x/api.html#express.urlencoded)
* [express.static](http://expressjs.com/en/4x/api.html#express.static)
* [express.Router](http://expressjs.com/en/4x/api.html#express.static)

`app.xxx`
* app.set
  * case sensitive routing
  * views
  * view engine(`ejs`, `pug`)
* app.get(name)
* app.get(path,callback[,callback...])
* app.verb
* app.render

`req.xxx` property:
* req.app
* req.params
* req.query
* req.xhr

`req.xxx` method: 
* req.get()
* req.param()
* req.range()
  * http range header
  
`res.xxx`:
* res.send
* res.set/get()
* res.format

`router.xxx`

express-generator

concept：
* middleware
* request
* response
* HTTP
* Cookie
* Session

#### make me confuse question when study express api 4.x
* access `express.static` create http server without root path in location
  * http://localhost:3000/index.html (without `public`)
* `app.set` must write at before all middleware
