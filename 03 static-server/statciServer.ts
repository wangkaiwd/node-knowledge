import http from 'http';

const PORT = 8888;
const server = http.createServer((req, res) => {
  res.end('Hello world!');
});

server.listen(PORT, () => {
  console.log(`server is listening on ${PORT} port`);
});
