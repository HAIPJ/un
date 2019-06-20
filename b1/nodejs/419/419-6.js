console.log('419-6.js')
var b=1;
function fn(){
console.log(2)
}
//导出：公开那些变量或者函数
//默认导出的是一个空对象
//添加导出的内容，往导出的对象中添加属性和方法
//module代表当前的模块对象
//module.exports导出的对象
module.exports.b=b;
module.exports.fn=fn(2);

