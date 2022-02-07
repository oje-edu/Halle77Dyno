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
CREATE DATABASE dyno;
USE dyno;

CREATE TABLE seasons (
season_id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(100),
plot VARCHAR(255),
year YEAR NOT NULL,
PRIMARY KEY (season_id)
);

CREATE TABLE episodes (
episode_id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(100) NOT NULL,
episodeUrl VARCHAR(255) NOT NULL,
plot TEXT NOT NULL,
season_id INT,
seasonepisode INT,
PRIMARY KEY (episode_id),
FOREIGN KEY (season_id) REFERENCES seasons (season_id)
);

CREATE TABLE cars (
cars_id INT NOT NULL AUTO_INCREMENT,
manufacturer VARCHAR(120),
model VARCHAR(120),
bj DATE,
ez DATE,
km INT,
ps INT,
turbo BOOLEAN(false),
kompressor BOOLEAN(false),
carsUrl VARCHAR(255),
PRIMARY KEY (car_id)
);

CREATE TABLE results (
results_id INT NOT NULL AUTO_INCREMENT,
ps INT,
nm INT,
region(VARCHAR 100)
PRIMARY KEY (results_id)
FOREIGN KEY (cars_id) REFERENCES cars (results_id)
);

