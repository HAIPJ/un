var str=prompt('input price');
var str1=prompt('input count');
//str=Number(str);
//str1=Number(str1);
//alert(str*str1)
//计算总价
var total=str*str1;
if(total>=500){total*0.8;}
console.log(total);
var money=600;
//如果余额足够支付，支付成功否则支付失败
if(money>=total){console.log('pay success');
}else{console.log('pay error');}