const express=require('express')
//引入body-parser中间件
const bodyParser=require('body-parser')
var server=express()
server.listen(8080)

//使用bodyParser中间件将post请求数据格式化为对象
server.use(bodyParser.urlencoded({
	extended:false
		//不使用扩展的qs模块，而使用querystring模块格式化为对象
}))

server.post('/login',function(req,res){

//获取post请求的数据，格式化为对象
//前提：已经使用了中间件body-parser
console.log(req.body)
	res.send('登陆成功')
})
server.use(express.static('public'))