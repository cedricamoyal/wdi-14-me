-- TO CREATE:


-- CREATE TABLE people (
--   id INTEGER PRIMARY KEY,
--   first_name TEXT,
--   last_name TEXT
-- );

-- INSERT INTO people (id, first_name, last_name) VALUES (1, "Groucho", "Marx");

-- In terminal:
  -- to import: sqlite3 database.db < create_people.sql
  -- to open database: sqlite3 database.db
  -- to see the tables: .schema
  -- to see the users: SELECT * FROM people;
            -- in this case: 1|Groucho|Marx

-- INSERT INTO people (id, first_name, last_name) VALUES (2, "Zeppo", "Marx");
-- INSERT INTO people (id, first_name, last_name) VALUES (3, "Harpo", "Marx");

-- We have to hide (1, "Groucho", "Marx") because it is already in the database.
-- To add the new 2 people: (2, "Zeppo", "Marx"); (3, "Harpo", "Marx");:
-- In terminal:
  -- to import: sqlite3 database.db < create_people.sql
  -- to open database: sqlite3 database.db
  -- sqlite> SELECT * FROM people;
            -- 1|Groucho|Marx
            -- 2|Zeppo|Marx
            -- 3|Harpo|Marx

INSERT INTO people (id, first_name, last_name) VALUES (4, "Gummo", "Marx");
