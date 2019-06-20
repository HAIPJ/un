/*//声明变量
var str='ABcd';
//无限循环弹出提示框
while (true){
	//获取输入的内容
	var str1=prompt('input chaeck str');
	//输入的内容和验证码是否一致
	if(str1.toUpperCase()==str.toUpperCase()){
		//结束循环
		break;
	}
}*/

/*var str='javascript';
//截取字符串
console.log(str.slice(4))
console.log(str.slice(4,7))
console.log(str.slice(-3-1))*/


/*var str='tom123@163.com';
//console.log(str.indexOf())
//截取用户名：0-@的下标
console.log(str.slice(0,str.indexOf('@'))) 
//截取域名：@的下标下一位-最后
console.log(str.slice(str.indexOf('@')+1))
*/

/*var str='javascript';
//截取指定的长度
console.log(str.substr(4,3));
console.log(str.substr(-3,2))*/


/*var str='110236199806202589'
var year=str.substr(6,4)
var moth=str.substr(10,2)
var date=str.substr(12,2)
var sex=str.substr(-2,1)%2==0?'女':'男'
console.log(year+'年'+moth+'月'+date+'日'+sex)*/

/*var str='javascript'
//截取字符串
console.log(str.substring(4))
console.log(str.substring(4,7))
//不允许写负数
console.log(str.substring(3,0))*/

/*var str='heLLO'
//截取首字母
var str1=str.substring(0,1).toUpperCase();
//截取第二个字符到最后
var str2=str.substring(1).toLowerCase();

console.log(str1+str2)*/


/*//数组转为字符串
var arr=['html','css','js'];
var str=arr.join('-')
//console.log(str)
//将字符串分隔成数组
var arr2=str.split('-')
console.log(arr2)*/

var email='tom123@163.com';
console.log(email.split('@'))