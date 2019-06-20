//计算任意三个数字相加得和，并把结果返回
/*function add (a,b,c){
	return a+b+c;
}
//把函数的返回结果保存到变量中
var num1=add(3,29,12);
console.log(num1)

//练习：创建一个函数，返回任意两个数字中的最大值。
function getmax (a,b){
if (a>b)
{return(a)
}else
{return(d)
}return max
}var num=getmax(12,9)
	console.log(num)

return a>d ? a:d;*/

//创建函数getmax2,返回任意三个数字中的最大值

/*function getmax2(a,b,c)
{var max= a>b?a:b;
return max>c?max:c;}
var big=getmax2(25,7,15)
console.log(big)*/
//创建函数getstatus,传递状态码，返回对应的中文码
//1等待付款  2等待发货  3运输中  4已签收  5已取消 其他无法追踪
/*function getstataus (a){
if (a==1)
{return '等待付款'
}else if (a==2)
{return '等待发货'
}else if (a==3)
{return '运输中'
}else if (a==4)
{return '已签收'
}else if (a==5)
{return '已取消'
}else{return '无法追踪'}
}var str=getstataus(2)
console.log(str)*/
/*function getstataus(code){
switch (code)
{
case 1:return '等待付款';
case 2:return '等待发货';
case 3:return '运输中';
case 4:return '已签收';
case 5:return '已取消';
case 6:return '无法追踪';
}
}
var n=getstataus(5);
console.log(n);

*/


//创建函数getdays传递任意一个年份，返回对应的的天数
/*function getdays(year){
if (year%4==0&&year&100!=0||year%400==0)
{return 366
}return 365

}
var str=getdays(2000)
console.log(str)*/
//判断是否为为闰年，是返回true,不是返回false
/*function isrun(year){
	if (year%4==0&&year%100!=0||year%400==0)
	{return true;
	}return false;
}
//var res=isrun(2000);
//console.log(res);
//根据年分返回天数
function getdays2(year){
//判断年份year是否为闰年
	
	if (isrun(year))
	{return 366;
	}
	return 365;
}
var d=getdays2(2020);
console.log(d)*/
//1-100所有整数得和
//计算1-任意数字之间所有整数阶乘的和
//传递一个参数
//步骤一创建函数getjc，传递一个参数，计算任意数字的阶乘
//步骤二创建函数getsum，传递一个参数，计算1~任意数字之间所有整数的和
function getjc(n){
	for ( var i=1,ride=1;i<=n ; i++)
	{ride*=i

	}
	return ride
}
//var str=getjc(8);
//console.log(str);

function getsum (n){
	for (var i=1,sum=0;i<=n ;i++ )
//i代表中间数字所有的整数
//获取数字的阶乘getjc(i)

	{//sum+=i；把所有数字加到sum
	sum+=getjc(i)//把所有数字的阶乘加到sum
	}
	return sum;
}
var str=getsum(15);
console.log(str)

