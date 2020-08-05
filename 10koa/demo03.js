const express = require('express');

const app = express();

const PORT = 3000;

app.get('/response-time', (req, res, next) => {
  app.locals.start = Date.now();
  res.set('Content-Type', 'text/html');
  res.write('Response Time');
  next();
});
app.use((req, res, next) => {
  const time = Date.now() - app.locals.start;
  console.log(`${req.url} -- ${time}`);
  res.write(` ${req.url} -- ${time}`);
  res.end();
  next();
});
app.listen(PORT, () => {
  console.log(`Express started on port ${PORT}`);
});
