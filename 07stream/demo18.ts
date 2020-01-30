import { Writable, Readable } from 'stream';
import fs from 'fs';

class MyReadable extends Readable {
  count = 0;

  _read (size: number) {
    this.push('lalalalala\n');
    this.count++;
    if (this.count > 20) {
      this.push(null);
    }
  }
}

class MyWritable extends Writable {
  _write (chunk: any, encoding: string, callback: (error?: (Error | null)) => void): void {
    fs.writeSync(1, chunk.toString() + '\n');
    setTimeout(() => {
      callback(null);
    }, 300);
  }
}

const rs = new MyReadable({
  highWaterMark: 50,
});
const ws = new MyWritable({
  highWaterMark: 20,
});

// 'data' 事件会让可读流处于流动模式
rs.on('data', (chunk) => {
  console.log(chunk.toString());
  const drained = ws.write(chunk);
  // false: 不能继续写入的时候，让可读流处于静止状态
  // 解决背压问题
  if (!drained) {
    rs.pause();
  }
  // setTimeout(() => {
  //   rs.resume();
  // }, 3000);
});

// 可写流中的内容流干：可以继续写入数据时触发
ws.on('drain', () => {
  rs.resume();
});
rs.on('end', () => {
  console.log('done');
});
