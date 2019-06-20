//弹出警示框
//alert('web');//(alert警示框)
//alert('tedu.cn')//(多次警示框，弹出顺序，一个接一个)


//弹出提示框（输入框）
//把输入的值存储到变量中
//var str=prompt('input your name');//(prompt提示框)
//console.log(str,typeof str);

//练习弹出两次提示框，分别输入两个数字，计算两个值相加：把相加的结果一警示框形式弹出
var num1=prompt('input first number')
var num2=prompt('input second number')
//把num1和num2转换为数值型
num1=Number(num1);
num2=Number(num2);
//弹出相加的结果
alert(num1+num2);
