## [Stream 流](http://nodejs.cn/api/stream.html#stream_readable_streams)
### 三个例子简单认识Stream
`stream`的优点： 将比较大的数据分块进行传输,内存占用较低
### Stream对象的原型链
ReadStream => Readable.prototype => Stream.prototype => EventEmitter.prototype => Object.prototype

#### 比较重要的事件方法
##### Readable Stream
事件：
* data
* end

方法：
* pipe()
* resume()
* paused()

##### Writable Stream
事件：
* drain: 
* finish

方法：
* write
* end


### [Stream的类型](http://nodejs.cn/api/stream.html#stream_types_of_streams)
`Node.js`中有四种基本的流类型：
* Writable: 可写入数据的流
* Readable: 可读取数据的流
* Duplex: 既可读又可写的流
* Transform: 在写入和读取数据时能**修改或转换数据**的`Duplex`流

### `Readable`和`Writable`的特点

### 写的不错的文章
* [Node.js Stream:Everything you need to know](https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/)
* [Understanding Streams in Node.js](https://nodesource.com/blog/understanding-streams-in-nodejs/)
* [Node.js streams cheatsheet](https://devhints.io/nodejs-stream)

