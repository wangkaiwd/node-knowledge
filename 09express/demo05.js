const express = require('express');
const app = new express();
app.use('/', (req, res) => {
  res.send('hi');
});

app.listen(3000, () => {
  console.log('server is listening on 3000');
});
