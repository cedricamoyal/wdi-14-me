-- TO READ:


SELECT * FROM people;
-- sqlite3 database.db < select_people.sql will give you:
          -- 1|Groucho|Marx
          -- 2|Zeppo|Marx
          -- 3|Harpo|Marx
          -- 4|Gummo|Marx

SELECT first_name FROM people;

-- sqlite3 database.db < select_people.sql will give you:
          -- Groucho
          -- Zeppo
          -- Harpo
          -- Gummo

SELECT first_name, last_name FROM people;
-- sqlite3 database.db < select_people.sql will give you:
          -- Groucho|Marx
          -- Zeppo|Marx
          -- Harpo|Marx
          -- Gummo|Marx

SELECT * FROM people WHERE id == 1;
-- sqlite3 database.db < select_people.sql will give you:
          -- 1|Groucho|Marx

SELECT * FROM people WHERE first_name == "Zeppo";
-- sqlite3 database.db < select_people.sql will give you:
          -- 2|Zeppo|Marx

SELECT * FROM people WHERE first_name == "Harpo" AND id == 3;
