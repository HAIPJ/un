const express=require('express')
var server=express()
server.listen(8080)
//使用中间件验证注册
//参数1：给哪一个URL的路有使用；如果为空，会给所有的路由使用；
//参数2：中间件函数:可以获取请求，以及做出响应;给路由使用
server.use(function(req,res,next){
	console.log('验证了数据是否为空')
	//会执行下一个中间件或者路由
	next()
})
server.get('/list',function(req,res){
		res.send('这是商品的列表')
	})
//主要的业务逻辑
server.get('/reg',function(req,res){
	res.send('注册成功');
})


server.use('/reg',function(req,res,next){
//console.log('是否可用')
	//next()
	onsole.log('该用户已注册')
	res.send('请使用其他的用户名')
})
var n=0;
	//添加中间件
	server.use('/view',function(req,res,next){
		//n='1'
		n++;//++隐式将n转成数字
		next()
	})
		server.get('/view',function(req,res){
		res.send(n.toString())
		
		})