//var num1=0xff;
//var num4=3.14;
//var num5=3.14e6;
//var num6=3.14e-6;
//var str1="hello"
//var str2="1"
//var str2='2';

//console.log(num1,num4,num5,num6);
//查看一个字符串unicode码
//console.log('彭'.charCodeAt());
//var islogin=false;
//var isindex=true;
//console.log(islogin,typeof isindex);
//var age;
//console.log(age,typeof age);
//var str1=1+"2";
//console.log(str1,typeof str1);
//var num=3+true;
//console.log(num,typeof num);
//var str3='5'+true;
//console.log(str3,typeof str3);
//var num1=3,num2=true,num3='tedu';
//console.log(num1+num2+num3); 4tedu
//console.log(num2+num3+num1); truetedu3
//console.log(num3+num1+num2);  tedu3true
//var num1=3-'2';
//console.log(num1,typeof num1);
//var num2=3-true;
//var num5=3-'a';//NaN
//var num6=1-undefined;//NaN
//var num7=2-null;//2
//console.log(num5,typeof num5); NAN // (Not a Number无法转换将a转换为数值型)
//将任意的数据强制转换为数值型
//var num1=Number('a');
//console.log(num1,typeof num1);
//var num2=Number(undefined);
//var num3=Number(null);
//var num4=Number(true)
//var num5=Number('1a')
//强制转化为整形（parseInt）
//var num6=parseInt('3.5')
//var num7=parseInt('1a')
//把布尔型的值true、null转换为整形
//var num8=parseInt(true)
//var num9=parseInt(null)
//console.log(num9,typeof num9);
//var num=10;
//var str=num.toString();
//var bool=true;
//var str=bool.toString();
//console.log(str,typeof str);
//console.log(3%2);
//console.log(2%3);
//console.log(-2%3);
//一个值是否为奇数
//console.log(27%2);
//自增或自减
//var num=3;
//先找到里面的空间，然后让里面的值加一
//num++;
//先自增，在相加

//++num;
//先打印当前num的值，然后在执行Num加一
//console.log(num++);//1
//先执行num的值加一，num的值是2，然后打印num
//console.log(num-- + --num);//2
//先取出num的值3，然后执行自减，num的值变成了2。先执行自减，num的值变成了1，然后取出num的值，也就是1.
//console.log(num);
//var a='1'
//自增隐式将数据转为数值型
//a++
//console.log(a,typeof a)
 

//console.log(2>1);
//比较值
//console.log(2=='2');

//比较值和类型
//console.log(2==='2');
//console.log(1==true);
//console.log(1===true);
//console.log(3>'10');
//比较的是unicode码
//console.log('h'.charCodeAt())
//console.log('3'>'10');
//console.log('ab'>'ac');
console.log(3>'10a');
console.log(3<'10a');
console.log('3'='10a');