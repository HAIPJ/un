const express=require('express')
var server=express()
server.listen(8080)
server.get('/login',function(req,res){
	res.sendFile(__dirname+'/login.html')
//server.post('')
})
//根据表单的请求创建对应的路由
server.get('/mylogin',function(req,res){
console.log(req.query)
	res.send('这是列表');

})