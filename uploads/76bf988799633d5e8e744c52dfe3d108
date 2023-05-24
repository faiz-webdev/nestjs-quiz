-- Valentina Studio --
-- MySQL dump --
-- ---------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
-- ---------------------------------------------------------


-- CREATE TABLE "persons" --------------------------------------
CREATE TABLE `persons`( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`first_name` VarChar( 200 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
	`last_name` VarChar( 200 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
	`age` Int( 11 ) NULL DEFAULT NULL,
	`salary` VarChar( 200 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
	`gender` VarChar( 20 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
	`address` VarChar( 255 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
	`cust_title` VarChar( 50 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 4;
-- -------------------------------------------------------------


-- Dump data of "persons" ----------------------------------
BEGIN;

INSERT INTO `persons`(`id`,`first_name`,`last_name`,`age`,`salary`,`gender`,`address`,`cust_title`) VALUES 
( '1', 'Faiz', 'Ansari', '32', '10000', NULL, NULL, NULL ),
( '2', 'Vishal', 'Yadav', '32', '20000', NULL, NULL, NULL ),
( '3', 'Sam', NULL, '30', '100000', 'male', NULL, NULL );
COMMIT;
-- ---------------------------------------------------------


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- ---------------------------------------------------------


