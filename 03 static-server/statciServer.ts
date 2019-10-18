import http from 'http';

// node的ts接口声明写的并不好
const PORT = 8888;
const server = http.createServer();
// http.Server类
// request：每次请求都会触发
server.on('request', (request, response) => {
  const { url, headers, method } = request;
  console.log('request some property', url, headers, method);
  response.end('hi');
  console.log('url', request.url);
  console.log('有人请求了');
});
// server.listen: 启动HTTP服务器监听连接
server.listen(PORT, () => {
  console.log(`server is listening on ${PORT} port`);
});
