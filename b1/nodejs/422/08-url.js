//引入url模块
const url=require('url');
//url
//var str='http://www.codeboy.com:80/product/detail.html?lib=5&name=dell';
//将url格式化为对象
//var obj=url.parse(str)
//console.log(obj.query)

//将对象转换成url
var obj={
	protocol:'http',
	hostname:'176.163.0.224',
	port:8080,
	pathname:'/admin/login.html',
	query:{uname:'root',
	upwd:'123456'
	}
}
var str=url.format(obj)
console.log(str)