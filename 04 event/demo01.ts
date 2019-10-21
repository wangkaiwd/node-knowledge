import EventEmitter from 'events';

// EventEmitter是一个发布订阅，比较基础的几个方法： `on`,`off`,`emit`
class MyEmitter extends EventEmitter {

}

const myEmitter = new EventEmitter();
const fn = () => {
  console.log('fn');
};
myEmitter.on('hh', fn);

myEmitter.emit('hh');
