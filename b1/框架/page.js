const express=require('express')
const querystring=require('querystring')
var server=express()
server.listen(8080)
/*server.get('/paeg',function(req,res){
	res.sendFile(__dirname+'/paeg.html')
})*/

server.post('/paeg',function(req,res){

req.on('data',function(buf){
var obj=buf.toString()
//	响应的对象格式化为对象
var str=querystring.parse(obj)
res.send(`
	${str1.substr(6,4)}年
	${str1.substr(10,2)}月
	${str1.substr(10,2)}日
	性别${str1.substr(-2,1)%2==0?'女':'男'}`)	

/*var str1=str.uname
var year=str1.substr(6,4)
var moth=str1.substr(10,2)
var date=str1.substr(12,2)
var sex=str1.substr(-2,1)%2==0?'女':'男'
//响应
res.send(year+'年'+moth+'月'+date+'日'+sex)
	console.log(str2)
})
//res.send()*/

})
})


