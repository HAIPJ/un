const express=require('express')
var router=express.Router()
router.get('/list',function(req,res){
	res.send('这是用户')
})
		module.exports=router