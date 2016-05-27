CREATE TABLE planets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT,
  orbit FLOAT,
  diameter FLOAT,
  moons INTEGER

);

-- solarsystem $ cd db
--
-- db $ sqlite3 development.sqlite3 < planets.sql
--
-- db $ rails db
-- SQLite version 3.8.10.2 2015-05-20 18:17:19
-- Enter ".help" for usage hints.
-- sqlite> .schema
-- CREATE TABLE planets (
--   id INTEGER PRIMARY KEY AUTOINCREMENT,
--   name TEXT,
--   image TEXT,
--   orbit FLOAT,
--   diameter FLOAT,
--   moons INTEGER
--
-- );
