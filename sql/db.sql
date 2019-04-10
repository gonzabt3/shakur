-- MySQL dump 10.13  Distrib 5.7.25, for Linux (x86_64)
--
-- Host: localhost    Database: shakur
-- ------------------------------------------------------
-- Server version	5.7.25-0ubuntu0.18.10.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carreras`
--

DROP TABLE IF EXISTS `carreras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carreras` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `universidad_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `carreras_facultad_id_index` (`universidad_id`),
  CONSTRAINT `carreras_facultad_id_foreign` FOREIGN KEY (`universidad_id`) REFERENCES `universidades` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carreras`
--

LOCK TABLES `carreras` WRITE;
/*!40000 ALTER TABLE `carreras` DISABLE KEYS */;
INSERT INTO `carreras` VALUES (1,'Audiovisión',1,NULL,NULL),(2,'Ciencia Política y Gobierno',1,NULL,NULL),(3,'Ciencia y Tecnología de los Alimentos',1,NULL,NULL),(4,'Diseño Industrial',1,NULL,NULL),(5,'Diseño y Comunicación Visual',1,NULL,NULL),(6,'Economía Empresarial',1,NULL,NULL),(7,'Educación',1,NULL,NULL),(8,'Enfermería',1,NULL,NULL),(9,'Gestión Ambiental Urbana',1,NULL,NULL),(10,'Justicia y Derechos Humanos',1,NULL,NULL),(11,'Nutrición',1,NULL,NULL),(12,'Planificación Logística',1,NULL,NULL),(13,'Relaciones Internacionales',1,NULL,NULL),(14,'Seguridad Ciudadana',1,NULL,NULL),(15,'Sistemas',1,NULL,NULL),(16,'Tecnologías Ferroviarias',1,NULL,NULL),(17,'Trabajo Social',1,NULL,NULL),(18,'Traductorado Público en idioma inglés',2,NULL,NULL),(19,'Turismo',2,NULL,NULL);
/*!40000 ALTER TABLE `carreras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comentarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `texto` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `publicacion_id` int(10) unsigned DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comentarios_publicacion_id_index` (`publicacion_id`),
  KEY `comentarios_user_id_index` (`user_id`),
  CONSTRAINT `comentarios_publicacion_id_foreign` FOREIGN KEY (`publicacion_id`) REFERENCES `publicacions` (`id`),
  CONSTRAINT `comentarios_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,'Holaa',7,5,'2019-03-09 20:13:34','2019-03-09 20:13:34'),(2,'T',3,5,'2019-03-13 03:42:04','2019-03-13 03:42:04'),(3,'Holaaaaaa',8,5,'2019-03-14 17:12:09','2019-03-14 17:12:09'),(4,'hola elisabet',9,5,'2019-03-15 14:39:42','2019-03-15 14:39:42'),(5,'????????????',10,1,'2019-03-17 23:07:26','2019-03-17 23:07:26');
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventos`
--

DROP TABLE IF EXISTS `eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `eventos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `temas` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `materia_id` int(10) unsigned DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `eventos_materia_id_index` (`materia_id`),
  KEY `eventos_user_id_index` (`user_id`),
  CONSTRAINT `eventos_materia_id_foreign` FOREIGN KEY (`materia_id`) REFERENCES `materias` (`id`),
  CONSTRAINT `eventos_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventos`
--

LOCK TABLES `eventos` WRITE;
/*!40000 ALTER TABLE `eventos` DISABLE KEYS */;
INSERT INTO `eventos` VALUES (1,'prueba','1','2018-12-05T03:14:00.000Z',5,1,'2018-12-29 07:38:43','2018-12-29 07:38:43'),(2,'trabajo practico','kaka','2018-12-22T23:04:00.000Z',527,1,'2019-01-01 02:05:16','2019-01-01 02:05:16'),(4,'123','123','2019-01-02T03:14:00.000Z',5,1,'2019-01-17 06:53:03','2019-01-17 06:53:03'),(6,'1','1','2019-01-02T14:02:00.000Z',1,1,'2019-01-17 17:02:19','2019-01-17 17:02:19'),(9,'123123','123','2019-02-06T02:55:00.000Z',1,1,'2019-02-05 06:09:10','2019-02-05 06:09:10'),(10,'asd','asd','2019-02-04T03:10:00.000Z',1,1,'2019-02-05 06:10:51','2019-02-05 06:10:51'),(11,'asdasd','123','2019-03-05T23:57:00.000Z',1,1,'2019-03-03 03:17:40','2019-03-03 03:17:40'),(12,'MATEMATICA 1','ASD','2019-03-07T00:05:00.000Z',523,5,'2019-03-05 03:06:25','2019-03-05 03:06:25'),(13,'INGENIERIA 1','123','2019-03-06T00:06:00.000Z',527,5,'2019-03-05 03:06:59','2019-03-05 03:06:59'),(14,'123','qwe','2019-03-08T00:51:00.000Z',523,5,'2019-03-14 03:51:45','2019-03-14 03:51:45'),(15,'Parcial de lengua','Asd','2019-03-22T14:12:00.000Z',523,5,'2019-03-14 17:12:58','2019-03-14 17:12:58');
/*!40000 ALTER TABLE `eventos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facultades`
--

DROP TABLE IF EXISTS `facultades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `facultades` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `abreviacion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facultades`
--

