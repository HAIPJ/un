//根据订单的状态码打印对应的中文
/* var status=3;
 switch(status){
	case 1://如果status的值是1
		console.log('等待付款');
		break;
	case 2:
		console.log('等待发货');
		break;
	case 3:
		console.log('运输中');
		break;
	case 4:
		console.log('已签收');
		break;
	case 5:
		console.log('已取消');
		break;
	default:
		console.log('错误的状态码');
 }*/

 //练习：获取星期的值，范围0-6，根据星期的状态码打印对应的中文形式，声明变量保存学前班代码
 var week=0;
 switch (week)
 {
  case 0:
	  console.log('星期天');
		break;
  case 1:
		console.log('星期一');
		break;
	case 2:
		console.log('星期二');
		break;
	case 3:
		console.log('星期三');
		break;
	case 4:
		console.log('星期四');
		break;
	case 5:
		console.log('星期五');
		break;
	case 6:
		console.log('星期六');
		break;
	default:console.log('错误的星期代码');
 }