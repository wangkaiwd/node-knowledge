const express = require('express');
const app = express();
const PORT = 3000;
app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/html', (req, res) => {
  // 渲染ejs页面
  res.render('test', { name: 'zs' });
});
app.listen(PORT, () => {
  console.log(`Express started on port ${PORT}`);
});
