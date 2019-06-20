//练习 创建文件04-post.js，使用express创建web服务器，添加路由
//get  /reg  响应文件  reg.html


const express=require('express')
//引入查询字符串模块
//const querystring=require('querystring')

var server=express()
server.listen(8080)
//server.get('/reg',function(req,res){
	res.sendFile(__dirname+"/reg.html")
})
//根据表单的请求添加对应的路由
//获取post请求传递的数据
	//以事件的形式
	//当有数据传递自动触发事件
	//使用回调函数接收数据
	server.post('/myreg',function(req,res){
	req.on('data',function(buf){
	//buf传递的数据,是buffer形式
	//console.log(buf);
	var str=buf.toString()
	//查询字符串（que）格式化为对象
var obj=querystring.parse(str)
	console.log(obj)
	})
	res.send('恭喜你注册成功')
	})*/


//路由传参
/*server.get('/datail/:lid',function(req,res){
	//接收路由传递的数据
	console.log(req.params)
	res.send('商品详情')
})*/

server.get('/shopping/:pname/:price',function(req,res){
	console.log(req.params)
		res.send('购物')
})


商品模块
商品列表/list   删除/delete 修改/update

用户模块
用户列表/list  删除/delete  修改/update