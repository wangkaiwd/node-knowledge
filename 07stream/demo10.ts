import { Duplex, DuplexOptions } from 'stream';

let index = 0;
const options: DuplexOptions = {
  read (size) {
    this.push(String(index));
    index++;
    if (index > 9) {
      this.push(null);
    }
  },
  write (chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },
};
const inoutStream = new Duplex(options);

// 使用管道将标准输入流连接到自己实现的双工流，实现了echo特性（可写流）
// 使用管道将自己实现的双工流连接到标准输出流，将可读内容在终端输出
process.stdin.pipe(inoutStream).pipe(process.stdout);
