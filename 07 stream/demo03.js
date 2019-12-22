const http = require('http');
const fs = require('fs');
const server = http.createServer();
const PORT = 3000;
server.on('request', (req, res) => {
  const stream = fs.createReadStream('./big_file.txt');
  stream.pipe(res);
});
server.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
