DROP SCHEMA IF EXISTS ticTacTerror;
CREATE SCHEMA ticTacTerror;
USE ticTacTerror;
CREATE TABLE `game_history` (
  `game_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `user_name` varchar(45) NOT NULL,
  `won` tinyint(4) NOT NULL,
  `lost` tinyint(4) NOT NULL,
  `tied` tinyint(4) NOT NULL,
  PRIMARY KEY (`game_id`)
) ENGINE=InnoDB AUTO_INCREMENT=173 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4;
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (128,'H.H.','Holmes','yellow_devil_98',9,1,5);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (129,'Jeffrey','Dahlmer','wild_skeleton_31',8,18,2);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (130,'Theadore','Bundy','dirty_varmint_46',7,0,1);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (131,'Jim ','Jones','grey_troll_19',6,2,3);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (132,'Dennis','Raider','screaming_barbarian_08',5,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (133,'Michelle','Voorhees','spooky_grave_86',0,0,1);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (134,'Jeff','Beret','scary_grim_46',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (135,'Tiplance','Walker','yellow_eater_06',1,0,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (136,'Brittany','Betzold','brutal_reaper_40',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (137,'Amber','Bright','green_grave_19',0,2,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (138,'Roz','Bethea','gross_shadow_29',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (139,'Rachael','Hampton','horrible_spirit_32',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (140,'Megan','Asebedos','rank_grave_37',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (141,'Todd','Decker','abominable_brute_71',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (142,'Tim','Scott','ripped_swine_55',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (143,'Sam','Smith','hairy_devil_14',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (144,'Alex','Rodrigues','mad_dust_10',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (145,'Richard','Simons','white_beast_53',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (146,'Holly','Stuart','toothless_varmint_75',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (147,'Audra','Fullerton','fierce_elf_70',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (148,'Regina','Goodman','creepy_shadow_31',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (149,'Jeff','Sinclair','stinky_animal_21',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (150,'Molly','Rogers','green_wretch_92',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (151,'Jose','Hernadez','repulsive_ghost_68',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (152,'Ali','Brock','screaming_savage_16',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (153,'Wendell','Martin','curious_animal_65',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (154,'Carli','Fisher','curious_boogey_78',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (155,'Kandi','Voorhees','orange_spider_21',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (156,'Serena','Rosenberg','brown_spook_46',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (157,'Shecora','Clanton','spooky_scamp_93',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (158,'Desiree','Wetherford','peculiar_demon_09',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (159,'Seth','Warren','wicked_eater_61',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (160,'Skylar','Warren','abominable_dirt_69',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (161,'Zeth','Raywyn','toothless_eater_98',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (162,'Zophia','Raywyn','strange_varmint_99',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (163,'Zander','Raywyn','mad_scamp_01',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (164,'Isaiah','Voorhees','orange_goblin_07',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (165,'Damen','Ehret','white_puppet_09',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (166,'Joseph','Ehret','weird_robber_52',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (167,'Anton','Jones','nasty_skeleton_78',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (168,'Jeremy','Mitchel','nasty_skeleton_78',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (169,'Falecia','Pinces','curious_dust_70',3,1,1);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (170,'Kimberly','Harmon','freakish_eater_84',2,0,1);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (171,'Kitten','Lacy','obnoxious_wretch_23',0,1,0);
INSERT INTO `game_history` (`game_id`,`first_name`,`last_name`,`user_name`,`won`,`lost`,`tied`) VALUES (172,'Sherman','Williams','chilling_puppet_18',0,1,0);



