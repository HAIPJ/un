/*var x=10;
var y=20;
//console.log(x++);
console.log(++x);
console.log(x++ + ++x);
console.log(y--);
console.log(y++);
console.log(y-- + y++);
console.log(x++ + y-- + ++x + y++);*/
/*var a=10;
var b='10';
console.log(a===b);*/
/*var age=17;
age>=18?console.log('成年人'):console.log('未成年人')；

var uname='root';
var posword='1234546';
var srt=(uname='root'&&poswrod='1234546')?'登陆成功':'登录失败';
console.log(srt);

var year=2000;
(year%4==0&&year%100!=0||year%400==0)&&console.log('闰年')*/

//alert('web');
//var str=prompt('input your name');
//var a=6
//if (a>5)
	//console.log(a)
/*var sex=1
if (sex==1)
{
	console.log('男');
}else{console.log('女');}*/

/*var str=prompt('input price');
var str1=prompt('input count');

var total=str*str1;
if (total>=500)
{
	total*0.8;
}
console.log(total);
var moeny=600;
if (moeny>='toatl')
{
	console.log('pay success');
}else
{console.log('pay error');}*/

/*var type=2;
if (type==1)
{
	console.log('此人为少仙队员')
}else if(type==2){
	console.log('此人为团员');
}else if (type==3)
	{
	console.log('此人为党员');
}else if (type==4)
	{
	console.log('此人为群众');
}else{console.log('此人为非法政治面貌');}*/

/*var scocr=65;
var str=scocr/10;
parseInt(str)
switch (str)
{
case 6:
	console.log('及格');
	break;
case 7:
	console.log('中等');
	break;
case 8:
	console.log('良好');
	break;
case 9:
	console.log('优秀');
	break;
case 10:
	console.log('高材生');
	break;
default :
	console.log('不合格');
}*/

/*var a=1;
while (true)
{console.log(str);
if (str==20)
{break;
}
a++;
}*/

/*var i=1;
var l=2;
var o=3;
var v=4;

while (true)
{var str=prompt('input your b');
if (str==i)
{
	alert('你喜欢我吗');
}else if (str==l)
{
	alert('我喜欢你')
}else if(str==o){
		alert('你愿意做我女朋友嘛');
	}else if (str==v)
	{alert('我很会照顾人的哦');
	}else 
	{alert('你能考虑一下吗');
		break;
	}
	
}*/

/*var a=1;
do
{console.log(a);
a++;
}
while (a<=10);*/

/*var i=1;
var sum=1;
do
{str=sum*=i;
i++;
}
while (i<=5);
console.log(str);*/

/*for (var i=1;i<=150 ;i++ )
{console.log(i)
}*/

/*var str=' '
for (var i=1;i<=5 ;i++ )
{str+='*'
}console.log(str)*/

/*for (var i=1,sum=0;i<=100 ;i++ )
{if (i%3==0)
{continue;
}
sum+=i;
}console.log(sum)*/

/*for (var i=1;i<=9;i++ )
{for (var j=1,str=' ';j<=i;j++)
{str+=i+'*'+j+'='+i*j+' '
}console.log(str)
}*/

/*for (var year=2000,sum=0;year<=2100 ;year++ )
{if (year%4==0&&year%100!=0||year%400==0)
{console.log(year);
sum++;
if (sum==20)
{break;
}
}
}*/

/*for (var i=1,sum=0;i<=100 ;i++ )
{sum+=i
if (sum>4000)
{console.log(sum,i);
break;
}
}*/

/*function jj(n,k){
	console.log(n/k)
}
jj(8,3)*/

/*function jj(n){
	for (var i=1,sum=1;i<=n ;i++ )
	{sum*=i
	}console.log(sum)
}jj(6)*/

/*function kk(n1,n2){
	for (var year=n1,sum=0;year<=n2;year++)
	{if (year%4==0&&year%100!=0||year%400==0)
	{sum++
	}
	}console.log(sum)
}kk(2000,2050)
		kk(2100,2200)*/


/*function fn(n){
	if(n<0)
	{return 0;
	}
	if (n==1)
	{return 1;
	}
	return fn(n-1)+fn(n-2);
	
}
console.log(fn(10));*/



/*function fn(n)
{
if (n==1||n==2)
{return ;
}
var str=0;
var str1=1;
var str2=1;
for (var i=3;i<=n ;i++ )
{strn=str1+str2;
str1=str2;
str2=strn;
}

return strn;


}console.log(fn(9))*/


/*//获取斐波那契数列的第n 项
function fib(n){
//当n=1或者n=2的时候直接返回1
if (n==1||n==2)
{return 1;
}
//当前这一项的值等于前两项相加的和
	return fib(n-1)+fib(n-2)
}
console.log(fib(10))
/*fib(4)+fib(3)
  fib(3)+fib(2)+fib(2)+fib(1)
	fib(2)+fib(1)+fib(2)+fib(2)+fib(1)
*/

/*var a=1;
var b=2;
//需要第三方变量
var c=a;
a=b;
b=c;
console.log(a,b)*/


function fib(n){
	//首先第一项和第二项的值都是1
var n1=1;
var n2=2;
//如果要获取的第n项的值，需要从第三项开始，不断往后移动
for (var i=3;i<n ;i++ )
{//每移动一次，当前的n1的值为上一次n2的值，当前的n2为上一次n2+n2的值
	var c=n1;
	n1=n2;
	n2=c+n2;
}
//当前n1的值就是这一项的值
return n2;
}console.log(fib(50));