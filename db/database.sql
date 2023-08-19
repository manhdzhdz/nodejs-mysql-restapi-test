CREATE DATABASE IF NOT EXISTS companyDB;
USE companyDB;
CREATE TABLE employee(
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(45),
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

-- TRABAJAR CON SENTENCIAS MDL
INSERT INTO employee VALUES
    (1,'Manuel Hernandez Melendez',1000),
    (2,'Areli Martínez Hernández',1500),
    (3,'Alexis Hernandez Martínez',2000),
    (4,'Paola Hernández Martínez',2500),
    (5,'Eder Hernandez Martinez',3000);