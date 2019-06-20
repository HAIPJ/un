//满足老人或者儿童，满足其一
//var age=5;
//console.log(age>65 || age<=12);
//练习如果登录使用用户名root或者使用手机号码18112345678，满足任意一种方式都是true,否则false
//var dname='droot';
//console.log(dname=='droot'||dname=='18112345678');

 
//80~90以下
//var score=85;
//console.log(score>=80 && score<90);
//声明变量保存用户名和密码，如果用户名是root,并且密码是123456，打印true,否则打印false
//var ename='root';
//var possword='123456';
//console.log(ename=='root' && possword=='123456');

//console.log(!!(3>1));
//var num=3;
//num>5 && console.log(a);
//num<1 || console.log(a);
//var age=18;
//age>=18 && console.log('成年人');

//console.log(5&7);
/*
101
111
————
101
*/
//console.log(7|9);
/*
0111
1001
————
1111
*/
//console.log(13|20)
/*
01101
10100
————
11111
*/
//console.log(4^7);
/*
100
111
__
011*/
//console.log(5^8);
/*
0101
1000
____
1101
*/
//console.log(120>>1);
/**/
//练习：（1）声明变量保存一个年份，判断这个年分是否为闰年，结合逻辑短路，如果是闰年，打印闰年
//闰年：4年一个闰年（能被4整除），并且不能被100整除，或者能被400整除
//var year="2019";

//2019%4==0 && console.log(year);

var year='2019';
console.log((year%100!=0||year%400==0)&&year%4==0);
