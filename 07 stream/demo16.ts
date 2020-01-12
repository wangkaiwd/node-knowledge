import fs from 'fs';

const writeableStream = fs.createWriteStream('./testWriteable.txt');
for (let i = 0; i < 1000; i++) {
  writeableStream.write('哈哈哈哈哈哈\n');
}
