import fs from 'fs';

const readableStream = fs.createReadStream('../yarn.lock');
readableStream.on('data', (chunk) => {
  console.log(chunk.toString());
});
readableStream.on('end', () => {
  console.log('done');
});
