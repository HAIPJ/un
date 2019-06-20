/*function fn(){
	//调用函数的时候，实参赋给形参
	//a=function(){return 1;}
	//此时的a就是函数名称，如果要执行传递的匿名函数中函数体的代码，需要调用函数
	var num=a;
	console.log(num);
}
fn(function(){
	return 1;
})*/

function fun(a,b){
	var num1=a()
	var num2=b()
	console.log(num1+num2)};
	fun((function(){
	return 1}),function(){return 3;
})