
SET NAMES UTF8;
DROP DATABASE IF EXISTS tedu;
CREATE DATABASE tedu CHARSET=UTF8;
USE tedu;
CREATE TABLE dept(
did smallint primary key auto_increment,
dname varchar (8) unique);
insert into dept values(10,'研发部');
insert into dept values(20,'市场部');
insert into dept values(30,'运营部');
insert into dept values(40,'测试部');D
create table emp(
	eid int primary key auto_increment,
	ename varchar(8) not null,
	sex bool default 0,
	borthday date ,
	salary decimal(8,2),
	deptid smallint,
	foreign key(deptid) references dept(did));
insert into emp values(null,'black',1,'1998-1-3',12000,20);
insert into emp values(null,'make',1,'1998-8-6',7800,10);
insert into emp values(null,'meier',1,'1998-11-13',9000,10);
insert into emp values(null,'misha',0,'1998-1-25',13000,20);
insert into emp values(null,'jieke',1,'1998-9-25',12000,20);
insert into emp values(null,'yilishabai',0,'1998-5-3',9500,10);
insert into emp values(null,'faren',1,'1990-5-6',16000,10);
insert into emp values(null,'lalal',0,'1998-10-12',18000,20);
insert into emp values(null,'panu',1,'1992-2-7',9000,20);
insert into emp values(null,'hoho',0,'1999-11-15',9600,20);
insert into emp values(null,'mahsani',0,'1995-7-14',12500,20);
insert into emp values(null,'nini',1,'1993-6-5',10000,20);
insert into emp values(null,'kuke',1,'1995-6-15',9800,20);
insert into emp values(null,'nima',0,'1996-5-22',12500,20);
insert into emp values(null,'baka',1,'1990-2-29',8000,null);