const fs = require('fs');
const http = require('http');
const server = http.createServer();
const PORT = 3000;
server.on('request', (req, res) => {
  fs.readFile('./big_file.txt', (error, data) => {
    if (error) throw error;
    res.end(data);
    console.log('done');
  });
});
server.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
