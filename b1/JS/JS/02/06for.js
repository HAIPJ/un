//练习1-10所有的整数
/*for (var i=1;i<=10;i++ )
{console.log(i)
}*/
//计算1-100之间所有整数的和
//打印80 77  74 ...50
/*var sum=0;
for (var i=1;i<=100;i++)
{sum+=i;
}
console.log(sum);

for (var i=80;i>=50 ;i-=3 )
{console.log(i)
}*/
//练习计算1-20之间所有偶数的乘积
/*var ride=1
for (var i=1;i<=20 ;i++ )
{if (i%2==0)
{ride*=i
}
}console.log(ride)*/
//打印本世纪（2000~2100）所有的闰年，能被4整除，并且不能被100整除，或者能被400整除

/*for (var i=2000;i<=2100 ;i++ )
{if(i%4==0&&i%100!=0||i%400==0)
	{console.log(i)}
}*/
//字符串拼接


/*for ( var i=1,str='';i<=5 ;i++)
{//每次产生的*拼接到str中
	str+=i+'*5='+(i*5)+' ';
}console.log(str);*/
/*var sum=0,i=1;
for (;i<=100 ;i++ )
{sum+=i
}console.log(sum)*/
/*如果有多个循环条件，后边的起作用
for (var i=1,j=5;j>=5,i<=10 ;i++,j-- )
{console.log(i,j)
}*/
//练习计算1/10+2/9+3/8....+10/1
for (var i=1,o=10,sum=0;i<=10 ;i++,o-- )
{sum+=i/o
	
}console.log(sum)