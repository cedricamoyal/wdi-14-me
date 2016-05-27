-- TO CREATE A TABLE:

CREATE TABLE people (
  id INTEGER PRIMARY KEY,
  first_name TEXT,
  last_name TEXT
);

-- in terminal: to send table to database:
-- sqlite3 database.db < people.sql

-- to open a database in terminal: sqlite3 database.db
-- then do .schema to show tables
