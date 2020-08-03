const express = require('express');
const app = new express();

// 放在第一行才会生效
// app.set('case sensitive routing', true);

// 访问 localhost:3000/index.html可以返回静态文件（注意没有public）
app.use(express.static('./public'));

// json
app.use(express.json());

// header: application/x-www-form-urlencoded
app.use(express.urlencoded());

// test case sensitive routing
// app.get('/style.css', (req, res) => {
//   res.send('style.css');
// });
//
// app.get('/STYLE.CSS', (req, res) => {
//   res.send('STYLE.CSS');
// });

app.use((req, res) => {
  console.log('req', req.xhr);
  res.send(req.body);
});
app.listen(3000, () => {
  console.log('server is listening on 3000');
});
