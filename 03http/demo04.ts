import http, { IncomingMessage } from 'http';

const PORT = 8888;
const server = http.createServer();

server.on('request', (request: IncomingMessage, response) => {
  const { method, headers, url } = request;
  const requestProxy = http.request({
    method,
    headers,
    path: url,
    host: 'nodejs.cn'
  }, (responseProxy: IncomingMessage) => {
    const { headers } = responseProxy;
    for (const key in headers) {
      if (headers.hasOwnProperty(key)) {
        response.setHeader(key, headers[key]);
      }
    }
    responseProxy.on('data', (chunk) => {
      response.write(chunk);
    });
    responseProxy.on('end', () => {
      response.end();
    });
  });
  request.on('data', (chunk) => {
    requestProxy.write(chunk);
  });
  request.on('end', () => {
    requestProxy.end();
  });
  requestProxy.on('error', (err) => {
    console.log('requestProxy error', err);
  });
});

server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
