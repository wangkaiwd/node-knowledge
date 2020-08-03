const express = require('express');
const app = new express();

// 访问 localhost:3000/index.html可以返回静态文件（注意没有public）
app.use(express.static('./public'));

// json
app.use(express.json());

// header: application/x-www-form-urlencoded
app.use(express.urlencoded());

app.use((req, res) => {
  res.send(req.body);
});
app.listen(3000, () => {
  console.log('server is listening on 3000');
});
