//引入url模块
const url=require('url')
//引入查询字符串模块
const querystring=require('querystring')
var str='http://www.tmooc.cn:3000/web/1903.html?sid=10&course=javascript'
//获取url中查询字符串
var obj=url.parse(str)
var qs=obj.query
//将查询字符串格式化为对象
var obj2=querystring.parse(qs)
console.log(obj2.sid,obj2.course)