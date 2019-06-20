/*var circle=new Objeck();
cricle.r=5;
circle.PI='π'；
circle.getArea=function(){
return this.PI*this.r*this.r
}
circle.getLength=function(){
return 2*this.PI*this.r;
}
console.log(circle.getArea)
console.log(circle.getLength)*/

/*var person={
	name:'tom',
	sex:'男',
	age:18,

};
//访问不存在毒属性返回undefined;
//console.log(person.phone);
//比较一个属性的值是否为undefined
console.log(person.sex===undefined);

//查看是否有自己的某个属性
console.log(person.hasOwnProperty('name'));
//查看某个属性是否存在与对象中
console.log('phone'in person);*/

/*var book={
	id:1002,
	title:'javascript高级程序设计',
	price:79
}
//把book变量中存储的数据赋给book2变量
//把现在book存储的地址赋给了book2
//现在
var book2=book;
//修改你book中属性
book.price=86
console.log(book2)
book2.title='javascript权威指南';
console.log(book2)


//原始类型存储
var a=1;
var b=a;
b=3;
console.log()*/

//fn提升到最前边
//var fn
//function fn(){}//把一个函数赋给fn
console.log(fn)
var fn=1;//再次赋盖了fn中的值
function fn(){
	
}
console.log(fn);