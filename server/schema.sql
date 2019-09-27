CREATE DATABASE chat2;

USE chat2;

CREATE TABLE messages (
  id int not null primary key,
  text varchar(255) not null
);

CREATE TABLE users (
  id int not null primary key,
  username varchar(50) not null
);






/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

