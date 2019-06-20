//打印1-10之间所有的整数
/*var i=1;
while(true){console.log(i);
	//当i为10的时候，结束循环
	//后边的循环体和循环条件都不执行
	if (i==10)
	{break;
	}

i++;
}*/

/*《javascript高级程序设计》第三版
练习：声明变量保存1个数字，无限循环弹出提示框，输入数字；如果输入的比保存的大，警示框提示'big',如果输入的比保存的小，警示框提示输入'small',否则提示'right'*/
//03—break.html循环前声明变量保存数字，无限循环的循环中弹出提示框，获取输入的值，在和之前的变量比较if-elae嵌入套
var a=25;

while (true)
{var str=prompt('input your b');
//查看输入的值和之前保存的值对比
//如果输入的值大于保存的值
if (str>a){
	alert('big');
}else if (str<a){
	alert('small');
}else {
	alert('right');
	break;}
}


