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
cname VARCHAR(120),
PRIMARY KEY (country_id)
);

INSERT INTO countries (kz, cname) VALUES
('DE','Deutschland'),
('NL', 'Niederlande'),
('AT', 'Österreich'),
('CH','Schweiz');

CREATE TABLE regions (
region_id INT NOT NULL AUTO_INCREMENT,
kz VARCHAR(3),
rname VARCHAR(120),
country_id INT,
PRIMARY KEY (region_id),
FOREIGN KEY (country_id) REFERENCES countries (country_id)
);

INSERT INTO regions (country_id,region_id,kz,rname) VALUES
(1,1,'BW','Baden-Württemberg'),
(1,2,'BY','Bayern'),
(1,3,'BE','Berlin'),
(1,4,'BB','Brandenburg'),
(1,5,'HB','Bremen'),
(1,6,'HH','Hamburg'),
(1,7,'HE','Hessen'),
(1,8,'MV','Mecklenburg-Vorpommern'),
(1,9,'NI','Niedersachsen'),
(1,10,'NW','Nordrhein-Westfalen'),
(1,11,'RP','Rheinland-Pfalz'),
(1,12,'SL','Saarland'),
(1,13,'SN','Sachsen'),
(1,14,'ST','Sachsen-Anhalt'),
(1,15,'SH','Schleswig-Holstein'),
(1,16,'TH','Thüringen');

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
kz VARCHAR(20),
name VARCHAR(120),
distance INT,
coords VARCHAR(120),
region_id INT,
PRIMARY KEY (plate_id),
FOREIGN KEY (region_id) REFERENCES regions (region_id)
);

