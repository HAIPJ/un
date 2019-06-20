//引入模块
const express=require('express')
//引入路由器(自定义模块)
const productRouter=require('./product.js')
const userRouter=require('./user.js')
//创建web服务器
var server=express()
//设置端口
server.listen(8080)

//使用商品路由器
//挂载到/product下
///product/list
//参数1：挂载的位置
//参数2：要使用的路由器
server.use('/product',productRouter)

server.use('/user',userRouter)
