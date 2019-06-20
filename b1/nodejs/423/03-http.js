//引入http模块
const http=require('http')
//模拟浏览器向web服务器发请求
//get:请求的方法
//参数1：请求的URL
//参数2：回调函数，用于获取服务端响应
http.get('http://www.tmooc.cn',function(res){
	//res：相应的内容，格式为对象
	//console.log(res)
		//响应的状态码
	console.log(res)
		//响应的数据
	//通过一个事件获取：当有数据传输的时候，自动触发这个事件
	//也是使用回调函数来获取
	//res.on('data',function(buf){
	//	console.log(buf.toString())
	//})
})


/*const http=require('http')
http.get('http://www.tmooc.cn',function(res){
	console.log(res.statusCode)
	res.on('data',function(buf){
		console.log(buf.toString())
	})
})*/

/*const http=require('http')
http.get('http://www.weather.com.cn/data/sk/101010100.html',function(res){
	console.log(res.statusCode)
	res.on('data',function(buf){
	console.log(buf.toString())
		})
})*/