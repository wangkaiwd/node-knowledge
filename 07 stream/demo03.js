const http = require('http');
const fs = require('fs');
const server = http.createServer();
const PORT = 3000;
server.on('request', (req, res) => {
  const stream = fs.createReadStream('./big_file.txt');
  // 将stream中的数据一块一块地读取出来写入到res中
  stream.pipe(res);
  // 选择一种接口风格：http://nodejs.cn/api/stream.html#stream_choose_one_api_style
  // 使用'data'事件的方式更加易于理解
  // stream.on('data', (chunk) => {
  //   res.write(chunk);
  // });
  // stream.on('end', () => {
  //   res.end();
  //   console.log('done');
  // });
});
server.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
