-- TO DELETE:

-- Create id=5 in order to delete it:
INSERT INTO people (id, first_name, last_name) VALUES (5, "Gummo", "Marx");


-- sqlite3 database.db < delete_people.sql
-- Delete id=5:
DELETE FROM people WHERE id == 5;
