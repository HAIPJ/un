/*var pro=['北京','广东','江苏']
//var city=['海淀','朝阳','东城','西城','广州','深圳','惠州','南京','苏州','无锡']
//二位数据
var city=[
    ['海淀','朝阳','东城','西城'],
    ['广州','深圳','惠州'],
    ['南京','苏州','无锡'],
];
//console.log(city[1][1])
//console.log(city[2][2])*/

var arr=['a','b','c']
var arr2=arr;
//把arr中的地址赋给了arr2
arr.push('d')
//console.log(arr2)
//赋值为null,不在指向任何一个堆内存数据,释放一个内存空间
arr=null;
arr2=null;
console.log(typeof null)
