/*var person={
	name:'tom',
	age:18,
	sex:'男'
};
for(var key in person){
//key对象中每一个属性名
console.log(key,person[key])
}*/

var total={
	//name:'mak',
	//age:19,
		//sex:'女',
  math:99,
	china:75,
	english:78,
	history:89
}
var sum=0;
for(var key in total){
//console.log(key,total[key])
//把每一个属性值加到sum中
sum+=total[key];
}
console.log(sum)