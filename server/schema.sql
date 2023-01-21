CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  username varchar(255),
  text varchar(255),
  roomname varchar(255),
  createdAt DATE,
  updatedAt DATE,
  Primary key(id)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username varchar(255),
  createdAt DATE,
  updatedAt DATE,
  Primary key(id)
);



-- {username: 'Jono', text: 'Do my bidding!', message_id: 1, createdAt: '2023-01-18T17:20:07.538Z', roomname: ''}
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

