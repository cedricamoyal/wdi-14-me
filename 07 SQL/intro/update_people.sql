-- TO UPDATE:

-- sqlite3 database.db < update_people.sql
  -- Chico becomes Gummo and becomes Chico again:

UPDATE people SET first_name = "Chico" WHERE id == 4;
UPDATE people SET first_name = "Gummo" WHERE id == 4;
UPDATE people SET first_name = "Chico" WHERE id == 4;
