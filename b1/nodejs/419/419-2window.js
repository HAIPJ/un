var a=1;
function fn(){
	console.log(2);
}
//使用全局对象来访问
console.log(window.a);
window.fn();