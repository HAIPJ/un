//引入模块
const fs=require('fs')
/*//异步方法
//fs.stat('01_homework',function(err,stats){
	//if (err)throw err;
	//console.log(stats)
//})


//同步方法
//把查看的文件状态保存在到变量中
//使用方法的返回值获取结果
//新建一个文件01_homework
var stats=fs.statSync('01_homework')
console.log(stats);*/


//2、创建目录
//异步方法
/*const fs=require('fs')
fs.mkdir('mydir5',function(err){
	if(err) throw err;
	//其他后续操作
	console.log('目录创建成功')
});*/

//fs.mkdirSync('mkdir3')

//3、移除
/*fs.rmdir('mkdir3',function(err){
	if(err) throw err;
	console.log('移除成功')
})*/

//fs.rmdirSync('mkdir3')

/*fs.readdir('01_homework',function(err,files){
if(err) throw err;
//files是读取的结果
console.log(files)
})*/

//files=fs.readdirSync('01_homework')
//console.log(files)

//5/创建(写入)文件
/*fs.writeFile('1.txt','tedu',function(err){
	if(err) throw err;
	console.log('写入文件')
});*/

//追加写入
//appendFile
/*fs.appendFile('1.txt','我靠',function(err){
	if(err) throw err;
	console.log('追加写入文件')
})*/

/*var ename=['hhh','lili','shaha','make']
for (var i=0;i<ename.length;i++)
{fs.appendFileSync('data.txt',ename[i]+'\n')
}*/

//7读取文件

/*fs.readFile('1.txt',function(err,data){
	if(err) throw err;
	console.log(data.toString())
})*/


//8删除文件
/*fs.unlink('1.txt',function(err){
	if(err) throw err;
	console.log('删除成功')
})*/

//9判断文件是否存在
//var str=fs.existsSync('data.txt')
//console.log(str)


if(	fs.existsSync('2.txt')){

	fs.unlink('2.txt',function(err){
		if(err) throw err;
	console.log('删除成功')})
}


if (!fs.existsSync('mydir2'))
{fs.mkdirSync('mydir2')
console.log('创建成功')
}
console.log(1)

