DROP DATABASE IF EXISTS react_app;
CREATE DATABASE IF NOT EXISTS react_app;
use react_app;


CREATE TABLE app_user(
	user_id INT AUTO_INCREMENT,
	username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
	PRIMARY KEY (user_id)
);


select * FROM app_user;