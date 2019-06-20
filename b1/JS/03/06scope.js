/*//全局作用域下的变量
var a=1;
function fn(){
	//函数作用域
	var b=2;
	//访问全局的变量a
	console.log(a);
}
fn();

//访问局部的变量
console.log(b);*/
var c=3;
function fun(){
	//修改全局变量
	c=5;
	}
	fun();
	console.log(c)