import childProcess from 'child_process';

// 指定的可执行文件会作为新进程直接地衍生，使其比child_process.exec
childProcess.execFile('ls', ['../'], (error, stdout) => {
  console.log('error', error);
  console.log('stdout', stdout);
});