INSERT INTO plates (kz, name, distance, coords) VALUES
('AA','Aalen',470,'48.8366887, 10.0971163'),
('AC','Aachen',160,'50.7753455, 6.0838868'),
('AG (CH)','Aargau',640,'47.403182, 8.084340'),
('AH','Ahaus',110,'52.0825322, 7.0150057'),
('AIB','Bad Aibling',700,'47.8640182, 12.0093171'),
('AK','Altenkirchen',150,'50.687222, 7.645556'),
('AM','Amberg',500,'49.4403198, 11.8633445'),
('AP','Apolda',360,'51.0260095, 11.5155495'),
('APD','Apolda',360,'51.0260095, 11.5155495'),
('AUR','Aurich',280, '53.4708393, 7.4848308'),
('AW','Ahrweiler',150,'50.541815, 7.1197177'),
('AZ','Alzey',300,'49.7462012, 8.1171135'),
('B','Berlin',490, '52.520007, 13.404954'),
('B (Belgien)','Berlin',290, '50.506213, 4.476049'),
('BA','Bamberg',420,'49.8988135, 10.9027636'),
('BAR','Barnim',600,'52.857445, 13.699830'),
('BCH','Buchen',320,'49.521667, 9.323333'),
('BE (CH)','Bern',640,'46.947922, 7.444608'),
('BF','Steinfurt',100,'52.1445658, 7.3334636'),
('BI','Bielefeld',120,'52.0302285, 8.5324708'),
('BIN','Mainz-Bingen',270,'49.9667396, 7.904596'),
('BIR','Birkenfeld',320,'49.6488236 , 7.1647477'),
('BIT','Bitburg',240,'49.9664145 , 6.5298603'),
('BK','Backnang',430,'48.9471455, 9.4341813'),
('BLB','Bad Berleburg',130,'51.0515666, 8.3926278'),
('BM','Bergheim',120,'50.9451945, 6.6555022'),
('BN','Bonn',120,'50.73743, 7.0982068'),
('BN (AT)','Baden',950,'48.002870, 16.265988'),
('BO','Bochum',25,'51.4818445, 7.2162363'),
('BOR','Borken',75,'51.8482714, 6.8594477'),
('BRA','Brake',300,'53.327237, 8.4775443'),
('BS','Braunschweig',280,'52.2688736, 10.5267696'),
-- ('BU','Burgdorf',240,'52.4470203, 	10.005624'),
('BÜD','Büdingen',250,'50.2862963, 9.1113838'),
('BÜR','Büren',85, '51.55092, 8.5597678'),
('CAS','Castrop-Rauxel',22,'51.5632625, 7.3150145'),
('CE','Celle',252,'52.6175963, 10.0628515'),
('CLP','Cloppenburg',200,'52.844198, 8.0530158'),
('COE','Coesfeld',75,'51.9382944, 7.1675831'),
('CR','Crailsheim',440,'49.1337354, 10.0633573'),
('CUX','Cuxhaven',320,'53.859336, 8.6879057'),
('D','Düsseldorf',75,'51.2277411, 6.7734556'),
('DA','Darmstadt',300,'49.8728253, 8.6511929'),
('DAH','Dachau',620,'48.2629984, 	11.4339022'),
('DAU','Daun',230,'50.1952445, 6.8232859'),
('DEL','Delmenhorst',220,'53.0521886, 8.6355932'),
('DD','Dresden',520,'51.0504088, 13.7372621'),
('DH','Diepholz',170,'52.6056456, 8.3707878'),
('DIL','Lahn-Dill-Kreis',180,'50.67097, 8.358588'),
('DIN','Dinslaken',70,'51.5674264, 6.747534'),
('DIZ','Diez',200,'50.3706368, 8.016054'),
('DN','Düren',130,'50.8029513, 6.481105'),
('DO','Dortmund',0,'51.5072, 7.49142'),
('DON','Donauwörth',520,'48.7185826, 10.7778041'),
('DT','Detmold',130,'51.9384783, 8.868638'),
('DU','Duisburg',60,'51.4344079, 6.7623293'),
('E','Essen',45,'51.4556432, 7.0115552'),
('EBE','Ebersberg',660,'48.0780006, 11.9669667'),
('EL','Lingen',150,'52.52306, 7.323279'),
('EM','Emmerdingen',474,'48.1170918, 7.8539047'),
('EMS','Bad Ems',200,'50.3340619, 7.71924'),
('EN','Ennepe-Ruhr-Kreis',37,'51.3001092, 7.3613429'),
('ERZ','Erzgebirgskreis',515,'50.731240, 12.891083'),
('ES','Esslingen. '440,'48.7433425, 9.3201122'),
('ESW','Eschwege. '213,'51.1876662, 10.0397725'),
('EU','Euskirchen. '140,'50.6574392, 6.7899945'),
('F','Frankfurt am Main',250,'50.1109221, 8.6821267'),
('FB','Friedberg',250,'50.333333, 8.75'),
('FD','Fulda',280,'50.5558095, 9.6808449'),
('FKB','Frankenberg (Eder)',150,'51.058889, 8.796667'),
('FR (AT)','Freistadt',820,'48.502170, 14.502010'),
('FRI','Friesland',280,'53.596679, 7.90034'),
('GAN','Bad Gandersheim',50,'51.8717977, 10.023903'),
('GE','Gelsenkirchen',40,'51.517744, 7.0857172'),
('GEL','Geldern',100,'51.5204439, 6.3257902'),
('GER','Germersheim',350,'49.2140244, 8.3668146'),
('GF','Gifhorn',280,'52.4809091, 10.5507829'),
('GG','Groß-Gerau',250,'49.9203655, 8.4847038'),
('GI','Gießen',190,'50.5840512, 8.6784031'),
('GK','Geilenkirchen',140,'50.967168, 6.1174584'),
('GL','Bergisch Gladbach',85,'50.9923091, 7.1286213'),
('GLA','Gladbeck',50,'51.5706624, 6.9853921'),
('GM','Gummersbach',77,'51.0266668, 7.569283'),
('GOA','Sankt Goar',230,'50.1512782, 7.7131202'),
('GP','Göppingen',490,'48.7054382, 9.6512491'),
('GS','Goslar',270,'51.9059531, 10.4289963'),
('GT','Gütersloh',90,'51.9032375, 8.3857535'),
('GW','Greifswald',600,'54.0865463, 13.3923414'),
('GÖ','Göttingen',210,'51.5412804, 9.9158035'),
('H','Hannover',220,'52.3758916, 9.7320104'),
('HA','Hagen',25,'51.3670777, 7.4632841'),
('HAL','Halle',400,'51.4969802, 11.9688029'),
('HAM','Hamm',40,'51.6738583, 7.8159816'),
('HB','Bremen',240,'53.0792962, 8.8016937'),
('HD','Heidelberg',320,'49.3987524, 8.6724335'),
('HER','Herne',30,'51.5368948, 7.2009147'),
('HF','Herford',125,'52.1178305, 8.6793998'),
('HG','Bad Homburg',220,'50.226831, 8.618162'),
('HGN','Hagenow',430,'53.4265906, 11.1955099'),
('HH','Hamburg',350,'53.551085, 9.993682'),
('HK','Heidekreis',300,'53.066498, 9.882525'),
('HL','Lübeck',413, '53.8654673, 10.6865593'),
('HM','Hameln',180,'52.1082726, 9.362171'),
('HMÜ','Hannover-Münden',180,'51.419285, 	9.6557588'),
('HN','Heilbronn',380,'49.1426929, 	9.210879'),
('HOL','Holzminden',170,'51.8238111, 9.4558926'),
('HOT','Hohenstein-Ernstthal',450,'50.8009829, 12.7132681'),
('HP','Heppenheim',280,'49.643056, 8.638889'),
('HR','Homberg (Efze)',220,'51.033056, 	9.4'),
('HS','Heinsberg',135,'51.0600381, 6.1183729'),
('HSK','Hochsauerlandkreis',70,'51.2609835, 8.04754842902168'),
('HU','Hanau',240,'50.1264123, 8.9283105'),
('HVL','Havelland',425,'52.597902, 12.520413'),
('HX','Höxter',170,'51.7774678, 9.3771214'),
('J','Jena',360,'50.927054, 11.5892372'),
('K','Köln',100,'50.937193, 6.961422'),
('KA','Karlsruhe',385,'49.0068901, 8.4036527'),
('KEH','Kelheim',550,'48.9184118, 11.886563'),
('KK','Kempen-Krefeld',100,'51.3649942, 6.4205309'),
('KLE','Kleve',130,'51.786726, 6.12954'),
('KO','Koblenz',200,'	50.3569429, 7.5889959'),
('KR','Krefeld',90,'51.3387609, 6.5853417'),
('KS','Kassel',170,'51.3127114, 9.4797461'),
('KW','Königs Wusterhusen',500,'52.2958906, 13.6228382'),
('KÖN','Rhön-Grabfeld',305,'50.355694, 10.206667'),
('L','Leipzig',430,'51.3396955, 12.3730747'),
('L (AT)','Linz',800,'48.30694, 14.28583'),
('L','Luxembourg',280,'49.815273, 6.129583'),
('LB','Ludwigsburg',420,'48.8940624, 9.195464'),
('LDK','Lahn-Dill-Kreis',180,'50.67097, 8.358588'),
('LER','Leer',250,'53.235657, 7.4679018'),
('LEV','Leverkusen',80,'51.0459248, 7.0192196'),
('LG','Lüneburg',330,'53.2464214, 10.4115179'),
('LH','Lüdinghausen',45,'51.768214, 7.4465617'),
('LIP','Lippe',130,'51.975903, 8.986528'),
('LL','Landsberg Lech',630,'48.050783, 10.8703515'),
('LM','Limburg-Weilburg',180,'50.4859255, 8.2722569'),
('LÖ','Lörrach',550,'47.6169191, 7.6709248'),
('LÖB','Löbau',550,'51.0962292, 14.6701781'),
('LOS','Oder-Spree',550,'52.360438, 14.059511'),
('LP','Lippstadt',75,'51.6712278, 8.3406481'),
('LR','Lahr',480,'48.333333, 7.866667'),
('LU','Ludwigshafen',320,'49.47741, 8.44518'),
('LÜN','Lünen',15,'	51.6104829, 7.5285074'),
('M','München',630,'48.135125, 11.581981'),
('MD','Magdeburg',370,'52.1205333, 11.6276237'),
('ME','Mettmann',65,'51.2506663, 6.9740265'),
('MEL','Melle',140,'52.2033222, 8.3372664'),
('MER','Merseburg',370,'51.3563278, 11.9917462'),
('MG','Mönchengladbach',95,'51.1804572, 6.4428041'),
('MI','Minden-Lübbecke',160,'52.335154, 8.762342'),
('MI (AT)','Mistelbach',1250,'48.5667, 16.5667'),
('MK','Märkischer Kreis',45,'51.243977, 7.755536'),
('ML','Mansfeld-Südharz',350,'51.550941, 11.407180'),
('MN','Mindelheim',600,'48.0461744, 10.4948841'),
('MO','Moers',70,'51.4516041, 6.6408148'),
('MON','Monschau',180,'50.5563349,6.2426261'),
('MQ','Merseburg-Querfurt',340,'51.3812676,6.11.6041294'),
('MR','Marburg',180,'50.8021728,8.7667933'),
('MS','Münster',70,'51.9606649, 7.6261347'),
('MSH','Mansfeld-Südharz',350,'51.550941, 11.407180'),
('MTK','Main-Taunus-Kreis',230,'50.133333, 8.533333'),
('MZ','Mainz',260,'49.9928617, 8.2472526'),
('MZG','Merzig-Wadern',320,'49.457240, 6.686688'),
('NES','Rhön-Grabfeld',320,'50.355694, 10.206667'),
('NEW','Neustadt an der Waldnaab',520,'49.732096, 12.178127'),
('NF','Nordfriesland',480,'54.676022, 8.933632'),
('NL (Niederlande)','Niederlande',200,'52.132633, 5.291266'),
('NOH','Nordhorn',150,'52.4295801, 7.0685708'),
('NOR','Norden',300,'53.576853, 7.164472'),
('NR','Neuwied',165,'50.4361866, 7.4664546'),
('NI','Nienburg (Weser)',220,'52.6380924, 9.2084155'),
('OA','Oberallgäu',630,'47.539197, 10.284402'),
('OAL','Ostallgäu',630,'47.786013, 10.630515'),
('OB','Oberhausen',55,'51.4963341, 6.8637765'),
('OF','Offenbach',250,'50.0956362, 8.7760843'),
('OH','Ostholstein',430,'54.164203, 10.850424'),
('OL','Oldenburg',240,'53.1434501, 8.2145521'),
('OP','Opladen',85,'51.0459248, 7.0192196'),
('OS','Osnabrück',130,'52.2799112, 8.0471788'),
('PB','Paderborn',100,'51.7189205, 8.7575093'),
('PE','Peine',260,'52.3204095, 10.243267'),
('PI','Pinneberg',370,'53.6545225, 9.7938212'),
('PLÖ','Plön',445,'54.1613302, 10.4259498'),
('PRÜ','Prüm',200,'50.208237, 	6.4197005'),
('PS','Pirmasens',390,'49.201555, 7.6002161'),
('RA','Rastatt',380,'48.8591174, 8.2059096'),
('RD','Rendsburg-Eckernförde',440,'54.295275, 9.846645'),
('RE','Recklinghausen',36,'51.6140649, 7.1979453'),
('RH','Roth',490,'49.252047, 11.091189'),
('RI','Rinteln',170,'52.2020461, 9.0759703'),
('RN','Rathenow',430,'52.6048117, 12.337945'),
('RO','Rosenheim',680,'47.8571272, 12.1181047'),
('ROD','Roding',580,'49.1941496, 12.5222943'),
('ROF','Hersfeld-Rotenburg',220,'50.898552, 9.739876'),
('ROK','Rockenhausen',320,'49.6311747, 7.8215535'),
('ROW','Rotenburg (Wümme)',270,'53.106944, 9.396944'),
('RS','Remscheid',60,'51.1787418, 7.1896962'),
('RW','Rottweil',570,'48.1610687, 8.6316219'),
('S','Stuttgart',450,'48.7758459, 9.1829321'),
('SE','Segeberg',400,'53.9390528, 10.3053651'),
('SEE','Seelow',560,'52.5315702, 14.3798314'),
('SG','Solingen',67,'51.1702072, 7.0831408'),
('SG (CH)','St. Gallen',650,'47.4244818, 9.3767173'),
('SHG','Schaumburg',170,'52.190555555556, 9.0813888888889'),
('SI','Siegen',110,'50.8838492, 8.0209591'),
('SIM','Simmern',250,'49.983, 7.517'),
('SL','Schleswig-Flensburg',484,'54.629896, 9.534861'),
('SLS','Saarlouis',350,'49.3134606, 6.7522865'),
('SN','Schwerin',450,'53.6355022, 11.4012499'),
('SO','Soest',47,'51.5711476, 8.105754'),
('SON','Sonneberg',412,'50.3601821, 11.1709899'),
('SU','Siegburg',120,'50.7998473, 7.2074514'),
('STA','Starnberg',650,'47.9999615, 11.3390089'),
('STD','Stade',340,'53.5928618, 9.4709494'),
('TDO','Torgau',500,'51.557934, 12.991583'),
('TE','Tecklenburg',105,'52.2203039, 7.8123633'),
('TF','Teltow-Fläming',500,'52.036416, 	13.292044'),
('UFF','Uffenheim',370,'49.5449973, 10.2338007'),
('UH','Unstrut-Hainich-Kreis',260,'51.19, 10.55'),
('UN','Unna',20,'51.5426349, 7.6853114'),
('V','Vogtlandkreis',490,'50.616667, 12.3'),
('VAI','Vaihingen',400,'48.9334357, 8.961208'),
('VB','Vogelsberg Kreis',250,'50.640763888889, 9.3997916666667'),
('VEC','Vechta',180,'52.7292252, 8.2838761'),
('VIE','Viersen',100,'51.2554987, 6.3965235'),
('VIT','Viechtach',600,'49.0794562, 12.8831956'),
('W','Wuppertal',50,'51.2562128, 7.1507636'),
('W (AT)','Wien',950,'48.208174, 16.373819'),
('WA','Waldeck-Frankenberg',140,'51.222086, 8.854924'),
('WAF','Warendorf',80,'51.9538685, 7.9908987'),
('WAN','Wanne-Eickel',30,'51.5368948, 7.2009147'),
('WEL','Limburg-Weilburg',180,'50.4859255, 8.2722569'),
('WES','Wesel',80,'51.6643079, 6.6295679'),
('WF','Wolfenbüttel',280,'52.1640413, 10.5408484'),
('WHV','Wilhelmshaven',300,'53.5323403, 8.1068722'),
('WI','Wiesbaden',250,'50.0782184, 8.2397608'),
('WIT','Witten',20,'51.4438926, 7.353197'),
('WL','Winsen (Luhe)',330,'53.3574436, 10.2127204'),
('WND','St. Wendel',320,'49.4677707, 7.1690625'),
('WOB','Wolfsburg',300,'52.4226503, 10.7865461'),
('WOH','Wolfhagen',150,'51.3264673, 9.1710827'),
('WT','Waldshut',570,'47.6327253, 8.2719155'),
('WUG','Weißenburg-Gunzenhausen',500,'49.052484, 10.906240'),
('WW','Westerwald',180,'50.687222, 7.645556');
