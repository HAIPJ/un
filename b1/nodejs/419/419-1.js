//给形参设置默认值
/*function add(a,b,c=0){
	console.log(a+b+c);
}
add(2,5)*/

/*//模板字符串
var price=20//如果价格超过20加5，否则正常

var title='华为p30'
var color='红色'
//创建模板字符串
var str=`
商品的名称:${title}
商品的价格:${price>20?(price+5):price}
商品的颜色:${color}
${'欢迎购买'}
`;
console.log(str)*/


var emp={name:'kaka',
	sex:'1',
	brithday:'1995-9-9',
	salary:'6500'
}
	str=`
	姓名:${emp.name}
	性别:${emp.sex==0?'女':'男'}
	生日:${emp.brithday}
	工资:${emp.salary}
`
console.log(str)