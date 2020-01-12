import fs from 'fs';

const readableStream = fs.createReadStream('../yarn.lock', {
  highWaterMark: 1024,
});

readableStream.on('readable', () => {
  // 从内部缓冲拉取并返回数据。如果没有可读的数据，则返回null
  const result = readableStream.read();
  if (result) {
    console.log(result.toString());
  }
});

// readableStream.on('readable', () => {
//   // 从内部缓冲拉取并返回数据。如果没有可读的数据，则返回null
//   const result = readableStream.read(10);
//   if (result) {
//     console.log(result.toString());
//   }
// });

// readableStream.on('readable', () => {
//   let result = readableStream.read(10);
//   while (result) {
//     result = readableStream.read(10);
//     result && console.log('result', result.toString());
//   }
// });

readableStream.on('data', () => {
  console.log('end');
});
