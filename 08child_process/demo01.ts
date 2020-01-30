import childProcess from 'child_process';

// 衍生一个shell然后在该shell中执行command,并缓冲任何产生的输出
childProcess.exec('ls ../', (error, stdout) => {
  console.log('error', error);
  console.log('stdout', stdout);
});
