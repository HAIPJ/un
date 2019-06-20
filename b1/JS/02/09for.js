/*for (var i=2000,sum=0;i<2100 ;i++ )
{if (i%4==0&&i%100!=0||i%400==0)
{
	console.log(i);
		sum++;
		if (sum==10)
{break
}
}
}*/



	/*for (var i=1;i<=9 ;i++ )
	{for (var j=1,str=' '; j<=i;j++ )
	{str+=i+'*'+j+'='+j*i+' ';
	}console.log(str)
	}*/

	for (var i=1,sum=0;i<=100 ;i++ )
	{sum+=i
	if (sum>4000)
	{console.log(sum,i);break
	}
	}