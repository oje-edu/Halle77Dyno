/*
 Halle77 / Dyno Datenbank
 https://www.youtube.com/channel/UCNhFsNZQfB2mdM1FoV6q1Kw
 Copyright (c) 2022 T. OJE
 Jedem, der eine Kopie dieser Software und der zugehörigen Dokumentationsdateien (die "Software") erhält,
 wird hiermit kostenlos die Erlaubnis erteilt, ohne Einschränkung mit der Software zu handeln, einschließlich und ohne Einschränkung der Rechte zur Nutzung,
 zum Kopieren, Ändern, Zusammenführen, Veröffentlichen, Verteilen, Unterlizenzieren und/oder Verkaufen von Kopien der Software, und Personen, denen die Software zur Verfügung gestellt wird, dies unter den folgenden Bedingungen zu gestatten:
 Der obige Urheberrechtshinweis und dieser Genehmigungshinweis müssen in allen Kopien oder wesentlichen Teilen der Software enthalten sein.
 DIE SOFTWARE WIRD OHNE MÄNGELGEWÄHR UND OHNE JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE GEWÄHRLEISTUNG, EINSCHLIEßLICH, ABER NICHT BESCHRÄNKT AUF DIE GEWÄHRLEISTUNG DER MARKTGÄNGIGKEIT,
 DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK UND DER NICHTVERLETZUNG VON RECHTEN DRITTER, ZUR VERFÜGUNG GESTELLT. DIE AUTOREN ODER URHEBERRECHTSINHABER SIND IN KEINEM FALL HAFTBAR FÜR ANSPRÜCHE,
 SCHÄDEN ODER ANDERE VERPFLICHTUNGEN, OB IN EINER VERTRAGS- ODER HAFTUNGSKLAGE, EINER UNERLAUBTEN HANDLUNG ODER ANDERWEITIG, DIE SICH AUS,
 AUS ODER IN VERBINDUNG MIT DER SOFTWARE ODER DER NUTZUNG ODER ANDEREN GESCHÄFTEN MIT DER SOFTWARE ERGEBEN.
*/

DROP DATABASE IF EXISTS halle77Dyno;
CREATE DATABASE halle77Dyno;
USE halle77Dyno;

CREATE TABLE brands (
brand_id INT NOT NULL AUTO_INCREMENT,
manufacturer VARCHAR(120),
model_id INT,
PRIMARY KEY (brand_id)
);

INSERT INTO brands (brand_id, manufacturer) VALUES
  ('1','Alfa Romeo'),
  ('2','Audi'),
  ('3','BMW'),
  ('4','Citroën'),
  ('5','Dacia'),
  ('6','Dodge'),
  ('7','Ferrari'),
  ('8','Fiat'),
  ('9','Ford'),
  ('10','Honda'),
  ('11','Hyundai'),
  ('12','Jaguar'),
  ('13','Kia'),
  ('14','Lada'),
  ('15','Lamborghini'),
  ('16','Mazda'),
  ('17','Mercedes'),
  ('18','Mini'),
  ('19','Mitsubishi'),
  ('20','Nissan'),
  ('21','NSU'),
  ('22','Opel'),
  ('23','Peugeot'),
  ('24','Porsche'),
  ('25','Renault'),
  ('26','Seat'),
  ('27','Skoda'),
  ('28','Smart'),
  ('29','Subaru'),
  ('30','Suzuki'),
  ('31','Toyota'),
  ('32','Volkswagen'),
  ('33','Volvo');

CREATE TABLE models (
model_id INT NOT NULL AUTO_INCREMENT,
mtype VARCHAR(120),
ccm INT,
ps DECIMAL(4,1),
brand_id INT,
PRIMARY KEY (model_id),
FOREIGN KEY (brand_id) REFERENCES brands (brand_id)
);

INSERT INTO models (model_id, mtype, ccm,ps) VALUES
	('1','156','2000','150'),
	('2','Alfetta','1800','115'),
	('3','Alfsud','1200','63'),
	('4','A3','1800','150'),
	('5','A4 Avant','2400','193'),
	('6','A4 (B5) Turbo','1800','150'),
	('7','A4 (B5)','1800','125'),
	('8','A4 Coupe','2000','136'),
	('9','Cabriolet','2600','150'),
	('10','80 (B4)','2800','174'),
	('11','80 (B4)','2000','90'),
	('12','80 (B3) E','2000','113'),
	('13','80 (B3) S','1900','113'),
	('14','80 (B3) S','1800','88'),
	('15','90 (B3) Coupe 20V','2300','170'),
	('16','90 2.3E','2300','136'),
	('17','100 CS','2200','115'),
	('18','100 CC','1900','75'),
	('19','1502','1800','115'),
	('20','1602 (Cabrio)','2000','150'),
	('21','','','');
