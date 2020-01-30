import fs from 'fs';

const writeableStream = fs.createWriteStream('./testWriteable.txt');
for (let i = 0; i < 1000; i++) {
  // 如果流需要等待'drain'事件触发才能继续写入更多的数据，则返回false,否则返回true
  const drained = writeableStream.write('哈哈哈哈哈哈\n');
  console.log('drained', drained);
}
