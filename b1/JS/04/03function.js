//全局污染：变量出现后会影响其他的使用
//轮播图
//匿名函数自调用
(function(a){
	//局部变量，不会对全局造成污染
	var num1=1;
	console.log(a);
	})(2);
//就买专辑
//var num=3

(function (b){
	var num2=3;
	console.log(b)
})(4)
