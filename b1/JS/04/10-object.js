/*var person={
	name:'jerry',
	age:18,
	//成员方法
	say:function(){
		//在方法中访问当前对象this
	console.log('我的名字叫'+this.name);
	}
};
//调用成员方法
person.say();*/

var yuan={
	r:3,
	p:'π',
}

yuan.s='9π';
yuan.t='6π';
console.log(yuan);
console.log(yuan.s)
console.log(yuan.t)
console.log(yuan.c)

/*var a=20
function fun(){
a++
	return a
}
var b=fun(a)
console.log(b)*/

/*function fn(){
	console.log(b)
	var b=2;
}
fn(1)

var c=3;
function fun(c){
	
 	c=5;
	return c;
	

}
fun(1)
console.log(fun(1));*/

var d=5;
function foo(){
	//d始终是局部变量，不能被外部访问，形参在原来的基础之上加3，和全局的d没有关系
	d=d+3;
	//d=11
	return d;
}
var str=foo(5);
console.log(str);
