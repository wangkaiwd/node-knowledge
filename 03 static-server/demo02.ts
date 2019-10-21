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
    if (err) {
      console.log(err.errno === -2);
      if (err.errno === -2) {
        fs.readFile(absPath('/404.html'), (err, data) => {
          if (err) return console.log(err);
          response.end(data);
        });
      }
      return console.log(err);
    }
    response.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
