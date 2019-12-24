const fs = require('fs');
const http = require('http');
const server = http.createServer();
const PORT = 3000;
server.on('request', (req, res) => {
  const readableStream = fs.createReadStream('./big_file.txt');
  readableStream.pipe(res);
  // 停止从可读流中读取数据
  readableStream.pause();
  setTimeout(() => {
    // 恢复到流动状态
    readableStream.resume();
  }, 3000);
});
server.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
