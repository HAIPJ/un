//引入模块
const http=require('http')
//创建web服务器
var server=http.createServer()
//设置web服务器的端口号，监听端口号
server.listen(8080)

//接收浏览器的请求
//on是一个事件，当有请求发生自动触发
//参数1：request事件名称
//参数2：通过回调函数来获取请求合作出响应
server.on('request',function(req,res){
	/*//req:请求的对象
	//请求的url
	console.log(req.url,req.method)
	//res:响应的对象
	//设置响应的状态码和头信息
	//res.writeHead(200,{
	//Server:'web1903'
	//})
	res.writeHead(302,{
		Location:'http://www.tmooc.cn'})
//结束响应，发送响应的内容到浏览器
	//设置浏览器中响应的难内容
	//res.write('404 not found')
	res.end();*/
	//判断请求的url
	if(req.url=='login'){
		res.write('login')
	}else if(req.url=='/study'){
		res.writeHead(302,
		Location:'http://www.tmooc.cn'
		)}
});
res.end();
/*练习：当请求的url为/login，响应一句话'login';当请求的url为/study,跳转到http:www.tmocc.cn
使用if判断请求的URL值
'/login'   write()
'/study'   writeHead()    */