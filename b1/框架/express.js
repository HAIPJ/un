/*//引入express
const express=require('express');
//创建web服务器
var server=express()
//设置端口
server.listen(8080);

//路由
//get请求的方法
//参数1：请求的URL
//参数2：响应
server.get('/index',function(req,res){
	//req:请求的对象；
	//res:响应的对象
	res.send('你还好吗');
	
})*/
//练习：创建路由，请求的方法为get，请求的URL:/login ,响应'请登录'

/*const express=require('express')
var server=express();
server.listen(8080)
server.get('/login',function(req,res){
	//send调用一次，就代表响应结束；就不允许再次调用
	res.send('请登录<br>欢迎');
	
})*/

//创建路由，请求的方法get,请求URL:/list,响应的内容’这是商品列表‘

const express=require('express')
var server=express();
server.listen(8080)
/*server.get('/list',function(req,res){
	//res.send('这是商品列表')
	//响应listen.html文件到浏览器
	res.sendFile(__dirname+'/listen.html')
})*/

//请求的方法：get,请求的URL：/study,想要中跳转到http://www.tmooc.cn
server.get('/study',function(req,res){
	//跳转
	res.redirect('http://www.tmooc.cn')
})
//