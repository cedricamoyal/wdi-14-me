-- ALWAYS CREATE THE 5 FILES:
-- touch posts.sql create_posts.sql read_posts.sql update_posts.sql delete_posts.sql

-- TO CREATE A TABLE:

CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  content TEXT
);

-- sqlite3 database.db < posts.sql
