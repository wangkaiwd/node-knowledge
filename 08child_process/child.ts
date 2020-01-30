console.log('child');

setTimeout(() => {
  if (process.send) {
    process.send({ foo: 'bar' });
  }
}, 4000);

process.on('message', (data) => {
  console.log('child get data', data);
});
