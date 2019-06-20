/*//弹出三次警示框结束
var i=0;
function fn(n){
	i++;
	alert('long ago')
		//当i为3的时候，结束
	if (i==3)
	{//结束函数，不是为了返回某个结果
		return;
	}
		//在函数内部调用自身__递归
	
		fn();
}
fn();*/

//使用递归来计算1-任意数字之间得和
/*var i=1;
function fn(){
	if (i>=1,sum=0)
	{i++;
	sum+=i
	}
	fn();
}
fn();*/


/*function getsum(n){
	//当n为1的时候，返回1
	if (n==1)
	{return 1;
	}
	return n+getsum(n-1);
	
	
}
var sum=getsum(1105);
console.log(sum);*/

function fn(n){
	if(n>=3,sum(1)==1 ,sum(2)==1){
	n++;
	sum(n)+=n
}
}return sum(n-1)+sum(n-2)
}
 str=fn(3);
console.log(str)
