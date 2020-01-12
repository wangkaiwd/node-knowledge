import fs from 'fs';

// todo:
//  1. 创建可读流文档几句话翻译
//  2. setTime(obj.fn,1000) vs setTime(() => obj.fn(),1000) ： this指向问题
const readableStream = fs.createReadStream('../yarn.lock', {
  highWaterMark: 1024,
});
let count = 0;
console.log('readableStream', readableStream.isPaused());
readableStream.on('data', (chunk) => {
  console.log(chunk.toString());
  console.log(++count);
  readableStream.pause();
  setTimeout(() => {
    readableStream.resume();
  }, 3000);
  // const obj = { fn: function() { console.log(this) } }
  // obj.fn()
  // const newFn = obj.fn(); newFn() // this在函数调用的时候才能知道指向的内容
  // setTimeout(readableStream.resume, 3000);
});
readableStream.on('end', () => {
  console.log('done');
});
