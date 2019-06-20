set names utf8;
drop database if exists xuezi;
create database xuezi charset=utf8;
use xuezi;
create table  laptop(lid int,
title varchar(8),
price decimal(8,2),
stockcount smallint(6) ,
shelitime date,
islndex bool);
insert into laptop values(
'1','辣条','5.50','500','2019-02-03','1'),
('2','老干妈','18.95','200','2019-02-18','1'),
('3','蓝莓','15.59','300','2019-02-22','0'),
('4','笔芯','1.00','20000','2019-01-02','1'),
('5','笔记本','5888.98','2500','2018-12-28','0');
select*from laptop;