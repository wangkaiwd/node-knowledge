console.log('before require');
console.log(require.cache);
const demo2 = require('./demo02');
console.log('after require');
console.log(require.cache);
demo2();

const repeatDemo2 = require('./demo02');
repeatDemo2();
