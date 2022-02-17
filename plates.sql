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

CREATE TABLE countries (
country_id INT NOT NULL AUTO_INCREMENT,
kz VARCHAR(2) NOT NULL,
name VARCHAR(120),
PRIMARY KEY (country_id)
);

INSERT INTO countries (country_id, kz, name) VALUES
('1','DE','Deutschland'),
('2','NL', 'Niederlande'),
('3','AT', 'Österreich'),
('4','CH','Schweiz');

CREATE TABLE regions (
region_id INT NOT NULL AUTO_INCREMENT,
kz VARCHAR(3),
name VARCHAR(120),
PRIMARY KEY (region_id)
FOREIGN KEY (country_id) REFERENCES countries (country_id)
);

INSERT INTO regions (region_id,kz, name) VALUES
(1,'BW','Baden-Württemberg'),
(2,'BY','Bayern'),
(3,'BE','Berlin'),
(4,'BB','Brandenburg'),
(5,'HB','Bremen'),
(6,'HH','Hamburg'),
(7,'HE','Hessen'),
(8,'MV','Mecklenburg-Vorpommern'),
(9,'NI','Niedersachsen'),
(10,'NW','Nordrhein-Westfalen'),
(11,'RP','Rheinland-Pfalz'),
(12,'SL','Saarland'),
(13,'SN''Sachsen'),
(14,'ST','Sachsen-Anhalt'),
(15,'SH','Schleswig-Holstein'),
(16,'TH','Thüringen');

CREATE TABLE countries_regions (
	cr_id INT NOT NULL AUTO_INCREMENT,
  cr_country INT NOT NULL,
  cr_region INT NOT NULL,
  PRIMARY KEY(cr_id),
  FOREIGN KEY (cr_country) REFERENCES countries (country_id),
	FOREIGN KEY (cr_region) REFERENCES regions (region_id)
);

INSERT INTO countries_regions (cr_country, cr_region) VALUES
('1','1'),
('1','2'),
('1','3'),
('1','4'),
('1','5'),
('1','6'),
('1','7'),
('1','8'),
('1','9'),
('1','10'),
('1','11'),
('1','12'),
('1','13'),
('1','14'),
('1','15'),
('1','16');

CREATE TABLE plates (
plate_id INT NOT NULL AUTO_INCREMENT,
kz VARCHAR(3),
name VARCHAR(120),
distance INT,
PRIMARY KEY (plate_id)
FOREIGN KEY (region_id) REFERENCES regions (region_id)
);

INSERT INTO plates (plate_id, kz, name, distance) VALUES
('1','AA','Aalen',470),
('2','AC','Aachen',160),
('3','AH','Ahaus',110),
('4','AK','Altenkirchen',150),
('5','AUR','Aurich',280),
('6','AW','Ahrweiler',150),
('7','B','Berlin',490),
('8','BA','Bamberg',420),
('9','BCH','Buchen',320),
('10','BI','Bielefeld',120),
('11','BIN','Mainz-Bingen',270),
('12','BM','Bergheim',120),
('13','BOR','Borken',75),
('14','BRA','Brake',300),
('15','BS','Braunschweig',280),
('16','BÜD','Büdingen',250),
('17','BÜR','Büren',85),
('18','COE','Coesfeld',75),
('19','CUX','Cuxhaven',320),
('20','D','Düsseldorf',75),
('21','DA','Darmstadt',300),
('22','DD','Dresden',520),
('23','DIL','Lahn-Dill-Kreis',180),
('24','DIN','Dinslaken',70),
('25','DO','Dortmund',0),
('26','DU','Duisburg',60),
('27','E','Essen',45),
('28','EL','Lingen',150),
('29','EM','Emmerdingen',474),
('30','EN','Ennepe-Ruhr-Kreis',37),
('31','F','Frankfurt am Main',250),
('32','FB','Friedberg',250),
('33','FRI','Friesland',280),
('34','GE','Gelsenkirchen',40),
('35','GER','Germersheim',350),
('36','GG','Groß-Gerau',250),
('37','GI','Gießen',190),
('38','GK','Geilenkirchen',140),
('39','GL','Bergisch Gladbach',85),
('40','GLA','Gladbeck',50),
('41','GM','Gummersbach',77),
('42','GS','Goslar',270),
('43','GT','Gütersloh',90),
('44','H','Hannover',220),
('45','HAL','Halle',400),
('46','HAM','Hamm',40),
('47','HB','Bremen',240),
('48','HD','Heidelberg',320),
('49','HER','Herne',30),
('50','HF','Herford',125),
('51','HG','Bad Homburg',220),
('52','HGN','Hagenow',430),
('53','HH','Hamburg',350),
('54','HK','Heidekreis',300),
('55','HL','Lübeck',413),
('56','HM','Hameln',180),
('57','HOL','Holzminden',170),
('58','HP','Heppenheim',280),
('59','HSK','Hochsauerlandkreis',70),
('60','HX','Höxter',170),
('61','K','Köln',100),
('62','KA','Karlsruhe',385),
('63','KEH','Kelheim',550),
('64','KS','Kassel',170),
('65','L','Leipzig',430),
('66','LER','Leer',250),
('67','LEV','Leverkusen',80),
('68','LH','Lüdinghausen',45),
('69','LL','Landsberg Lech',630),
('70','LM','Limburg-Weilburg',180),
('71','LÖ','Lörrach',550),
('72','LOS','Oder-Spree',550),
('73','LP','Lippstadt',75),
('74','LU','Ludwigshafen',320),
('75','MD','Magdeburg',370),
('76','ME','Mettmann',65),
('77','MK','Märkischer Kreis',45),
('78','ML','Mansfeld-Südharz',350),
('79','MO','Moers',70),
('80','MON','Monschau',180),
('81','MS','Münster',70),
('82','MSH','Mansfeld-Südharz',350),
('83','MTK','Main-Taunus-Kreis',230),
('84','MZG','Merzig-Wadern',320),
('85','NES','Rhön-Grabfeld',320),
('86','NF','Nordfriesland',480),
('87','NR','Neuwied',165),
('88','OA','Oberallgäu',630),
('89','OB','Oberhausen',55),
('90','OL','Oldenburg',240),
('91','OP','Opladen',85),
('92','OS','Osnabrück',130),
('93','PB','Paderborn',100),
('94','PI','Pinneberg',370),
('95','PS','Pirmasens',390),
('96','RE','Recklinghausen',36),
('97','RI','Rinteln',170),
('98','ROF','Hersfeld-Rotenburg',220),
('99','ROK','Rockenhausen',320),
('100','RS','Remscheid',60),
('101','RW','Rottweil',570),
('102','SEE','Seelow',560),
('103','SHG','Schaumburg',170),
('104','SI','Siegen',110),
('105','SL','Schleswig-Flensburg',484),
('106','SN','Schwerin',450),
('107','SO','Soest',47),
('108','SU','Siegburg',120),
('109','TDO','Torgau',500),
('110','TE','Tecklenburg',105),
('111','TF','Teltow-Fläming',500),
('112','UH','Unstrut-Hainrich-Kreis',260),
('113','UN','Unna',20),
('114','VB','Vogelsberg Kreis',250),
('115','VIT','Viechtach',600),
('116','W','Wuppertal',50),
('117','WEL','Limburg-Weilburg',180),
('118','WF','Wolfenbüttel',280),
('119','WND','St. Wendel',320),
('120','WOB','Wolfsburg',300),
('121','WW','Westerwald',180);


