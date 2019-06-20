//创建路由器对象
const express=require('express');
//引入连接池模块
const pool=require('../pool.js')

//创建路由器对象
var router=express.Router();
//添加路由

//1.用户注册

//get  /login
/*router.get('/rag',function(req,res){
	//格式化为对象
	var obj=req.query;
	console.log(obj);
		//检测是否为空
	if(obj.uname==''){
		res.send({code:401,msg:'uname required'});
			return;
	};
	if(obj.upwd==''){
		res.send({code:402,msg:'upwd required'});
		return
	}
		if (obj.phone=='')
		{res.send({code:403,msg:'phone required'})
		return
		}
		if (obj.email=='')
		{res.send({code:404,msg:'email required'})
			return
		}
		
		// 执行SQL语句
pool.query('INSERT INTO xz_user SET ?',[obj],function(err,result){
	//判断错误
	if(err) throw err;
	console.log(result)
		//判断是否成功
	if(result.affectedRows>0){
		res.send({code:200,msg:'res suc'})
	}
})
	//res.send('注册成功');
});*/

//2用户登录
/*router.post('/login',function(req,res){
	//获取post请求的数据
	var obj=req.body;
	console.log(obj)
		//验证是否为空401 402
	if(!obj.uname){res.send({code:401,msg:'uname required'})
	return	
	}
	if(!obj.upwd){res.send({code:402,msg:'upwd required'})
	return	
	}
	//执行SQL语句
	//查询用户表中是否含有用户名和密码同时匹配的数据
	pool.query('select*from xz_user where uname=?and upwd=?',[obj.uname,obj.upwd],function(err,result){
	if(err)throw err;
	//console.log(result)
	//判断数组长度是否大于0
	if(result.length>0){
		res.send({code:200,msg:'login suc'})
	}else{res.send({code:300,msg:'login err'})}
	})


	//res.send('登陆成功')

})*/

//3用户登录
/*router.get('/update',function(req,res){
	//获取get请求数据
	var obj=req.query
		//console.log(obj)
	var n=400
	//便利对象属性，获取所有的属性
	for(var key in obj){
		n++;
	//console.log(key,obj [key])
	//判断属性是否为空
	if(!obj[key]){
	res.send({code:n,msg:key + ' required'})
		return
	}
	}
	

	//执行SQL语句，修改数据
	pool.query('update xz_user set phone=?,email=?,user_name=?,gender=? where uid=?',[
		obj.phone,
		obj.email,
		obj.user_name,
		obj.gender,
		obj.uid
		],function(err,result){
	if(err)throw err
		//console.log(result)
	//判断是否修改成功
	if(result.affectedRows>0){
	res.send({code:200,msg:'update suc'})
	}else{res.send({code:301,msg:'update err'})}
		
	})
})*/
 
 //4用户检索
 /*get
/user/detail
获取数据
验证是否为空
执行SQL语句（查询编号对应的用户） */
/*router.get('/detail',function(req,res){
	var obj=req.query
	if(!obj.uid){
	res.send({code:401,msg:'uid required'})
		return
	}
	pool.query('select*from xz_user where uid=?',[obj.uid],function(err,result){
		if(err)throw err
		res.send(result)
	})
})*/

//5用户列表
/*router.get('/list',function(req,res){
	//get请求的数据
	var obj=req.query
	//验证是否为空	
	if(!obj.pno){
		 obj.pno=1
	}
	if(!obj.count){
		obj.count=3}
	//将字符串转数字整形
	obj.pno=parseInt(obj.pno)
	obj.count=parseInt(obj.count)	
	//页码开始值
	var start=(obj.pno-1)*obj.count	
	pool.query('select*from xz_user limit ?,?',[start,obj.count],function(err,result){
	if(err)throw err;
	res.send(result)
	})
})*/
//6删除
router.get('/delete',function(req,res){
	var obj=req.query
		//验证是否为空
	if(!obj.uid){
	res.send({code:401,msg:'uid required'})
		return
	}
	pool.query('delete from xz_user where uid=?',[obj.uid],function(err,result){if(err)throw err
		if(result.affectedRows>0){
	res.send({code:200,msg:'delete suc'})}else{res.send({code:301,msg:'delete err'})}
		})
})
//导出路由器对象
module.exports=router;

