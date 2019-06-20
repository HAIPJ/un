const express=require('express')
var server=express()
server.listen(8080)

//静态资源：html,css，浏览器端js,img...
//把所有的静态资源托管到public目录
//使用内置中间件static
server.use(express.static('public'));


server.use(express.static('files'))