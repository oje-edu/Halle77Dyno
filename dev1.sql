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

CREATE TABLE episodes (
episode_id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(100) NOT NULL,
episodeUrl VARCHAR(255) NOT NULL,
PRIMARY KEY (episode_id),
);

INSERT INTO episodes (episode_id, title, episodeUrl) VALUES
('47','Auto ZERLEGT SICH beim PRÜFSTANDSLAUF!','https://www.youtube.com/watch?v=-U2iLAAdLb0'),
('46','BUS mit 900.000 KM?!','https://www.youtube.com/watch?v=BP_DuLkvy5A'),
('45','Ein OPEL-MOTOR im PONTIAC?','https://www.youtube.com/watch?v=VI1e417i130'),
('44','Der KÜRZESTE Prüfstandstag aller Zeiten!','https://www.youtube.com/watch?v=AcY53Nyh__k'),
('43','ES GEHT WIEDER LOS!','https://www.youtube.com/watch?v=6UB_8KVNDHE'),
('42','DRUCKSCHLAUCH PLATZT bei 1,5 BAR!','https://www.youtube.com/watch?v=F8mgJAhtEIU'),
('41','Außergewöhnliches TUNING!','https://www.youtube.com/watch?v=ToyAeBT77BU'),
('40','BMW E9 CSL & Golf 3 VR6 TURBO!','https://www.youtube.com/watch?v=tQCr-ilriks'),
('39','ÜBER den ROTEN BEREICH hinaus!','https://www.youtube.com/watch?v=eBir5tD_j04'),
('38','OLDSCHOOL-Tuning & Zu TIEF für den Prüfstand?','https://www.youtube.com/watch?v=QfejIrbdLkY'),
('37','PROJEKTAUTOS und SELTENE Modelle!','https://www.youtube.com/watch?v=azPKoGILPiQ'),
('36','Marco ZEIGT wie man SCHUMMELT!','https://www.youtube.com/watch?v=rky0umSEMIU'),
('35','NSU TT, GOLF II G60 & MINI mit V-TEC Motor!','https://www.youtube.com/watch?v=MC0NFzTLJ64'),
('34','Viele ALT-TERMINE und viel HERZBLUT!','https://www.youtube.com/watch?v=CyXw1IsVFsA'),
('33','Die PIRANHA Story von 1999!','https://www.youtube.com/watch?v=4rPDZ0xLyS4'),
('32','A wie ALFA ROMEO!','https://www.youtube.com/watch?v=HO4zip39pl8'),
('31','Wettschulden sind EHRENSCHULDEN!','https://www.youtube.com/watch?v=xIg7sxloRSA'),
('30','Mazda RX7 mit WANKELMOTOR und TURBO!','https://www.youtube.com/watch?v=ILHbfxFF6u4'),
('29','Unfassbar GEILE Autos!','https://www.youtube.com/watch?v=PgW4HZv5X2c'),
('28','Tag der ENTTÄUSCHUNGEN!','https://www.youtube.com/watch?v=Q7rKgXCFxms'),
('27','Jan MUSS einspringen! (Marco außer Betrieb)','https://www.youtube.com/watch?v=runp_UMo_gI'),
('26','Der ERSTE hat es GESCHAFFT!','https://www.youtube.com/watch?v=fvbykBegO3s'),
('25','BMW E36 mit Oldschool-TUNING!','https://www.youtube.com/watch?v=_6cKT9BNgKE'),
('24','Es wird DUNKEL: Audi A6 Avant TURBO-Diesel!','https://www.youtube.com/watch?v=sR_JS37zyNo'),
('23','Mehr 5 Zylinder geht FAST nicht!','https://www.youtube.com/watch?v=0rnMbGcpCLQ'),
('22','BMW E30 mit V8 + Lada 2111 mit MOTORTUNING!','https://www.youtube.com/watch?v=CgfHgEPeKgU'),
('21','Ein EHEPAAR auf der Rolle!','https://www.youtube.com/watch?v=8L9YhVK3dfw'),
('20','Boxer, Sauger, Turbo ALLES dabei!','https://www.youtube.com/watch?v=Z_73k9Mxn3c'),
('19','Wir sind WIEDER DA!','https://www.youtube.com/watch?v=LZCKyJTHM40'),
('18','Honda Civic mit 2,3 Bar und über 650 PS!','https://www.youtube.com/watch?v=5nfUh6V5adQ'),
('17','Eine TRUPPE 3x CLIO 16V!','https://www.youtube.com/watch?v=MBoTJRx2S9Q'),
('16','Toyota CROWN mit 1jz Motor!','https://www.youtube.com/watch?v=o9_-y0S3odg'),
('15','3x BMW M5 auf der ROLLE!','https://www.youtube.com/watch?v=UWzepIKSErU'),
('14','ZWEI Freunde, ZWEI 5Zylinder!','https://www.youtube.com/watch?v=pdXfTF4kNQQ'),
('13','8,1L + Kompressor = DREHMOMENT! ','https://www.youtube.com/watch?v=0LXYZteQOkE'),
('12','Von ALLEM etwas dabei!','https://www.youtube.com/watch?v=m1Yfs-ENkC4'),
('11','Probefahrt im Slalom RENNER! (Polo I 16V)','https://www.youtube.com/watch?v=AXpFX4AtpbY'),
('10','Spontan VERGASER abstimmen!','https://www.youtube.com/watch?v=Q3uZ8m2ljdo'),
('9','SELTENE Autos & EXTREME Umbauten!','https://www.youtube.com/watch?v=VIbkf3p4oBE'),
('8','Vom SMART bis zum TRANSIT!','https://www.youtube.com/watch?v=djQVD9sAPNI'),
('7','BMW E30 M3 / VW T4 5Zyl TURBO!','https://www.youtube.com/watch?v=__5KDiJOqa0'),
('6','Wenn die TUNINGBOX nach HINTEN losgeht!','https://www.youtube.com/watch?v=l3yIQiLBLdQ'),
('5','MICHAS Auto auf der ROLLE!','https://www.youtube.com/watch?v=GtusWvFzYaQ'),
('4','Es wird LAUT! / 5.8L V8 Schalter!','https://www.youtube.com/watch?v=nXnDJVK-cr4'),
('3','Bunter Mix aus SAUGER & TURBO!','https://www.youtube.com/watch?v=eZ4BLLSVVo8'),
('2','HARTE Fakten!','https://www.youtube.com/watch?v=SrU_Op2Mc2Y'),
('1','GÄNSEHAUT bei über 8200rpm!','https://www.youtube.com/watch?v=97FspZAbtG8');

