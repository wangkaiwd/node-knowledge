import http from 'http';
import fs from 'fs';
import path from 'path';
import * as url from 'url';

const PORT = 8888;
const server = http.createServer();

const absPath = (dir: string) => path.resolve(__dirname, `./public${dir}`);
server.on('request', (request, response) => {
  const { url: requestUrl } = request;
  let { pathname } = url.parse(requestUrl);
  pathname = pathname === '/' ? '/index.html' : pathname;
  fs.readFile(absPath(pathname!), (err, data) => {
    if (err) return console.log(err);
    response.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
