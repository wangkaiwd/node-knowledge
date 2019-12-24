const fs = require('fs');
function writeOneMillionTimes (writer, data) {
  let i = 1000000;
  write();
  function write () {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // 最后一次写入。
        writer.write(data);
      } else {
        // 检查是否可以继续写入。
        // 不要传入回调，因为写入还没有结束。
        ok = writer.write(data);
        if (!ok) {
          console.log('流干了');
        }
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // 被提前中止。
      // 当触发 'drain' 事件时继续写入。
      console.log('------------------------继续写入');
      // 如果stream.write(chunk)返回false时会在合适的时机触发drain事件，说明此时流处于空闲状态可以继续写入
      writer.once('drain', write);
    }
  }
}

const writableStream = fs.createWriteStream('./big_file1.txt');
writeOneMillionTimes(writableStream, 'I am a test text');
