import express, { ErrorRequestHandler } from 'express';

const app = express();
const PORT = 3000;
app.use((req, res, next) => {
  console.log(1);
  res.write('1');
  next();
});

app.use((req, res, next) => {
  console.log(2);
  res.write('2');
  next('未登录');
});

app.use((req, res, next) => {
  console.log(3);
  res.write('3');
  res.end();
  next();
});
app.use(((err, req, res, next) => {
  console.log('err', err);
  res.write('4');
  res.end();
  next();
}) as ErrorRequestHandler);
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
