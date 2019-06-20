const express=require('express')
const mysql=require('mysql')
var server=express()
server.listen(8080)
//托管到静态资源到public
server.use(express.static('public'))
//创建连接池对象
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:3306,
	user:'root',
	password:'',
	database:'tedu',
	conncetionLimit:20
})
//更具表单提交创建对应的路由
server.get('/add',function(req,res){
//获取浏览器传递的数据
	var obj=req.query
	console.log(obj)
	//数据插入到数据库
	pool.query('INSERT INTO dept SET ?',[obj],function(err,result){
		if(err)throw err;
		console.log(result)
		if(result.affectedRows>0){
			res.send({code:200,msg:'add 添加成功'})
		}
	})
})

