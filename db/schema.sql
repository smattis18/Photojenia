DROP DATABASE IF EXISTS photojenia_db;
CREATE DATABASE photojenia_db;

USE photojenia_db;

CREATE TABLE `user` (
  `id` Int AUTO_INCREMENT NOT NULL,
  `screen_name` VARCHAR(255) NOT NULL,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255),
  PRIMARY KEY (`id`) 
);

CREATE TABLE `post` (
  `id` Int AUTO_INCREMENT NOT NULL,
  `user_id` Int NOT NULL,
  `post_header` VARCHAR(255),
  `post_body` LONGTEXT NOT NULL,
  `created_at` DATETIME(),
  `updated_at` DATETIME(),
  PRIMARY KEY (`id`) 
);

CREATE TABLE `comment` (
  `id` Int AUTO_INCREMENT NOT NULL,
  `post_id` Int NOT NULL,
  `comment_body` LONGTEXT NOT NULL,
  PRIMARY KEY (`id`) 
);

CREATE TABLE `friend` (
  `id` Int AUTO_INCREMENT NOT NULL,
  `user_id` Int NOT NULL,
  `friend_id` Int NOT NULL,
  PRIMARY KEY ( `id` ) 
);