//引入MySQL模块
const mysql=require('mysql')
//创建连接对象
var connection=mysql.createConnection({
	host:'127.0.0.1',
	port:3306,
	user:'root',
	passwrod:'',
	database:'tedu'//连接后使用的数据库
})
//建立连接
connection.connect()
//执行sql语句
//参数1：SQL语句
//参数2：回调函数，用于获取SQL语句的结果
connection.query('SELECT*FROM emp',function(err,result){
	//err可能产生的错误
	if(err)throw err
		//result执行的结果
		console.log(result)
})

		connection.query('DELETE FROM emp WHERE eid=4',function(err,result){
			if(err)throw err
				if(result.affectedRows>0){
				console.log('删除成功')}
				else{console.log('删除失败')}
		})

			
		
		//关闭连接
connection.end()

