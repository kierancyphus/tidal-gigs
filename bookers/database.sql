USE mysql;
CREATE DATABASE IF NOT EXISTS tidalsurfbooker;
USE tidalsurfbooker;

CREATE USER IF NOT EXISTS 'user'@'localhost';
GRANT SELECT, INSERT, UPDATE, CREATE, ALTER ON tidalsurfbooker.* TO 'user'@'localhost';

ALTER USER 'user'@'localhost' IDENTIFIED BY 'password';


CREATE TABLE IF NOT EXISTS  booker(
id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
city INTEGER NOT NULL,
asking_price INTEGER NOT NULL, -- in cents
email VARCHAR(50),
phone VARCHAR(20),
website VARCHAR(200),
booking_count INTEGER NOT NULL
);