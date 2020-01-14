## Stream

### `this`指向问题

`this`指向的例子：

```typescript
setTimeout(() => {
  readableStream.resume();
}, 3000);
// const obj = { fn: function() { console.log(this) } }
// obj.fn()
// const newFn = obj.fn(); newFn() // this在函数调用的时候才能知道指向的内容
// setTimeout(readableStream.resume, 3000);
```

### File Descriptor
* [file descriptor](https://zh.wikipedia.org/wiki/%E6%96%87%E4%BB%B6%E6%8F%8F%E8%BF%B0%E7%AC%A6)
* 0: stdin, 1: stdout, 2: stderr
* [What is the use of fd (file descriptor) in Node.js?](https://stackoverflow.com/questions/36771266/what-is-the-use-of-fd-file-descriptor-in-node-js)


## 思路整理


### 实现`pipe`
* 通过实现自己的可读、可写流实现`pipe`(这里会涉及到背压问题)
* 查看`Node.js`中`pipe`源码


### 例子
* 商品秒杀(背压问题)

### objectMode

* `Node.js`创建的流都是运作在字符串和`Buffer`(或`Uint8Array`),流中也可以使用`JavaScript`中的类型(出了`null`)
* 创建流时，可以设置`objectMode`选项把流实例切换到对象模式
