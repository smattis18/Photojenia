USE photojenia_db;


INSERT INTO users (screen_name, first_name, last_name, email)
VALUES ("smattis", "steve", "mattis", "steve@example.com");

INSERT INTO users (screen_name, first_name, last_name, email)
VALUES ("thallmen", "cam", "hallmen", "cam@example.com");

INSERT INTO users (screen_name, first_name, last_name, email)
VALUES ("kneve327", "kiara", "perez", "kiara@example.com");


INSERT INTO posts (user_id, post_header, post_body)
VALUES (1, "Introduction", "Greetings to all!");

INSERT INTO posts (user_id, post_header, post_body)
VALUES (2, "Hello", "Just wanted to say hello!");

INSERT INTO posts (user_id, post_header, post_body)
VALUES (3, "Project 2", "BAAAAAABEEE SNAAAAAAAAKES!");


INSERT INTO comments (post_id, comment_body)
VALUES (1, "check");

INSERT INTO comments (post_id, comment_body)
VALUES (2, "check2");

INSERT INTO comments (post_id, comment_body)
VALUES (3, "check3");