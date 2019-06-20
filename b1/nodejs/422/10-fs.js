//引入文件系统模块
const fs=require('fs')
//查看文件的状态
//参数1：要查看的文件路径
//参数2：回调函数，用于获取结果
fs.stat('08-url.js',function(err,stats){
	//err:如果查看失败的错误信息
	//throw抛出错误,组织往后执行
	if (err) throw err;
	
	//stats:文件的状态信息
	console.log(stats)
		//是否为目录
		console.log(stats.isDirectory())
			//是否为文件
		console.log(stats.isFile)
});

