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

### 
