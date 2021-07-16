USE mysql;
CREATE DATABASE IF NOT EXISTS tidalsurfartist;
USE tidalsurfartist;

CREATE USER IF NOT EXISTS 'user'@'localhost';
GRANT SELECT, INSERT, UPDATE, CREATE, ALTER ON tidalsurfartist.* TO 'user'@'localhost';
DROP TABLE artist;

ALTER USER 'user'@'localhost' IDENTIFIED BY 'password';
SET FOREIGN_KEY_CHECKS=0;
SET FOREIGN_KEY_CHECKS=1;

CREATE TABLE IF NOT EXISTS  artist(
id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
city VARCHAR(100) NOT NULL,
price INTEGER NOT NULL, -- in cents
email VARCHAR(50),
phone VARCHAR(20),
website VARCHAR(200),
rating INTEGER NOT NULL,
genre VARCHAR(20),
booking_count INTEGER NOT NULL,
type INTEGER NOT NULL -- 1 for group 0 for solo
);

CREATE TABLE IF NOT EXISTS availability(
id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
artist_id INTEGER NOT NULL,
availability DATE NOT NULL,
UNIQUE KEY (artist_id, availability)
);