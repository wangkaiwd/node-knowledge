import { Readable } from 'stream';
// implement a readable stream yourself
class MyReadable extends Readable {
  count = 0;
  // _read function must not be called by application code directly. It should be implemented by child classes,
  // and called by the internal Readable class methods only
  _read (size: number) {
    this.count++;
    const flag = this.push('abcdefg');
    console.log('flag', flag);
    if (this.count > 10) {
      this.push(null);
    }
  }
}

const stream = new MyReadable({ highWaterMark: 10 });

stream.on('data', (chunk) => {
  stream.pause();
  setTimeout(() => {
    stream.resume();
    console.log('chunk', chunk.toString());
  }, 2000);
});

stream.on('end', () => {
  console.log('end');
});
