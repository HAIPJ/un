//开启一次性定时器
/*var timer=global.setTimeout(function(){
	console.log('炸弹爆炸')
},3000)
//清楚一次性定时器
clearTimeout(timer)


//开启周期性定时器
var timer=global.setInterval(function(){
	console.log('炸弹爆炸')
},1000)
//清楚一次性定时器
	clearInterval()*/
/*var i=0;
	var ter=global.setInterval(function(){	
	console.log('哈哈',3000)
		i++;
	if(i==3){clearInterval(ter)}},3000)*/
		

/*var str=setImmediate(function(){
	//回调函数会放入到队列中
	//当主线程执行完，才会执行队列的内容
	//console.log('你好吗')
	console.log('查询数据库')
})
	clearImmediate(str)*/

	//在主程序执行完立即执行
	process.nextTick(function(){
		console.log('操作数据')
	})
	console.log('连接数据库')

