import { Readable } from 'stream';

interface IInStream extends Readable {
  index?: number
}
const inStream: IInStream = new Readable({
  // 调用read时推数据
  read (this: IInStream, size) {
    this.push(String(this.index));
    this.index!++;
    // console.log(`推了${index}次`);
    if (this.index! > 9) {
      this.push(null);
    }
  },
});
inStream.index = 0;

inStream.pipe(process.stdout);
