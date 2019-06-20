SET NAMES uTF8;
DROP DATABASE IF EXISTS XZ;
CREATE DATABASE XZ CHARSET=UTF8;
USE XZ;
CREATE TABLE laptop_family(fid INT,
fname VARCHAR(3),
laptopcount INT default 4);
INSERT INTO laptop_family() values(
10,'联想',2),
(20,'戴尔',2),
(30,'小米',default);
insert into laptop_family values(50,'华硕',default);
insert into laptop_family(fid,fname) values(60,'神州');
select*from laptop_family;
create table laptop(lid INT PRIMARY KEY auto_increment,
title VARCHAR(8),
price DECIMAL(8,2) UNIQUE ,
spec varchar(20) unique,
detail VARCHAR(15),
shelftime DATE,
isonsale VARCHAR(3) ,
familyld INT );
INSERT INTO laptop values(
1,'华硕',null,'12.5英寸','硬盘容量256GB','2018-5-26,','YES',2),
(2,'联想','6999.00',null,'四核','2018-12-3','yes',5),
(3,'戴尔','5889.99',null,'集成显卡','2019-2-14','no',1)
;
select*from laptop;