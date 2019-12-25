import { Writable } from 'stream';

console.log('running');
const outStream = new Writable({
  write (chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },
});
// echo feature
process.stdin.pipe(outStream);
// equivalent to follow code:
// process.stdin.pipe(process.stdout);
