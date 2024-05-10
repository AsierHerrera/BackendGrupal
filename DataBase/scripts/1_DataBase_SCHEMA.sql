-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb3 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Race`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Race` (
  `Race_id` INT NOT NULL AUTO_INCREMENT,
  `Max_life` INT NOT NULL,
  `Name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Race_id`),
  UNIQUE INDEX `Name_UNIQUE` (`Name` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`Map`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Map` (
  `Map_id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Race_id` INT NOT NULL,
  PRIMARY KEY (`Map_id`),
  INDEX `fk_Map_Race1_idx` (`Race_id` ASC) VISIBLE,
  CONSTRAINT `fk_Map_Race1`
    FOREIGN KEY (`Race_id`)
    REFERENCES `mydb`.`Race` (`Race_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`Weapon`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Weapon` (
  `Weapon_id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Damage` DECIMAL(10,0) NOT NULL,
  `Category` VARCHAR(45) NOT NULL,
  `Accuracy` INT NULL DEFAULT NULL,
  `Race_id` INT NOT NULL,
  PRIMARY KEY (`Weapon_id`),
  INDEX `fk_Weapon_Race1_idx` (`Race_id` ASC) VISIBLE,
  CONSTRAINT `fk_Weapon_Race1`
    FOREIGN KEY (`Race_id`)
    REFERENCES `mydb`.`Race` (`Race_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 26
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `User_id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Is_Admin` TINYINT NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(80) NOT NULL,
  PRIMARY KEY (`User_id`),
  UNIQUE INDEX `User_id_UNIQUE` (`User_id` ASC) VISIBLE,
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`Character`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Character` (
  `Character_id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Life_points` DECIMAL(10,0) NOT NULL,
  `Hostile` TINYINT NOT NULL,
  `Race_id` INT NOT NULL,
  `Map_id` INT NOT NULL,
  `Weapon_id` INT NOT NULL,
  `User_id` INT,
  PRIMARY KEY (`Character_id`),
  INDEX `fk_Character_Race1_idx` (`Race_id` ASC) VISIBLE,
  INDEX `fk_Character_Map1_idx` (`Map_id` ASC) VISIBLE,
  INDEX `fk_Character_Weapon1_idx` (`Weapon_id` ASC) VISIBLE,
  INDEX `fk_Character_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_Character_Map1`
    FOREIGN KEY (`Map_id`)
    REFERENCES `mydb`.`Map` (`Map_id`),
  CONSTRAINT `fk_Character_Race1`
    FOREIGN KEY (`Race_id`)
    REFERENCES `mydb`.`Race` (`Race_id`),
  CONSTRAINT `fk_Character_Weapon1`
    FOREIGN KEY (`Weapon_id`)
    REFERENCES `mydb`.`Weapon` (`Weapon_id`),
  CONSTRAINT `fk_Character_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `mydb`.`User` (`User_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
