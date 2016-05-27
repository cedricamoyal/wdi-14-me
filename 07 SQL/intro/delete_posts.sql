INSERT INTO posts (title, content) VALUES ("Something racist", "This is no good");
INSERT INTO posts (title, content) VALUES ("Something cool", "This is good");

DELETE FROM posts WHERE id == 5;
DELETE FROM posts WHERE title == "Something racist";
DELETE FROM posts WHERE content == "This is no good";

DELETE FROM posts WHERE title == "Something racist" OR content == "This is no good";
DELETE FROM posts WHERE title == "Something racist" AND content == "This is no good";
