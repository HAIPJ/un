set names utf8;
drop database if exists tedu;
create database tedu charset=utf8;
use tedu ;
create table dept (did int,
dname varchar(5),
empcount tinyint);
insert into dept values(
10,'研发部',3),
(20,'市场部',2),
(30,'运营部',2);
create table emp(
eid int,
ename varchar(5),
sex bool,
brirthday date,
salary decimal(6,2),
deptld int);
insert into emp values(
1,'李明',1,'1992-2-3','5600.00',12),
(2,'许文强',1,'1978-5-22','4800.0',10),
(3,'刘菲菲',0,'1994-5-20','5552.08',5);
select*from dept,emp;