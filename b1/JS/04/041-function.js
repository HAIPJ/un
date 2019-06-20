//匿名函数
//function(){}
//使用匿名函数创建函数——函数表达式
//此时的变量名称就是函数名称
/*var fun=function(){
console.log(1)
}
//调用函数
fun();*/


var getsum=function (a,b){
	for (var i=a,sum=0 ;i<=b ;i++ )
	{sum+=i
	}
	return sum;
}
console.log(getsum(2,15));