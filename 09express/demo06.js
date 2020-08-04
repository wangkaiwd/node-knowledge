const express = require('express');

const app = express();

const PORT = 3000;
// app.use((req, res) => {
//   res.send('hello express');
// });

app.get('/text', (req, res) => {
  // 根据不同的请求Accept首部和它的对应qualify value(;q=)，相对质量值表示，又称为权重
  // https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept
  res.format({
    'text/plain': function () {
      res.send('hey');
    },

    'text/html': function () {
      res.send('<p>hey</p>');
    },

    'application/json': function () {
      res.send({ message: 'hey' });
    },

    default: function () {
      // log the request and respond with 406
      res.status(406).send('Not Acceptable');
    }
  });
});
app.listen(PORT, () => {
  console.log(`Express started on port ${PORT}`);
});
