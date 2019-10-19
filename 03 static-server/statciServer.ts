import http from 'http';

// node的ts接口声明写的并不好
const PORT = 8888;
const server = http.createServer();
// http.Server类
// request：每次请求都会触发
server.on('request', (request, response) => {
  let body = '';
  // 继承自stream.Readable,在这个类上有对应的data和end事件
  request.on('data', (chunk: string) => {
    body += chunk;
  });
  request.on('end', () => {
    console.log('已没有数据');
    response.end(body);
  });
});
// server.listen: 启动HTTP服务器监听连接
server.listen(PORT, () => {
  console.log(`server is listening on ${PORT} port`);
});
