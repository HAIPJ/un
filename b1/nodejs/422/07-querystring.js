/*//引入querystring模块
const querystring=require('querystring');
//查询字符串
var str='lid=5&name=dell'
//使用查询字符串模块，将查询字符串格式化对象
var obj=querystring.parse(str)
console.log(obj)
//将对象转换成查询字符串
var str2=querystring.stringify(obj);
console.log(str2)*/

const querystring=require('querystring');
var str='e=utf-8&tn=baidu&wd=电脑'
var obj=querystring.parse(str)
console.log(obj)
var str2=querystring.stringify(obj);
console.log(str2)