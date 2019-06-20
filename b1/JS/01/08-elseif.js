//判断一个人的政治面貌
/*var type='少先队员';
if (type=='党员')
	{console.log('此人为党员');
}else if (type=='团员')
	{console.log('此人为团员');
}else if (type=='群众')
	{console.log('此人为群众');
}else {
	console.log('此人为非法的政治面貌');
}*/
//根据订单的状态码来打印对应的中文
//1-等待付款 2-等待发货  3-运输中  4-已签收 5-已取消  其他-错误的状态码
/*var status=3;
if (status==1)
{console.log('等待付款');
}else if (status==2)
{console.log('等待付款');
}else if (status==3)
{console.log('运输中');
}else if (status==4)
{console.log('已签收');
}else if (status==5)
{console.log('已取消');
}else{console.log('错误状态')}*/


//练习根据一个人的成绩，进行评判
//声明变量保存成绩
//优秀  90  良好  80-90以下 中等70-80以下  及格60-70以下  不及格60以下
/*var score=75;
if (score>=90)
{console.log('优秀');
}else if (score>=80&&score<90)
{console.log('良好');
}else if (score>=70&&score<80)
{console.log('中等');
}else if (score>=60)
{console.log('及格');
}else if (score<60)
{console.log('不及格');
}*/
//练习：银行更具客户的存款分类
//10w以下   普通客户
//10-50w  优质客户
//50-100w  金牌客户
//100w以上   钻石客户
var moeny='60';
if (moeny<10)
{console.log('普通客户')
}else if (moeny<50//&&moeny>=10
)
{console.log('优质客户')
}else if (moeny<100//&&moeny>=50
)
{console.log('金牌客户')
}else if (moeny>=100)
{console.log('钻石客户')
}