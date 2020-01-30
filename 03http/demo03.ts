import http from 'http';
import * as fs from 'fs';
import * as path from 'path';

const options = {
  host: 'www.baidu.com',
  method: 'GET'
};
const request = http.request(options, (response) => {
  let body = '';
  response.on('data', (chunk: string) => {
    body += chunk;
  });
  response.on('end', () => {
    console.log(body);
    fs.appendFile(path.resolve(__dirname, './baidu.html'), body, (err) => {
      if (err) console.log(err);
    });
  });
});

request.end();
