//创建带有参数的函数
//计算任意两个数字相加得和
/*function add(num1,num2){
//在调用的时候，实参的第一个值会赋给num1,实参的第二个值赋给num2;
console.log(num1+num2
}
add(2,3);*/
//创建函数，传递一个参数，计算1~任意数字之间的和
/*function hh(n) {
	for (i=1,sum=0; i<=n; i++)
	{sum+=i
	}
console.log(sum)
}
hh()*/
//创建函数，传递2个函数，计算任意两个年份之间的闰年个数。n1-n2
function kama(n1,n2){
for (var i=n1,sum=0;i<=n2 ;i++ )
{if (i%4==0&&i%100!=0||i%400==0)
{
	sum++;
}
}console.log(sum)
}
kama(2000,2100)
kama(1900,2000)
kama(1862,1962)

function add(a,b,c){
	//形参为赋值，结果也是undefined
//console.log(c)
	console.log(a+b+c)
}add(1,3)//nan