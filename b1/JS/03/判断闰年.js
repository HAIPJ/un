//判断是否为为闰年，是返回true,不是返回false
function isrun(year){
	if (year%4==0&&year%100!=0||year%400==0)
	{return true;
	}return false;
}//var res=isrun(2000);
//console.log(res);
//根据年分返回天数
function getdays2(year){
//判断年份year是否为闰年
	
	if (isrun(year))
	{return 366;
	}
	return 365;
}
var d=getdays2(2020);
console.log(d);