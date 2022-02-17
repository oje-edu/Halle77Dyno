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
name VARCHAR(120),
PRIMARY KEY (region_id)
FOREIGN KEY (country_id) REFERENCES countries (country_id)
);

INSERT INTO regions VALUES
(1,'Baden-Württemberg'),
(2,'Bayern'),
(3,'Berlin'),
(4,'Brandenburg'),
(5,'Bremen'),
(6,'Hamburg'),
(7,'Hessen'),
(8,'Mecklenburg-Vorpommern'),
(9,'Niedersachsen'),
(10,'Nordrhein-Westfalen'),
(11,'Rheinland-Pfalz'),
(12,'Saarland'),
(13,'Sachsen'),
(14,'Sachsen-Anhalt'),
(15,'Schleswig-Holstein'),
(16,'Thüringen');

CREATE TABLE plates (
plate_id INT NOT NULL AUTO_INCREMENT,
kz VARCHAR(3),
distance INT,
PRIMARY KEY (plate_id)
);