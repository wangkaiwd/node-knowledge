const Koa = require('koa');
const app = new Koa();

const PORT = 3000;
// 计算接口响应时间 (如何用Express 实现响应时间)
app.use(async (ctx, next) => {
  await next();
  const time = ctx.response.get('X-Response-Time');
  console.log(`${ctx.url} -- ${time}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const time = Date.now() - start;
  ctx.set('X-Response-Time', `${time}ms`);
});
app.use(async (ctx, next) => {
  ctx.body = 'hello world';
});
app.listen(PORT, () => {
  console.log(`Koa started in port ${PORT}`);
});
