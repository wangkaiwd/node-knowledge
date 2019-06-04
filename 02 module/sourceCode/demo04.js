// 本质上来讲：exports是module.exports的一个引用，它们指向同一片内存空间
// exports = module.exports
exports.a = 1;
module.exports = { b: 2 }; // 当引用发生变化的时候，exports不再是module.exports的快捷方式
