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
* pause()

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
#### Readable Stream
俩种读取模式： 
* 流动模式(`flowing`)
* 暂停模式(`paused`)

可读流默认处于暂停状态，以下方式之一会将流切换到流动(`flowing`)模式：
1. 添加一个`data`事件处理函数
2. 调用`stream.resume()`方法
3. 调用`stream.pipe()`方法发送数据到可写流

#### Writable Stream
**[`drain`](http://nodejs.cn/api/stream.html#stream_event_drain)事件**  
如果调用`stream.write(chunk)`返回`false`, 当适合恢复写入数据到流的时候将会触发`drain`事件

[`finished`](http://nodejs.cn/api/stream.html#stream_event_finish)事件:    
调用`stream.end()`且缓冲数据都已传给底层系统之后触发

### 创建自己的流


### `Transform`流举例

### 写的不错的文章
* [Node.js Stream:Everything you need to know](https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/)
* [Understanding Streams in Node.js](https://nodesource.com/blog/understanding-streams-in-nodejs/)
* [Node.js streams cheatsheet](https://devhints.io/nodejs-stream)
* [数据流中的积压问题](https://nodejs.org/zh-cn/docs/guides/backpressuring-in-streams/)

### 数据流中的积压问题

数据处理面临的问题：  
在数据传输过程中有一大堆数据在缓存之后积压着。每次当数据到达结尾又遇到复杂的运算，又或者无论什么原因它比预期的慢，这样累积下来，从源头来的数据就会变得很庞大，像一个塞子一样堵住。

为了解决这个问题，必须存在一种适当的代理机制，确保流从一个源流入另外一个的时候是平滑顺畅的。

#### 处理数据中遇到的问题
* 作为开发者，应该鼓励自己多去使用`stream`模块
* `.pipe()`从一个数据源终端到另外一个终端，不过没有使用任何出错处理机制
* `pipeline`: 对接不同的数据流，可以处理异常错误并善后清理错误资源

#### 数据太多，速度太快
如果发生了这种情况，消费者为了后面的消费而将数据以列队形式积压起来。写入队列的时间越来越长，正因为如此，更多的数据不得不保存在内存中直到整个流程全部处理完毕。

* 太多例子证明：有时`Readable`传输给`Writable`的速度远大于它接受和处理的速度

没有积压机制将会导致如下问题：
* 明显使得其它进程处理变慢
* 太多繁重的垃圾回收
* 内存耗尽

#### 过度的垃圾收集

#### 内存耗尽

#### 积压是怎么处理这些问题的
* `Node.js`中，源头：`Readable`流，消费者：`Writable`流
* 当`pipe`被源调用后，它通知消费者有数据需要传输。`pipe`函数为事件触发建立了合适的积压封装。
* `Writable`的`.write()`方法的返回值决定是否触发积压
* 积压系统的功能
    * 写入队列繁忙或数据缓存超出`highWaterMark`，`.write()`会返回`false`
    * 当返回`false`后，积压系统介入了：
        1. 暂停从`Readable`读取数据
        2. 一旦数据流空了，`drain`事件将被触发，消耗进来的数据流
        3. 一旦队列全部处理完毕，积压机制将允许数据再次发送。在使用中的内存空间将自我释放，同时准备接收下一次的批量数据
        
#### `pipe()`的生命周期
[文档](https://nodejs.org/zh-cn/docs/guides/backpressuring-in-streams/#pipe)

#### 对于可读流的规则
* 小心`._read()`方法中使用`.push()`方法的返回值。如果`.push()`方法返回一个`false`，流就会停止从源读数据。否则，它就不会停止而继续读下去。

#### 关于可写流的规则
* 如果写队列确实繁忙，`.write()`方法将返回`false`
* 如果数据快太大，`.write()`方法将返回`false`(通过`highWaterMark`来进行解决)
