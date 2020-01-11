import fs from 'fs';

// todo:
//  1. 创建可读流文档几句话翻译
//  2. setTime(obj.fn,1000) vs setTime(() => obj.fn(),1000) ： this指向问题
const readableStream = fs.createReadStream('../yarn.lock', {
  highWaterMark: 1024,
});
let count = 0;
readableStream.on('data', (chunk) => {
  console.log(chunk.toString());
  console.log(++count);
});
readableStream.on('end', () => {
  console.log('done');
});
