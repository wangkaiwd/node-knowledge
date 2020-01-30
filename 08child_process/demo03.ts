import childProcess from 'child_process';

// 不支持回调函数,只能通过流事件来获取结果
// 优点：没有最大字节数(maxBuffer)的要求
const ls = childProcess.spawn('ls', ['../']);
ls.stdout.on('data', (chunk) => {
  console.log(`data:${chunk}`);
});
ls.stderr.on('data', (err) => {
  console.log(`err:${err}`);
});

ls.on('close', (code) => {
  console.log(`子进程退出，退出码 ${code}`);
});
