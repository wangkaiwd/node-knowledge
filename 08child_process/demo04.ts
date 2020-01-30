import childProcess from 'child_process';

// 专门用于衍生新的Node.js进程。返回的ChildProcess将会内置一个额外的通信通道，允许消息在父进程和子进程之间来回传递。
const fork = childProcess.fork('./child.ts');
fork.on('message', (data) => {
  console.log('parent get message', data);
});
fork.send('哈哈');

