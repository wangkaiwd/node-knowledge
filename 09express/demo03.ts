// 什么是express中间件
import express from 'express';

const app = express();
const PORT = 3000;
app.use((req, res, next) => {
  if (req.path === '/' && req.method === 'GET') {
    console.log('GET 根目录');
  }
  res.send('Hi Express');
  next();
});

// express provides syntactic sugar for corresponding writing, without us have to write various conditional judgments
app.get('/xxx', (req, res) => {
  res.send('xxx');
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
