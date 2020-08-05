const Koa = require('koa');
const app = new Koa();

const PORT = 3000;
app.use(async (ctx, next) => {
  ctx.body = 'hello';
  await next();
  ctx.body += ' Koa';
});

app.use(async (ctx, next) => {
  ctx.body += ' word';
  await next();
});

app.use(async (ctx, next) => {
  ctx.set('Content-Type', 'text/html;charset=utf-8');
  await next();
});
app.listen(PORT, () => {
  console.log(`Koa started in port ${PORT}`);
});
