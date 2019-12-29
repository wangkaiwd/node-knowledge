import express from 'express';

const app = express();
const PORT = 3000;
app.use((req, res, next) => {
  console.log(req.url);
  res.write('hi');
  next();
});
app.use((req, res, next) => {
  console.log('2');
  res.write('hi');
  next();
});
app.use((req, res, next) => {
  res.end();
  next();
});
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
