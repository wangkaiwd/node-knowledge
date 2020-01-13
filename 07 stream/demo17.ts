import { Writable } from 'stream';
import fs from 'fs';

// super()：代表调用父类的构造函数，super()内部的this指向的是子类的实例 => super()   parent.constructor.call(this) // this指向child
// 而class A extends B {} 相当于
// class A extends B {
//    // 这里只是简单举例
//    constructor(...arg) {
//      super(...arg)
//    }
// }
// 自定义的Writable流必须调用 new Stream.Writable([options])构造函数，并实现writable._write()和/或writable_writev()方法
class MyWritable extends Writable {
  _write () {
    // fs.writeSync();
  }
}
