DROP DATABASE IF EXISTS xuezi;
CREATE DATABASE xuezi ;
USE xuezi;
CREATE TABLE student(
	eid INT,
	ename VARCHAR(8),
	addr VARCHAR(15),
	phone VARCHAR(11)
);
#往学生表中插入数据
INSERT INTO student 
VALUES('1','tom','m','85');
INSERT INTO student
VALUES('2','kate','f','92');
INSERT INTO student
VALUES('3','king','m','74');
#修改数据
#修改编号为2的学员，成绩为100，姓名为lucy
UPDATE student SET ename='lucy',phone='100' WHERE eid='2';

SELECT*FROM student;