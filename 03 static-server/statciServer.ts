import http from 'http';

const PORT = 8888;
const server = http.createServer();
// http.Server类
// request：每次请求都会触发
server.on('request', (request, response) => {
  response.end('hi');
  console.log('有人请求了');
});
// server.listen: 启动HTTP服务器监听连接
server.listen(PORT, () => {
  console.log(`server is listening on ${PORT} port`);
});
