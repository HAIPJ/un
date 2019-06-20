DROP DATABASE IF EXISTS xz ;
CREATE DATABASE xz;
USE xz;
CREATE TABLE user(
uid INT,
uname VARCHAR(8),
upwd VARCHAR(11),
phone VARCHAR(11),
sex VARCHAR(1),
username VARCHAR(5),
regtime VARCHAR(11),
isonline VARCHAR(3)
);
INSERT INTO user
VALUES('1','maka','110','123456','N','makalili','2019.03.12','yes');
INSERT INTO user
VALUES('2','honhon','252','253461','x','lihonhon','2019.03.11','no');
INSERT INTO user
VALUES('3','jiexi','666','546987','N','jiexifeni','2019.03.09','no');
INSERT INTO user
VALUES('4','yilisha','858','879456','X','yilishabai','2019.03.08','yes');
INSERT INTO user
VALUES('5','mali','586','528963','x','wumali','2019.03.14','yes');
UPDATE user SET upwd='474',isonline='no' WHERE uid='4';
UPDATE user SET upwd='753',isonline='yes' WHERE uid='2';
DELETE FROM user WHERE uid='4';
DELETE FROM user WHERE uid='1';
SELECT*FROM USER;