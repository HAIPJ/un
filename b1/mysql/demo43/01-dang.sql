SET NAMES UTF8;
DROP DATABASE IF EXISTS dang;
CREATE DATABASE dang CHARSET=UTF8;
USE dang;
CREATE TABLE BOOK(
	bid INT,
	title VARCHAR(10),
	author VARCHAR(5),
	price VARCHAR(5),
	publish VARCHAR(10),
	pubtime VARCHAR(13)
	);
INSERT INTO BOOK
VALUES('1','四库全书','李三','58$','兴化出版社','2003-2-12')
	,('2','新华词典','张三','66$','动画出版社','2001-8-08');
select*from BOOK;
create
insert
update