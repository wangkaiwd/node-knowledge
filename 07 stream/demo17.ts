import { Writable } from 'stream';
import fs from 'fs';

// super()：代表调用父类的构造函数，super()内部的this指向的是子类的实例 => super()   parent.constructor.call(this) // this指向child
// 而class A extends B {} 相当于
// class A extends B {
//    // 这里只是简单举例
//    constructor(...arg) {
//      super(...arg)
//    }
// }
// 自定义的Writable流必须调用 new Stream.Writable([options])构造函数，并实现writable._write()和/或writable_writev()方法
class MyWritable extends Writable {
  _write (chunk: Buffer, encoding: string, callback: (error?: Error | null) => void) {
    // file descriptor: https://zh.wikipedia.org/wiki/%E6%96%87%E4%BB%B6%E6%8F%8F%E8%BF%B0%E7%AC%A6
    // 0: stdin, 1: stdout, 2: stderr
    fs.writeSync(1, chunk.toString());
    setTimeout(() => {
      // 必须调用callback才会继续写入
      callback(null);
    }, 100);
  }

  // 能够一次处理多个数据块
  // _writev () {
  //
  // }
}

const myStream = new MyWritable();
for (let i = 0; i < 1000; i++) {
  myStream.write('哈哈哈哈\n');
}

// const readableStream = fs.createReadStream('../yarn.lock');
// const writableStream = fs.createWriteStream('./out.txt');

// readableStream.pipe(writableStream);
