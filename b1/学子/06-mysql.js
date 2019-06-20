//引入MySQL模块const 
mysql=require('mysql')
//创建连接对象
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:3306,
	user:'root',
	password:'',
	database:'tedu',
	connectionLimit:20//设置连接池的大小
})
//执行SQL语句
/*pool.query('select*from emp',function(err,result){
	if(err)throw err;
	console.log(result)
})*/

//往部门表dept插入数据,查看结果
//var did=18
//var dname='安保部'
/*var boj={
	did:14,
	dname:'后勤部'
}

//?占位符，防止SQL注入（攻击数据库）
pool.query('INSERT INTO dept VALUES(?,?)',[boj.did,boj.dname],function(err,result){
	if(err)throw err;
	console.log(result)
})*/

/*var obj={
	did:21,
	dname:'财务部'
}
pool.query('Insert into dept set ?',[obj],function(err,result){
if(err)throw err
console.log(result)
})//不能在MySQL中使用，nodejs中使用*/

//将部门表dept中编号为40的数据，部门名称改为'测试部'
pool.query('update dept set dname=? where did=?',["测试1部",40],function(err,result){
	if(err)throw err;
	console.log(result)
})