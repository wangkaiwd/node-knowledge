import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 8888;
const server = http.createServer();

const absPath = path.resolve(__dirname, './public/index.html');
server.on('request', (request, response) => {
  const { url } = request;
  fs.readFile(absPath, (err, data) => {
    if (err) return console.log(err);
    response.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
