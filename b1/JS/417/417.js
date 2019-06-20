/*var arr=['g','j','b','f']
var arr1=[1,2,3,4,5]
var arr2=['马克','卡里','闵道']
console.log(arr.toString())
console.log(arr.join('+'))
console.log(arr.concat(arr1,arr2))
console.log(arr2.concat(arr1,arr))*/

/*var arr=['mx','bi','lo','ba','ci','vi','na','de']
var a=arr.slice(1,4)
var b=arr.slice(1,2)
console.log(a,b)*/

/*检测对象中是否含有某个属性
对象。属性名===undefind
对象hasOwnProperty(属性名)
‘属性名'in 对象
数组
数据的集合
创建数组
[]  new Array()
访问数组元素
数组[下标]
数组长度
数组.length
数组分类
关联数组（下标为字符）/索引数组（下标位数字）
数组的遍历
for (var key in 数组)//key数组下标
{}
for (var i=0;i<=数组.length;i++ )
{}
数组API
toString/join/cancat/slice(a,b)/splice(a,b)/reverse/sort*/

/*//遍历翻转数组
var arr=['a','b','c','d'];
//准备新数组倒着获取数组中的元素放入到新数组
var newArr=[];
//遍历数组arr
for (var i=0;i<arr.length;i++ ){
	//对应元素的下标=长度-1-i
	//0  4  4
	//1  4  3


	//console.log(arr.length-1-i)
  //把倒着获取的元素，放入到新数组
	newArr[i]=arr[arr.length-1-i];
}
console.log(newArr)*/

//冒泡排序
var arr=[78,6,23,9,45];
//外层循环控制次数，比较4轮（循环4次）
for (var i=1;i<arr.length ;i++ ){
	//1 5 4
	//2 5 3 
	//3 5 2
	//4 5 1
	//内层循环：比较的次数
	//循环条件：数组长度-i
	for (var j=0;j<arr.length-i ;j++ ){
		//如果当前的元素大于下一个元素，则元素位置交换
		//当前元素下标j  下一个元素j+i
		if (arr[j]>arr[j+1]){
			var c=arr[j];
			arr[j]=arr[j+1];
			arr[j+1]=c;

		}
	}
}
console.log(arr)