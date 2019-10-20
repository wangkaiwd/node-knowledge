import http from 'http';

// node的ts接口声明写的并不好
const PORT = 8888;
// 1. 通过`http.createServer`来创建服务
const server = http.createServer();
// 2. 步骤1执行`http.createServer`后返回一个`http.Server`实例
// http.Server类
// request：每次请求都会触发
// 3. 阅读`http.Server`文档，里面介绍了`request`事件，并且接收`request`和`response`俩个参数
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

