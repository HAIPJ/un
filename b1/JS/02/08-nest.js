/*
*****
for (var i=1,str=' ';i<=5 ;i++ )
{//每次循环产生一个*，把他们拼接到字符串str
	str+='*'
}console.log(str)*/
/*for (var j=1;j<=9 ;j++ ){
	for (var i=1,str=' ';i<=9 ;i++ )
	{//每次循环产生一个*，把他们拼接到字符串str
	str+='*'
	}console.log(str)
}*/
//外岑循环：控制循环的行数——j
for (var j=1;j<=9 ;j++ )
{//内层循环：控制循环的列数——i
	for (var i=1,str=' ';i<=j;i++ )
	{
		str+='*'
	}
	//每行循环往打印
	console.log(str)
}