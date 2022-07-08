CREATE DATABASE  IF NOT EXISTS `aphrodite_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `aphrodite_db`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: aphrodite_db
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'anillos','2022-07-08 05:12:44',NULL,NULL),(2,'collares','2022-07-08 05:12:44',NULL,NULL),(3,'pulseras','2022-07-08 05:12:44',NULL,NULL),(4,'relojes','2022-07-08 05:12:44',NULL,NULL),(5,'aritos','2022-07-08 05:12:44',NULL,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `primary` tinyint(1) NOT NULL DEFAULT '0',
  `productId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'Fiorever1.jpeg',1,1,'2022-07-08 05:12:45',NULL,NULL),(2,'Fiorever2.jpeg',0,1,'2022-07-08 05:12:45',NULL,NULL),(3,'Fiorever3.jpeg',0,1,'2022-07-08 05:12:45',NULL,NULL),(4,'Sunshine1.jpeg',1,2,'2022-07-08 05:12:45',NULL,NULL),(5,'Sunshine2.jpeg',0,2,'2022-07-08 05:12:45',NULL,NULL),(6,'noimage.png',0,2,'2022-07-08 05:12:45',NULL,NULL),(7,'DiamondFire1.jpeg',1,3,'2022-07-08 05:12:45',NULL,NULL),(8,'DiamondFire2.jpeg',0,3,'2022-07-08 05:12:45',NULL,NULL),(9,'DiamondFire3.jpeg',0,3,'2022-07-08 05:12:45',NULL,NULL),(10,'DivasDreamCollar1.jpeg',1,4,'2022-07-08 05:12:45',NULL,NULL),(11,'DivasDreamCollar2.jpeg',0,4,'2022-07-08 05:12:45',NULL,NULL),(12,'DivasDreamCollar3.jpeg',0,4,'2022-07-08 05:12:45',NULL,NULL),(13,'FioreverCollar1.jpeg',1,5,'2022-07-08 05:12:45',NULL,NULL),(14,'FioreverCollar2.jpeg',0,5,'2022-07-08 05:12:45',NULL,NULL),(15,'FioreverCollar3.jpeg',0,5,'2022-07-08 05:12:45',NULL,NULL),(16,'CirculoCuadradoCollar1.jpeg',1,6,'2022-07-08 05:12:45',NULL,NULL),(17,'CirculoCuadradoCollar2.jpeg',0,6,'2022-07-08 05:12:45',NULL,NULL),(18,'CirculoCuadradoCollar3.jpeg',0,6,'2022-07-08 05:12:45',NULL,NULL),(19,'EstrellaPlataCollar1.jpeg',1,7,'2022-07-08 05:12:45',NULL,NULL),(20,'EstrellaPlataCollar2.jpeg',0,7,'2022-07-08 05:12:45',NULL,NULL),(21,'EstrellaPlataCollar3.jpeg',0,7,'2022-07-08 05:12:45',NULL,NULL),(22,'FioreverPulsera1.jpeg',1,8,'2022-07-08 05:12:45',NULL,NULL),(23,'FioreverPulsera2.jpeg',0,8,'2022-07-08 05:12:45',NULL,NULL),(24,'FioreverPulsera3.jpeg',0,8,'2022-07-08 05:12:45',NULL,NULL),(25,'PulseraBrisaAzul1.jpeg',1,9,'2022-07-08 05:12:45',NULL,NULL),(26,'PulseraBrisaAzul2.jpeg',0,9,'2022-07-08 05:12:45',NULL,NULL),(27,'PulseraBrisaAzul3.jpeg',0,9,'2022-07-08 05:12:45',NULL,NULL),(28,'EstrellaBrillante1.jpeg',1,10,'2022-07-08 05:12:45',NULL,NULL),(29,'EstrellaBrillante2.jpeg',0,10,'2022-07-08 05:12:45',NULL,NULL),(30,'EstrellaBrillante3.jpeg',0,10,'2022-07-08 05:12:45',NULL,NULL),(31,'EternoLazo1.jpeg',1,11,'2022-07-08 05:12:45',NULL,NULL),(32,'EternoLazo2.jpeg',0,11,'2022-07-08 05:12:45',NULL,NULL),(33,'EternoLazo3.jpeg',0,11,'2022-07-08 05:12:45',NULL,NULL),(34,'DivasDreamAros1.jpeg',1,12,'2022-07-08 05:12:45',NULL,NULL),(35,'DivasDreamAros2.jpeg',0,12,'2022-07-08 05:12:45',NULL,NULL),(36,'DivasDreamAros3.jpeg',0,12,'2022-07-08 05:12:45',NULL,NULL),(37,'FioreverAros1.jpeg',1,13,'2022-07-08 05:12:45',NULL,NULL),(38,'FioreverAros2.jpeg',0,13,'2022-07-08 05:12:45',NULL,NULL),(39,'FioreverAros3.jpeg',0,13,'2022-07-08 05:12:45',NULL,NULL),(40,'HaloCorazon1.jpeg',1,14,'2022-07-08 05:12:45',NULL,NULL),(41,'HaloCorazon2.jpeg',0,14,'2022-07-08 05:12:45',NULL,NULL),(42,'HaloCorazon3.jpeg',0,14,'2022-07-08 05:12:45',NULL,NULL),(43,'NinfadeOro1.jpeg',1,15,'2022-07-08 05:12:45',NULL,NULL),(44,'NinfadeOro2.jpeg',0,15,'2022-07-08 05:12:45',NULL,NULL),(45,'NinfadeOro3.jpeg',0,15,'2022-07-08 05:12:45',NULL,NULL),(46,'ArosTuBrillo1.jpeg',1,16,'2022-07-08 05:12:45',NULL,NULL),(47,'ArosTuBrillo2.jpeg',0,16,'2022-07-08 05:12:45',NULL,NULL),(48,'ArosTuBrillo3.jpeg',0,16,'2022-07-08 05:12:45',NULL,NULL),(49,'DivasDreamReloj1.jpeg',1,17,'2022-07-08 05:12:45',NULL,NULL),(50,'DivasDreamReloj2.jpeg',0,17,'2022-07-08 05:12:45',NULL,NULL),(51,'DivasDreamReloj3.jpeg',0,17,'2022-07-08 05:12:45',NULL,NULL),(52,'SerpentiReloj1.jpeg',1,18,'2022-07-08 05:12:45',NULL,NULL),(53,'SerpentiReloj2.jpeg',0,18,'2022-07-08 05:12:45',NULL,NULL),(54,'SerpentiReloj3.jpeg',0,18,'2022-07-08 05:12:45',NULL,NULL),(55,'SerpentiSeductori1.jpeg',1,19,'2022-07-08 05:12:45',NULL,NULL),(56,'SerpentiSeductori2.jpeg',0,19,'2022-07-08 05:12:45',NULL,NULL),(57,'SerpentiSeductori3.jpeg',0,19,'2022-07-08 05:12:45',NULL,NULL),(58,'LuceaReloj1.jpeg',1,20,'2022-07-08 05:12:45',NULL,NULL),(59,'LuceaReloj2.jpeg',0,20,'2022-07-08 05:12:45',NULL,NULL),(60,'LuceaReloj3.jpeg',0,20,'2022-07-08 05:12:45',NULL,NULL),(61,'CrystalFlower1.jpeg',1,21,'2022-07-08 05:12:45',NULL,NULL),(62,'CrystalFlower2.jpeg',0,21,'2022-07-08 05:12:45',NULL,NULL),(63,'CrystalFlower3.jpeg',0,21,'2022-07-08 05:12:45',NULL,NULL);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materials`
--

DROP TABLE IF EXISTS `materials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materials` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materials`
--

