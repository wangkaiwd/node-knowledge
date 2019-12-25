import { Readable } from 'stream';

const inStream = new Readable();

inStream.push('12345');
inStream.push('67890');

inStream.push(null);
inStream.on('data', (chunk) => {
  console.log('写入数据');
  process.stdout.write(chunk);
});

// inStream.pipe(process.stdout);

