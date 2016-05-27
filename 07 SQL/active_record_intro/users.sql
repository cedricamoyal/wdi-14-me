CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT,
  last_name TEXT,
  username TEXT,
  description TEXT
);

INSERT INTO users (first_name, last_name, username, description) VALUES ("Bill", "Withers", "leaning", "What a person");

INSERT INTO users (first_name, last_name, username, description) VALUES ("Django", "Reinhardt", "minor swing", "Stephen Grappelli");

INSERT INTO users (first_name, last_name, username, description) VALUES ("Roger", "Spring", "no idea", "no idea");

-- //////////////////////////////////////////
-- active_record_intro $ sqlite3 database.db < users.sql
--
-- active_record_intro $ sqlite3 database.db
-- SQLite version 3.8.10.2 2015-05-20 18:17:19
-- Enter ".help" for usage hints.
-- sqlite> .schema
-- CREATE TABLE users (
--   id INTEGER PRIMARY KEY AUTOINCREMENT,
--   first_name TEXT,
--   last_name TEXT,
--   username TEXT,
--   description TEXT
-- );
-- sqlite>
-- ////////////////////////////////////////////
-- active_record_intro $ sqlite3 database.db
-- SQLite version 3.8.10.2 2015-05-20 18:17:19
-- Enter ".help" for usage hints.
-- sqlite> SELECT * FROM users;
-- 1|Bill|Withers|leaning|What a person
-- 2|Django|Reinhardt|minor swing|Stephen Grappelli
-- 3|Roger|Spring|no idea|no idea
-- sqlite>
-- ///////////////////////
