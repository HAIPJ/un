#设置客户端连接服务器的编码为UTF8
SET NAMES UTF8;
DROP DATABASE IF EXISTS xz;
CREATE DATABASE xz CHARSET=UTF8;
USE xz;
CREATE TABLE user(uid INT,
	uname VARCHAR(9),
	upwd VARCHAR(6),
	email VARCHAR(11),
	phone VARCHAR(11),
	sex VARCHAR(3),
	username VARCHAR(3),
	regtime VARCHAR(10),
	isonline INT
);
INSERT INTO user
VALUES('1','LL','456','258369','459125873','m','张三','2018-11-11','1')
,('2','kjim','4756','1579254','48416','s','李思思','2018-5-2','0');
UPDATE user SET upwd='255866',sex='m' WHERE uid='1';
DELETE FROM user WHERE uid='1';
SELECT*FROM user;

