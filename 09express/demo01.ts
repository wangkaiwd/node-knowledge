import express, { RequestHandler } from 'express';

const app = express();

const PORT = 3000;

// 使用类型断言来定义一个匿名函数的类型
app.use(((req, res, next) => {
  res.send('Hello Express');
  next();
}) as RequestHandler);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
