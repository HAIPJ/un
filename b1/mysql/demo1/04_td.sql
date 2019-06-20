DROP DATABASE IF EXISTS td;
CREATE DATABASE td;
#进入数据库td
USE td;
#创建并保存数据的表(编号、姓名、性别、分数)
CREATE TABLE student(
  sid INT,#integer整型
	name VARCHAR(8),#variable character字符串型
  sex VARCHAR(1),#m->男  f->女
	score INT
);