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
FOREIGN KEY (car_id) REFERENCES cars (car_id)
);
