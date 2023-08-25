CREATE DATABASE  IF NOT EXISTS `fitnesstracker` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `fitnesstracker`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: fitnesstracker
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `diet`
--

DROP TABLE IF EXISTS `diet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mealtype_id` int NOT NULL,
  `goal_id` int NOT NULL,
  `description` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mealtype_id_idx` (`mealtype_id`),
  KEY `goaltypefk_idx` (`goal_id`),
  CONSTRAINT `goaltypefk` FOREIGN KEY (`goal_id`) REFERENCES `goal` (`id`),
  CONSTRAINT `mealtype_id` FOREIGN KEY (`mealtype_id`) REFERENCES `mealtype` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diet`
--

LOCK TABLES `diet` WRITE;
/*!40000 ALTER TABLE `diet` DISABLE KEYS */;
/*!40000 ALTER TABLE `diet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dietitan`
--

DROP TABLE IF EXISTS `dietitan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dietitan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `login_id` int NOT NULL,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `contact` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `experience` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `login_id_idx` (`login_id`),
  CONSTRAINT `login` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dietitan`
--

LOCK TABLES `dietitan` WRITE;
/*!40000 ALTER TABLE `dietitan` DISABLE KEYS */;
/*!40000 ALTER TABLE `dietitan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exercise`
--

DROP TABLE IF EXISTS `exercise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exercise` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `reps` int NOT NULL DEFAULT '10',
  `calories_burnt` double NOT NULL,
  `equipment` varchar(45) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercise`
--

LOCK TABLES `exercise` WRITE;
/*!40000 ALTER TABLE `exercise` DISABLE KEYS */;
INSERT INTO `exercise` VALUES (1,'Push-up',10,100,'None','A bodyweight exercise targeting upper body strength.'),(2,'Squat',10,150,'None','A lower body exercise that engages multiple muscle groups.'),(3,'Running',10,300,'Running Shoes','A cardiovascular exercise that burns calories and improves endurance.'),(4,'Bench Press',10,200,'Barbell, Bench','A weightlifting exercise for chest and triceps.'),(5,'Plank',10,50,'None','A core-strengthening exercise that improves stability.'),(6,'Deadlift',10,250,'Barbell','A compound lift working various muscle groups.'),(7,'Cycling',10,180,'Bicycle','A low-impact exercise that helps in cardio and leg strength.'),(8,'Pull-up',10,120,'Pull-up Bar','An upper body exercise using body weight.'),(9,'Yoga',10,80,'Yoga Mat','A practice that enhances flexibility and relaxation.'),(10,'Swimming',10,400,'Swimming Pool','A full-body workout in water.'),(11,'Jumping Jacks',10,80,'None','A cardio exercise involving jumping and spreading of legs and arms.'),(12,'Burpees',10,150,'None','A full-body exercise combining a squat, push-up, and jump.'),(13,'Leg Press',10,180,'Leg Press Machine','A weightlifting exercise for leg strength.'),(14,'Rowing',10,220,'Rowing Machine','A low-impact cardio exercise that also engages the upper body.'),(15,'Boxing',10,280,'Boxing Gloves','An intense cardio workout involving punching and footwork.'),(16,'Climbing Stairs',10,120,'Stairs','A simple exercise that targets the lower body and boosts heart rate.'),(17,'Dumbbell Curl',10,40,'Dumbbells','An isolation exercise for biceps using dumbbells.'),(18,'Plank Jacks',10,70,'None','A variation of the plank exercise with added leg movements.'),(19,'High Knees',10,90,'None','A cardio exercise that involves running in place while lifting knees.'),(20,'Crunches',10,30,'None','An abdominal exercise that strengthens the core.'),(21,'Running',10,300,'Running Shoes','A classic cardio exercise that can be done outdoors or on a treadmill.'),(22,'Bench Press',10,220,'Bench Press Machine','A compound weightlifting exercise that targets the chest and arms.'),(23,'Yoga',10,120,'Yoga Mat','A practice that combines physical postures, breathing exercises, and meditation.'),(24,'Squats',10,150,'None','A fundamental lower body exercise that targets the thighs and glutes.'),(25,'Swimming',10,250,'Swimsuit','A full-body workout performed in water that builds endurance and muscle strength.'),(26,'Cycling',10,180,'Bicycle','A low-impact cardio exercise that can be done outdoors or on a stationary bike.'),(27,'Push-Ups',10,90,'None','A bodyweight exercise that targets the chest, shoulders, and triceps.'),(28,'Lunges',10,120,'None','An exercise that works the lower body muscles and improves balance.'),(29,'Pilates',10,100,'Mat','A low-impact exercise that focuses on core strength and flexibility.'),(30,'Jump Rope',10,160,'Jump Rope','A fun and effective cardio exercise that improves coordination and endurance.');
/*!40000 ALTER TABLE `exercise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `goal`
--

DROP TABLE IF EXISTS `goal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `goal` (
  `id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goal`
--

LOCK TABLES `goal` WRITE;
/*!40000 ALTER TABLE `goal` DISABLE KEYS */;
INSERT INTO `goal` VALUES (1,'weight gain'),(2,'weight loss'),(3,'fitness');
/*!40000 ALTER TABLE `goal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usertype_id` int NOT NULL,
  `uid` varchar(45) NOT NULL,
  `pwd` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usertype_id_idx` (`usertype_id`),
  CONSTRAINT `usertype_id` FOREIGN KEY (`usertype_id`) REFERENCES `usertype` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mealtype`
--

DROP TABLE IF EXISTS `mealtype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mealtype` (
  `id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mealtype`
--

LOCK TABLES `mealtype` WRITE;
/*!40000 ALTER TABLE `mealtype` DISABLE KEYS */;
INSERT INTO `mealtype` VALUES (1,'breakfast'),(2,'lunch'),(3,'dinner'),(4,'snacks');
/*!40000 ALTER TABLE `mealtype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) NOT NULL,
  `lname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `login_id` int NOT NULL,
  `bloodgroup` varchar(45) NOT NULL,
  `height` varchar(45) NOT NULL,
  `weight` varchar(45) NOT NULL,
  `contact` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `goal_id` int NOT NULL,
  `status` int DEFAULT NULL,
  `trainer_id` int DEFAULT NULL,
  `dietitian_id` int DEFAULT NULL,
  `membership_id` int DEFAULT NULL,
  `startdate` date DEFAULT NULL,
  `enddate` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `login_id_idx` (`login_id`),
  KEY `goal_id_idx` (`goal_id`),
  KEY `trainer_id_idx` (`trainer_id`),
  KEY `membership_id_idx` (`membership_id`),
  KEY `dietitian_id_idx` (`dietitian_id`),
  CONSTRAINT `dietitian` FOREIGN KEY (`dietitian_id`) REFERENCES `dietitan` (`id`),
  CONSTRAINT `goal` FOREIGN KEY (`goal_id`) REFERENCES `goal` (`id`),
  CONSTRAINT `loginlogin` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`),
  CONSTRAINT `membership` FOREIGN KEY (`membership_id`) REFERENCES `membership` (`id`),
  CONSTRAINT `trainer` FOREIGN KEY (`trainer_id`) REFERENCES `trainer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `membership`
--

DROP TABLE IF EXISTS `membership`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `membership` (
  `id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `baseprice` double NOT NULL,
  `duration` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `membership`
--

LOCK TABLES `membership` WRITE;
/*!40000 ALTER TABLE `membership` DISABLE KEYS */;
/*!40000 ALTER TABLE `membership` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `member_id` int NOT NULL,
  `membership_id` int NOT NULL,
  `amount` double NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `membermember_idx` (`member_id`),
  KEY `membershipid_idx` (`membership_id`),
  CONSTRAINT `membermember` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`),
  CONSTRAINT `membershipid` FOREIGN KEY (`membership_id`) REFERENCES `membership` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shedule`
--

DROP TABLE IF EXISTS `shedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shedule` (
  `id` int NOT NULL AUTO_INCREMENT,
  `trainer_id` int NOT NULL,
  `shift` int DEFAULT NULL,
  `slot_id` int DEFAULT NULL,
  `member_id` int DEFAULT NULL,
  `status` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `trainerid_idx` (`trainer_id`),
  KEY `slotid_idx` (`slot_id`),
  KEY `memberid_idx` (`member_id`),
  CONSTRAINT `memberidid` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`),
  CONSTRAINT `slotid` FOREIGN KEY (`slot_id`) REFERENCES `slot` (`id`),
  CONSTRAINT `traineridid` FOREIGN KEY (`trainer_id`) REFERENCES `trainer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shedule`
--

LOCK TABLES `shedule` WRITE;
/*!40000 ALTER TABLE `shedule` DISABLE KEYS */;
/*!40000 ALTER TABLE `shedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slot`
--

DROP TABLE IF EXISTS `slot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `slot` (
  `id` int NOT NULL AUTO_INCREMENT,
  `time` time NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slot`
--

LOCK TABLES `slot` WRITE;
/*!40000 ALTER TABLE `slot` DISABLE KEYS */;
/*!40000 ALTER TABLE `slot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tracking`
--

DROP TABLE IF EXISTS `tracking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tracking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `member_id` int NOT NULL,
  `date` date NOT NULL,
  `workout_id` int NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `memberid_idx` (`member_id`),
  KEY `workoutid_idx` (`workout_id`),
  CONSTRAINT `memberid` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`),
  CONSTRAINT `workoutid` FOREIGN KEY (`workout_id`) REFERENCES `workout` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tracking`
--

LOCK TABLES `tracking` WRITE;
/*!40000 ALTER TABLE `tracking` DISABLE KEYS */;
/*!40000 ALTER TABLE `tracking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trainer`
--

DROP TABLE IF EXISTS `trainer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trainer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) NOT NULL,
  `lname` varchar(45) NOT NULL,
  `login_id` int NOT NULL,
  `email` varchar(45) NOT NULL,
  `contact` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `experience` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `login_id_idx` (`login_id`),
  CONSTRAINT `login_id` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trainer`
--

LOCK TABLES `trainer` WRITE;
/*!40000 ALTER TABLE `trainer` DISABLE KEYS */;
/*!40000 ALTER TABLE `trainer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usertype`
--

DROP TABLE IF EXISTS `usertype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usertype` (
  `id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertype`
--

LOCK TABLES `usertype` WRITE;
/*!40000 ALTER TABLE `usertype` DISABLE KEYS */;
INSERT INTO `usertype` VALUES (1,'admin'),(2,'trainer'),(3,'dietitan'),(4,'member');
/*!40000 ALTER TABLE `usertype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `workout`
--

DROP TABLE IF EXISTS `workout`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workout` (
  `id` int NOT NULL AUTO_INCREMENT,
  `goal_id` int NOT NULL,
  `exercise_id` int NOT NULL,
  `reps` int DEFAULT NULL,
  `calories` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `goal_id_idx` (`goal_id`),
  KEY `exercise_id_idx` (`exercise_id`),
  CONSTRAINT `exercise_id` FOREIGN KEY (`exercise_id`) REFERENCES `exercise` (`id`),
  CONSTRAINT `goal_id` FOREIGN KEY (`goal_id`) REFERENCES `goal` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workout`
--

LOCK TABLES `workout` WRITE;
/*!40000 ALTER TABLE `workout` DISABLE KEYS */;
/*!40000 ALTER TABLE `workout` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-25 16:48:03
