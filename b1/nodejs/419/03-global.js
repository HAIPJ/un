//局部的
var a=1;
function fn(){
	console.log(2);
}
//使用global来访问a和fn
console.log(global.a);
global.fn;