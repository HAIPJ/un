/*//使用字符串作为下标----关联数组
var person=[];
person['name']='tom';
person['age']=18;
person['sex']='男';
person['phone']='151554635';
console.log(person);  
for (var key in person )
//key要遍历的元素的下标
//person[key]下标对应的元素
{console.log(key,person[key])
}*/

//var sum=0
//
//var studes=[65,98,78,85,99,88,48]
//for (var key in studes )
//{
	//sum+=studes[key];

//}
//console.log(sum)


//使用for循环获取下标0-4，使用下标获取元素
/*for (var i=0;i<studes.length;i++){
	//i代表下标
	//studes[i]下标对应的元素
	console.log(i,studes[i])
	sum+=studes[i]
}
	console.log(sum)*/

/*var list=[
{lid:1,title:'apple',price:6888},
{lid:2,title:'dell',price:4999},
{lid:3,title:'小米',price:3999}
];
console.log(list)*/

/*var name=['tom','make','jieke','linda'];
for (var i=0;i<=name.length;i++ )
{
if (name[i]=='tom')
{name[i]='汤姆'
}

}console.log(name)*/

//创建数组，包含多个姓名，查询Tom出现的次数
//创建数组
//遍历数组
//初始化变量的次数为0
//判断每个元素是否为tom,如果是次数加1
/*var name=['tom','mak','jiexi','tom','timu','linaad']
for (var i=0,str=0;i<=name.length ;i++ )
{if (name[i]=='tom')
//如果每个元素为tom，则次数加一
{str++

}
}console.log(str)*/

//练习：创建数组，包含多个数字，获取这组数字地最大值
//创建数组
////遍历数组元素
//声明变量用于保存最大值，默认把第一个元素放进去
//使用之前声明的变量和每个元素比价，如果变量小于任何一个元素，咋把该元素放入到变量中

/*var a=[25,56,98,99,102,015,250,126,380,666]
var max=a[0]
for (var i=1;i<=a.length ;i++ )
{//用max和数组每个元素比较
	//如果小于任意一个元素，则把该元素放入到max
	if(max<a[i])
{max=a[i]
}
}console.log(max)*/


function getavg(salary){;
//salsry就是一个数组
//遍历salary,获取数组元素的和
for (var i=0,sum=0;i<salary.length ;i++ )
{sum+=salary[i]
}
return sum/salary.length
}
console.log(getavg([4500,4900,6500,3800,8000,4300,3000]))
