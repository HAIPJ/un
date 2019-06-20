//引入路由器
const express=require('express')

//使用express创建空路由器
//返回对象
var router=express.Router()
//网路由器中添加路由
router.get('/list',function(req,res){
	res.send('这是商品模块下的列表')
})
//导出路由器
module.exports=router;

