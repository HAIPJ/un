//创建两个模块main.js(主模块)，circle.js(功能模块)，在功能模块中创建两个函数，传递一个参数半径，计算圆的周长和面积，到处这两个函数；在主模块中引入功能模块，并调用两个方法
function str1(r){
	return 2*Math.PI*r;
}
function str2(r){
	return Math.PI*Math.pow(r,2)
}
/*module.exports.str1=str1
module.exports.str2=str2
module.exports.fn=function(){
console.log(1)
}*/
//赋值对象给要导出的对象，exports和module.exports就不在指向同一个对象
module.exports={
	eid:1,
	ename:'tom'


}