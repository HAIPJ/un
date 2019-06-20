var str='China是世界上人口做多的国家,china的互联网非常发达，CHINA有好多的程序员，welcome to china';
//查找china出现了多少次
//console.log(str.match('china'))
//使用正则表达式的写法查找
//修饰符
//i-->ignore 忽略大小写
//g-->global 全局查找
//console.log(str.match(/china/ig))
//search 满足条件的第一个下标
//console.log(str.search(/chinas/i))
//查找并替换
console.log(str.replace(/china/ig,'中国'))