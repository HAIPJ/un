//创建对象，存储日期时间
//var d1=new Date('2019/4/18  10:20:30');
//var d2=new Date(2019,11,19,10,20,30)

//获取当前的系统时间
//var d3=new Date();
//存储计算机元年的毫秒数
//1970-1-10  0:0:0
//var d4=new Date(0)
//var d5=new Date(5480000000000)
//console.log(d5)

//获取Date对象中的日期时间等
/*console.log(d1.getFullYear())
console.log(d1.getMonth()+1)
console.log(d1.getDate())
console.log(d1.getHours())
console.log(d1.getMinutes())
console.log(d1.getSeconds())
console.log(d1.getMilliseconds())
console.log(d1.getDay());//0-6
console.log(d1.getTime())*/

//创建Date对象，保存当前系统的日期时间；根据对象打印2019年04月19日，星期四

/*var dta=new Date('2019/04/18 11:19:30')
var str=dta.getFullYear()
var str1=dta.getMonth()+1
var str2=dta.getDate()
var str5=dta.getDay()
var str3=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']

if (str1<10)
{str4='0'+str1
}
console.log(str+'年'+str4+'月'+str2+'日'+str3[str5])*/


//计算距离2019年国庆节还有多少天，多少小时，多少分，多少秒
//计算
var str=new Date()
var str1=new Date('2019,10,1')
var str2=(str1-str)
var str2=(str1-str)/1000
var str3=new Date(str2)/(3600*24)
//var d=Math.floor(str2/1000)
//var str3=Math.floor(d/(3600*24))
//var mon=str3.getMonth()+1
//var dt=str3.getDate()
//var h=str3.getHours()
console.log(str3)