CREATE TABLE brands (
brand_id INT NOT NULL AUTO_INCREMENT,
manufacturer VARCHAR(120),
PRIMARY KEY (brand_id),
FOREIGN KEY (model_id) REFERENCES models (model_id)
);

INSERT INTO brands (brand_id, manufacturer) VALUES
	('1','Audi'),
	('2','BMW'),
  ('3','Citroën'),
  ('4','Dodge'),
  ('5','Fiat'),
  ('6','Ford'),
  ('7','Honda'),
  ('8','Hyundai'),
  ('9','Kia'),
  ('10','Mazda'),
  ('11','Mercedes'),
  ('12','Mini'),
  ('13','Mitsubishi'),
  ('14','Nissan'),
  ('15','NSU'),
  ('16','Opel'),
  ('17','Peugeot'),
  ('18','Renault'),
  ('19','Seat'),
  ('20','Skoda'),
  ('21','Smart'),
  ('22','Subaru'),
  ('23','Suzuki'),
  ('24','Toyota'),
  ('25','Volkswagen'),
  ('26','Volvo');

CREATE TABLE models (
model_id INT NOT NULL AUTO_INCREMENT,
type VARCHAR(120),
ccm INT,
ps DECIMAL(4,1),
PRIMARY KEY (model_id)
FOREIGN KEY (car_id) REFERENCES cars (car_id)
);

INSERT INTO models (model_id, type, ccm,ps) VALUES
	('1','','','',''),
	('','','','','');

CREATE TABLE cars (
car_id INT NOT NULL AUTO_INCREMENT,
bj DATE,
km DECIMAL(7,1),
gears INT,
automatic BOOLEAN(false),
diesel BOOLEAN(false),
PRIMARY KEY (car_id)
);

CREATE TABLE results (
result_id INT NOT NULL AUTO_INCREMENT,
ps_first_run DECIMAL(4,1),
ps_umin_first_run INT,
nm_first_run DECIMAL(4,1),
nm_umin_first_run INT,
ps_second_run DECIMAL(4,1),
ps_umin_second_run INT,
nm_second_run DECIMAL(4,1),
nm_umin_second_run INT,
ps_third_run DECIMAL(4,1),
ps_umin_third_run INT,
nm_third_run DECIMAL(4,1),
nm_umin_third_run INT,
ps_fourth_run DECIMAL(4,1),
ps_umin_fourth_run INT,
nm_fourth_run DECIMAL(4,1),
nm_umin_fourth_run INT,
ps_fifth_run DECIMAL(4,1),
ps_umin_first_run INT,
nm_fifth_run DECIMAL(4,1),
nm_umin_fifth_run INT,

PRIMARY KEY (result_id),
FOREIGN KEY (car_id) REFERENCES cars (result_id)
);

CREATE TABLE drivers (
drivers_id INT NOT NULL AUTO_INCREMENT,
kz (VARCHAR 3),
region(VARCHAR 100),
bundesland(VARCHAR 25),
country(VARCHAR 2),
distance(INT),
PRIMARY KEY (drivers_id),
FOREIGN KEY (results_id) REFERENCES results (drivers_id)
);