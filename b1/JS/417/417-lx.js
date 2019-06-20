/*var str=['a','b','c','d','e','f','g','h','i']
console.log(str[Math.floor(Math.random()*10)])*/

/*var arr=['a','b','c','e','f','g','h','i','j','k','l','n','m','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','E','F','G','H','I','J','K','L','N','M','O','P','Q','R','S','T','U','V','W','X','Y','Z']


var arr2=[0,1,2,3,4,5,6,7,8,9]
var arr3=arr.concat(arr2)
var arr4=[]
for (var i=0,sum=0;i<4 ;i++ )
{var index=Math.floor(Math.random()*arr3.length)
arr4.push(arr3[index])
//在原数组中删除取到的元素
//pop  shift  splice
arr3.splice(index,1)


}
console.log(arr4)*/



//获取每个单词，按空格将字符串分割为数组
//遍历数组，将每个单词首字母取出转大写，其他的字母取出转小写，拼接起来替换之前的字符串

//获取每个单词，按空格将字符串分割为数组
var arr='hOw aRE yOu'
var str=(arr.split(' '))
//历数组，将每个单词首字母取出转大写，其他的字母取出转小写
for (var i=0;i<str.length ;i++ ){
	var first=str[i].slice(0,1).toUpperCase();
	//取其余字母
	var last=str[i].slice(1).toLowerCase();
  str[i]=first+last

}
//数组arr转字符串

	console.log(str.join(' '))