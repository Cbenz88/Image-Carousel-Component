DROP DATABASE IF EXISTS thedb;

CREATE DATABASE IF NOT EXISTS thedb;

USE thedb;

CREATE TABLE IF NOT EXISTS images(
    id int NOT NULL AUTO_INCREMENT,
    image1Url varchar(1000) NOT NULL,
    image2Url varchar(1000) DEFAULT NULL,
    image3Url varchar(1000) DEFAULT NULL,
    image4Url varchar(1000) DEFAULT NULL,
    image5Url varchar(1000) DEFAULT NULL,
    image6Url varchar(1000) DEFAULT NULL,
    videoUrl varchar(1000) DEFAULT NULL,
    PRIMARY KEY (id)
);