LOCK TABLES `materials` WRITE;
/*!40000 ALTER TABLE `materials` DISABLE KEYS */;
INSERT INTO `materials` VALUES (1,'oro','2022-07-08 05:12:44',NULL,NULL),(2,'plata','2022-07-08 05:12:44',NULL,NULL),(3,'fantasia','2022-07-08 05:12:44',NULL,NULL);
/*!40000 ALTER TABLE `materials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `price` int NOT NULL,
  `sizeId` int NOT NULL,
  `discount` int DEFAULT '0',
  `description` text NOT NULL,
  `units` int NOT NULL,
  `categoryId` int NOT NULL,
  `materialId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sizeId` (`sizeId`),
  KEY `categoryId` (`categoryId`),
  KEY `materialId` (`materialId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`sizeId`) REFERENCES `sizes` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_ibfk_3` FOREIGN KEY (`materialId`) REFERENCES `materials` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Fiorever',5500,1,10,'Anillo Fiorever en oro blanco de 18 qt con un diamante redondo talla brillante central y pavé de diamantes.',2200,1,1,'2022-07-08 05:12:44',NULL,NULL),(2,'Sunshine',3000,2,10,'Anillo Sunshine es encantador e ideal para llevar a diario. Una piedra de color azul claro tallada con destreza brilla intensamente rodeada por pétalos de flores. Este anillo es un complemento fantástico tanto para looks en tonos claros o pastel, tanto para el trabajo como para ocasiones informales. Combina especialmente bien con accesorios similares y diseños florales',15,1,1,'2022-07-08 05:12:44',NULL,NULL),(3,'Diamond Fire',3500,1,20,'Anillo de de Plata con Zirconia redonda y Zorconitas en sus laterales Diamonfire. Caracteristicas: 1 piedra Diamonfire 6,5 mm. 14 piedras de Diamonfire, 1,5 mm. Total ca. 1,21 ct. Altura 6,6 mm, banda anular 1,68 mm Ancho 6,5 mm. Profundidad 6,5 mm, banda de anillo 1,9 mm. Talle - 6: DiamonFire 16 mm de diámetro. Talle - 7: DiamonFire 17 mm de diámetro. Talle - 8: DiamonFire 18 mm de diámetro. Talle - 9: DiamonFire 19 mm de diámetro. 925 plata esterlina. Diamonfire zirconia grabada con láser, revestimiento Premium de tres capas, Certificado individual, la garantía cubre el diamante',23,1,1,'2022-07-08 05:12:44',NULL,NULL),(4,'Diva\'s Dream',2800,4,30,'Inspirado en la elegancia femenina y el encantador atractivo de la Ciudad Eterna, el collar DIVAS\'DREAM rinde homenaje a las divas más glamurosas con un estilo inconfundiblemente romano. Quintaesencia de la feminidad y la delicadeza, el collar está esculpido de un modo que captura la magnificencia del mármol de las Termas de Caracalla y las curvas sensuales de sus mosaicos en forma de abanico, reflejando la verdadera esencia de la belleza italiana. Collar DIVAS\' DREAM en oro amarillo de 18 qt con colgante con un diamante y madreperla engarzados',12,2,1,'2022-07-08 05:12:44',NULL,NULL),(5,'Fiorever Collar',3800,2,10,'Floreciendo entre las maravillas de la Ciudad Eterna, Fiorever se inspira en la belleza de la flor de cuatro pétalos venerada por los romanos como símbolo de felicidad y alegría. En una combinación de elegancia natural y espontaneidad desenfadada, el singular collar con colgante de flor brilla delicadamente con la exquisitez de su diseño calado, aportando un toque de resplandor y feminidad elegante a la vida cotidiana.Collar Fiorever en oro blanco de 18 qt con un diamante talla brillante (0,10 qt) y pavé de diamantes (0,06 qt).',14,2,1,'2022-07-08 05:12:44',NULL,NULL),(6,'Cuadrado Brillantes',2100,3,0,'Este delicado Collar Círculo y Cuadrado Brillantes es un clásico moderno que aguantará el paso del tiempo. Acabado a mano en plata de primera ley, el collar incluye un colgante embellecido con brillantes circonitas cúbicas con dos tallas y tamaños distintos: una gema redonda sobre una gema cuadrada, que se sujetan a la cadena con puntas largas. La longitud del collar es ajustable, lo que convierte esta versátil joya en el toque final ideal para cualquier outfit',12,2,2,'2022-07-08 05:12:44',NULL,NULL),(7,'Estrella Plata Collar',2200,5,0,'Crea un estilo estelar con el Collar en plata de ley Estrella Asimétrica en Pavé. Acabado a mano en plata de primera ley y decorado con circonitas cúbicas, se trata de un diseño sutil de formas delicadas con detalles exclusivos. El collar se ha embellecido con el colgante de una estrella brillante asimétrica con una gema y una mini estrella giratoria en el centro. Inspirado en las brillantes estrellas, este collar de temática celestial es perfecto para cualquiera que desee llevar en su look la magia del cielo nocturno',15,2,1,'2022-07-08 05:12:44',NULL,NULL),(8,'Fiorever Pulsera',2500,1,0,'Floreciendo entre las maravillas de la Ciudad Eterna, Fiorever se inspira en la belleza de la flor de cuatro pétalos venerada por los romanos como símbolo de felicidad y alegría. Fiorever combina dos palabras cargadas de sentido: fiore, \"flor\" en italiano, y forever, \"siempre\" en inglés, para celebrar el amor de Roma por la vida con un diseño sorprendente y apasionado. Diseñado para brillar con luminosidad eterna, el precioso icono floral de Bvlgari está elaborado con un diamante central rodeado por cuatro pétalos de diamante que se inclinan hacia delante, un guiño a la predilección de la firma por los volúmenes sensuales. Pulsera Fiorever en oro blanco de 18 qt con dos diamantes centrales y pavé de diamantes',18,3,1,'2022-07-08 05:12:44',NULL,NULL),(9,'Brisa Azul Pulsera',1800,2,10,'Sube de nivel tu look tu pulsera Brisa Azul. Acabado a mano en plata esterlina, este diseño está inspirado en una pieza del archivo de Aphrodite. Con barras rígidas decoradas con piedras transparentes más pequeñas colocadas entre las azules más grandes, este brazalete incluye un cierre de mosquetón con una etiqueta colgante de piedra al final. De tamaño ajustable, contrarresta los tonos fríos de este brazalete con piezas terminadas a mano en Recubrimiento en Oro Rosa de 14k (mezcla única con baño de oro rosa de 14k)',22,3,2,'2022-07-08 05:12:44',NULL,NULL),(10,'Estrella Brillante Pulsera',1200,1,10,'Lleva el brillo celestial a tu look con pulsera Estrella Brillante. Acabada a mano en plata de primera ley, el cierre con forma de estrella está cubierto de brillantes circonitas cúbicas transparentes por ambos lados. Se puede embellecer con hasta 16-18 charms y clips. Llévala sola para crear un look sencillo y sutil o combínala con otros diseños de inspiración celestial si lo que quieres es look de otro mundo',12,3,2,'2022-07-08 05:12:44',NULL,NULL),(11,'Eterno Lazo',2800,4,0,'Fina pulsera de oro 18ql cubierta de brillantes de primera calidad, en forma de lazos eternos    entrecruzados que mezclan categoría y finesa. Por su forma de cadena eslabonada es posible ajustar su tamaño con finos agregados extras',9,3,1,'2022-07-08 05:12:44',NULL,NULL),(12,'Diva\'s Dream Aros',2500,4,0,'Inspirados en la elegancia femenina y el encantador atractivo de la Ciudad Eterna, los pendientes DIVAS\' DREAM rinden homenaje a las divas más glamurosas con un estilo inconfundiblemente romano. Quintaesencia de la feminidad y la delicadeza, los pendientes están esculpidos para capturar la majestuosidad de los mármoles de las Termas de Caracalla y las curvas sensuales de sus mosaicos en forma de abanico, reflejando la verdadera esencia de la belleza italiana. Pendientes DIVAS\' DREAM en oro rosa con madreperla y pavé de diamantes',12,5,1,'2022-07-08 05:12:44',NULL,NULL),(13,'Fiorever Aros',3200,3,0,'Floreciendo entre las maravillas de la Ciudad Eterna, Fiorever se inspira en la belleza de la flor de cuatro pétalos venerada desde siempre por los romanos como símbolo de felicidad y alegría. Fiorever combina dos palabras cargadas de sentido: fiore, \"flor\" en italiano, y forever, \"siempre\" en inglés, para celebrar el amor de Roma por la vida con un diseño sorprendente y apasionado. Diseñados para brillar con luminosidad eterna, estos modernos pendientes ostentan una deslumbrante flor en oro blanco y diamante que corona las preciosas tiras colgantes. Pendientes Fiorever en oro blanco de 18 qt con dos diamantes y pavé de diamantes',15,5,1,'2022-07-08 05:12:44',NULL,NULL),(14,'Halo Corazón Aros',2100,2,0,'Un regalo de amor para una mamá elegante, los aretes de aro Corazón con halo resplandeciente tienen una circonia cúbica colgante rosa en forma de corazón rodeada por un halo de pavé. El pavé en el aro está acentuado con una circonia cúbica redonda. Combínalo con el collar o anillo a juego para causar un impacto lleno de color adecuado para toda ocasión',14,5,1,'2022-07-08 05:12:44',NULL,NULL),(15,'Ninfa de Oro Aros',3100,1,0,'Aros elaborados en Oro rosa 18k con siete piedras Cubic Swarovski transparentes: tres Navette de 4mm x 2mm y cuatro redondas talla brillante de 1.5mm. Una pieza inspirada en las formas más oníricas de la naturaleza',12,5,1,'2022-07-08 05:12:44',NULL,NULL),(16,'Tu Brillo Aros',3100,2,0,'Delicados aros de Oro Blanco en 18ql con contorno de diamantes y cierre cerrado. ¡Ideales para tus fiestas más sofisticadas!',24,5,1,'2022-07-08 05:12:44',NULL,NULL),(17,'Reloj Diva\'s Dream',6500,4,0,'Esta nueva edición del reloj DIVAS\' DREAM FINISSIMA, creada en 2018 para homenajear el centenario de la extraordinaria maestría relojera y joyera de Bvlgari, reinterpreta los cautivadores mosaicos en forma de abanico de las Termas romanas de Caracalla en una brillante esfera de diamantes. Este reloj, el repetidor de minutos de mujer más fino del mundo, cuenta con un calibre fabricado en los talleres de Bvlgari que ha batido récords, el repetidor de minutos más fino del mercado, además de un pequeño y precioso secreto: el charm con la emblemática forma de abanico del lateral sirve para activar el carrillón. Una obra maestra de ensueño que fusiona la inspiración romana, el arte de la joyería y el saber hacer relojero en una pieza inimitable.Reloj DIVAS\' DREAM Finissima Mosaica con movimiento mecánico de manufactura extrafino con repetición de minutos, 2 martillos (carga manual), calibre BVL 362. Caja de 37 mm en oro blanco de 18 ct con engaste integral en pavé efecto nieve y diamantes talla baguette, corona en oro blanco de 18 ct con un zafiro talla cabujón engastado, esfera con diamantes talla baguette y talla brillante engastados, pequeño segundero descentrado con diamantes engastados, agujas azules, fondo transparente, correa en piel de aligátor azul y cierre desplegable en oro blanco de 18 ct con diamantes engarzados',4,4,1,'2022-07-08 05:12:44',NULL,NULL),(18,'Reloj Serpenti',5200,2,0,'El reloj Serpenti Tubogas da una vuelta en oro rosa de 18 qt y acero inoxidable, que fusiona dos de los emblemas más icónicos del diseño de Bulgari, aúna la sinuosidad de la serpiente con el espíritu contemporáneo del diseño Tubogas. Elaborado con una ligereza flexible y tubular, el reloj evoca tanto el poder seductor de la serpiente como la forma fluida de su cuerpo enroscado, fusionando el glamour irresistible y el diseño joyero distintivo. Reloj Serpenti Tubogas con movimiento de cuarzo, caja de 35 mm en acero inoxidable, bisel en oro rosa de 18 qt, corona en oro rosa de 18 qt con cabujón de rubelita rosa engastado, esfera blanca opalescente con grabado guilloché soleil, brazalete de una vuelta en oro rosa de 18 qt y acero inoxidable. Hermético hasta 30 metros.',6,4,1,'2022-07-08 05:12:44',NULL,NULL),(19,'Reloj Serpenti Seductori',5100,3,0,'El reloj Serpenti Seduttori, diseñado para deslumbrar, hace del tiempo un bien aún más preciado. Este reloj, que reinterpreta el incuestionable icono de seducción de Bvlgari con un diseño sin precedentes, luce la icónica cabeza de reloj en forma de gota, más fina que nunca, y un brazalete de gran sensualidad y flexibilidad con un motivo hexagonal inspirado en las escamas. Estética seductora y un guiño al glamour de la joyería: el reloj lanza un nuevo hechizo de seducción al mundo de la serpiente. Reloj Serpenti Seduttori con movimiento de cuarzo. Caja de 33 mm en oro blanco de 18 qt, bisel en oro blanco de 18 qt con diamantes engastados, corona en oro blanco de 18 qt con cabujón en zafiro engastado, esfera plateada opalescente blanca, brazalete en oro blanco de 18 qt y cierre desplegable',6,4,1,'2022-07-08 05:12:44',NULL,NULL),(20,'Reloj LVCEA',5200,1,0,'LVCEA ilumina el tiempo y aporta glamour a la vida diaria y a cualquier estilo: se trata de un reloj concebido para la mujer. Elegante y poética, esta exclusiva interpretación presenta un look en venturina azul con un brillo especial que evoca un cielo estrellado romano. Un reloj joya de ensueño inspirado en la belleza atemporal de la Ciudad Eterna, con su inquebrantable simetría y pureza de líneas, reinterpretado a través de un diseño contemporáneo, audaz y riguroso. Reloj LVCEA con movimiento mecánico de carga mecánica, caja de 33 mm en oro rosa de 18 qt pulida (10,07 mm de grosor) con diamantes redondos talla brillante engastados, corona en oro rosa de 18 qt con un zafiro azul talla cabujón y un diamante engastados, esfera en venturina azul. Correa en piel de aligátor azul con eslabones en oro rosa de 18 qt engastados con diamantes y hebilla de pasador en oro rosa de 18 qt. Hermético hasta 50 metros.',6,4,1,'2022-07-08 05:12:44',NULL,NULL),(21,'Reloj Crystal Flower',4200,3,10,'Este reloj de Swarovski exhibe una brillante integración de formas naturales en un diseño moderno. De inspiración floral, el bisel incorpora dos hileras entrelazadas de revestimiento de PVD en tono oro rosa, una de ellas adornada con resplandecientes cristales. Enmarcada por estas brillantes líneas se encuentra una esfera iridiscente plateada adornada con marcadores de índice de cristal y con el logotipo de Swarovski a las 12 en punto. Las líneas de la pulsera con revestimiento de PVD en tono oro rosa, que fluyen con delicadeza, son una prolongación del atractivo floral del bisel y añaden un toque delicado a este reloj con denominación Swiss Made. Añade elegancia a tu estilo con este reloj floral que aporta un romanticismo extraordinario a tu día a día',9,4,1,'2022-07-08 05:12:44',NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('10220630181429-create-size.js'),('20220629174912-create-category.js'),('20220629175657-create-material.js'),('20220629180202-create-product.js'),('20220629181338-create-user.js'),('30220629181844-create-image.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sizes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,'s','2022-07-08 05:12:43',NULL,NULL),(2,'m','2022-07-08 05:12:43',NULL,NULL),(3,'l','2022-07-08 05:12:43',NULL,NULL),(4,'xs','2022-07-08 05:12:43',NULL,NULL),(5,'xl','2022-07-08 05:12:43',NULL,NULL);
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `gender` char(255) NOT NULL,
  `dob` datetime NOT NULL,
  `password` varchar(100) NOT NULL,
  `country` varchar(50) NOT NULL,
  `rol` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'daiana','ramirez','daichu@gmail.com','femenino','2022-06-29 00:00:00','$2a$10$lW05BE4kTnp6kbsJWjmBV.iSTgG/XlN7VOsHD6ufdJbx3hVKdAA52','br','admin','noimage.png','2022-07-08 05:12:44',NULL,NULL),(2,'Paula','Burgos','pauli@gmail.com','femenino','2022-06-14 00:00:00','$2a$10$GiPJClmKAsP0zTXsnPgMhuDwUGVxhPtcxFiRPKHkGlIRCRzg7IVf2','ar','admin','noimage.png','2022-07-08 05:12:44',NULL,NULL),(3,'Dayanna','Ramírez vallejos','Casafamiliass2877@gmail.com','masculino','2022-06-06 00:00:00','$2a$10$lEX6EWfAfx4yVX5X40Vrku1RXnRVNreEVETnVY7AoFO.FnOq9UJ2a','ar','guest','noimage.png','2022-07-08 05:12:44',NULL,NULL),(4,'Dayanna','Ramírez vallejos','maria@gmail.com','femenino','2022-06-17 00:00:00','$2a$10$yiMf8J31vuAypM4cRYUEKeREdiDsuMrp.UpMrtCRlepshB3TrnkWa','ar','guest','noimage.png','2022-07-08 05:12:44',NULL,NULL),(5,'Dayanna','Ramírez vallejos','day@gmail.com','femenino','2022-06-21 00:00:00','$2a$10$iZfjTaXIUd3cuUbEZEM0OOA7MAUjuJ/zvdjNYBjl/abkkkCBJWRfy','br','admin','noimage.png','2022-07-08 05:12:44',NULL,NULL),(6,'Dayanna','Ramírez vallejos','Casafamilia2877@gmail.com','femenino','2022-06-13 00:00:00','$2a$10$0Oi6k123UP7dv7BB/QAdIewx.rwS68JT2iODON5XdmTVP0m.rGp86','ar','guest','noimage.png','2022-07-08 05:12:44',NULL,NULL),(7,'Dayanna','Ramírez vallejos','user@gmail.com','femenino','2022-06-05 00:00:00','$2a$10$fkBA1K.KIfE5hn3ZLDeCpu1xd8caXR7G05paNyn4duCU3dqc6bmn2','mx','guest','noimage.png','2022-07-08 05:12:44',NULL,NULL),(8,'maria','masdsad','Casa4@gmail.com','masculino','2022-06-05 00:00:00','$2a$10$NVYeKyiVgtGZTOj29RsdHOKEb/ULyfzh6lWmJdm.SCLY1G0ycumB.','br','guest','image-1654651886012.jpeg','2022-07-08 05:12:44',NULL,NULL),(9,'dara','ramirezv','Casa5@gmail.com','femenino','2022-06-08 00:00:00','$2a$10$MSdB3syBsyzVnav7/uvr2uHgcSy5vU.OXDkDVRH8DRmlQYmxYc3eO','uy','admin','noimage.png','2022-07-08 05:12:44',NULL,NULL),(10,'Daniela','Orbes','danielaorbes73@gmail.com','nodice','2022-06-08 00:00:00','$2a$10$wm1eXd8IjyyOXOLmmXg04eZRskOFKC.58UIRg6egm3VUfoiFJFk8G','uy','guest','noimage.png','2022-07-08 05:12:44',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'aphrodite_db'
--

--
-- Dumping routines for database 'aphrodite_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-08  2:38:38
