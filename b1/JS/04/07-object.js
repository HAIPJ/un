//使用对象字面量创建对象
/*var phone={
	color:'blue',
	brand:'huawei',
	size:6.5,
	madein:'china'};
console.log(phone);*/

/*var pople={
	name:'王麻子',
	'性别':'男',
	age:55};
console.log(pople);*/

/*var pople={
	eid:1,
	name:'hh',
	sec:'nv',
	birthday:'1996',
	salary:20000,
	'dept-id':20
	}
	//console.log(pople)
	
	//访问对象中的属性值，获取对象中的属性值
	console.log(pople.name)
console.log(pople['dept-id'])

//访问对象中不存在的属性返回undefined;
console.log(pople.size)

//修改对象中的属性值
pople.salary=10000;
pople['birthday']='2019-12'
console.log(pople)*/

var computer={
	size:5.5,
	brand:'vivo',
	color:'blue',
	memory:'16G',
	}
console.log(computer);
console.log(computer.brand);
computer.color='red'
computer.madein='成都'
console.log(computer)