LOCK TABLES `facultades` WRITE;
/*!40000 ALTER TABLE `facultades` DISABLE KEYS */;
INSERT INTO `facultades` VALUES (1,'Universidad Nacional de Lanus','0000-00-00 00:00:00','0000-00-00 00:00:00',NULL,'UNLa'),(2,'Universidad Tecnologica Nacional','0000-00-00 00:00:00','0000-00-00 00:00:00',NULL,'UTN'),(3,'Universidad de Buenos Aires','0000-00-00 00:00:00',NULL,NULL,'UBA');
/*!40000 ALTER TABLE `facultades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `files` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `materia_id` int(10) unsigned DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `files_materia_id_index` (`materia_id`),
  KEY `files_user_id_index` (`user_id`),
  CONSTRAINT `files_materia_id_foreign` FOREIGN KEY (`materia_id`) REFERENCES `materias` (`id`),
  CONSTRAINT `files_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES (3,'MATEMATICA 1','storage/523/48370301_2219880221369197_6363145867527979008_n.jpg',523,5,'2019-03-05 03:06:34','2019-03-05 03:06:34'),(4,'INGENIERIA 1','storage/527/48363202_2219880738035812_8557015664835952640_n.jpg',527,5,'2019-03-05 03:07:11','2019-03-05 03:07:11'),(5,'Sgdjs','storage/523/IMG-20190314-WA0000.jpg',523,5,'2019-03-14 17:13:56','2019-03-14 17:13:56');
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `likes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `publicacion_id` int(10) unsigned DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `likes_publicacions_id_index` (`publicacion_id`),
  KEY `likes_user_id_index` (`user_id`),
  CONSTRAINT `likes_publicacions_id_foreign` FOREIGN KEY (`publicacion_id`) REFERENCES `publicacions` (`id`),
  CONSTRAINT `likes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (1,7,5,'2019-03-09 20:12:44','2019-03-09 20:12:44'),(2,8,5,'2019-03-14 17:11:57','2019-03-14 17:11:57'),(3,9,5,'2019-03-15 14:39:20','2019-03-15 14:39:20'),(4,9,7,'2019-03-15 14:39:27','2019-03-15 14:39:27'),(5,10,1,'2019-03-17 23:07:17','2019-03-17 23:07:17');
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes_comentarios`
--

DROP TABLE IF EXISTS `likes_comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `likes_comentarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `comentario_id` int(10) unsigned DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `likes_comentarios_comentario_id_index` (`comentario_id`),
  KEY `likes_comentarios_user_id_index` (`user_id`),
  CONSTRAINT `likes_comentarios_comentario_id_foreign` FOREIGN KEY (`comentario_id`) REFERENCES `comentarios` (`id`),
  CONSTRAINT `likes_comentarios_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes_comentarios`
--

LOCK TABLES `likes_comentarios` WRITE;
/*!40000 ALTER TABLE `likes_comentarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `likes_comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materias`
--

DROP TABLE IF EXISTS `materias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materias` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `materia` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `carrera_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `materias_carrera_id_index` (`carrera_id`),
  CONSTRAINT `materias_carrera_id_foreign` FOREIGN KEY (`carrera_id`) REFERENCES `carreras` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=650 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materias`
--

LOCK TABLES `materias` WRITE;
/*!40000 ALTER TABLE `materias` DISABLE KEYS */;
INSERT INTO `materias` VALUES (1,'Tecnología de la Imagen',1,NULL,NULL),(2,'Elementos de Audio',1,NULL,NULL),(3,'Taller de Lectura y Escritura profesional',1,NULL,NULL),(4,'Educación Auditiva',1,NULL,NULL),(5,'Electrónica de las Comunicaciones',1,NULL,NULL),(6,'Lenguaje Audiovisual 1',1,NULL,NULL),(7,'Registro de Sonido en Audiovisuales',1,NULL,NULL),(8,'Montaje 1',1,NULL,NULL),(9,'Fotografía e Iluminación en Audiovisuales',1,NULL,NULL),(10,'Inglés I',1,NULL,NULL),(11,'Lenguaje Audiovisual 2',1,NULL,NULL),(12,'Audición y Análisis Musical',1,NULL,NULL),(13,'Taller de Edición de Sonido',1,NULL,NULL),(14,'Seminario de Pensamiento Nacional y Latinoamericano',1,NULL,NULL),(15,'Taller de Montaje',1,NULL,NULL),(16,'Realización Integral Audiovisual 1',1,NULL,NULL),(17,'Arte y Sociedad',1,NULL,NULL),(18,'Guión',1,NULL,NULL),(19,'Taller de Composición Sonora',1,NULL,NULL),(20,'Seminario de Justicia y Derechos Humanos',1,NULL,NULL),(21,'Banda Sonora',1,NULL,NULL),(22,'Géneros Estilos Audiovisuales',1,NULL,NULL),(23,'Taller de Experimentación Audiovisual',1,NULL,NULL),(24,'Realización Integral Audiovisual 2',1,NULL,NULL),(25,'Ética Profesional',1,NULL,NULL),(26,'Gestión de proyectos Audiovisuales',1,NULL,NULL),(27,'Estética',1,NULL,NULL),(28,'Comunicación Audiovisual',1,NULL,NULL),(29,'Tecnología de Postproducción 1',1,NULL,NULL),(30,'Imagen, Tipografía e Identidad Cultural',1,NULL,NULL),(31,'Acústica',1,NULL,NULL),(32,'Organología',1,NULL,NULL),(33,'Semiótica',1,NULL,NULL),(34,'Inglés II',1,NULL,NULL),(35,'Metodología de Investigación',1,NULL,NULL),(36,'Optativa 1',1,NULL,NULL),(37,'Edición y Corrección Digital de Imagen',1,NULL,NULL),(38,'Tecnología de Postproducción 2',1,NULL,NULL),(39,'Montaje 2',1,NULL,NULL),(40,'Animación 3D 1',1,NULL,NULL),(41,'Composición Digital',1,NULL,NULL),(42,'Tecnología de Postproducción 3',1,NULL,NULL),(43,'Masterización y Postproducción 1',1,NULL,NULL),(44,'Sistemas de Electroacústica',1,NULL,NULL),(45,'Taller de Grabación 1',1,NULL,NULL),(46,'Masterización y Postproducción 2',1,NULL,NULL),(47,'Taller de Grabación 2',1,NULL,NULL),(48,'Alineación y Operación de sistemas de Amplificación',1,NULL,NULL),(49,'Optativa 2',1,NULL,NULL),(50,'Optativa 3',1,NULL,NULL),(51,'Taller de Trabajo Final Integrador Mención Postproducción de Imagen',1,NULL,NULL),(52,'Animación 3D 2',1,NULL,NULL),(53,'Taller de Postproducción de Imagen',1,NULL,NULL),(54,'Práctica Preprofesional Mención Postproducción de Imagen',1,NULL,NULL),(55,'Taller de Postproducción de Sonido en Audiovisuales',1,NULL,NULL),(56,'Audioanalisis',1,NULL,NULL),(57,'Taller de Trabajo Final Integrador Mención Sonido y Grabación',1,NULL,NULL),(58,'Práctica Preprofesional Mención Sonido y Grabación',1,NULL,NULL),(59,'Sociología Política',2,NULL,NULL),(60,'Fundamentos de Ciencia Política',2,NULL,NULL),(61,'Economía Política',2,NULL,NULL),(62,'Historia moderna y contemporánea',2,NULL,NULL),(63,'Instituciones del derecho',2,NULL,NULL),(64,'Seminario de Pensamiento Nacional y Latinoamericano',2,NULL,NULL),(65,'Estadística social',2,NULL,NULL),(66,'Teoría Política I',2,NULL,NULL),(67,'Metodología de la investigación social I',2,NULL,NULL),(68,'Teoría Política II',2,NULL,NULL),(69,'Derecho Constitucional',2,NULL,NULL),(70,'Fundamentos de Macroeconomía',2,NULL,NULL),(71,'Historia política y social latinoamericana',2,NULL,NULL),(72,'Metodología de la Investigación Social II',2,NULL,NULL),(73,'Teoría del Estado',2,NULL,NULL),(74,'Economía internacional',2,NULL,NULL),(75,'Historia política y social argentina',2,NULL,NULL),(76,'Taller de práctica pre-profesional - 1º etapa',2,NULL,NULL),(77,'Política internacional',2,NULL,NULL),(78,'Análisis de la sociedad argentina',2,NULL,NULL),(79,'Derecho administrativo',2,NULL,NULL),(80,'Teoría política contemporánea',2,NULL,NULL),(81,'Adminstración pública',2,NULL,NULL),(82,'Economía de gobierno y finanzas públicas',2,NULL,NULL),(83,'Gobierno local',2,NULL,NULL),(84,'Políticas públicas',2,NULL,NULL),(85,'Análisis político y opinión pública',2,NULL,NULL),(86,'Seminario de Justicia y Derechos Humanos',2,NULL,NULL),(87,'Planificación estratégica y análisis de politicas públicas',2,NULL,NULL),(88,'Formulación y evaluación de proyectos',2,NULL,NULL),(89,'Ideas políticas en América Latina',2,NULL,NULL),(90,'Política comparada',2,NULL,NULL),(91,'Política Latinoamericana',2,NULL,NULL),(92,'Comunicación política',2,NULL,NULL),(93,'Seminario optativo I',2,NULL,NULL),(94,'Seminario optativo II',2,NULL,NULL),(95,'Informática Modúlo 2: Procesador de textos',2,NULL,NULL),(96,'Informática Modúlo 7: Sistemas de información geográfica',2,NULL,NULL),(97,'Informática Modúlo 11: Programa estadístico para las Ciencias Sociales 1',2,NULL,NULL),(98,'Informática Modúlo 12: Programa estadístico para las Ciencias Sociales 2',2,NULL,NULL),(99,'Inglés I',2,NULL,NULL),(100,'Inglés II',2,NULL,NULL),(101,'Inglés III',2,NULL,NULL),(102,'Taller de práctica pre-profesional - 2º etapa',2,NULL,NULL),(103,'Taller de trabajo final integrador',2,NULL,NULL),(104,'Matemática I',3,NULL,NULL),(105,'Química general',3,NULL,NULL),(106,'Física I',3,NULL,NULL),(107,'Biología',3,NULL,NULL),(108,'Matemática II',3,NULL,NULL),(109,'Química inorgánica',3,NULL,NULL),(110,'Física II',3,NULL,NULL),(111,'Anatomía y Fisiología',3,NULL,NULL),(112,'Microbiología general',3,NULL,NULL),(113,'Química orgánica',3,NULL,NULL),(114,'Matemática III',3,NULL,NULL),(115,'Fisicoquímica y biofísica',3,NULL,NULL),(116,'Química analítica',3,NULL,NULL),(117,'Química biológica',3,NULL,NULL),(118,'Bromatología I',3,NULL,NULL),(119,'Industría y Tecnología de los Alimentos I',3,NULL,NULL),(120,'Microbiología de Alimentos I',3,NULL,NULL),(121,'Estadística y Bioestadística',3,NULL,NULL),(122,'Nutrición',3,NULL,NULL),(123,'Bromatología II',3,NULL,NULL),(124,'Industría y Tecnología de los Alimentos II',3,NULL,NULL),(125,'Equipos e Instalaciones I',3,NULL,NULL),(126,'Microbiología de los Alimentos II',3,NULL,NULL),(127,'Toxicología',3,NULL,NULL),(128,'Bromatología III',3,NULL,NULL),(129,'Industría y Tecnología de los Alimentos III',3,NULL,NULL),(130,'Historia, Legislación y Ética Profesional',3,NULL,NULL),(131,'Práctica Preprofesional (Bromatología)',3,NULL,NULL),(132,'Equipos e instalaciones II',3,NULL,NULL),(133,'Calidad',3,NULL,NULL),(134,'Conservación y empaque',3,NULL,NULL),(135,'Instrumentación y Automatización',3,NULL,NULL),(136,'Industría y Tecnología de los Alimentos IV',3,NULL,NULL),(137,'Economía y Gestión Empresaria',3,NULL,NULL),(138,'Formulación de proyectos industriales',3,NULL,NULL),(139,'Integración de la Industria Alimentaria',3,NULL,NULL),(140,'Industria alimenticia y medio ambiente',3,NULL,NULL),(141,'Industria y tecnología de los Alimentos V',3,NULL,NULL),(142,'Educación y Fiscalización',3,NULL,NULL),(143,'Trabajo Final',3,NULL,NULL),(144,'Taller de Diseño Industrial I (Formación Básica)',4,NULL,NULL),(145,'Tecnología, Materiales y Procesos I (Formación Básica)',4,NULL,NULL),(146,'Desarrollos Visuales',4,NULL,NULL),(147,'Dibujo Técnico',4,NULL,NULL),(148,'Taller de Diseño Industrial II (Orientación maquinaria, equipos y vehículos)',4,NULL,NULL),(149,'Tecnología, Materiales y Procesos II (Orientación maquinaria, equipos y vehículos)',4,NULL,NULL),(150,'Morfología',4,NULL,NULL),(151,'Representación Digital',4,NULL,NULL),(152,'Taller de Lectura y Escritura Profesional',4,NULL,NULL),(153,'Métodos del Diseño',4,NULL,NULL),(154,'Taller de Diseño Industrial III (Orientación maquinaria, equipos y vehículos)',4,NULL,NULL),(155,'Tecnología, Materiales y Procesos III (Orientación maquinaria, equipos y vehículos)',4,NULL,NULL),(156,'Modelado Digital (Orientación maquinaria, equipos y vehículos)',4,NULL,NULL),(157,'Ciencia Aplicada al Diseño Industrial',4,NULL,NULL),(158,'Historia Social del Diseño I',4,NULL,NULL),(159,'Taller de Práctica Pre Profesional',4,NULL,NULL),(160,'Idioma Extranjero Nivel I',4,NULL,NULL),(161,'Seminario de Justicia y Derechos Humanos',4,NULL,NULL),(162,'Seminario de Pensamiento Nacional y Latinoamericano',4,NULL,NULL),(163,'Taller de Diseño Industrial IV (Orientación Transportes)',4,NULL,NULL),(164,'Tecnología, Materiales y Procesos IV (Orientación Transportes)',4,NULL,NULL),(165,'Semiótica Aplicada al Diseño Industrial',4,NULL,NULL),(166,'Manufactura Digital (Orientación Transportes)',4,NULL,NULL),(167,'Historia Social del Diseño II',4,NULL,NULL),(168,'Taller de Diseño Industrial V (Orientación Transportes)',4,NULL,NULL),(169,'Desarrollos Científico, Tecnológico e Innovación Productiva',4,NULL,NULL),(170,'Metodología de la Investigación',4,NULL,NULL),(171,'Diseño Sustentable',4,NULL,NULL),(172,'Etica y Legislación Profesional',4,NULL,NULL),(173,'Taller de Trabajo Integrador Final',4,NULL,NULL),(174,'Idioma Extranjero Nivel II',4,NULL,NULL),(175,'Optativa (Dto. de Desarrollo Productivo. Licenciatura en Economía Empresarial)',4,NULL,NULL),(176,'Taller de Diseño I',5,NULL,NULL),(177,'Geometría descriptiva aplicada',5,NULL,NULL),(178,'Medios Expresivos I',5,NULL,NULL),(179,'Espacio Tipográfico I',5,NULL,NULL),(180,'Teoría del Diseño I',5,NULL,NULL),(181,'Lectura y Escritura Profesional',5,NULL,NULL),(182,'Tecnología I',5,NULL,NULL),(183,'Computación I',5,NULL,NULL),(184,'Medios Expresivos II',5,NULL,NULL),(185,'Taller de Diseño II',5,NULL,NULL),(186,'Espacio Tipográfico II',5,NULL,NULL),(187,'Historia de la Comunicación visual',5,NULL,NULL),(188,'Metodología de la Investigación',5,NULL,NULL),(189,'Taller de Diseño III',5,NULL,NULL),(190,'Tecnología II',5,NULL,NULL),(191,'Computación II',5,NULL,NULL),(192,'Fotografía',5,NULL,NULL),(193,'Medios Expresivos III',5,NULL,NULL),(194,'Espacio Tipográfico III',5,NULL,NULL),(195,'Historia Social del Diseño',5,NULL,NULL),(196,'Taller de Diseño IV',5,NULL,NULL),(197,'Computación III',5,NULL,NULL),(198,'Taller de Diseño Orientado',5,NULL,NULL),(199,'Comunicación',5,NULL,NULL),(200,'Teoría del Diseño II',5,NULL,NULL),(201,'Semiótica',5,NULL,NULL),(202,'Video',5,NULL,NULL),(203,'Taller de Trabajo Final Integrador',5,NULL,NULL),(204,'Práctica Pre Profesional',5,NULL,NULL),(205,'Estética',5,NULL,NULL),(206,'Ética profesional',5,NULL,NULL),(207,'Taller de Trabajo Final Integrador',5,NULL,NULL),(208,'Idioma Extranjero I',5,NULL,NULL),(209,'Idioma Extranjero II',5,NULL,NULL),(210,'Seminario de Pensamiento Nacional y Latinoamericano',5,NULL,NULL),(211,'Seminario de Justicia y Derechos Humanos',5,NULL,NULL),(212,'Historia Económica Contemporánea',6,NULL,NULL),(213,'Contabilidad',6,NULL,NULL),(214,'Introducción a la Matemática',6,NULL,NULL),(215,'Taller de Producción de Textos de Economía y Administración',6,NULL,NULL),(216,'Economía y Sociedad',6,NULL,NULL),(217,'Organización y Gestión',6,NULL,NULL),(218,'Elementos de Matemática',6,NULL,NULL),(219,'Microeconomía',6,NULL,NULL),(220,'Derecho Comercial',6,NULL,NULL),(221,'Cálculo Financiero y Desarrollo Estadístico Aplicado',6,NULL,NULL),(222,'Macroeconomía',6,NULL,NULL),(223,'Costos Empresariales',6,NULL,NULL),(224,'Derecho Tributario',6,NULL,NULL),(225,'Organización de la Producción y la Tecnología',6,NULL,NULL),(226,'Control de Gestión',6,NULL,NULL),(227,'Macroeconomía y Política Económica',6,NULL,NULL),(228,'Comercialización',6,NULL,NULL),(229,'Derecho del Trabajo y de la Seguridad Social',6,NULL,NULL),(230,'Comercio Exterior y Economía Internacional',6,NULL,NULL),(231,'Financiamiento',6,NULL,NULL),(232,'Plan de Negocios',6,NULL,NULL),(233,'Taller de Integración I',6,NULL,NULL),(234,'Formulación y Evaluación de Proyectos',6,NULL,NULL),(235,'Gestión Ambiental y Empresa',6,NULL,NULL),(236,'Sistemas de organización',6,NULL,NULL),(237,'Economía bancaria y financiera',6,NULL,NULL),(238,'Administración de los Recursos Humanos',6,NULL,NULL),(239,'Economía Industrial',6,NULL,NULL),(240,'Taller de Integración II',6,NULL,NULL),(241,'Inglés I',6,NULL,NULL),(242,'Informática: Módulo 8 - Gestión de proyectos',6,NULL,NULL),(243,'Informática: Módulo 11 - Programa Estadístico para las Ciencias Sociales I',6,NULL,NULL),(244,'Seminario de Justicia y Derechos Humanos',6,NULL,NULL),(245,'Seminario de Pensamiento Nacional y Latinoamericano',6,NULL,NULL),(246,'Problemas actuales de la economía argentina',6,NULL,NULL),(247,'Ética y Empresa',6,NULL,NULL),(248,'Mediación y Negociación',6,NULL,NULL),(249,'Políticas y Estrategias para el Desarrollo Regional y Local',6,NULL,NULL),(250,'Taller de Trabajo Final Integrador',6,NULL,NULL),(251,'Seminario: Responsabilidad Social Empresaria',6,NULL,NULL),(252,'Planeamiento Estratégico y Toma de Decisiones',6,NULL,NULL),(253,'Seminario Economía Social',6,NULL,NULL),(254,'Práctica Pre-profesional',6,NULL,NULL),(255,'Inglés II',6,NULL,NULL),(256,'Módulo de Informática opcional A',6,NULL,NULL),(257,'Módulo de Informática opcional B',6,NULL,NULL),(258,'Psicología de la Educación',7,NULL,NULL),(259,'Taller \"Las Instituciones Educativas\"\"\"',7,NULL,NULL),(260,'Filosofía de la Educación',7,NULL,NULL),(261,'Política, Estado y Educación',7,NULL,NULL),(262,'Teorías del Aprendizaje',7,NULL,NULL),(263,'Historía de la Educación Argentina y Latinoamericana',7,NULL,NULL),(264,'Economía de la Educación',7,NULL,NULL),(265,'Sociología de la Educación',7,NULL,NULL),(266,'Administración y Gestión I',7,NULL,NULL),(267,'Teoría Curricular',7,NULL,NULL),(268,'Teorías Pedagógicas',7,NULL,NULL),(269,'Infancia y Juventud',7,NULL,NULL),(270,'Administración y Gestión II (Incluye 32 hs. de tareas de prácticas de campo)',7,NULL,NULL),(271,'Didáctica I',7,NULL,NULL),(272,'Talleres \"Las TIC en Educación\"\"\"',7,NULL,NULL),(273,'Adultos Mayores',7,NULL,NULL),(274,'Niveles y Modalidades del Sistema educativo argentino',7,NULL,NULL),(275,'Investigación Educativa I',7,NULL,NULL),(276,'Didáctica II (Incluye 32 hs. de prácticas docentes)',7,NULL,NULL),(277,'Seminario de Pensamiento Nacional y Latinoamericano',7,NULL,NULL),(278,'Nuevos Modelos Universitarios',7,NULL,NULL),(279,'Seminario de Justicia y Derechos Humanos',7,NULL,NULL),(280,'Investigación Educativa II',7,NULL,NULL),(281,'Sistemas Educativos Comparados',7,NULL,NULL),(282,'Políticas Públicas en Educación',7,NULL,NULL),(283,'Formulación de proyectos de Formación profesional y Capacitación Laboral',7,NULL,NULL),(284,'Ateneo I',7,NULL,NULL),(285,'Prácticas Profesionales (incluye 32 hs. de prácticas fuera del aula)',7,NULL,NULL),(286,'Ateneo II',7,NULL,NULL),(287,'Seminario Optativo I',7,NULL,NULL),(288,'Seminario Optativo II',7,NULL,NULL),(289,'Seminario Optativo III',7,NULL,NULL),(290,'Seminario Optativo IV',7,NULL,NULL),(291,'Seminario Optativo V',7,NULL,NULL),(292,'Taller de Trabajo Final (incluye 32 hs de tutorías personalizadas)',7,NULL,NULL),(293,'Inglés I',7,NULL,NULL),(294,'Inglés II',7,NULL,NULL),(295,'Taller de Inglés para Educación',7,NULL,NULL),(296,'Informática Módulo a elección ',7,NULL,NULL),(297,'Informática Módulo a elección ',7,NULL,NULL),(298,'Informática Módulo 14. Formación de usuarios de la Biblioteca Rodolfo Puiggrós',7,NULL,NULL),(299,'Informática Módulo 15. Bibliotecas digitales y acceso a sistemas de información académica.',7,NULL,NULL),(300,'Introducción a la problemática urbana',9,NULL,NULL),(301,'Ambiente I',9,NULL,NULL),(302,'Geografía urbana',9,NULL,NULL),(303,'Introducción al desarrollo sustentable',9,NULL,NULL),(304,'Taller de ciencias aplicadas al ambiente',9,NULL,NULL),(305,'Técnicas en cartografía y fotointerpretación',9,NULL,NULL),(306,'Principios de administración y gestión',9,NULL,NULL),(307,'Matemática y estadística aplicada a estudios ambientales',9,NULL,NULL),(308,'Sociología ambiental',9,NULL,NULL),(309,'Ciudad y territorio',9,NULL,NULL),(310,'Ambiente II',9,NULL,NULL),(311,'Taller de investigación urbana',9,NULL,NULL),(312,'Economía y desarrollo sustentable I',9,NULL,NULL),(313,'Teledetección y sistemas de información geográfica',9,NULL,NULL),(314,'Educación ambiental',9,NULL,NULL),(315,'Procesos urbanos I',9,NULL,NULL),(316,'Fundamentos de ecología',9,NULL,NULL),(317,'Procesos de Evaluación de Impactos Ambientales',9,NULL,NULL),(318,'Legislación Ambiental',9,NULL,NULL),(319,'Ambiente III',9,NULL,NULL),(320,'Economía y Desarrollo Sustentable II',9,NULL,NULL),(321,'Práctica Pre-Profesional',9,NULL,NULL),(322,'Gestión Administrativa Municipal Ambiental',9,NULL,NULL),(323,'Procesos Urbanos II',9,NULL,NULL),(324,'Redes I: Movilidad urbana',9,NULL,NULL),(325,'Seminario optativo I',9,NULL,NULL),(326,'Inglés I',9,NULL,NULL),(327,'Inglés II',9,NULL,NULL),(328,'Informática Módulo 3: Planilla de Cálculo 1',9,NULL,NULL),(329,'Informática Módulo 4: Planilla de Cálculo 2',9,NULL,NULL),(330,'Seminario de Justicia y Derechos Humanos',9,NULL,NULL),(331,'Seminario de Pensamiento Nacional y Latinoamericano',9,NULL,NULL),(332,'Política Ambiental en Argentina y Mercosur',9,NULL,NULL),(333,'Procesos de Producción del Hábitat',9,NULL,NULL),(334,'Ambiente IV',9,NULL,NULL),(335,'Formulación y Gestión de proyectos Urbano-Ambientales',9,NULL,NULL),(336,'Gestión Ambiental y Empresa',9,NULL,NULL),(337,'Procesos urbanos III',9,NULL,NULL),(338,'Redes II: Servicios y saneamiento urbano',9,NULL,NULL),(339,'Seminario optativo II',9,NULL,NULL),(340,'Auditoría Ambiental',9,NULL,NULL),(341,'Financiamiento y Evaluación de Proyectos Urbano - Ambientales',9,NULL,NULL),(342,'Negociación y Mediación',9,NULL,NULL),(343,'Seminario optativo III',9,NULL,NULL),(344,'Seminario optativo IV',9,NULL,NULL),(345,'Práctica Preprofesional',9,NULL,NULL),(346,'Inglés III',9,NULL,NULL),(347,'Informática Módulo 8: Gestión de Proyectos',9,NULL,NULL),(348,'Informática Módulo 9: Diseño de objetos en 3D',9,NULL,NULL),(349,'Taller de Trabajo Final Integrador',9,NULL,NULL),(350,'Introducción a la Teoría del Estado',10,NULL,NULL),(351,'Instituciones del Derecho',10,NULL,NULL),(352,'Historia argentina y derechos humanos',10,NULL,NULL),(353,'Derecho Constitucional y constitucionalismo social',10,NULL,NULL),(354,'Configuración histórica de los derechos humanos en América Latina I',10,NULL,NULL),(355,'Derechos Humanos y Comunicación',10,NULL,NULL),(356,'Educación y TIC en Derechos Humanos',10,NULL,NULL),(357,'Derechos Humanos y Soberanía',10,NULL,NULL),(358,'Metodología de la investigación social I',10,NULL,NULL),(359,'Teoría Política',10,NULL,NULL),(360,'Configuración histórica de los derechos humanos en América Latina II',10,NULL,NULL),(361,'Derecho Penal',10,NULL,NULL),(362,'Historia política, social y cultural latinoamericana',10,NULL,NULL),(363,'Problemas actuales de acceso a la justicia',10,NULL,NULL),(364,'Derechos sociales, económicos y culturales',10,NULL,NULL),(365,'Políticas Públicas y políticas en organizaciones sociales',10,NULL,NULL),(366,'Psicología Social',10,NULL,NULL),(367,'Estrategias de formación, capacitación y promoción',10,NULL,NULL),(368,'Seminario de Pensamiento Nacional y Latinoamericano',10,NULL,NULL),(369,'Informática Módulo 2',10,NULL,NULL),(370,'Informática Módulo 7',10,NULL,NULL),(371,'Informática Módulo 11',10,NULL,NULL),(372,'Informática Módulo 12',10,NULL,NULL),(373,'Inglés I',10,NULL,NULL),(374,'Inglés II',10,NULL,NULL),(375,'Inglés III',10,NULL,NULL),(376,'Taller de práctica pre profesional I',10,NULL,NULL),(377,'Taller de integración',10,NULL,NULL),(378,'Sociología del derecho',10,NULL,NULL),(379,'Los derechos sociales en las políticas públicas',10,NULL,NULL),(380,'Análisis de políticas públicas',10,NULL,NULL),(381,'Derechos humanos y derechos sociales en Latinoamérica',10,NULL,NULL),(382,'Protección internacional de derechos humanos',10,NULL,NULL),(383,'Política Contemporánea Latinoamericana',10,NULL,NULL),(384,'Metodología de la investigación social II',10,NULL,NULL),(385,'Elementos básicos de los procesos judiciales',10,NULL,NULL),(386,'Introducción al Sistema Judicial Argentino',10,NULL,NULL),(387,'Formulación y evaluación de proyectos',10,NULL,NULL),(388,'Filosofía del Derecho y teoría de la Justicia',10,NULL,NULL),(389,'Democracia y Derechos Humanos',10,NULL,NULL),(390,'Seminario Optativo I',10,NULL,NULL),(391,'Seminario Optativo II',10,NULL,NULL),(392,'Seminario Optativo III',10,NULL,NULL),(393,'Taller de práctica pre profesional II',10,NULL,NULL),(394,'Taller de Trabajo Final Integrador',10,NULL,NULL),(395,'Salud Colectiva',11,NULL,NULL),(396,'Anatomía y Fisiología',11,NULL,NULL),(397,'Seminario de Situaciones Problemáticas y Territorio',11,NULL,NULL),(398,'Seminario de Introducción a las Problemáticas Alimentarias',11,NULL,NULL),(399,'Nutrición I',11,NULL,NULL),(400,'Biofísica y Bioquímica I',11,NULL,NULL),(401,'Salud Mental',11,NULL,NULL),(402,'Nutrición II',11,NULL,NULL),(403,'Física y Química Culinaria (Técnica dietética)',11,NULL,NULL),(404,'Antropología',11,NULL,NULL),(405,'Seminario optativo I',11,NULL,NULL),(406,'Evaluación Nutricional',11,NULL,NULL),(407,'Biofísica y Bioquímica II',11,NULL,NULL),(408,'Nutrición III (Nutrición infanto-juvenil)',11,NULL,NULL),(409,'Educación Alimentaria Nutricional',11,NULL,NULL),(410,'Bromatología y Tecnología de los Alimentos I',11,NULL,NULL),(411,'Microbiología y Parasitología',11,NULL,NULL),(412,'Ética Profesional',11,NULL,NULL),(413,'Nutrición IV (Nutrición en la adolescencia, adultez y actividad física)',11,NULL,NULL),(414,'Promoción Comunitaria',11,NULL,NULL),(415,'Economía Regional y Alimentaria',11,NULL,NULL),(416,'Bromatología y Tecnología de los Alimentos II',11,NULL,NULL),(417,'Nutrición Comunitaria',11,NULL,NULL),(418,'Desarrollo Comunitario y Organización Social',11,NULL,NULL),(419,'Seminario Optativo II',11,NULL,NULL),(420,'Epidemiología I',11,NULL,NULL),(421,'Prácticas en Nutrición Comunitaria',11,NULL,NULL),(422,'Idioma extranjero Nivel I (Inglés I - Portugués I)',11,NULL,NULL),(423,'Seminario de Pensamiento Nacional y Latinoamericano',11,NULL,NULL),(424,'Seminario de Justicia y Derechos Humanos',11,NULL,NULL),(425,'Informática - Módulo III: Planilla de cálculo I',11,NULL,NULL),(426,'Informática - Módulo IV: Planilla de cálculo II',11,NULL,NULL),(427,'Núcleo Clínico Integrado: Fisiopatología, Dietoterapia del Adulto y Técnica Dietoterápica',11,NULL,NULL),(428,'Metodología de Investigación',11,NULL,NULL),(429,'Epidemiología II',11,NULL,NULL),(430,'Gestión y Administración de Servicios de Alimentación',11,NULL,NULL),(431,'Gestión de las Organizaciones de Salud',11,NULL,NULL),(432,'Fisiopatología y Dietoterapia del Niño',11,NULL,NULL),(433,'Prácticas en Salud Colectiva',11,NULL,NULL),(434,'Taller de Trabajo Final Integrador',11,NULL,NULL),(435,'Prácticas en Dietoterapia y Gestión y Administración de Servicios de Alimentación',11,NULL,NULL),(436,'Seminario Optativo III',11,NULL,NULL),(437,'Seminario Optativo IV',11,NULL,NULL),(438,'Idioma extranjero Nivel II (Inglés II - Portugués II)',11,NULL,NULL),(439,'Informática Módulo específico Antropometría',11,NULL,NULL),(440,'Informática Módulo específico Epidemiología',11,NULL,NULL),(441,'Historia Moderna y Contemporánea I',13,NULL,NULL),(442,'Historia Argentina I',13,NULL,NULL),(443,'Lógica y Epistemología de las Ciencias Sociales',13,NULL,NULL),(444,'Introducción a las Relaciones Internacionales',13,NULL,NULL),(445,'Pensamiento Filosófico',13,NULL,NULL),(446,'Inglés I',13,NULL,NULL),(447,'Historia Moderna y Contemporánea II',13,NULL,NULL),(448,'Historia Argentina II',13,NULL,NULL),(449,'Metodología de la Investigación en Ciencias Sociales',13,NULL,NULL),(450,'Filosofía Moderna y Contemporánea',13,NULL,NULL),(451,'Economía Política I',13,NULL,NULL),(452,'Inglés II',13,NULL,NULL),(453,'Historia de las Relaciones Internacionales',13,NULL,NULL),(454,'Economía Política II',13,NULL,NULL),(455,'Sistemática de la Ciencia Política',13,NULL,NULL),(456,'Métodos y Técnicas de Investigación Aplicados',13,NULL,NULL),(457,'Pensamiento Clásicos de las Relaciones Internacionales',13,NULL,NULL),(458,'Inglés III',13,NULL,NULL),(459,'Teoría de las Relaciones Internacionales I',13,NULL,NULL),(460,'Teoría Política I',13,NULL,NULL),(461,'Economía Política Internacional I',13,NULL,NULL),(462,'Política Internacional Contemporánea',13,NULL,NULL),(463,'Diseño y Formulación de Modelos Prospectivos y de Investigación',13,NULL,NULL),(464,'Portugués I',13,NULL,NULL),(465,'Economía Política Internacional II',13,NULL,NULL),(466,'Teoría de las Relaciones Internacionales II',13,NULL,NULL),(467,'Sistemas Políticos Comparados',13,NULL,NULL),(468,'Política Exterior Argentina I',13,NULL,NULL),(469,'Historia de las Relaciones Internacionales Latinoamericanas',13,NULL,NULL),(470,'Portugués II',13,NULL,NULL),(471,'Derecho e Instituciones Internacionales',13,NULL,NULL),(472,'Agenda Internacional',13,NULL,NULL),(473,'Teoría Política II',13,NULL,NULL),(474,'Seminario de Justicia y Derechos Humanos',13,NULL,NULL),(475,'Política Exterior Argentina II',13,NULL,NULL),(476,'Módulo de Informática 11: Programa Estadístico para las Ciencias Sociales I',13,NULL,NULL),(477,'Seminario de Pensamiento Nacional y Latinoamericano',13,NULL,NULL),(478,'Módulo de Informática 12: Programa Estadístico para las Ciencias Sociales II',13,NULL,NULL),(479,'Procesos de Integración Americanos',13,NULL,NULL),(480,'Taller de Trabajo Final Integrador I',13,NULL,NULL),(481,'Sistemas Políticos Latinoamericanos Comparados',13,NULL,NULL),(482,'Prospectiva Estratégica',13,NULL,NULL),(483,'Política Doméstica y Externa Brasileña',13,NULL,NULL),(484,'Taller de Trabajo Final Integrador II',13,NULL,NULL),(485,'Políticas Exteriores Latinoamericanas Comparadas',13,NULL,NULL),(486,'Seminario Optativo I',13,NULL,NULL),(487,'Seminario Optativo II',13,NULL,NULL),(488,'Seminario Optativo III',13,NULL,NULL),(489,'Seminario Optativo IV',13,NULL,NULL),(490,'Seminario Atlántico Sur, Malvinas y Antártida',13,NULL,NULL),(491,'Taller de Prácticas Pre-profesionales',13,NULL,NULL),(492,'Módulo de Informática 12: Programa Estadístico para las Ciencias Sociales II',13,NULL,NULL),(493,'Procesos de Integración Americanos',13,NULL,NULL),(494,'Taller de Trabajo Final Integrador I',13,NULL,NULL),(495,'Teoría de la Integración',13,NULL,NULL),(496,'Prospectiva Estratégica',13,NULL,NULL),(497,'Derecho de la Integración',13,NULL,NULL),(498,'Taller de Trabajo Final Integrador II',13,NULL,NULL),(499,'Economía Contemporánea Brasileña',13,NULL,NULL),(500,'Seminario Optativo I',13,NULL,NULL),(501,'Seminario Optativo II',13,NULL,NULL),(502,'Seminario Optativo III',13,NULL,NULL),(503,'Seminario Optativo IV',13,NULL,NULL),(504,'Seminario Atlántico Sur, Malvinas y Antártida',13,NULL,NULL),(505,'Taller de Prácticas Pre-profesionales',13,NULL,NULL),(506,'Módulo de Informática 12: Programa Estadístico para las Ciencias Sociales II',13,NULL,NULL),(507,'Defensa Nacional',13,NULL,NULL),(508,'Taller de Trabajo Final Integrador I',13,NULL,NULL),(509,'Seguridad Internacional',13,NULL,NULL),(510,'Prospectiva Estratégica',13,NULL,NULL),(511,'Geopolítica y Análisis Estratégico',13,NULL,NULL),(512,'Taller de Trabajo Final Integrador II',13,NULL,NULL),(513,'Instituciones y Regímenes de la Defensa y la Seguridad Internacional',13,NULL,NULL),(514,'Seminario Optativo I',13,NULL,NULL),(515,'Seminario Optativo II',13,NULL,NULL),(516,'Seminario Optativo III',13,NULL,NULL),(517,'Seminario Optativo IV',13,NULL,NULL),(518,'Seminario Atlántico Sur, Malvinas y Antártida',13,NULL,NULL),(519,'Taller de Prácticas Pre-profesionales',13,NULL,NULL),(520,'Programación de Computadoras',15,NULL,NULL),(521,'Organización de Computadoras',15,NULL,NULL),(522,'Arquitectura de Computadoras',15,NULL,NULL),(523,'Matemática 1',15,NULL,NULL),(524,'Matemática 2',15,NULL,NULL),(525,'Expresión de Problemas y Algoritmos',15,NULL,NULL),(526,'Introducción al Pensamiento Científico',15,NULL,NULL),(527,'Ingeniería de Software 1',15,NULL,NULL),(528,'Introducción a las Bases de Datos',15,NULL,NULL),(529,'Algoritmos y Estructuras de Datos',15,NULL,NULL),(530,'Orientación a Objetos 1',15,NULL,NULL),(531,'Seminario de Lenguajes',15,NULL,NULL),(532,'Introducción a los Sistemas Operativos',15,NULL,NULL),(533,'Matemática 3',15,NULL,NULL),(534,'Probabilidad y Estadística',15,NULL,NULL),(535,'Programación Concurrente',15,NULL,NULL),(536,'Ingeniería de Software 2',15,NULL,NULL),(537,'Orientación a Objetos 2',15,NULL,NULL),(538,'Sistemas y organizaciones',15,NULL,NULL),(539,'Bases de Datos 1',15,NULL,NULL),(540,'Proyecto de Software',15,NULL,NULL),(541,'Conceptos y Paradigmas de Lenguajes de Programación',15,NULL,NULL),(542,'Redes y comunicaciones',15,NULL,NULL),(543,'Ingeniería de Software 3',15,NULL,NULL),(544,'Bases de Datos 2',15,NULL,NULL),(545,'Fundamentos de Teoría de la Computación',15,NULL,NULL),(546,'Sistemas Operativos',15,NULL,NULL),(547,'Desarrollo de software en Sistemas Distribuidos',15,NULL,NULL),(548,'Matemática Discreta',15,NULL,NULL),(549,'Optativa Área Arquitectura, Sistemas Operativos y Redes',15,NULL,NULL),(550,'Optativa Área Algoritmos y Lenguajes',15,NULL,NULL),(551,'Política y Gestión Tecnológicas',15,NULL,NULL),(552,'Aspectos Legales y Profesionales de la Informática',15,NULL,NULL),(553,'Nuevos Escenarios',15,NULL,NULL),(554,'Optativa Área Ingeniería de Software y Bases de Datos',15,NULL,NULL),(555,'Seminario de Trabajo Final',15,NULL,NULL),(556,'Matemática I',16,NULL,NULL),(557,'Representación gráfica',16,NULL,NULL),(558,'Historia del ferrocarril',16,NULL,NULL),(559,'Aspectos técnicos y Socioeconómicos del Ferrocarril',16,NULL,NULL),(560,'Matemática II',16,NULL,NULL),(561,'Física I',16,NULL,NULL),(562,'Introducción a la química',16,NULL,NULL),(563,'El transporte ferroviario',16,NULL,NULL),(564,'Tecnología ferroviaria I',16,NULL,NULL),(565,'Matemática III',16,NULL,NULL),(566,'Física II',16,NULL,NULL),(567,'Tecnologías de la información y de las comunicaciones',16,NULL,NULL),(568,'Nuevos escenarios',16,NULL,NULL),(569,'Tecnología ferroviaria II',16,NULL,NULL),(570,'Seguridad laboral y ambiental',16,NULL,NULL),(571,'Legislación ferroviaria',16,NULL,NULL),(572,'Mecánica y tecnología de los materiales',16,NULL,NULL),(573,'Electrónica y electromecánica',16,NULL,NULL),(574,'Tecnología ferroviaria III',16,NULL,NULL),(575,'Termodinámica y máquinas térmicas',16,NULL,NULL),(576,'Instalaciones eléctricas y electromecánicas',16,NULL,NULL),(577,'Tecnología ferroviaria IV',16,NULL,NULL),(578,'Tecnología ferroviaria V',16,NULL,NULL),(579,'Metodología de la investigación',16,NULL,NULL),(580,'Mecánica de los fluidos',16,NULL,NULL),(581,'Tecnología ferroviaria VI',16,NULL,NULL),(582,'Gestión de la calidad, ensayos y mediciones',16,NULL,NULL),(583,'Seminario optativo',16,NULL,NULL),(584,'Práctica supervisada ',16,NULL,NULL),(585,'Centrales e instalaciones eléctricas',16,NULL,NULL),(586,'Sistemas de control, automatización y señalización',16,NULL,NULL),(587,'Material tractivo',16,NULL,NULL),(588,'Seminario optativo',16,NULL,NULL),(589,'Material rodante',16,NULL,NULL),(590,'Mantenimiento y reparación en líneas electrificadas',16,NULL,NULL),(591,'Taller de trabajo final: Proyecto de electrificación y/o electromecánico ferroviario. Práctica preprofesional ',16,NULL,NULL),(592,'Estructuras ferroviarias',16,NULL,NULL),(593,'Ferrourbanística',16,NULL,NULL),(594,'Infraestructura ferroviaria I',16,NULL,NULL),(595,'Infraestructura ferroviaria II',16,NULL,NULL),(596,'Infraestructura ferroviaria III',16,NULL,NULL),(597,'Seminario optativo',16,NULL,NULL),(598,'Taller de trabajo final: proyecto de una vía férrea. Práctica preprofesional ',16,NULL,NULL),(599,'Introducción al turismo',19,NULL,NULL),(600,'Introducción a la geografía',19,NULL,NULL),(601,'Estado, derecho y legislación',19,NULL,NULL),(602,'Principios de la economía',19,NULL,NULL),(603,'Organización y gestión de la empresa turística',19,NULL,NULL),(604,'Introducción a la matemática',19,NULL,NULL),(605,'Espacios turísticos de África, Asia y Oceanía',19,NULL,NULL),(606,'Procesos históricos mundiales',19,NULL,NULL),(607,'Servicios turísticos I',19,NULL,NULL),(608,'Espacios turísticos de Europa',19,NULL,NULL),(609,'Metodología de la Investigación Social',19,NULL,NULL),(610,'Historia latinoamericana y argentina',19,NULL,NULL),(611,'Organización y gestión hotelera',19,NULL,NULL),(612,'Servicios turísticos II',19,NULL,NULL),(613,'Espacios turísticos de Amércica',19,NULL,NULL),(614,'Marketing',19,NULL,NULL),(615,'Indicadores turísticos',19,NULL,NULL),(616,'Historia del turismo',19,NULL,NULL),(617,'Taller de investigación turística',19,NULL,NULL),(618,'Espacios turísticos de Argentina',19,NULL,NULL),(619,'Análisis económico y financiero de la actividad turística',19,NULL,NULL),(620,'Ética profesional y responsabilidad social',19,NULL,NULL),(621,'Taller de formulación y evaluación de proyectos',19,NULL,NULL),(622,'Patrimonio histórico - cultural argentino',19,NULL,NULL),(623,'Marco normativo de la actividad turística',19,NULL,NULL),(624,'Práctica pre-profesional',19,NULL,NULL),(625,'Inglés I',19,NULL,NULL),(626,'Inglés II',19,NULL,NULL),(627,'Portugués I',19,NULL,NULL),(628,'Portugués II',19,NULL,NULL),(629,'Informática: Módulo \"Gestión de reservas\"\"\"',19,NULL,NULL),(630,'Seminario de Pensamiento Nacional y Latinoamericano',19,NULL,NULL),(631,'Seminario de Justicia y Derechos Humanos',19,NULL,NULL),(632,'Política turística',19,NULL,NULL),(633,'Procesos geopolíticos de integración del turismo',19,NULL,NULL),(634,'Diseño de productos turísticos',19,NULL,NULL),(635,'Comportamiento organizacional y recursos humanos',19,NULL,NULL),(636,'Turismo social y derecho al turismo',19,NULL,NULL),(637,'Emprendedorismo',19,NULL,NULL),(638,'Planeamiento del desarrollo turístico',19,NULL,NULL),(639,'Cooperación internacional',19,NULL,NULL),(640,'Taller de Trabajo Final Integrador',19,NULL,NULL),(641,'Planeamiento y gestión del destino turístico',19,NULL,NULL),(642,'Seminario optativo',19,NULL,NULL),(643,'Gobernabilidad del turismo',19,NULL,NULL),(644,'Seminario optativo',19,NULL,NULL),(645,'Práctica pre-profesional orientada al ámbito público',19,NULL,NULL),(646,'Inglés III',19,NULL,NULL),(647,'Portugués III',19,NULL,NULL),(648,'Informática: \"módulo: Sistemas de Información Geográfica\"\"\"',19,NULL,NULL),(649,'Informática: \"Módulo: Aplicaciones móviles\"\"\"',19,NULL,NULL);
/*!40000 ALTER TABLE `materias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materias_x_users`
--

DROP TABLE IF EXISTS `materias_x_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materias_x_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `materia_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `materias_x_users_materia_id_index` (`materia_id`),
  KEY `materias_x_users_user_id_index` (`user_id`),
  CONSTRAINT `materias_x_users_materia_id_foreign` FOREIGN KEY (`materia_id`) REFERENCES `materias` (`id`) ON DELETE CASCADE,
  CONSTRAINT `materias_x_users_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materias_x_users`
--

LOCK TABLES `materias_x_users` WRITE;
/*!40000 ALTER TABLE `materias_x_users` DISABLE KEYS */;
INSERT INTO `materias_x_users` VALUES (1,522,5,NULL,NULL);
/*!40000 ALTER TABLE `materias_x_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2018_10_31_221819_crea_tabla_publicaciones',1),(4,'2018_11_19_214741_create_publicacions_table',2),(5,'2018_11_27_192200_table_facultades',3),(6,'2018_11_27_193346_agregar_campo_tabla_facultades',4),(7,'2018_12_06_183454_crear_tabla_carreras',5),(8,'2018_12_11_023431_crear_tabla_comentarios',6),(9,'2018_12_13_203028_add_columnas_a_user',7),(10,'2018_12_14_223555_crear_tabla_likes',7),(11,'2018_12_17_042717_cambios_users',8),(12,'2018_12_18_223741_creo_tabla_materias',9),(13,'2018_12_20_185937_creo_tabla_eventos',9),(14,'2018_12_21_181904_modificar_tabla_eventos',9),(15,'2018_12_26_182953_creo_tabla_materias_x_users',9),(16,'2016_06_01_000001_create_oauth_auth_codes_table',10),(17,'2016_06_01_000002_create_oauth_access_tokens_table',10),(18,'2016_06_01_000003_create_oauth_refresh_tokens_table',10),(19,'2016_06_01_000004_create_oauth_clients_table',10),(20,'2016_06_01_000005_create_oauth_personal_access_clients_table',10),(21,'2019_01_05_031700_cambios_users',11),(22,'2019_01_09_211725_cambios_grupoid_publicacion',12),(23,'2019_01_22_032556_modificar_tabla_likes',13),(24,'2019_01_23_143912_creo_tabla_likes_coments',14),(25,'2019_01_24_031901_crear_tabla_files',15),(26,'2019_03_15_114804_agrego_alias_to_users',16),(27,'2019_03_15_222059_set_null_alias_user',17);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_access_tokens`
--

DROP TABLE IF EXISTS `oauth_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `client_id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_access_tokens`
--

LOCK TABLES `oauth_access_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_access_tokens` DISABLE KEYS */;
INSERT INTO `oauth_access_tokens` VALUES ('01338d37f861f911e003f0c16e174a9e6d239a31bffb83fbca211ac1c6909d9a50d80ad9eaec7916',5,1,'Personal Access Token','[]',0,'2019-01-12 08:35:33','2019-01-12 08:35:33','2019-01-19 05:35:33'),('02f1d4f764d8ef3177587164c76c8f81eeb2fc9da4666341f692b3a2bd320c4ca7606a1bea7586d0',5,1,'Personal Access Token','[]',0,'2019-03-03 21:37:58','2019-03-03 21:37:58','2019-03-10 18:37:58'),('0697f75b6ec6d310a2e94abc75ecd5e42b39acf98f5a9f6d2f26931168999d361f0ad73134ab7cdc',5,1,'Personal Access Token','[]',0,'2019-02-01 05:40:16','2019-02-01 05:40:16','2019-02-08 02:40:16'),('0e49c6296143a792e110295909c807a1c94afbcd12dbfb2f19573717e228009c2611f55b4e31ad42',5,1,'Personal Access Token','[]',0,'2019-01-26 05:55:50','2019-01-26 05:55:50','2019-02-02 02:55:50'),('10b0efeeaad71bc17d942b488f1bf6cc2af89246e0026f9528035a849b025c3782cb5082d1aa89f8',5,1,'Personal Access Token','[]',0,'2019-03-09 20:44:51','2019-03-09 20:44:51','2019-03-16 17:44:51'),('15837af0fdcec7350aa6f79c2c264cc817dafcb85f48f953d6d1b363aaeca2594287171c3a945cfe',5,1,'Personal Access Token','[]',0,'2019-01-17 16:59:55','2019-01-17 16:59:55','2019-01-24 13:59:55'),('174124c0b60e2efbbcb75c36302778b5ef8e414405ca2779e26593fadc3e178ab2a0bf2589f80de8',5,1,'Personal Access Token','[]',0,'2019-03-13 03:58:06','2019-03-13 03:58:06','2019-03-20 00:58:06'),('196ecebe9dec1ccb81578473fb960dcdb42bfc132f498fcee8fd57d9a0c7523bc9d02f0fe43ef7b8',5,1,'Personal Access Token','[]',0,'2019-03-24 19:03:35','2019-03-24 19:03:35','2019-03-31 16:03:35'),('1a206fa4deb990f4458093345613630270743a0a837aac9089254448d1d47480cc03ee6b187085bc',5,1,'Personal Access Token','[]',0,'2019-01-23 17:01:41','2019-01-23 17:01:41','2019-01-30 14:01:41'),('22394a364e966cf495e9a8c23c01568c5484aec11210e9b2fe5dd7cbad48d2638652aace80950d65',5,1,'Personal Access Token','[]',0,'2019-01-15 05:56:41','2019-01-15 05:56:41','2019-01-22 02:56:41'),('2d39dbbebb0307074e1395631518d4a5aaec85090b9747914b7eb8561ffb382a77a2be9f0e4608e7',5,1,'Personal Access Token','[]',0,'2019-03-05 02:17:37','2019-03-05 02:17:37','2019-03-11 23:17:37'),('2ff5aa45f08d99bae33874eb5c59d597aa3ef7e92f2714456a8a7b8228dbe1b5a8ea507ddb99c77f',5,1,'Personal Access Token','[]',0,'2019-03-17 23:07:46','2019-03-17 23:07:46','2019-03-24 20:07:47'),('34323f5463ed758456c3b1736592636b2ce2ca252ae7b4e98fa08c3a84641f980f01ddfca28bacf8',4,1,'Personal Access Token','[]',0,'2019-01-08 06:38:06','2019-01-08 06:38:06','2019-01-15 03:38:06'),('360910e6b92ada3efe32775b732543f5d38069bef89275ace0cd417dce9dab1f7bd79d3d85713b4e',5,1,'Personal Access Token','[]',0,'2019-01-22 04:48:48','2019-01-22 04:48:48','2019-01-29 01:48:48'),('36cd24f5eeec143745e78dadad16cb3b4a19a3c6dad8a74bb8a25edad22a601c6b6016e4a90042be',5,1,'Personal Access Token','[]',0,'2019-03-18 05:21:00','2019-03-18 05:21:00','2019-03-25 02:21:00'),('37ab9a781237b0af71288fcf5f3b40c7ad06fc2bed24095cc1726875c17c293e6cd3965d3cc28fb4',1,1,'Personal Access Token','[]',0,'2019-01-18 03:45:56','2019-01-18 03:45:56','2019-01-25 00:45:56'),('37cf86d8c55c2d9a5a3563a897a6f22d2644ef04b1b43045d05d4069cbe954ac5967a85dd63dc164',5,1,'Personal Access Token','[]',0,'2019-02-01 05:32:56','2019-02-01 05:32:56','2019-02-08 02:32:56'),('3f5ad87754b4b18d2684766192b79c34b601d454787f603b9187fcc2076ae5ccccf604877dc4a3e0',5,1,'Personal Access Token','[]',0,'2019-03-14 06:55:06','2019-03-14 06:55:06','2019-03-21 03:55:06'),('441650f922b2dcd65b7e8c8c5bfac6d333a36eab91c7ecbc84f55712bd84036a36a6aadbcd929d2c',5,1,'Personal Access Token','[]',0,'2019-01-09 16:59:37','2019-01-09 16:59:37','2019-01-16 13:59:38'),('4421cc37573bf4963455f5a8dba813387deb541dd9d8fd508c691143ec16fd600a8b5e5611285c04',5,1,'Personal Access Token','[]',0,'2019-02-05 05:55:10','2019-02-05 05:55:10','2019-02-12 02:55:10'),('456d86fd5edaf5f99770ca38291bf2e616cd6c535968de3a53fa76a519d8e401a173ea18b9dbeb49',5,1,'Personal Access Token','[]',0,'2019-01-18 03:41:57','2019-01-18 03:41:57','2019-01-25 00:41:57'),('4bc9cfa76c027de549c7015b91c0c48e3a01ecbb7ff571350d31d91df92e9656c5400c0f92c09fcc',5,1,'Personal Access Token','[]',0,'2019-03-15 14:34:35','2019-03-15 14:34:35','2019-03-22 11:34:35'),('4c060405178ee2da5c3784e719eaf948f2ed2d5d2f145435fc9a339ea3cef816826e31e0f8bed624',5,1,'Personal Access Token','[]',0,'2019-01-09 17:01:13','2019-01-09 17:01:13','2019-01-16 14:01:13'),('4c7aa5449c312c31ea453afc7af67c9105a39c02c1903ba0ad418cf3994576b8fab1cebc731b94c0',5,1,'Personal Access Token','[]',0,'2019-02-05 08:36:06','2019-02-05 08:36:06','2019-02-12 05:36:06'),('5006c5adeaef98860989d479d0a9440cd5c9146610716d3523975d140225fd60d1eb3f0495cc8f71',5,1,'Personal Access Token','[]',0,'2019-01-23 04:59:44','2019-01-23 04:59:44','2019-01-30 01:59:44'),('536b0cce2e099957a4a77d4285828ddd7c1cef1675e2b847f94e346b75c35cd95176c0054b525f96',5,1,'Personal Access Token','[]',0,'2019-03-15 14:39:11','2019-03-15 14:39:11','2019-03-22 11:39:12'),('53d6375aae28bac9c4b8ffcef29bffe8023cc11cc7b7edc543b041ade14004534f1a70d0d56af722',5,1,'Personal Access Token','[]',0,'2019-02-05 07:32:53','2019-02-05 07:32:53','2019-02-12 04:32:53'),('569f584ebc3f0ab6a4181040fab7deff23fe70ebcda1aeab3bd228a6193ae9f7d855b5b5c6ec4bbd',4,1,'Personal Access Token','[]',0,'2019-01-08 05:56:20','2019-01-08 05:56:20','2019-01-15 02:56:20'),('57be92f41fb7c863a11123cb696f9539872e48e86036744cb48a91382fc4ea9daf4a3ea4128a94b5',5,1,'Personal Access Token','[]',0,'2019-03-14 17:11:36','2019-03-14 17:11:36','2019-03-21 14:11:37'),('59a2de0d75c9e9dda1f6d719c6e0059a34f9460cfbc210da8c32b746093833037463c166b9c9edbb',4,1,'Personal Access Token','[]',0,'2019-01-08 06:32:14','2019-01-08 06:32:14','2019-01-15 03:32:14'),('64c61e059b5a03265dfbb3e704c03c013266444387d358093927f9c95d04828f6ad844d695a5cc20',5,1,'Personal Access Token','[]',0,'2019-03-14 16:58:44','2019-03-14 16:58:44','2019-03-21 13:58:44'),('66c3104d9b8b18d48242707564deee50fd47c082bf70c2247f5ca90cd31974860f8fe40b4571fa86',5,1,'Personal Access Token','[]',0,'2019-01-30 16:48:19','2019-01-30 16:48:19','2019-02-06 13:48:19'),('6b87878b4d4baca02ef5a70f409c5f30c714c4bc3f0d15d90bf4708d42788de4068e55072b6f7ae0',5,1,'Personal Access Token','[]',0,'2019-01-17 04:07:41','2019-01-17 04:07:41','2019-01-24 01:07:41'),('7174e4c69adcd322a873efa067690be7bf28715b8ea2b8610ac13a173abc630d872fe3271b9da61c',5,1,'Personal Access Token','[]',0,'2019-02-05 07:41:44','2019-02-05 07:41:44','2019-02-12 04:41:44'),('7269dd06fc6b8728babe798867b6a72bdcf8434859491ab40392ded13469aee91681d2b171463dcb',5,1,'Personal Access Token','[]',0,'2019-03-14 17:02:09','2019-03-14 17:02:09','2019-03-21 14:02:09'),('767d9a0f5c12f3d7142e9f44ef4ac9e169abf3e548dbbf98c4e76a4a7dc7ce6a0e2d81c0584632f5',5,1,'Personal Access Token','[]',0,'2019-02-05 08:37:39','2019-02-05 08:37:39','2019-02-12 05:37:39'),('76e96de32df1232f4df045da7453cf62c60dd3f9714f2fdaf8b9a01e01ffa0641d0830bd01bd11e7',5,1,'Personal Access Token','[]',0,'2019-02-05 07:38:55','2019-02-05 07:38:55','2019-02-12 04:38:55'),('771c4eb26dc3e53d0458e684248d4dcbe95a75541a2dbc6a69cdf17ebb8fe9000012e7b84b797573',4,1,'Personal Access Token','[]',0,'2019-01-08 06:38:43','2019-01-08 06:38:43','2019-01-15 03:38:43'),('7ae2692ca8b37e061b456224429ed85beea8a92f2600e9f8447c356ad681b4c00aad743af6024ef6',5,1,'Personal Access Token','[]',0,'2019-01-16 06:16:55','2019-01-16 06:16:55','2019-01-23 03:16:55'),('7f4aee81ee645cefef9fbd8df23ec6e0d5f74e8e8bb3987226dc63c26145b731c9fd2120f7c81b7a',5,1,'Personal Access Token','[]',0,'2019-03-09 07:18:03','2019-03-09 07:18:03','2019-03-16 04:18:03'),('7f72ee8e3cd74bc1e2aced7045d01158620a58307340751e17c8d5e73c77170aa502be9c51caf078',5,1,'Personal Access Token','[]',0,'2019-02-05 07:37:51','2019-02-05 07:37:51','2019-02-12 04:37:51'),('83c01c296d6afd24866b99981fa11f52e41a052f8a14a359baba0e21a19e1554c48314c97c66d3ac',5,1,'Personal Access Token','[]',0,'2019-03-13 03:51:15','2019-03-13 03:51:15','2019-03-20 00:51:15'),('8bae0c9f4830b5cd52fa63cdafc8da6d1329d53610ce9d2ad2ae6d4be913d8971e859026450388da',5,1,'Personal Access Token','[]',0,'2019-03-14 06:33:27','2019-03-14 06:33:27','2019-03-21 03:33:27'),('8ccd06926dd88afff15af6c9c0a27fecc6e8eb6d44b7bb943752f4cd2c5e3c639e5f4bce9b8415d2',7,1,'Personal Access Token','[]',0,'2019-03-15 14:38:17','2019-03-15 14:38:17','2019-03-22 11:38:17'),('923602147743b47bc1b528796400dcab599eddec76e21844b84bbe9f7d5ea5d99b59f69541cde98d',5,1,'Personal Access Token','[]',0,'2019-03-04 06:18:40','2019-03-04 06:18:40','2019-03-11 03:18:41'),('923fa6d5ccb612f6814e682dc40889897e07b299b3cc685719834ee471c47b225ef6cfb6b32f0c1f',5,1,'Personal Access Token','[]',0,'2019-01-24 17:58:16','2019-01-24 17:58:16','2019-01-31 14:58:16'),('98979d8c5369adcd98275ea62e2995a56511334c4e9cec7ca2fe0d15de8677831f26c0546bdf9bf3',5,1,'Personal Access Token','[]',0,'2019-01-28 17:09:17','2019-01-28 17:09:17','2019-02-04 14:09:17'),('9aebd816a5469bd747e101fd31db65ecc72ae6133f2c0cb6cee600bf0bc6a2ddfddf435a19b9a748',5,1,'Personal Access Token','[]',0,'2019-01-19 07:47:49','2019-01-19 07:47:49','2019-01-26 04:47:49'),('9c1ad9299af91b33e66b73a730a20eaf5a2a19140a58d03bb6fa1ce2bd32d779caad3e80a96eaf4d',5,1,'Personal Access Token','[]',0,'2019-03-12 06:19:03','2019-03-12 06:19:03','2019-03-19 03:19:03'),('9d1cee4217b0928f830f4dd591a2fa091b55efa1cd983be3c612997b06b1ba30600479d9fe1a474c',1,1,'Personal Access Token','[]',0,'2019-03-17 23:06:36','2019-03-17 23:06:36','2019-03-24 20:06:36'),('9de57582e1125c1f9a7b4c43fa38376ee41ccb993f44be562d4c28eabf43ad23e3462b61d30718c9',5,1,'Personal Access Token','[]',0,'2019-01-22 17:31:02','2019-01-22 17:31:02','2019-01-29 14:31:02'),('9fdf1ae06d4c8837dca85d9e5d1beb954447c2b8c33e6a8506788fcfd454084380af52f4880b3f5b',5,1,'Personal Access Token','[]',0,'2019-01-15 17:35:32','2019-01-15 17:35:32','2019-01-22 14:35:32'),('a58fbcfacea4dfcca77b7b0abb5300073734959e5e66d7c13b10639edc043214699d92da84dd6a88',5,1,'Personal Access Token','[]',0,'2019-01-09 16:59:55','2019-01-09 16:59:55','2019-01-16 13:59:55'),('a5bbf34d4aa24a226494ec6b6e5e00a56b5504849b4bdbeb18b3282386867df22f031ffb2854ba90',5,1,'Personal Access Token','[]',0,'2019-03-14 07:11:52','2019-03-14 07:11:52','2019-03-21 04:11:52'),('a5d1645299fdaeaccb1c81a23180bd9fe9fb9ad5e66d1ae970e481062b14bedb711d275a9f4b9589',5,1,'Personal Access Token','[]',0,'2019-02-05 07:52:53','2019-02-05 07:52:53','2019-02-12 04:52:53'),('a67dfae03a2ed069555b1126e4e694f35ae3e5d828d72150481745fa713186f33a163acf6ad6546c',5,1,'Personal Access Token','[]',0,'2019-02-05 08:33:48','2019-02-05 08:33:48','2019-02-12 05:33:48'),('aa48e5787c8b082aaa99ec74f3502e542f1e7dbd06fb1d1fa56f53c6a8ac47ca6b6aa7f8227f965c',5,1,'Personal Access Token','[]',0,'2019-01-24 17:43:34','2019-01-24 17:43:34','2019-01-31 14:43:34'),('abb07e29e1210f27f055ff22d95a5c5b1cd7da8572282ef29e4f0299e295c1fb89dcf1d9120188ad',4,1,'Personal Access Token','[]',0,'2019-01-08 06:34:41','2019-01-08 06:34:41','2019-01-15 03:34:41'),('ae56a7cc0ef7e415004a533e49fa562495a64c4bbe7dd4ed1fb70abcd7ac714228b7046e5f88259e',5,1,'Personal Access Token','[]',0,'2019-01-24 05:52:55','2019-01-24 05:52:55','2019-01-31 02:52:55'),('b3b81630a8bde742ae5d993c3b45be7d0a44af36dcdb8fbb1eaa34288830c22331e46bd0c44eb535',5,1,'Personal Access Token','[]',0,'2019-01-11 07:28:29','2019-01-11 07:28:29','2019-01-18 04:28:29'),('b42b55d779b21701302da821bb3b8c7dd947f71a93bf7f45352506d102361e75df7870a193ccd8b0',5,1,'Personal Access Token','[]',0,'2019-03-03 02:30:18','2019-03-03 02:30:18','2019-03-09 23:30:19'),('b66255091ba7b602221aee57b334f7efa36b478aec0710bab6870477ba1afa86c8f7e4e5be3345b4',5,1,'Personal Access Token','[]',0,'2019-02-05 08:00:38','2019-02-05 08:00:38','2019-02-12 05:00:38'),('c2df612b8f73481f0535ecb58d860e98222ae1f7062b81c7fca4727339b3b5865e4b1edce4861255',5,1,'Personal Access Token','[]',0,'2019-01-31 04:04:27','2019-01-31 04:04:27','2019-02-07 01:04:27'),('c7b5a194d3e2c24f416e9311416aa682cef9396a1fcb725c429581979479b2c7f0f1ad1fd72d93c0',5,1,'Personal Access Token','[]',0,'2019-01-11 06:23:04','2019-01-11 06:23:04','2019-01-18 03:23:04'),('ccdc0da9fba7e4cbea4616a375d59905b2ce4bdf22b303bddaaa6bc12a0846d54ff2d02c96862318',5,1,'Personal Access Token','[]',0,'2019-03-14 03:42:36','2019-03-14 03:42:36','2019-03-21 00:42:36'),('d08e0555e4fdd6cbba33d0dcaf1f324d222f88198eef3cb7df4247b65bb3de5ff4c52f16237aa83d',5,1,'Personal Access Token','[]',0,'2019-01-31 16:23:30','2019-01-31 16:23:30','2019-02-07 13:23:30'),('d1af2bd800beb4a6404f64d8a4a37598e4f8f37367ed3f1495455d4d17a0c0fbc43ba2f5ec96a9ee',5,1,'Personal Access Token','[]',0,'2019-01-09 17:01:39','2019-01-09 17:01:39','2019-01-16 14:01:39'),('d7eedae183d39f79d7431a29f0d3c7965612dd687ea9d60a9493ac2017b3d10fb9460cc4d90286fc',5,1,'Personal Access Token','[]',0,'2019-01-16 17:23:22','2019-01-16 17:23:22','2019-01-23 14:23:22'),('da05d9a3dc9333a3a2281609337b04c063bcef038e053f81a30f3e138bffc4e8746556a8f1a61b30',5,1,'Personal Access Token','[]',0,'2019-03-09 06:46:43','2019-03-09 06:46:43','2019-03-16 03:46:43'),('db5a19ba7e71575234133b7cde0f2d1cc28ac0dee3cc0bb3f619ee9b9b019b844165701e9f9648ca',5,1,'Personal Access Token','[]',0,'2019-03-17 23:11:21','2019-03-17 23:11:21','2019-03-24 20:11:22'),('e1a9c5c69301f0351b024e3f3375e8fae482cc0bc09f8bea18034dd269208cecd889d1a1adc0fd53',5,1,'Personal Access Token','[]',0,'2019-03-09 20:11:51','2019-03-09 20:11:51','2019-03-16 17:11:52'),('e7386d445692d330e05c6c2d66fb77bebca41b40edfd1e6fb402eaa9024c244de1f3a654903aa628',5,1,'Personal Access Token','[]',0,'2019-02-05 08:00:04','2019-02-05 08:00:04','2019-02-12 05:00:04'),('edb677076a6fb58a9706764f61fe43cc237da2e22a4f0103e463c22b86d70a744b36e73d798500fa',5,1,'Personal Access Token','[]',0,'2019-01-30 05:31:41','2019-01-30 05:31:41','2019-02-06 02:31:41'),('f32415f1d03455a3b3576075dcbef2aba2f925ceeecf1183c2ea60a8592f7b9db8be8a4e01625bad',5,1,'Personal Access Token','[]',0,'2019-02-05 07:37:00','2019-02-05 07:37:00','2019-02-12 04:37:00'),('f5856634815cb079a19ff55e1409d7a10eab4b928999443c5bc107e4eb3c9ddf6adaef2edec9d889',5,1,'Personal Access Token','[]',0,'2019-03-13 05:55:16','2019-03-13 05:55:16','2019-03-20 02:55:16'),('f60559913913e76ebccca2b63285eeba4778d4bbcdd2cd85d7012a1629ff8ccf5886e46c6bc90105',5,1,'Personal Access Token','[]',0,'2019-03-13 03:41:19','2019-03-13 03:41:19','2019-03-20 00:41:19'),('f749b47f96d50b6645c3647d38840f09eec287c8d3e75d1555747ff0fe9ecc2a03782153db6c3dd5',5,1,'Personal Access Token','[]',0,'2019-03-14 07:21:12','2019-03-14 07:21:12','2019-03-21 04:21:12'),('f9114b05d0fc0f02f9be47d9fa20acb992c79ef5105ae97aec6d59add84977157c432eb88761b44f',5,1,'Personal Access Token','[]',0,'2019-01-09 17:21:21','2019-01-09 17:21:21','2019-01-16 14:21:21'),('fa10bceb0ab2e23f07517ec2c2c89e11a182b90934ea137d59a1bd77ad21bc9e40a68b875512ffad',5,1,'Personal Access Token','[]',0,'2019-03-03 02:35:49','2019-03-03 02:35:49','2019-03-09 23:35:49'),('fae84b864f17015c20dcc7cf4a1f04d1330d66bf4440c80c77ed61b54a7fab7a83f6725f28b0b2d8',5,1,'Personal Access Token','[]',0,'2019-03-12 15:52:05','2019-03-12 15:52:05','2019-03-19 12:52:05'),('fbe6a9edd027d54f6ed2533b79f4e56c33c6ab9bbb08a639379026c735247c8d569eb88c7b225517',5,1,'Personal Access Token','[]',0,'2019-01-17 04:25:08','2019-01-17 04:25:08','2019-01-24 01:25:08');
/*!40000 ALTER TABLE `oauth_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_auth_codes`
--

DROP TABLE IF EXISTS `oauth_auth_codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `client_id` int(10) unsigned NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_auth_codes`
--

LOCK TABLES `oauth_auth_codes` WRITE;
/*!40000 ALTER TABLE `oauth_auth_codes` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_auth_codes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_clients`
--

DROP TABLE IF EXISTS `oauth_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_clients`
--

LOCK TABLES `oauth_clients` WRITE;
/*!40000 ALTER TABLE `oauth_clients` DISABLE KEYS */;
INSERT INTO `oauth_clients` VALUES (1,NULL,'Laravel Personal Access Client','Dbd6RWxihvfjmvyOHx1Rrg0h0IKmrw3cHK12pnYu','http://localhost',1,0,0,'2019-01-08 05:54:41','2019-01-08 05:54:41'),(2,NULL,'Laravel Password Grant Client','yQSC8gIn5kTgBfofm3kc8QmoqWBUU886JNTsF9Ud','http://localhost',0,1,0,'2019-01-08 05:54:41','2019-01-08 05:54:41');
/*!40000 ALTER TABLE `oauth_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_personal_access_clients`
--

DROP TABLE IF EXISTS `oauth_personal_access_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_personal_access_clients_client_id_index` (`client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_personal_access_clients`
--

LOCK TABLES `oauth_personal_access_clients` WRITE;
/*!40000 ALTER TABLE `oauth_personal_access_clients` DISABLE KEYS */;
INSERT INTO `oauth_personal_access_clients` VALUES (1,1,'2019-01-08 05:54:41','2019-01-08 05:54:41');
/*!40000 ALTER TABLE `oauth_personal_access_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_refresh_tokens`
--

DROP TABLE IF EXISTS `oauth_refresh_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_refresh_tokens`
--

LOCK TABLES `oauth_refresh_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_refresh_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_refresh_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publicacions`
--

DROP TABLE IF EXISTS `publicacions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `publicacions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `texto` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `materia_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `publicacions_materia_id_index` (`materia_id`),
  CONSTRAINT `publicacions_materia_id_foreign` FOREIGN KEY (`materia_id`) REFERENCES `materias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publicacions`
--

LOCK TABLES `publicacions` WRITE;
/*!40000 ALTER TABLE `publicacions` DISABLE KEYS */;
INSERT INTO `publicacions` VALUES (3,'INGENIERIA 1',5,'2019-03-05 03:06:46','2019-03-05 03:06:46',527),(5,'2222',5,'2019-03-09 06:55:44','2019-03-09 06:55:44',523),(7,'Holaaaaa mama',5,'2019-03-09 20:12:36','2019-03-09 20:12:36',523),(8,'Hola ma',5,'2019-03-14 17:11:52','2019-03-14 17:11:52',523),(9,'holaaaa',7,'2019-03-15 14:38:49','2019-03-15 14:38:49',523),(10,'Espero aprobar este año',1,'2019-03-17 23:07:12','2019-03-17 23:07:12',546),(11,'hola que tal',5,'2019-03-18 03:34:42','2019-03-18 03:34:42',522);
/*!40000 ALTER TABLE `publicacions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `universidades`
--

DROP TABLE IF EXISTS `universidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `universidades` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `abreviacion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `universidades`
--

LOCK TABLES `universidades` WRITE;
/*!40000 ALTER TABLE `universidades` DISABLE KEYS */;
INSERT INTO `universidades` VALUES (1,'Universidad Nacional de Lanus','0000-00-00 00:00:00','0000-00-00 00:00:00',NULL,'UNLa'),(2,'Universidad Tecnologica Nacional','0000-00-00 00:00:00','0000-00-00 00:00:00',NULL,'UTN'),(3,'Universidad de Buenos Aires','0000-00-00 00:00:00',NULL,NULL,'UBA');
/*!40000 ALTER TABLE `universidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alias` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `carrera_id` int(11) NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `api_token` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'guada','muscolo','',15,'guada@gmail.com','$2y$10$41ZmB7668OvKvpv89kaTpeZrtPuuwTv2Voe04tcnVNXp7E1paNfBi',NULL,'','2018-12-17 07:34:01','2018-12-17 07:34:01'),(3,'gonzalo22','muscolo','',2,'gonzalo.mus222colo@gmail.com','$2y$12$HoSaFtUff4CF7hs0iNnW0ePyx2K/kpipFj1nKaGD0bQQiRZ5hpt8O',NULL,'','2018-12-29 06:13:33','2018-12-29 06:13:33'),(4,'nombre','123','',18,'1@1.com','$2y$12$QdAQVhftiDrhXpBXkfaKh.Ip2nNG4YwZWCXKbF/W2PZBzQ8sSqcaC',NULL,'','2019-01-03 07:34:56','2019-01-03 07:34:56'),(5,'gonza','muscolo','Puto',1,'gonzal2222o.muscolo@gmail.com','$2y$10$41ZmB7668OvKvpv89kaTpeZrtPuuwTv2Voe04tcnVNXp7E1paNfBi',NULL,'','2019-01-05 06:42:46','2019-03-24 19:04:32'),(6,'gonza','muscolo','',1,'fm_gonza@hotmail.com','$2y$10$hUHlbcdrPGI0P9rXuIUgaeZpPdTSFlkUThFgDVfPedbQJjjNyhqre',NULL,NULL,'2019-03-09 08:08:25','2019-03-09 08:08:25'),(7,'123','123','',7,'elisabet.abril1@gmail.com','$2y$10$41ZmB7668OvKvpv89kaTpeZrtPuuwTv2Voe04tcnVNXp7E1paNfBi',NULL,NULL,'2019-03-09 19:54:42','2019-03-15 15:58:40'),(8,'123','123',NULL,19,'123@asd.com','$2y$10$8E4lAFKnbl7SnaCpgzlibuWV.T1bjtYpfXeLVY7nAtHDFLWzQ4ed.',NULL,NULL,'2019-03-20 02:04:33','2019-03-20 02:04:33'),(9,'asd','asd',NULL,18,'22@asd.com','$2y$10$TAhU5Gqa7kcuCsSq7kWKcOYU28sU2bZzt2YHk16MKRP6bRDCOTpTO',NULL,NULL,'2019-03-20 02:17:11','2019-03-20 02:17:11'),(10,'123','123',NULL,14,'mail@asd.com','$2y$10$tRby/cFhjw87rZ2zFedO/u08DZdSnxHNN7ZikC4eer4TH3PBWyCAq',NULL,NULL,'2019-03-20 02:18:13','2019-03-20 02:18:13'),(11,'123','123',NULL,14,'masil@asd.com','$2y$10$l47SEN8gQnlpK5zUJ8DUqeB/TTzLffNwYbZxBdKOtth1t33WAcfXu',NULL,NULL,'2019-03-20 02:18:55','2019-03-20 02:18:55'),(12,'123','123',NULL,14,'ma1sil@asd.com','$2y$10$ItwrtquYaofk4/KZ1FGgFuthD70Rp9emW7CqtkUJS9BTq5RDo031a',NULL,NULL,'2019-03-20 02:19:15','2019-03-20 02:19:15'),(13,'123','123',NULL,14,'ma1sil@asd2.com','$2y$10$.Sw.9fM0ZGA9dZEmiQ9UQudQTmZfiAPJSwp43YDXs93zl9TyfR2SS',NULL,NULL,'2019-03-20 02:21:45','2019-03-20 02:21:45'),(14,'123','123',NULL,14,'1ma1sil@asd2.com','$2y$10$.FqvdWGFMnKBs09VjwjKo.0G3MXRUxIjJ8KsYQzVjmCBPI2z6g6E6',NULL,NULL,'2019-03-20 02:22:31','2019-03-20 02:22:31'),(15,'123','123',NULL,18,'asd@asd.comww','$2y$10$XImgc8gYxTuxIv05B3rFhuIJq8CC5b2pVrIVLZfEqFf6Z/7aKTIZu',NULL,NULL,'2019-03-20 02:23:15','2019-03-20 02:23:15'),(16,'123','123',NULL,2,'222@qwd.com','$2y$10$19ifl.KtIOZkmoebkvRmT.djmVCYazuagw49nX5/ltMJMCQOTYcCy',NULL,NULL,'2019-03-20 02:25:57','2019-03-20 02:25:57'),(17,'Gonzs','Qdd',NULL,15,'Gonza@gmail.com','$2y$10$kYVO1TEfogTtwZnh74uQl.0JgPxo4Gwu8UMg1iIXTnb.ueaOIkwkm',NULL,NULL,'2019-03-24 19:02:25','2019-03-24 19:02:25');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-09 23:34:35
