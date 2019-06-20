/*练习使用http模块创建web服务器，设置端口8080；接收浏览器的请求
/login  响应  this  is  login  page
/member 响应 welcome to home
/   重定向  /login
以上都没有响应内容404  not found */

const http=require('http')
//创建web服务器
var server=http.createServer()
//设置端口
server.listen(8080)
//接收浏览器请求
server.on('request',function(req,res){
	if(req.url=='/login'){
		res.write('this is login page')}else if(req.url=='/member'){
		res.write('welcome to home')
		}else if(req.url=='/'){res.writeHead(302,
			{Location:'http://www.tmooc.cn'})}else{
		res.write('404 not found')}
		res.end()

})

const fs=require('fs')
var str=name['nana','kkak','jkaxi']
for (var i=0;i<str.length ;i++ )
{fs.appendFile('')
}